import Home from "./components/Home";
import { Routes,Route } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/video' element={<VideoPlayer/>}/>
      </Routes>
    </div>
  );
}

export default App;
