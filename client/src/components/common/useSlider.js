import react from 'react';

class Slider extends React.Component {

  render() {
    return <span></span>
  }
}

// const slider = (Component) => {
//   return(
//     <span>

//     </span>
//   )
// }

const slider = (Component) => {
  return () => {
    const [slider, setSlider] = useState(0);
    const [forwardLast, setForwardLast] = useState(false);
    const cardOffset = useRef(4);

    const nextSlider = () => {
      if(slider < props.favItems.length) {
        if(!forwardLast) {
          setSlider(prevState => prevState + cardOffset.current);
          setForwardLast(true);
        } else {
          setSlider(prevState => prevState + 1);
          setForwardLast(true);
        }
      }
    }

    const prevSlider = () => {
      if(slider > 0) {
        if(forwardLast) {
          setSlider(prevState => prevState - cardOffset.current);
          setForwardLast(false);
        } else {
          setSlider(prevState => prevState - 1);
          setForwardLast(false);
        }
      }
    }

    return (
      <div>We have an output of a NEW COMPONENT</div>
    )
  }
}