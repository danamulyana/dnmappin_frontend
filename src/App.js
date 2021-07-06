import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { Room, Star } from '@material-ui/icons'

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: -6.200000,
    longitude: 106.816666,
    zoom: 4
  });
  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle='mapbox://styles/danamulyana/ckqs74rau5aig17nw546f4c1o'
      >
      <Marker
       latitude={-6.175392} 
       longitude={106.827153} 
       offsetLeft={-20} 
       offsetTop={-10}
      >
        <Room style={{ fontSize: viewport.zoom * 7, color:"slateblue"}}/>
      </Marker>
      <Popup
        latitude={-6.175392} 
        longitude={106.827153}
        closeButton={true}
        closeOnClick={false}
        anchor="left"
      >
        <div className="card">
          <label>Place</label>
          <h4 className="place">Monas</h4>
          <label>Review</label>
          <p>Beautiful place, i like it</p>
          <label>Rating</label>
          <div className="stars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <label>Information</label>
          <span className="username">Created by <b>Dana Mulyana</b></span>
          <span className="date">1 hour ago</span>
        </div>
      </Popup>
      </ReactMapGL>
    </div>
  );
}

export default App;
