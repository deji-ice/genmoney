export type Index = {
    id: string;
    symbol: string;
    name: string;
    price: number;
    changePercent: number;
    direction: 'up' | 'down';
    iconColor: string;
    iconText: string;
};

export const indices: Index[] = [
    {
        id: 'spx1',
        symbol: 'SPX',
        name: 'S&P 500 Index',
        price: 4365.99,
        changePercent: 0.10,
        direction: 'up',
        iconColor: 'bg-red-600',
        iconText: '500'
    },
    {
        id: 'ndq',
        symbol: 'NDQ',
        name: 'Nasdaq 100',
        price: 15154.93,
        changePercent: -0.10,
        direction: 'down',
        iconColor: 'bg-blue-500',
        iconText: '100'
    },
    {
        id: 'spx2',
        symbol: 'SPX',
        name: 'S&P 500 Index',
        price: 4365.99,
        changePercent: 0.01,
        direction: 'up',
        iconColor: 'bg-red-600',
        iconText: '500'
    },
    {
        id: 'vix1',
        symbol: 'VIX',
        name: 'Volatility S&P 500',
        price: 14.89,
        changePercent: -0.01,
        direction: 'down',
        iconColor: 'bg-green-600',
        iconText: '>'
    },
    {
        id: 'dxy',
        symbol: 'DXY',
        name: 'U.S. Dollar Cur...',
        price: 105.341,
        changePercent: 0.11,
        direction: 'up',
        iconColor: 'bg-teal-600',
        iconText: '$'
    },
    {
        id: 'vix2',
        symbol: 'VIX',
        name: 'Volatility S&P 500',
        price: 14.89,
        changePercent: -0.01,
        direction: 'down',
        iconColor: 'bg-green-600',
        iconText: '>'
    }
];
