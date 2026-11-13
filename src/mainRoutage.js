import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import BLog from "./Blog";
import CompteurF from "./CompteurF";
import DemoUseEffect from "./demoUseEffect";
import JeuDe  from "./components/JeuDe";
import Message from "./message";

export default function MainRoutage() {
  return (
    <>
      <h1>Page de routage</h1>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">blog</Link></li>
          <li><Link to="/compteur">compteur</Link></li>
          <li><Link to="/demoUseEffect">demo useEffect</Link></li>
          <li><Link to="/jeude">JeuDe</Link></li>
          <li><Link to="/message/Benbakhta/Adam">message</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BLog />} />
          <Route path="/compteur" element={<CompteurF />} />
          <Route path="/demoUseEffect" element={<DemoUseEffect />} />
          <Route path="/JeuDe" element={<JeuDe/>}/>
          <Route path="/message/:nom/:prenom" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}