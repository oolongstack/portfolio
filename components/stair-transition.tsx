"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./stairs";

function StairTransition() {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed left-0 top-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default StairTransition;
