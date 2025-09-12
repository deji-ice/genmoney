import { AppleLogoSimple, HimsLogo, MetaIcon, NvidiaLogo } from "@/assets/logos";
import { StaticImageData } from "next/image";

export type Stock = {
    id: string; 
    symbol: string;
    name: string;
    price: number;
    changePercent: number; 
    logo: string | StaticImageData;
    volume?: number; 
    direction?: 'up' | 'down';
};


export const stocks: Stock[] = [
    {
        id: 'aapl',
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 157.07,
        changePercent: 0.10,
        logo: AppleLogoSimple,
        volume: 12000000,
        direction: 'up'
    },
    {
        id: 'meta',
        symbol: 'META',
        name: 'Meta Inc.',
        price: 157.07,
        changePercent: 0.10,
        logo: MetaIcon,
        volume: 10000000,
        direction: 'up'
    },
    {
        id: 'nvda',
        symbol: 'NVDA',
        name: 'Nvidia Corp',
        price: 157.07,
        changePercent: 0.11,
        logo: NvidiaLogo,
        volume: 8000000,
        direction: 'up'
    },
    {
        id: 'hims',
        symbol: 'HIMS',
        name: 'His & Hers Health',
        price: 157.07,
        changePercent: 0.01,
        logo: HimsLogo,
        volume: 3000000,
        direction: 'up'
    }
];

export type StockCategory = 'gainers' | 'losers' | 'most';

