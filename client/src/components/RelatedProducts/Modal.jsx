import React from 'react';
import {
         OuterModal, ModalContainer, ModalHeader,
         ModalBody, ModalElement, ModalDiv, ModalHeaderEl,
         ModalTitle
        } from '../style/RelatedProductsStyle/ModalContainer.style.js';

const Modal = (props) => {
  const compareFeatures = () => {
    const compareFeatures = {};

    const mainFeature = [];
    props.mainProduct.features.forEach(feature => (feature.value && mainFeature.push(feature.value)));

    const relatedFeature = [];
    props.relatedProduct.features.forEach(feature => (feature.value && relatedFeature.push(feature.value)));

    mainFeature.forEach(feature => {
      if(relatedFeature.indexOf(feature) !== -1) {
        compareFeatures[feature] = {related: '\u2713', main: '\u2713' };
      } else {
        compareFeatures[feature] = {related: '', main: '\u2713'};
      }
    })

    relatedFeature.forEach(feature => {
      if(mainFeature.indexOf(feature) !== -1) {
        compareFeatures[feature].main = '\u2713';
      } else {
        compareFeatures[feature] = {main: '', related: '\u2713'};
      }
    })
    return compareFeatures;
  }
  const compareFeaturesObj = compareFeatures();
  return (
    <OuterModal onClick={() => {props.setShowModal(false)}}>
      <ModalContainer onClick={e => (e.stopPropagation())} showModal={props.showModal}>
        <ModalTitle>Comparing</ModalTitle>
        <ModalHeader>
        <ModalHeaderEl>{props.mainProduct.name}</ModalHeaderEl>
        <ModalHeaderEl>{props.relatedProduct.name}</ModalHeaderEl>
        </ModalHeader>
        <ModalBody>
        {
          Object.keys(compareFeaturesObj).map((key, index) => {
            return(
                  <ModalElement>
                    <ModalDiv>{compareFeaturesObj[key].main}</ModalDiv>
                    <ModalDiv style={{width: "150px"}}>{key}</ModalDiv>
                    <ModalDiv>{compareFeaturesObj[key].related}</ModalDiv>
                  </ModalElement>
              )
          })
        }
        </ModalBody>
      </ModalContainer>
    </OuterModal>
  )
}

export default Modal;

// {isRelatedFeatures().map(feature => {
//   return (
//     <ModalElement>
//       <div>{"\u2713"}</div>
//       <div>{feature.feature}</div>
//       <div>{feature.present}</div>
//     </ModalElement>
//   )
//   })}
//     {isMainFeatures().map(feature => {
//   return (
//     <ModalElement>
//       <div>{feature.present}</div>
//       <div>{feature.feature}</div>
//       <div>{"\u2713"}</div>
//     </ModalElement>
//   )
//   })}