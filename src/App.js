import "./styles/styles.css";
import { Navbar, UserNameCard } from "./components";
import { UserList } from "./pages";
import {SiteRoutes } from "./routes/siteRoutes"

function App() {
  return (
    <div className="App">
      <Navbar />
      <SiteRoutes />
    </div>
  );
}

export default App;
