// receives the meta data -characteristics as a prop

// if the characteristic matches one of the options, reveal these set of radio buttons, else these other ones.

import React, {useState, useEffect} from 'react'; // import useState

const Recommend = () => {

  return (
    <div>
      <div>
        <label>
          Do you recommend?
        </label>
        <label><input type="radio" name="radioset" value={'yes'}/>Yes</label>
        <label><input type="radio" name="radioset" value={'no'}/>No</label>
      </div>
    </div>
  )


}

export default Recommend;