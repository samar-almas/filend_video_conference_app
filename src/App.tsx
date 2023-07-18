import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Room from "./pages/room";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomId" element={<Room />} />
    </Routes>
  );
};
export default App;
