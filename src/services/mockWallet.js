/**
 * Mock wallet service simulating async connection.
 */

// Simulate network delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const connectWallet = async () => {
    await delay(1500); // 1.5s delay to simulate network request

    // 70% chance of success
    const isSuccess = Math.random() < 0.7;

    if (isSuccess) {
        return {
            address: 'ALGO-9X4F-72KQ-83LM-FAKE',
            network: 'TestNet',
        };
    } else {
        throw new Error('User rejected connection request');
    }
};
