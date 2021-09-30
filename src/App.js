import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import GamesList from "./components/gamesList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/'>
          <GamesList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
