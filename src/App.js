import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataProvider from "./context/DataProvider";
import "./App.css";
import routes from "./routes";
import { Spinner } from "./components/Spinner";

function App() {
  return (
    <DataProvider>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => {
                      return <route.component {...props} />;
                    }}
                  />
                )
              );
            })}
          </Switch>
        </Suspense>
      </Router>
    </DataProvider>
  );
}

export default App;