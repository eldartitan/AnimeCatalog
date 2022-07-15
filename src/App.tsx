import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import TopAnimePage from "./pages/TopAnimePage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path='/animetop' element={<TopAnimePage />} />
          <Route path='/animetop/page=:page' element={<TopAnimePage />} />
          <Route path='/anime/:id' element={<AnimePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
