import { Route, Routes } from "react-router-dom";

import MainLayout from "@/layouts/main";

import IndexPage from "@/pages";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route element={<IndexPage />} path="/" />
      </Routes>
    </MainLayout>
  );
}

export default App;
