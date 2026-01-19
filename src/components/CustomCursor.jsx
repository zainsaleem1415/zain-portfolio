import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        }

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            border: "1px solid #1a1a1a",
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            height: 48,
            width: 48,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            border: "1px solid #000000ff",
        },
        clicked: {
            x: mousePosition.x - 12, // Smaller offset for smaller size
            y: mousePosition.y - 12,
            height: 24,
            width: 24,
            backgroundColor: "rgba(32, 32, 32, 0.4)", // More opaque
            border: "1px solid #000000ff",
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
        }
    }


    return (
        <>
            {/* Outer Circle */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
                variants={variants}
                animate={isClicked ? "clicked" : (isHovering ? "hover" : "default")}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            />
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999] hidden md:block"
                variants={dotVariants}
                animate="default"
                transition={{
                    type: "spring",
                    stiffness: 1500,
                    damping: 20, // Lower damping for quicker follow
                    mass: 0.1
                }}
            />
        </>
    );
};

export default CustomCursor;
