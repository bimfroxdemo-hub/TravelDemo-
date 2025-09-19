import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, duration, decimals = 0, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const startValue = 0; // Starting value for count up

    useEffect(() => {
        let current = startValue;
        const endValue = parseFloat(end);
        if (current === endValue) return;

        // Calculate increment step based on total duration and number of steps
        const numSteps = 200; // More steps for smoother animation
        const stepDuration = duration / numSteps;
        const stepIncrement = (endValue - current) / numSteps;

        const timer = setInterval(() => {
            current += stepIncrement;
            if ((stepIncrement > 0 && current >= endValue) || (stepIncrement < 0 && current <= endValue)) {
                current = endValue;
                clearInterval(timer);
            }
            setCount(current);
        }, stepDuration);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, [end, duration, decimals]);

    // '10000' ko '10,000' format mein dikhane ke liye
    // Decimals ko bhi handle karega
    const formattedCount = count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });

    return (
        <h3>
            {formattedCount}{suffix}
        </h3>
    );
};

export default Counter;