import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import MapView from './components/MapView';
import MyLocation from './components/MyLocation';

function App() {
  return (
    <Router basename="/Mapa-Leaflet">
      <Switch>
        <Route path='/myLocation'   >
          <MyLocation />
        </Route>
        <Route path='/'  >
          <MapView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
