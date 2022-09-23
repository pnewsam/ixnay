import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage";
import { Layout } from "../ui/Layout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
