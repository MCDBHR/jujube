import React, {useState, useEffect} from 'react'; // import useState

const Summary = () => {
  //takes in meta data that is an object.
  //object.keys that metadata to get characteristic

  //for each characteristic, find the key that matches in the CharacteristicDataTable and map out each radio button with the description (index) underneath

  return (
    <div>
      <form>
        <label>
          <input type="text" maxLength = "60" placeholder="Example: Best purchase ever!" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Summary;