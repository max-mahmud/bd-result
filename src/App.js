import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Individual from "./pages/Individual";
import Footer from "./components/Footer";
import GroupResult from "./pages/GroupResult";
import InstituteResult from "./pages/InstituteResult";
import LateshResult from "./pages/LateshResult";
import Favorite from "./pages/Favorite";
import CGPA from "./pages/CGPA";
import About from "./pages/About";
import NoticeBoard from "./pages/NoticeBoard";
import BookList from "./pages/BookList";
import NotPage from "./pages/NotPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Individual />} />
        <Route path="/group-results" element={<GroupResult />} />
        <Route path="/institute-results" element={<InstituteResult />} />
        <Route path="/latest-results" element={<LateshResult />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/cgpa-calculator" element={<CGPA />} />
        <Route path="/about" element={<About />} />
        <Route path="/notice?" element={<NoticeBoard />} />
        <Route path="/booklists" element={<BookList />} />
        <Route path="/booklists/:id" element={<BookList />} />
        <Route path="/*" element={<NotPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
