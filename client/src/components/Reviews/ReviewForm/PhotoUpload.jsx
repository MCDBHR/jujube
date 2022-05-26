import React, {useState, useEffect} from 'react'; // import useState

const PhotoUpload = () => {
  let [PhotoCount, setPhotoCount] = useState(0);


  return (
    <div>
      <form action="/action_page.php">
        <input type="file" id="myFile" name="filename"/>
      </form>
    </div>
  )
}

export default PhotoUpload;