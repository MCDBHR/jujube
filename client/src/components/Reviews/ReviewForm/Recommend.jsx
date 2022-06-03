// receives the meta data -characteristics as a prop

// if the characteristic matches one of the options, reveal these set of radio buttons, else these other ones.

import React, {useState, useEffect} from 'react'; // import useState

const Recommend = ({setRecommended}) => {

  return (
    <div>
      <div>
        <label>
          Do you recommend this product? *
        </label>
        <label><input type="radio" name="radioset" value={true} required onClick={() => setRecommended(true)}/>Yes</label>
        <label><input type="radio" name="radioset" value={false} required onClick={() => setRecommended(false)}/>No</label>
      </div>
    </div>
  )


}

export default Recommend;