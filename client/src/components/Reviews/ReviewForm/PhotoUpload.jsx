import React, {useState, useEffect} from 'react'; // import useState

const PhotoUpload = () => {
  let [PhotoCount, setPhotoCount] = useState(0);
  let [Photos, setPhotos] = useState([]);

  // const onFileChange = (e) => {
  //   setPhotoCount(PhotoCount + 1);
  // }
  // const onFileUpload = (e) => {
  //   setPhotos([Photos, ... event.target.files])
  // }


  if (PhotoCount < 5) {
    return (
      <div>
        <form action="/action_page.php">
          <input  type="file"
                  name="filename" />
                  {/* // onChange={this.onFileChange} /> */}
          {/* <button onClick={this.onFileUpload}>upload photo</button> */}
        </form>
      </div>
    )
  } else {
    return (
      <div>
        Maximum of 5 photos have been reached
      </div>
    )
  }
}

export default PhotoUpload;