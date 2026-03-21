import { BrowserRouter } from "react-router-dom";
import AppShell from "./AppShell";
import { ROUTER_BASENAME } from "./site";

const App = () => (
  <BrowserRouter basename={ROUTER_BASENAME}>
    <AppShell />
  </BrowserRouter>
);

export default App;
