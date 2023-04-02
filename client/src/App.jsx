import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MemoForms from "./pages/MemoForms";
import Nopage from "./pages/Nopage";
import Blog from './pages/Blog';
import SinglePage from './pages/SinglePage';
// import useStore from "./store/store";

function App() {

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen scroll-smooth	">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="blog">
          <Route path=":formId" element={<SinglePage />} />
        </Route>
        <Route path="forms" element={<MemoForms />} />
        <Route plath="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
