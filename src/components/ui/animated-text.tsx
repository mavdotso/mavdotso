'use client';
import React, { useEffect, useState } from 'react';

type AnimatedTextProps = {
    text?: string;
    delay?: number; // delay in milliseconds before the animation starts
};

type CharState = {
    char: string;
    opacity: number;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay }) => {
    const initialCharState: CharState[] = new Array(text.length).fill({ char: '', opacity: 0 });
    const [displayedChars, setDisplayedChars] = useState<CharState[]>(initialCharState);

    useEffect(() => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let charTimeouts: NodeJS.Timeout[] = [];

        // Function to update a character's state at a specific index after a delay
        const updateCharState = (newState: CharState, index: number, delay: number) => {
            charTimeouts.push(
                setTimeout(() => {
                    setDisplayedChars((prev) => {
                        let newChars = [...prev];
                        newChars[index] = newState;
                        return newChars;
                    });
                }, delay)
            );
        };

        // Global delay before the animation starts
        const globalTimeout = setTimeout(() => {
            text.split('').forEach((char, index) => {
                // Delay factor for staggering the animation per character
                const staggerDelay = index * 25; // 500ms stagger between each character

                // Each character goes through up to 4 random changes before settling on the actual character
                for (let i = 1; i <= 4; i++) {
                    // Random character with increasing opacity
                    const randomChar = possible.charAt(Math.floor(Math.random() * possible.length));
                    const opacity = i * 0.25; // 25% increase in opacity with each change
                    updateCharState({ char: randomChar, opacity }, index, i * 50 + staggerDelay);
                }

                // Set the actual character after the random ones with full opacity
                updateCharState({ char, opacity: 1 }, index, 5 * 50 + staggerDelay);
            });
        }, delay); // applying the global delay here

        // Cleanup timeouts on component unmount
        return () => {
            clearTimeout(globalTimeout); // clear the global timeout
            charTimeouts.forEach((timeout) => clearTimeout(timeout));
        };
    }, [delay, text]); // Adding delay and text to the dependency array to re-run if they change

    return (
        <>
            {displayedChars.map((charState, index) => (
                <span
                    key={index}
                    className="preload__letter"
                    style={{ opacity: charState.opacity }} // Apply the opacity from the state
                >
                    {charState.char}
                </span>
            ))}
        </>
    );
};

export default AnimatedText;
