import React, {useState, useEffect} from 'react'; // import useState

const Body = () => {
  let [characterCount, setCharacterCount] = useState('');
  let [minimumReached, setMinimumReached] = useState(false);

  const charCounter = (event) => {
    setCharacterCount(event.target.value)
    if (characterCount.length >= 50) {
      setMinimumReached(true)
    } else if (characterCount.length < 50) {
      setMinimumReached(false);
    }
  }


  return (
    <div>
      <form>
        <label>
          <input type="text" minLength="50" maxLength = "1000" placeholder="Why did you like the product or not?" value={characterCount} onChange={charCounter}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <p>{minimumReached ? 'Minimum reached' : `Mininum required characters left: ${50 - characterCount.length}`} </p>
    </div>
  )
}

export default Body;