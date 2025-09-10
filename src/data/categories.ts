// Mock data for Categories section
export type Category = {
    id: string;
    title: string;
    description: string;
    image: string;
};

export const categories: Category[] = [
    {
        id: 'technology',
        title: 'Technology',
        description: 'Education stocks are gaining ground as digital learning scales globally.',
        image: 'https://res.cloudinary.com/dhvwthnzq/image/upload/v1757537759/genmoney/image_1_gmghxu.png'
    },
    {
        id: 'healthcare',
        title: 'Healthcare',
        description: 'Healthcare stocks are gaining ground as digital learning scales globally.',
        image: 'https://res.cloudinary.com/dhvwthnzq/image/upload/v1757537742/genmoney/image_2_aawgql.png'
    }
];