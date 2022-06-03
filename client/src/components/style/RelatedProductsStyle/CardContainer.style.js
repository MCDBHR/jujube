import styled from 'styled-components';

export const FavoriteCardContainer = styled.li`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
`

export const RelatedCardContainer = styled.li`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  &:hover {
    opacity: 0.7;
    transition: 0.3s;
  }
`
export const AddOutfitContainer = styled.div`
  width: 250px;
  height: 350px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const CardInfoDiv = styled.div`
  position: relative;
  padding: 0px 10px;
  padding-top: 8px;
`
export const CardElement = styled.div`
  padding-bottom: 5px;
`
export const CardButton = styled.button`
  text-decoration: none;
  border: none;
  text-align: center;
  z-index: 99;
  border-radius: 100%;
  background-color: white;
  width: 20px;
  top: 10px;
  right: 10px;
  position: absolute;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 250px;
  height: 325px;
`