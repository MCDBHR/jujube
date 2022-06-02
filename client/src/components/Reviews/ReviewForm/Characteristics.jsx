// receives the meta data -characteristics as a prop

// if the characteristic matches one of the options, reveal these set of radio buttons, else these other ones.

import React, {useState, useEffect} from 'react'; // import useState
import axios from 'axios';
import CharacteristicDataTable from './CharacteristicDataTable.js';

const Characteristics = ({characteristics}) => {

  let characteristicArray = Object.keys(characteristics);

  if (characteristicArray.length !== 0) {
    return (
      <div>
        { characteristicArray.map((characteristic, index) => {
          let tabledata = CharacteristicDataTable[characteristic];
          return (
            <div key={index}>
              <div>
                <label><input type="radio" name="radioset" value={tabledata[0]}/>{tabledata[0]}</label>
                <label><input type="radio" name="radioset" value={tabledata[1]}/>{tabledata[1]}</label>
                <label><input type="radio" name="radioset" value={tabledata[2]}/>{tabledata[2]}</label>
                <label><input type="radio" name="radioset" value={tabledata[3]}/>{tabledata[3]}</label>
                <label><input type="radio" name="radioset" value={tabledata[4]}/>{tabledata[4]}</label>
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div>
        loading...
      </div>
    )
  }

}

export default Characteristics;