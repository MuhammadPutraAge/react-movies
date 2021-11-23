import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
