import React, { useState, useEffect, useRef } from 'react';

const Numbers = ({
  timeValue = 1250000,   // final number for TIME
  moneyValue = 2500000, // final number for MONEY
  duration = 4000       // total ms for the animation (4 seconds by default)
}) => {
  // Which tab is active
  const [activeTab, setActiveTab] = useState('time');
  // Current displayed number
  const [displayNumber, setDisplayNumber] = useState(0);

  // Detect if the section is in the viewport
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Observe when the component enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animate from 90% -> 100% whenever:
  // - The section is in view
  // - We switch tabs (time/money)
  useEffect(() => {
    if (!inView) return; // don't animate until it's visible

    // Decide which final value to use
    const finalValue = activeTab === 'time' ? timeValue : moneyValue;

    // We'll start at 90% of the final value
    const startValue = finalValue * 0.99;
    // The range (difference) we need to animate
    const range = finalValue - startValue;

    let startTimestamp = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const elapsed = timestamp - startTimestamp;
      // progress goes from 0..1 over 'duration' ms
      const progress = Math.min(elapsed / duration, 1);

      // currentValue: startValue + fraction_of_range
      const currentValue = startValue + range * progress;

      // round for a clean integer display
      setDisplayNumber(Math.round(currentValue));

      if (progress < 1) {
        // keep animating until we reach progress = 1
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // ensure we end exactly on the final value
        setDisplayNumber(finalValue);
      }
    };

    // Initialize displayed number to 90% (the start)
    setDisplayNumber(Math.round(startValue));

    // Kick off the animation
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [activeTab, inView, timeValue, moneyValue, duration]);

  return (
    <section ref={sectionRef} style={styles.container}>
      <h2 style={styles.headline}>
        TRANSFORMING ENERGY MANAGEMENT &amp; VEHICLE DEVELOPMENT
      </h2>

      <p style={styles.subHeadline}>
        Canadian companies could collectively save:
      </p>

      {/* Tabs */}
      <div style={styles.tabRow}>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === 'time' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('time')}
        >
          TIME SAVED
        </button>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === 'money' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('money')}
        >
          MONEY SAVED
        </button>
      </div>

      {/* Displayed Number */}
      <div style={styles.numbersWrapper}>
        <h1 style={styles.bigNumber}>
          {activeTab === 'money'
            ? `$${displayNumber.toLocaleString()}`
            : displayNumber.toLocaleString()}
        </h1>
        <p style={styles.caption}>
          {activeTab === 'money'
            ? 'Dollars annually through optimized battery systems'
            : 'Hours annually through optimized battery systems'}
        </p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem 1rem',
    maxWidth: '900px',
    margin: '0 auto'
  },
  headline: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    textTransform: 'uppercase'
  },
  subHeadline: {
    marginBottom: '2rem',
    color: '#666'
  },
  tabRow: {
    display: 'inline-flex',
    gap: '1rem',
    marginBottom: '2rem'
  },
  tabButton: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    backgroundColor: '#f0f0f0',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px'
  },
  tabActive: {
    backgroundColor: '#3c56d4',
    color: '#fff'
  },
  numbersWrapper: {
    marginTop: '1rem'
  },
  bigNumber: {
    fontSize: '3rem',
    margin: '0',
    color: '#5363e0'
  },
  caption: {
    marginTop: '0.5rem',
    fontSize: '1rem',
    color: '#333'
  }
};

export default Numbers;