
import { Button } from './ui/Button';
import { Terminal, Shield, Cpu } from 'lucide-react';

export const ConnectState = ({ onConnect, isConnecting }) => {
    return (
        <div className="text-center space-y-8 relative z-10">

            {/* Decorative Icon */}
            <div className="relative inline-flex items-center justify-center w-24 h-24 mb-4">
                <div className="absolute inset-0 border border-neon-green/30 rotate-45" />
                <div className="absolute inset-0 border border-neon-green/30 -rotate-45" />
                <div className="relative z-10 text-neon-green animate-pulse-fast">
                    <Terminal className="w-12 h-12" />
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-widest text-neon-green text-glow uppercase">
                    System Entry
                </h2>
                <p className="text-neon-blue/80 font-mono text-sm max-w-xs mx-auto leading-relaxed">
                    <span className="text-neon-pink">{'>'}</span> INITIATE SECURE HANDSHAKE<br />
                    <span className="text-neon-pink">{'>'}</span> ESTABLISH SYSTEM LINK<br />
                    <span className="text-neon-pink">{'>'}</span> AWAITING AUTHORIZATION...
                </p>
            </div>

            <div className="pt-4">
                <Button
                    onClick={onConnect}
                    size="lg"
                    isLoading={isConnecting}
                    className="w-full sm:w-auto min-w-[240px] shadow-neon-green"
                >
                    {isConnecting ? 'ESTABLISHING LINK...' : 'CONNECT_WALLET()'}
                </Button>
            </div>

            <div className="flex justify-center space-x-8 text-xs text-gray-500 pt-8 border-t border-gray-800 mt-8">
                <div className="flex items-center space-x-2">
                    <Shield className="w-3 h-3 text-neon-blue" />
                    <span>ENCRYPTED</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Cpu className="w-3 h-3 text-neon-pink" />
                    <span>DECENTRALIZED</span>
                </div>
            </div>
        </div>
    );
};
