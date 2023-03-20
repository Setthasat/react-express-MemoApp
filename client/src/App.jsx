import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MemoForms from "./pages/MemoForms";
import Nopage from "./pages/Nopage";
import Blog from './pages/Blog';
// import useStore from "./store/store";

function App() {

  return (
    <div className="bg-slate-500 h-auto max-w-full">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="forms" element={<MemoForms />} />
        <Route plath="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
