import styled from 'styled-components';

export const OuterModal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`
export const ModalContainer = styled.div`
  display: ${props => props.showModal ? 'flex' : 'none'};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 350px;
  background-color: white;
  z-index: 99;
  border: 1px solid black;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 1%;
  padding: 20px 40px;
  padding-top: 40px;
  overflow: scroll;
`
export const ModalTitle = styled.div`
  margin-bottom: 20px;
`

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 110px;
  margin-bottom: 30px;
`
export const ModalHeaderEl = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
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
  align-items: center;
`

export const ModalDiv = styled.div`
  flex: 1;
  text-align: center;
`