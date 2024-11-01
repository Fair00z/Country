import { useContext } from "react";
import Details from "./Containers/Details/Details";
import Home from "./Containers/Home/home";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { DetailsContext } from "./Contexts/detailsContext/detailsContext";


function App() {
  const {data} = useContext(DetailsContext)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path={"/details/:country_name"} element={<Details/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
