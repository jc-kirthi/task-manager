
import { useState } from 'react';
import { Card } from './ui/Card';
import { ConnectState } from './ConnectState';
import { ConnectedState } from './ConnectedState';
import { ErrorState } from './ErrorState';
import { connectWallet } from '../services/mockWallet';

export const WalletConnect = () => {
    const [status, setStatus] = useState('disconnected'); // disconnected, connecting, connected, error
    const [walletData, setWalletData] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const handleConnect = async () => {
        setStatus('connecting');
        setErrorMsg('');

        try {
            const data = await connectWallet();
            setWalletData(data);
            setStatus('connected');
        } catch (err) {
            console.error(err);
            setErrorMsg(err.message || 'Failed to connect');
            setStatus('error');
        }
    };

    const handleDisconnect = () => {
        setWalletData(null);
        setStatus('disconnected');
        setErrorMsg('');
    };

    const renderContent = () => {
        switch (status) {
            case 'connected':
                return (
                    <ConnectedState
                        address={walletData?.address}
                        onDisconnect={handleDisconnect}
                    />
                );
            case 'error':
                return (
                    <ErrorState
                        message={errorMsg}
                        onRetry={handleConnect}
                    />
                );
            case 'connecting':
            case 'disconnected':
            default:
                return (
                    <ConnectState
                        onConnect={handleConnect}
                        isConnecting={status === 'connecting'}
                    />
                );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-cyber-black selection:bg-neon-green selection:text-black">

            {/* Background Grid & Scanlines */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="absolute inset-0 scanlines pointer-events-none opacity-10" />

            {/* Ambient Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[128px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[128px] pointer-events-none animate-pulse" />

            {/* Main Container */}
            <div className="w-full max-w-md relative z-10">
                {/* Header HUD */}
                <div className="flex justify-between items-end mb-2 px-2">
                    <div className="text-[10px] text-neon-green/50 font-mono">
                        SYS.VER.2.0.4<br />
                        SECUREMode: ENABLED
                    </div>
                    <div className="text-[10px] text-neon-green/50 font-mono text-right">
                        NET: TESTNET<br />
                        LATENCY: 12ms
                    </div>
                </div>

                <Card title={status === 'connected' ? 'SECURE_SESSION' : 'AUTHENTICATION_REQUIRED'}>
                    {renderContent()}
                </Card>

                {/* Footer HUD */}
                <div className="mt-4 text-center">
                    <span className="text-[10px] text-gray-700 font-mono">
                // UNAUTHORIZED ACCESS IS PROHIBITED
                    </span>
                </div>
            </div>
        </div>
    );
};
