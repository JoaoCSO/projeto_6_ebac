import { useEffect } from 'react'
import { Overlay, Container, Header, ProductImage, ProductInfo, Title, Description, Portion, ButtonGroup, Button, CloseButton } from './styles'
import { Product } from '../../models/Product'

interface Props {
    isOpen: boolean
    onClose: () => void
    product?: Product | null
}

const Modal = ({ isOpen, onClose, product }: Props) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen || !product) return null

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <Overlay onClick={handleOverlayClick}>
            <Container>
                <Header>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                </Header>

                <ProductImage src={product.foto} alt={product.nome} />

                <ProductInfo>
                    <Title>{product.nome}</Title>
                    <Description>{product.descricao}</Description>
                    <Portion>Serve: {product.porcao}</Portion>
                    <ButtonGroup>
                        <Button>
                            Adicionar ao carrinho - R$ {product.preco.toFixed(2).replace('.', ',')}
                        </Button>
                    </ButtonGroup>
                </ProductInfo>
            </Container>
        </Overlay>
    )
}

export default Modal