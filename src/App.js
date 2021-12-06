import "./App.css";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation.js";
import harvardArt from "./data/harvardArt";
import GalleryView from "./components/GalleryView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<GalleryNavigation galleries={harvardArt.records} />}
          ></Route>
          <Route
            exact
            path="/galleries/:galleryId"
            element={<GalleryView galleries={harvardArt.records} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
