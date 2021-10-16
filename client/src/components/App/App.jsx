import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StockCounterContext, stockCounterSettings } from '../../contexts/stock-counter-context';
import './App.css';
import Header from '../BaseComponents/Header/Header';
import Menu from '../BaseComponents/Menu/Menu';
import UserPanel from '../Panels/UserPanel/UserPanel';
import Home from '../Pages/Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        settings: stockCounterSettings,
      },
      navOpen: true,
      panelOpen: false,
    };

    this.setNavOpen = this.setNavOpen.bind(this);
    this.setCurrencyExchange = this.setCurrencyExchange.bind(this);
  }

  componentDidMount() {
    this.setState((prevState) => ({
      value: {
        ...prevState.value,
        setCurrencyExchange: this.setCurrencyExchange,
      },
    }));
  }

  setCurrencyExchange(currencyExchange) {
    this.setState((prevState) => ({
      value: {
        ...prevState.value,
        settings: {
          ...prevState.value.settings,
          currencyExchange,
        },
      },
    }));
  }

  setNavOpen() {
    this.setState((prevState) => ({
      navOpen: !prevState.navOpen,
    }));
  }

  setPanelOpen() {
    this.setState((prevState) => ({
      panelOpen: !prevState.panelOpen,
    }));
  }

  render() {
    const { navOpen, value, panelOpen } = this.state;

    return (
      <Router>
        <div className="App">
          <Header openNav={() => this.setNavOpen()} openPanel={() => this.setPanelOpen()} />
          <div className="dashboard">
            <Menu navOpen={navOpen} />
            <UserPanel panelOpen={panelOpen} closePanel={() => this.setPanelOpen()} />
            <main>
              <StockCounterContext.Provider value={value}>
                <Switch>
                  <Route path="/home" exact>
                    <Home />
                  </Route>
                </Switch>
              </StockCounterContext.Provider>
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;