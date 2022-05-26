import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Reset.css';
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import SearchPage from "./components/SearchPage/SearchPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import WatchList from "./components/WatchList/WatchList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </Router>
  );
}

export default App;
