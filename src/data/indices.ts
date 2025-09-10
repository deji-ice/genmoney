export type Index = {
    id: string;
    symbol: string;
    name: string;
    price: number;
    changePercent: number;
    direction: 'up' | 'down';
    icon: string;
};

export const indices: Index[] = [
    {
        id: 'spx1',
        symbol: 'SPX',
        name: 'S&P 500 Index',
        price: 4365.99,
        changePercent: 0.10,
        direction: 'up',
        icon: 'https://res.cloudinary.com/dhvwthnzq/image/upload/v1757537764/genmoney/Ellipse_10_ywq2rw.png'
    },
    {
        id: 'ndq',
        symbol: 'NDQ',
        name: 'Nasdaq 100',
        price: 15154.93,
        changePercent: -0.10,
        direction: 'down',
        icon: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1757537806/genmoney/image_ydhe7m.png"
    },
    {
        id: 'spx2',
        symbol: 'SPX',
        name: 'S&P 500 Index',
        price: 4365.99,
        changePercent: 0.01,
        direction: 'up',
        icon: 'https://res.cloudinary.com/dhvwthnzq/image/upload/v1757537764/genmoney/Ellipse_10_ywq2rw.png'
    },
    {
        id: 'vix1',
        symbol: 'VIX',
        name: 'Volatility S&P 500',
        price: 14.89,
        changePercent: -0.01,
        direction: 'down',
        icon: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1757537761/genmoney/image-1_fwwfud.png"
    },
    {
        id: 'dxy',
        symbol: 'DXY',
        name: 'U.S. Dollar Cur...',
        price: 105.341,
        changePercent: 0.11,
        direction: 'up',
        icon: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1757537763/genmoney/image-2_y8oid4.png"
    },
    {
        id: 'vix2',
        symbol: 'VIX',
        name: 'Volatility S&P 500',
        price: 14.89,
        changePercent: -0.01,
        direction: 'down',
        icon: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1757537761/genmoney/image-1_fwwfud.png"
    }
];
