import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import GamesList from "./components/gamesList";
import GamePage from "./components/gamePage";
import CartContext from "./contexts/cartContext";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact>
            <GamesList />
          </Route>
          <Route path='/game/:id'>
            <GamePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
