import styled, { css } from 'styled-components';

 const Flexbox = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap || '3em'};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin || '0'};
  border-bottom ${(props) => props.borderbottom || '0'};
  padding: ${(props) => props.margin || '0'};

`;

export default Flexbox;
