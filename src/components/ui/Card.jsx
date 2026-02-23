
import { cn } from './Button';

export const Card = ({ className, children, title, ...props }) => {
    return (
        <div
            className={cn(
                'relative bg-cyber-dark/80 backdrop-blur-md border border-neon-green/30 p-1 overflow-hidden',
                className
            )}
            {...props}
        >
            {/* Top Bar for "Terminal" look */}
            <div className="flex items-center justify-between px-2 py-1 bg-neon-green/10 border-b border-neon-green/20 mb-4">
                <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-neon-red/50 rounded-full" />
                    <div className="w-2 h-2 bg-neon-blue/50 rounded-full" />
                    <div className="w-2 h-2 bg-neon-green/50 rounded-full" />
                </div>
                <span className="text-xs text-neon-green/70 font-mono text-[10px] tracking-widest uppercase">
                    {title || 'SYSTEM_ACCESS'}
                </span>
            </div>

            <div className="p-4 relative z-10">
                {children}
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-green" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neon-green" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neon-green" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-green" />
        </div>
    );
};
