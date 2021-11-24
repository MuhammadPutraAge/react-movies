import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, MovieDetailsPage, NotFoundPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
