// Mock data for ETFs section
export type ETF = {
    id: string;
    symbol: string;
    name: string;
    price: number;
    changePercent: number;
    direction: 'up' | 'down';
};

export const etfs: ETF[] = [
    {
        id: 'spy',
        symbol: 'SPY',
        name: 'SPDR S&P 500 ETF',
        price: 582.19,
        changePercent: 0.10,
        direction: 'up'
    },
    {
        id: 'qqq',
        symbol: 'QQQ',
        name: 'Invesco QQQ Trust',
        price: 505.08,
        changePercent: -0.10,
        direction: 'down'
    },
    {
        id: 'voo',
        symbol: 'VOO',
        name: 'Vanguard S&P 500',
        price: 535.26,
        changePercent: 0.10,
        direction: 'up'
    },
    {
        id: 'tlt',
        symbol: 'TLT',
        name: 'iShares 20+ Year',
        price: 85.29,
        changePercent: -0.10,
        direction: 'down'
    },
    {
        id: 'soxl1',
        symbol: 'SOXL',
        name: 'Direxion Daily Semiconductor',
        price: 28.12,
        changePercent: 0.10,
        direction: 'up'
    },
    {
        id: 'soxl2',
        symbol: 'SOXL',
        name: 'Direxion Daily Semiconductor',
        price: 28.12,
        changePercent: -0.10,
        direction: 'down'
    }
];
