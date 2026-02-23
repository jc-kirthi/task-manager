
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button';

export const ErrorState = ({ message, onRetry }) => {
    return (
        <div className="text-center space-y-8 animate-fade-in relative overflow-hidden">

            {/* Glitch Background Effect */}
            <div className="absolute inset-0 bg-neon-red/5 pointer-events-none animate-pulse" />

            <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 mb-2 border-2 border-neon-red rounded-none">
                <AlertTriangle className="w-10 h-10 text-neon-red animate-bounce" />
            </div>

            <div className="space-y-2 relative z-10">
                <h2 className="text-2xl font-bold tracking-widest text-neon-red uppercase text-glow">
                    System Failure
                </h2>
                <div className="bg-neon-red/10 border-l-2 border-neon-red p-4 mx-auto max-w-xs text-left">
                    <p className="text-neon-red font-mono text-xs">
                        <span className="font-bold">ERROR_CODE:</span> 0xCRITICAL<br />
                        <span className="font-bold">MESSAGE:</span> {message || 'Connection refused by remote host.'}
                    </p>
                </div>
            </div>

            <div className="pt-4 relative z-10">
                <Button onClick={onRetry} variant="danger" className="min-w-[180px] shadow-neon-red">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    RETRY_CONNECTION
                </Button>
            </div>
        </div>
    );
};
