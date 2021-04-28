import { Redirect, Route } from "react-router-dom";

import "./App.scss";
import { Provider } from "react-redux";
import store from "./store/store";
import Search from "./containers/Search/Search";
import User from "./containers/User/User";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route path="/search/:name?/:pageNo?">
          <Search />
        </Route>
        <Route path="/user/:name" exact>
          <User />
        </Route>
        <Route path="/" exact>
          <Redirect to="/search" />
        </Route>
      </div>
    </Provider>
  );
}

export default App;
