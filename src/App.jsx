import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Service } from "./pages/Service";
import { Works } from "./pages/Works";
import { News } from "./pages/News";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/service" element={<Service />} />
  <Route path="/works" element={<Works />} />
  <Route path="/news" element={<News />} />
  <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
