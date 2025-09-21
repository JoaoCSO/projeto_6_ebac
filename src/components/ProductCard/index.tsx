import { Card, Image, Title, Description, ButtonContainer } from './styles'
import { Product } from '../../models/Product'

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
    return (
        <Card>
            <Image src={product.image} alt={product.name} />
            <Title>{product.name}</Title>
            <Description>{product.description}</Description>
            <ButtonContainer>
                <button>Adicionar ao carrinho</button>
            </ButtonContainer>
        </Card>
    )
}

export default ProductCard