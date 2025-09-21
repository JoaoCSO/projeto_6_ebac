import styled from 'styled-components'

export const Container = styled.section`
  padding: 80px 0;
`

export const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px 80px;
  align-items: stretch;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`