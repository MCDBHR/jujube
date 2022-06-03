import React, { useState, useEffect } from 'react'; // import useState
import axios from 'axios';

const PhotoUpload = ({images, setImages}) => {
  let [canAddImages, setCanAddImages] = useState(true);
  let [photoCount, setPhotoCount] = useState(0);

  const loadFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile !== undefined) {
      setImages([...images, selectedFile]);

      let formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'sx9jtizi');

      axios.post(
        'https://api.cloudinary.com/v1_1/thejoebro/image/upload',
        formData
      ).then((response) => {
        setImages([...images, response.data.url])
      })

      setPhotoCount(photoCount + 1);
      if (photoCount === 4) {
        setCanAddImages(false);
      }
    }
  }

  return (
    <div>
      {canAddImages ?
        <input type='file'
        accept='image/*'
        onChange={loadFile}
        />
      :
        <p>
          Maximum of 5 photos have been reached
        </p>
      }
      <div>
        {images.map((image, i) => {
          return <img key={i} src={image} height='80'/>
        })}
      </div>
    </div>
  )
}

export default PhotoUpload;