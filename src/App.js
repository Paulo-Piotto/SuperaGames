import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import GamesList from "./components/gamesList";
import GamePage from "./components/gamePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <GamesList />
        </Route>
        <Route path='/game/:index'>
          <GamePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
