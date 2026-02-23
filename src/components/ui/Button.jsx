
import { Loader2, Terminal } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const Button = ({
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled,
    children,
    ...props
}) => {
    const variants = {
        primary: 'bg-neon-green text-cyber-black hover:bg-neon-green/90 border border-neon-green hover:shadow-neon-green',
        outline: 'border border-neon-blue bg-transparent text-neon-blue hover:bg-neon-blue/10 hover:shadow-neon-blue',
        ghost: 'bg-transparent text-neon-green hover:bg-neon-green/10',
        danger: 'bg-transparent border border-neon-red text-neon-red hover:bg-neon-red/10 hover:shadow-neon-red',
    };

    const sizes = {
        sm: 'h-8 px-3 text-xs uppercase tracking-wider',
        md: 'h-10 px-4 text-sm uppercase tracking-wider',
        lg: 'h-12 px-6 text-base uppercase tracking-wider',
    };

    return (
        <button
            className={cn(
                'relative inline-flex items-center justify-center font-mono font-bold transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed clip-path-polygon',
                variants[variant],
                sizes[size],
                className
            )}
            disabled={isLoading || disabled}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {!isLoading && variant === 'primary' && <Terminal className="mr-2 h-4 w-4" />}
            {children}

            {/* Glitch Overlay Effect on Hover */}
            <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-10 pointer-events-none" />
        </button>
    );
};
