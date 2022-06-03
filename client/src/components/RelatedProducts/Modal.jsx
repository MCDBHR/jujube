import React from 'react';
import {OuterModal, ModalContainer, ModalHeader, ModalBody, ModalElement} from '../style/RelatedProductsStyle/ModalContainer.style.js';

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
        <p>Comparing</p>
        <ModalHeader>
        <p>{props.mainProduct.name}</p>
        <p>{props.relatedProduct.name}</p>
        </ModalHeader>
        <ModalBody>
        {
          // compareFeatures().map((feature, index) => {
          //   const key = Object.keys(compareFeatures)[index]
          //   return (
          //     <ModalElement>
          //       <div>{feature[key].main}</div>
          //       <div>{key}</div>
          //       <div>{feature[key].related}</div>
          //     </ModalElement>
          //       )
          //   })
          Object.keys(compareFeaturesObj).map((key, index) => {
            return(
                  <ModalElement>
                    <div>{compareFeaturesObj[key].main}</div>
                    <div>{key}</div>
                    <div>{compareFeaturesObj[key].related}</div>
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