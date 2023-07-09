import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import { useScrollToTopWhenNavigate } from "./hooks/useScrollToTopWhenNavigate";

function App() {
  useScrollToTopWhenNavigate();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/terms-and-conditions" index element={<Terms />} />
        <Route path="/privacy" index element={<Privacy />} />
      </Route>
    </Routes>
  );
}

export default App;
