import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import CardDetails from "./components/CardDetails";

function App() {
  const isDark = useSelector((state) => state.darkMode);

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
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
