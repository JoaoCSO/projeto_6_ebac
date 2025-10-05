import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
    closeCart,
    removeFromCart,
    selectCartItems,
    selectCartIsOpen,
    selectCartTotal
} from '../../store/reducers/cart'
import {
    Overlay,
    Sidebar,
    CartItem,
    CartItemImage,
    CartItemInfo,
    CartItemTitle,
    CartItemPrice,
    RemoveButton,
    TotalSection,
    TotalText,
    TotalValue,
    ContinueButton,
    EmptyCart
} from './styles'

const Cart = () => {
    const dispatch = useAppDispatch()
    const items = useAppSelector(selectCartItems)
    const isOpen = useAppSelector(selectCartIsOpen)
    const total = useAppSelector(selectCartTotal)

    const handleClose = () => {
        dispatch(closeCart())
    }

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id))
    }

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }

    if (!isOpen) return null

    return (
        <>
            <Overlay onClick={handleOverlayClick} />
            <Sidebar>
                <h2>Carrinho</h2>

                {items.length === 0 ? (
                    <EmptyCart>
                        <p>Seu carrinho está vazio</p>
                        <p>Adicione produtos para continuar</p>
                    </EmptyCart>
                ) : (
                    <>
                        {items.map(item => (
                            <CartItem key={item.id}>
                                <CartItemImage src={item.foto} alt={item.nome} />
                                <CartItemInfo>
                                    <CartItemTitle>{item.nome}</CartItemTitle>
                                    <CartItemPrice>
                                        {item.quantity}x R$ {item.preco.toFixed(2).replace('.', ',')}
                                    </CartItemPrice>
                                </CartItemInfo>
                                <RemoveButton onClick={() => handleRemove(item.id)}>
                                    ✕
                                </RemoveButton>
                            </CartItem>
                        ))}

                        <TotalSection>
                            <TotalText>Valor total</TotalText>
                            <TotalValue>R$ {total.toFixed(2).replace('.', ',')}</TotalValue>
                        </TotalSection>

                        <ContinueButton>
                            Continuar com a entrega
                        </ContinueButton>
                    </>
                )}
            </Sidebar>
        </>
    )
}

export default Cart