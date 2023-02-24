import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "@/components/Home";
import Chrome from "@/components/Chrome";
import Safari from "@/components/Safari";
import Firefox from "@/components/Firefox";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chrome" element={<Chrome />} />
          <Route path="/safari" element={<Safari />} />
          <Route path="/firefox" element={<Firefox />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
