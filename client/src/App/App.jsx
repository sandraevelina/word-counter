import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../components/BaseComponents/Header/Header';
import Menu from '../components/BaseComponents/Menu/Menu';
import Home from '../Pages/Home/Home';

const App = () => {
  const [navOpen, setNavOpen] = useState(true);

  useEffect(() => {
    console.log(navOpen);
  }, [navOpen]);

  return (
    <Router>
      <div className="App">
        <Header openNav={() => setNavOpen(!navOpen)} />
        <div className="dashboard">
          <Menu navOpen={navOpen} />
          <main>
            <Switch>
              <Route path="/home" exact>
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
