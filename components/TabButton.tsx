import React from "react";
import { motion } from "framer-motion";

// Define the variants for the motion animation
const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

// Define types for the props of TabButton component
interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode; // children will be passed as a node (text or JSX)
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
