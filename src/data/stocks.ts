// Mock data for StocksSection
// In real app this would come from an API

export type Stock = {
    id: string; // unique id
    symbol: string;
    name: string;
    price: number; // current price
    changePercent: number; // percentage change e.g. 0.101 => 0.10%
    logo: string; // placeholder image path or external URL
    volume?: number; // for "Most Traded" tab
    direction?: 'up' | 'down';
};

// Helper to generate a placeholder logo using a public svg (replace later)
const logo = (sym: string) => `/placeholder/${sym}.svg`;

export const stocks: Stock[] = [
    {
        id: 'aapl',
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 157.07,
        changePercent: 0.10,
        logo: logo('aapl'),
        volume: 12000000,
        direction: 'up'
    },
    {
        id: 'meta',
        symbol: 'META',
        name: 'Meta Inc.',
        price: 157.07,
        changePercent: 0.10,
        logo: logo('meta'),
        volume: 10000000,
        direction: 'up'
    },
    {
        id: 'nvda',
        symbol: 'NVDA',
        name: 'Nvidia Corp',
        price: 157.07,
        changePercent: 0.11,
        logo: logo('nvda'),
        volume: 8000000,
        direction: 'up'
    },
    {
        id: 'hims',
        symbol: 'HIMS',
        name: 'His & Hers Health',
        price: 157.07,
        changePercent: 0.01,
        logo: logo('hims'),
        volume: 3000000,
        direction: 'up'
    }
];

export type StockCategory = 'gainers' | 'losers' | 'most';

export function filterStocks(category: StockCategory, list: Stock[] = stocks): Stock[] {
    switch (category) {
        case 'gainers':
            return [...list].sort((a, b) => b.changePercent - a.changePercent);
        case 'losers':
            return [...list].sort((a, b) => a.changePercent - b.changePercent);
        case 'most':
            return [...list].sort((a, b) => (b.volume || 0) - (a.volume || 0));
        default:
            return list;
    }
}
