import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StockCounterContext, stockCounterSettings } from '../contexts/stock-counter-context';
import './App.css';
import Header from '../components/BaseComponents/Header/Header';
import Menu from '../components/BaseComponents/Menu/Menu';
import Home from '../Pages/Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        minCourtage: stockCounterSettings.minCourtage,
        percentageCourtage: stockCounterSettings.percentageCourtage,
        currencyCourtage: stockCounterSettings.currencyCourtage,
        baseCurrency: stockCounterSettings.baseCurrency,
        currencyExchange: stockCounterSettings.currencyExchange,
      },
      navOpen: true,
    };

    this.setCurrencyExchange = (currencyExchange) => {
      this.setState((prevState) => ({
        value: {
          ...prevState.value,
          currencyExchange,
        },
      }));
    };

    this.setNavOpen = this.setNavOpen.bind(this);
  }

  setNavOpen() {
    this.setState((prevState) => ({
      navOpen: !prevState.mavOpen,
    }));
  }

  render() {
    const { navOpen, value } = this.state;

    return (
      <Router>
        <div className="App">
          <Header openNav={() => this.setNavOpen} />
          <div className="dashboard">
            <Menu navOpen={navOpen} />
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
