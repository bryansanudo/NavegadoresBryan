import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "@/components/Home";
import Chrome from "@/components/Chrome";
import Safari from "@/components/Safari";
import Firefox from "@/components/Firefox";
import Edge from "@/components/Edge";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chrome" element={<Chrome />} />
          <Route path="/safari" element={<Safari />} />
          <Route path="/firefox" element={<Firefox />} />
          <Route path="/edge" element={<Edge />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
