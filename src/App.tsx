import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useScrollToTopWhenNavigate } from "./hooks/useScrollToTopWhenNavigate";

const Home = lazy(() => import("./pages/Home"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));

function App() {
  useScrollToTopWhenNavigate();
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/terms-and-conditions" index element={<Terms />} />
          <Route path="/privacy" index element={<Privacy />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
