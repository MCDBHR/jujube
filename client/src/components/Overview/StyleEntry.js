import React from 'react';
import StyleEntryStyle from '../style/StyleEntryStyle'
import {BsCheckCircleFill} from 'react-icons/Bs'


const StyleEntry = ({style, handleStyleChange, thumbnailImg, selected}) => (
  <StyleEntryStyle
  onClick={() => handleStyleChange(style)}
  selected={selected}
  >
    <span>
      <BsCheckCircleFill />
    </span>
    <img src={thumbnailImg} alt=""/>
  </StyleEntryStyle>
)


export default StyleEntry;