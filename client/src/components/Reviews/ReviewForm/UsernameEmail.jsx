import React, {useState, useEffect} from 'react'; // import useState

const UsernameEmail = () => {
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');

  return (
    <div>
      <form>
        <label>
          <div>
            <small>username </small>
            <input type="text"
                    maxLength = "60"
                    placeholder="Example: jackson11!"
                    value={username}
                    onChange={event => setUsername(event.target.value)} />
          </div>
          <div>
            <small>email </small>
            <input type="text"
                    maxLength = "60"
                    placeholder="Example: jackson11@gmail.com"
                    value={email}
                    onChange={event => setEmail(event.target.value)}/>
          </div>
          <p>For authentication reasons, you will not be emailed</p>
        </label>
      </form>
    </div>
  )
}

export default UsernameEmail;