import './App.css';
import { Client } from './pages/Client';
import { Admin } from './pages/Admin';
import { Home } from './pages/Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export const App = () => {
    return (
        <div className="App">
            <Router>
              <Switch>

                <Route  exact path="/">
                  <Home />
                </Route>

                <Route  path="/client">
                  <Client />
                </Route>

                <Route  path="/admin">
                  <Admin />
                </Route>

              </Switch>
            </Router>
        </div>
    );
};

export default App;