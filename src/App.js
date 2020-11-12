import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/details" component={CardDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
