import { Restaurant } from '../models/Restaurant'

export const api = {
    baseURL: 'https://api-ebac.vercel.app/api/efood', 

    async getRestaurants(): Promise<Restaurant[]> {
        const response = await fetch(`${this.baseURL}/restaurantes`)
        return response.json()
    },

    async getRestaurant(id: number): Promise<Restaurant> {
        const response = await fetch(`${this.baseURL}/restaurantes/${id}`)
        return response.json()
    }
}