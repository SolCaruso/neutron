
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, useReducedMotion } from "framer-motion";
import {useEffect} from "react";
import { useState } from "react";
import Card from '@/components/card'

export default function SideScroll() {

    const images = [
      { src: "/carousel/1.jpg", alt: "Custom Design Process"},
      { src: "/carousel/2.jpg", alt: "ECU Design"},
      { src: "/carousel/3.jpg", alt: "Engineer at Work"},
      { src: "/carousel/4.jpg", alt: "Factory Floor"},
      { src: "/carousel/1.jpg", alt: "Custom Design Process"},
      { src: "/carousel/2.jpg", alt: "ECU Design"},
      { src: "/carousel/3.jpg", alt: "Engineer at Work"},
      { src: "/carousel/4.jpg", alt: "Factory Floor"}
    ];
  
    const prefersReducedMotion = useReducedMotion();
  
    // Adjust durations based on reduced motion preferences
    const FAST_DURATION = prefersReducedMotion ? 0 : 50;
    const SLOW_DURATION = prefersReducedMotion ? 0 : 120;
  
    const [duration, setDuration] = useState(FAST_DURATION);
  
    let [ref, {width}] = useMeasure();
  
    const xTranslation = useMotionValue(0);
  
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRender] = useState(false);
    
    useEffect(() => {
      
      let controls;
      let finalPosition = -width / 2 - 8;
  
      if (mustFinish) {
        controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
          ease: "linear",
          duration: duration * (1 - xTranslation.get() / finalPosition),
          onComplete: () => {
            setMustFinish(false);
            setRender(!rerender);
          }
        })
      } else {
        controls = animate(xTranslation, [0, finalPosition],{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        });
      }
          return controls?.stop; 
    }, [xTranslation, width, duration, rerender]);
    
    return (
      <motion.div 
        className="absolute left-0 flex gap-4" 
        ref={ref} 
        style={{ x:xTranslation}} 
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION); 
          }
        }
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
          }
        }
      >
        {[...images, ...images].map((item, idx) => (
          <Card image={item} key={idx} />
        ))}
  
      </motion.div>
    );
  }