import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import RestaurantCard from '../../components/RestaurantCard'
import { Restaurant } from '../../models/Restaurant'
import { Container, RestaurantList } from './styles'
import hiokiImg from '../../assets/images/restaurant/Sushi.png'
import ladolceImg from '../../assets/images/restaurant/Massa.png'

const Home = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    useEffect(() => {
        const mockRestaurants: Restaurant[] = [
            {
                id: 1,
                name: "Hioki Sushi",
                category: "Japonesa",
                rating: 4.9,
                image: hiokiImg,
                description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sashimis, hots, niguiris, gunkan, tekkamaki, etc.",
                highlighted: true
            },
            {
                id: 2,
                name: "La Dolce Vita Trattoria",
                category: "Italiana",
                rating: 4.6,
                image: ladolceImg,
                description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas tradicionais e risotos incríveis.",
                highlighted: false
            },
            {
                id: 3,
                name: "La Dolce Vita Trattoria",
                category: "Italiana",
                rating: 4.6,
                image: ladolceImg,
                description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas tradicionais e risotos incríveis.",
                highlighted: true
            },
            {
                id: 4,
                name: "La Dolce Vita Trattoria",
                category: "Italiana",
                rating: 4.6,
                image: ladolceImg,
                description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas tradicionais e risotos incríveis.",
                highlighted: true
            },
            {
                id: 5,
                name: "La Dolce Vita Trattoria",
                category: "Italiana",
                rating: 4.6,
                image: ladolceImg,
                description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas tradicionais e risotos incríveis.",
                highlighted: true
            },
            {
                id: 6,
                name: "La Dolce Vita Trattoria",
                category: "Italiana",
                rating: 4.6,
                image: ladolceImg,
                description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas tradicionais e risotos incríveis.",
                highlighted: true
            }
        ]
        setRestaurants(mockRestaurants)
    }, [])

    return (
        <>
            <Banner />
            <Container>
                <div className="container">
                    <RestaurantList>
                        {restaurants.map(restaurant => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))}
                    </RestaurantList>
                </div>
            </Container>
        </>
    )
}

export default Home