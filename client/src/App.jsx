import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MemoForms from "./pages/MemoForms";
import Nopage from "./pages/Nopage";
import Blog from './pages/Blog';
// import useStore from "./store/store";

function App() {

  const [memo, setMemo] = useState([]);

  // const memo = useStore((state) => state.memo);

  return (
    <div className="bg-slate-500 h-screen">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="forms" element={<MemoForms setMemo={setMemo} />} />
        <Route plath="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
