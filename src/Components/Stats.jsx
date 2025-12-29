import { useEffect, useRef, useState } from "react";

export default function Stats() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 mt-8 text-center sm:text-left">
      <StatItem target={150} label="Projects Completed" />
      <StatItem target={1200} label="KMs Constructed" />
      <StatItem target={500} label="Employees" />
    </div>
  );
}

function StatItem({ target, label }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  // Intersection Observer (start when visible)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  // Counter animation
  useEffect(() => {
    if (!started) return;

    let current = 0;
    const increment = Math.ceil(target / 100);

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <div ref={ref}>
      <h4 className="text-4xl font-black text-orange-500">
        {count}+
      </h4>
      <p className="font-medium text-slate-800">{label}</p>
    </div>
  );
}
