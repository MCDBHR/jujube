import styled from 'styled-components';

export const OuterModal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
export const ModalContainer = styled.div`
  display: ${props => props.showModal ? 'flex' : 'none'};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  width: 400px;
  background-color: white;
  z-index: 99;
  border: 1px solid black;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 1%;
`

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const ModalBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`

export const ModalElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`