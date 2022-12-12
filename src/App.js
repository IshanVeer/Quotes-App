import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddQuote from "./pages/AddQuotes";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteID">
        <QuoteDetail />
      </Route>
      <Route path="/add-quote">
        <AddQuote />
      </Route>
    </Switch>
    </Layout>
    
  );
}

export default App;
