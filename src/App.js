import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import CardDetails from "./components/CardDetails";
import allReducer from "./reducers/index";

let store = createStore(allReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen">
          <Header />
          <Switch>
            <Route path="/" exact component={Body} />
            <Route path="/details" component={CardDetails} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
