
import { useState } from 'react';
import { Check, Copy, Power, Wifi } from 'lucide-react';
import { Button } from './ui/Button';

export const ConnectedState = ({ address, onDisconnect }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(address);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="space-y-6 animate-fade-in relative">

            {/* Top Status Bar */}
            <div className="flex items-center justify-between border-b border-neon-green/20 pb-4 mb-6">
                <div className="flex items-center space-x-2 text-neon-green">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                    <span className="text-xs tracking-widest">ONLINE</span>
                </div>
                <Wifi className="w-4 h-4 text-neon-green/50" />
            </div>

            <div className="space-y-2 text-center">
                <h2 className="text-xl text-neon-blue tracking-widest uppercase mb-1">Access Granted</h2>
                <p className="text-xs text-gray-400">IDENTITY VERIFIED</p>
            </div>

            {/* Address Display */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-green opacity-20 blur transition duration-1000 group-hover:duration-200 group-hover:opacity-50"></div>
                <div className="relative flex items-center justify-between bg-black border border-neon-blue/30 p-4">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-500 uppercase mb-1">Wallet Address</span>
                        <span className="font-mono text-neon-blue text-sm tracking-wider">
                            {address}
                        </span>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopy}
                        className="text-gray-400 hover:text-neon-blue"
                        title="Copy Address"
                    >
                        {copied ? <Check className="w-4 h-4 text-neon-green" /> : <Copy className="w-4 h-4" />}
                    </Button>
                </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="col-span-2">
                    <Button variant="danger" onClick={onDisconnect} className="w-full justify-center group">
                        <Power className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                        TERMINATE_SESSION
                    </Button>
                </div>
            </div>
        </div>
    );
};
