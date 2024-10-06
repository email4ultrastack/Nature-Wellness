'use client'

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;        // Number the counter should end at
  duration: number;   // Duration of the animation in milliseconds
  suffix?: string;    // Optional suffix (e.g., "M", "+")
  decimals?: number;  // Number of decimal places to display
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 10);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Number(start.toFixed(decimals)));
        }
      }, 10);
    }
  }, [inView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
