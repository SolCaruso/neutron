"use client";
import React, { useState } from "react";
import MainNav from "./MainNav";
import { motion } from "framer-motion";
import SecondaryNav from "@/components/nav/SecondaryNav";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* ----- MAIN NAV BAR (z-50) ----- */}
      <div className="relative z-50">
        <MainNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* ----- SECONDARY NAV CONTAINER ----- */}
      {/* Height set to ~48px (or whatever your secondary nav’s actual height is).
          We only animate opacity so it disappears visually but keeps the space. */}
      <div className="relative w-full" style={{ height: "48px" }}>
        <motion.div
          // fade out when isOpen === true, fade in otherwise
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
        <SecondaryNav />
        </motion.div>
      </div>
    </div>
  );
}