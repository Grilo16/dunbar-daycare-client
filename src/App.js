import {HashRouter as Router, Routes, Route, Link} from "react-router-dom"
import FooterContainer from "./containers/FooterContainer";
import HeaderContainer from "./containers/HeaderContainer";
import Homepage from "./pages/Homepage";
import TestPage from "./pages/TestPage";


function App() {
  return (
    <Router>
    <nav>
      <Link to={"/"}>Homepage </Link>
      <Link to={"/test"}>Test page </Link>
    </nav>
    <HeaderContainer/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/test" element={<TestPage/>} />
      </Routes>
      <FooterContainer/>
    </Router>

  )
}

export default App;
