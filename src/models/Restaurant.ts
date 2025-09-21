export interface Restaurant {
    id: number;
    name: string;
    category: string;
    rating: number;
    image: string;
    description: string;
    highlighted?: boolean;
}