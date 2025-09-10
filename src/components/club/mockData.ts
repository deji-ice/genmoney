// Mock data for Club section
export type ClubPost = {
    id: string;
    user: {
        name: string;
        username: string;
        avatar: string;
        isVerified: boolean;
    };
    content: string;
    timestamp: string;
    tags: string[];
    engagement: {
        comments: number;
        likes: number;
        shares: number;
    };
};

export const clubPosts: ClubPost[] = [
    {
        id: 'post1',
        user: {
            name: 'Savannah Nguyen',
            username: '@techtrader99',
            avatar: 'https://res.cloudinary.com/dhvwthnzq/image/upload/v1757537741/genmoney/Image_3_gq7uub.png',
            isVerified: true
        },
        content: 'Bitcoin is facing a tough resistance level. The recent regulatory news could have a big impact. What\'s your take?',
        timestamp: '2h',
        tags: ['$TSLA', 'Bullish'],
        engagement: {
            comments: 67,
            likes: 234,
            shares: 67
        }
    },
    {
        id: 'post2',
        user: {
            name: 'Savannah Nguyen',
            username: '@techtrader99',
            avatar: 'https://res.cloudinary.com/dhvwthnzq/image/upload/v1757537741/genmoney/Image_3_gq7uub.png',
            isVerified: true
        },
        content: 'Bitcoin is facing a tough resistance level. The recent regulatory news could have a big impact. What\'s your take?',
        timestamp: '2h',
        tags: ['$TSLA', 'Bullish'],
        engagement: {
            comments: 67,
            likes: 234,
            shares: 67
        }
    }
];
