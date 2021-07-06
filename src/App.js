import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MapView from './components/MapView';
import MyLocation from './components/MyLocation';

function App() {
  return (
    <BrowserRouter basename="/Mapa-Leaflet">
      <Switch>
        <Route path='/myLocation'   >
          <MyLocation />
        </Route>
        <Route path='/'  >
          <MapView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
