import ConnectComponent from './Components/Connect/ConnectComponent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <ConnectComponent/>
          </Route>
          <Route path="/panel">
            <Panel />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Panel() {
  return <h2>Panel</h2>;
}
