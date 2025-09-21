import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Container, ContainerRestaurant, Logo, CartInfo, Nav, HeaderContent } from './styles'
import logoImg from '../../assets/images/logo.png' 

const Header = () => {
    const location = useLocation()
    const isRestaurantPage = location.pathname.includes('/restaurant/')

    if (isRestaurantPage) {
        // Header para página do restaurante
        return (
            <ContainerRestaurant>
                <HeaderContent>
                    <Nav>
                        <Link to="/">Restaurantes</Link>
                    </Nav>
                    <Logo>
                        <Link to="/">
                            <img src={logoImg} alt="efood" />
                        </Link>
                    </Logo>
                    <CartInfo>0 produto(s) no carrinho</CartInfo>
                </HeaderContent>
            </ContainerRestaurant>
        )
    }

    // Header para home 
    return (
        <Container>
            <HeaderContent>
                <Logo>
                    <Link to="/">
                        <img src={logoImg} alt="efood" />
                    </Link>
                </Logo>
            </HeaderContent>
        </Container>
    )
}

export default Header