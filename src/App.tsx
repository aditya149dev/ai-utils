import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

const App = () => {
  return (
    <div className="bg-gray-800">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
