import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import CardDetails from "./components/CardDetails";
import NotFound from "./components/NotFound";

function App() {
  const isDark = useSelector((state) => state.darkMode);

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
        <Header />
        <Switch>
          <Route path="/Frontend-Challenge-14/" exact component={Body} />
          <Route
            path="/Frontend-Challenge-14/details"
            component={CardDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
