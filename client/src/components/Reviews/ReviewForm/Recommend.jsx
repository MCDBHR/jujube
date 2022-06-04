import React, {useState, useEffect} from 'react';

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