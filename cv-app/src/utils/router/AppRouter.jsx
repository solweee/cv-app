import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Inner } from "../../pages/Inner/Inner";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/inner" element={<Inner />}>
        <Route/>
      </Route>
    </Routes>
  );
}
