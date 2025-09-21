import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import { Product } from '../../models/Product'
import { Restaurant as RestaurantType } from '../../models/Restaurant'
import {
    Container,
    Banner,
    BannerContent,
    Category,
    RestaurantName,
    ProductsSection,
    ProductsList
} from './styles'

import ladolceImg from '../../assets/images/restaurant/Massa.png'
import margueritaImg from '../../assets/images/restaurant/Pizza Margherita.png'
import napoliImg from '../../assets/images/restaurant/Pizza Napolitana.png'
import quattroImg from '../../assets/images/restaurant/Pizza Quatro Queijos.png'
import carbonaraImg from '../../assets/images/restaurant/Pizza Carbonara.png'
import prosciuttoImg from '../../assets/images/restaurant/Pizza Prosciutto.png'
import vegetarianaImg from '../../assets/images/restaurant/Pizza Vegetariana.png'

const Restaurant = () => {
    const { id } = useParams()
    const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const mockRestaurant: RestaurantType = {
            id: Number(id),
            name: "La Dolce Vita Trattoria",
            category: "Italiana",
            rating: 4.6,
            image: ladolceImg,
            description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!"
        }

        const mockProducts: Product[] = [
            {
                id: 1,
                name: "Pizza Marguerita",
                description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
                image: margueritaImg, 
                price: 60.90,
                serves: "de 2 a 3 pessoas"
            },
            {
                id: 2,
                name: "Pizza Napoli",
                description: "Pizza Napoli com molho de tomate, mussarela, manjericão fresco e tomates cereja. Autêntica pizza italiana que vai te conquistar!",
                image: napoliImg, 
                price: 65.90,
                serves: "de 2 a 3 pessoas"
            },
            {
                id: 3,
                name: "Pizza Quattro Stagioni",
                description: "Pizza Quattro Stagioni com molho de tomate, mussarela, presunto, cogumelos, alcachofras e azeitonas. Uma explosão de sabores em cada fatia!",
                image: quattroImg, 
                price: 72.90,
                serves: "de 2 a 3 pessoas"
            },
            {
                id: 4,
                name: "Pizza Carbonara",
                description: "Pizza Carbonara com molho branco cremoso, mussarela, bacon crocante, ovos e queijo parmesão. Cremosa e irresistível, impossível resistir!",
                image: carbonaraImg, 
                price: 68.90,
                serves: "de 2 a 3 pessoas"
            },
            {
                id: 5,
                name: "Pizza Prosciutto",
                description: "Pizza Prosciutto com molho de tomate, mussarela, presunto Parma, rúcula fresca e queijo parmesão. Sofisticação e sabor únicos!",
                image: prosciuttoImg, 
                price: 78.90,
                serves: "de 2 a 3 pessoas"
            },
            {
                id: 6,
                name: "Pizza Vegetariana",
                description: "Pizza Vegetariana com molho de tomate, mussarela, abobrinha, berinjela, pimentão colorido e manjericão fresco. Leve e saborosa!",
                image: vegetarianaImg, 
                price: 62.90,
                serves: "de 2 a 3 pessoas"
            }
        ]

        setRestaurant(mockRestaurant)
        setProducts(mockProducts)
    }, [id])

    if (!restaurant) {
        return <div>Carregando...</div>
    }

    return (
        <>
            <Banner style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${restaurant.image})` }}>
                <div className="container">
                    <BannerContent>
                        <Category>{restaurant.category}</Category>
                        <RestaurantName>{restaurant.name}</RestaurantName>
                    </BannerContent>
                </div>
            </Banner>

            <ProductsSection>
                <div className="container">
                    <ProductsList>
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ProductsList>
                </div>
            </ProductsSection>
        </>
    )
}

export default Restaurant