
import { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", mMove);
            document.addEventListener("mouseenter", mEnter);
            document.addEventListener("mouseleave", mLeave);
            document.addEventListener("mousedown", mDown);
            document.addEventListener("mouseup", mUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", mMove);
            document.removeEventListener("mouseenter", mEnter);
            document.removeEventListener("mouseleave", mLeave);
            document.removeEventListener("mousedown", mDown);
            document.removeEventListener("mouseup", mUp);
        };

        const mMove = (el) => {
            setPosition({ x: el.clientX, y: el.clientY });

            // Check if hovering a clickable element
            const target = el.target;
            const isClickable =
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setLinkHovered(!!isClickable);
        };

        const mEnter = () => {
            setHidden(false);
        };

        const mLeave = () => {
            setHidden(true);
        };

        const mDown = () => {
            setClicked(true);
        };

        const mUp = () => {
            setClicked(false);
        };

        addEventListeners();
        return () => removeEventListeners();
    }, []);

    const cursorClasses = `
        fixed top-0 left-0 z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2
        mix-blend-difference transition-transform duration-100 ease-out
        ${hidden ? 'opacity-0' : 'opacity-100'}
        ${clicked ? 'scale-90' : 'scale-100'}
        ${linkHovered ? 'scale-150' : ''}
    `;

    return (
        <div
            className={cursorClasses}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        >
            <div className={`
                 relative flex items-center justify-center
                 w-8 h-8 rounded-none border border-neon-green
                 ${linkHovered ? 'bg-neon-green/20 rotate-45' : ''}
                 transition-all duration-200
             `}>
                <div className="w-1 h-1 bg-neon-green rounded-full" />

                {/* Crosshair lines */}
                <div className="absolute top-1/2 left-[-8px] w-2 h-[1px] bg-neon-green" />
                <div className="absolute top-1/2 right-[-8px] w-2 h-[1px] bg-neon-green" />
                <div className="absolute left-1/2 top-[-8px] w-[1px] h-2 bg-neon-green" />
                <div className="absolute left-1/2 bottom-[-8px] w-[1px] h-2 bg-neon-green" />
            </div>
        </div>
    );
};

export default CustomCursor;
