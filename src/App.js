import { Route, Switch, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Body from "./components/Body";
import CardDetails from "./components/CardDetails";
import NotFound from "./components/NotFound";

function App() {
  let location = useLocation();
  const isDark = useSelector((state) => state.darkMode);

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/Frontend-Challenge-14/" exact component={Body} />
          <Route
            path="/Frontend-Challenge-14/details"
            component={CardDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
