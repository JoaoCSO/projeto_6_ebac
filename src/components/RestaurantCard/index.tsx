import { Link } from 'react-router-dom'
import Button from '../Button'
import { Card, Image, Content, Title, Rating, Description, TagContainer, Tag, InfoBar } from './styles'
import { Restaurant } from '../../models/Restaurant'

interface Props {
    restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: Props) => {
    return (
        <Card>
            <Image src={restaurant.image} alt={restaurant.name} />
            <TagContainer>
                {restaurant.highlighted && <Tag>Destaque da semana</Tag>}
                <Tag>{restaurant.category}</Tag>
            </TagContainer>
            <Content>
                <InfoBar>
                    <Title>{restaurant.name}</Title>
                    <Rating>⭐ {restaurant.rating}</Rating>
                </InfoBar>
                <Description>{restaurant.description}</Description>
                <Link to={`/restaurant/${restaurant.id}`}>
                    <Button>Saiba mais</Button>
                </Link>
            </Content>
        </Card>
    )
}

export default RestaurantCard