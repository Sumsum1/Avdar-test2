import logo from './logo.svg';
import './App.css';
import movie from './profile.webm';

function App() {

  const [currentTime, setCurrentTime] = useState(0);
  const [stop1, setSop1]  =useState(false);
  const [reverse, setReverse] = useState(false);
  const [forward, setForward] = useState(true);
  const [play1, setPlay1] = useState(false);
  const movieRef = useRef();

  const onTimeUpdate = (e) => {
    const c = movieRef.current.currentTime;
    movieRef.current.currentTime = c + 0.104;
}

  return (
    <div className='container-video'>
          <video 
            className='video-room' 
            onWheel={onTimeUpdate}  
            muted={true} 
            ref={movieRef} 
            src={movie} 
            //onTimeUpdate={onTimeUpdate}   
      />
      </div>
  );
}

export default App;
