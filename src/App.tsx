import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainMenu } from "./pages/MainMenu";
import { Suspense } from "react";
import { Loading } from "./components/Loading";
import { PlayerOne } from "./pages/PlayerOne";
import { PlayerTwo } from "./pages/PlayerTwo";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainMenu />}>
            <Route index element={<MainMenu />} />
            <Route path="*" element={<MainMenu />} />
          </Route>
          <Route path="/player_one" element={<PlayerOne />} />
          <Route path="/player_two" element={<PlayerTwo />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
