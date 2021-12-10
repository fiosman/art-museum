import "./App.css";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation.js";
import harvardArt from "./data/harvardArt";
import GalleryView from "./components/GalleryView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<GalleryNavigation galleries={harvardArt.records} />} />
          <Route
            exact
            path="/galleries/:galleryId"
            element={<GalleryView galleries={harvardArt.records} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
