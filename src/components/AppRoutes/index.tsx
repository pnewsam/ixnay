import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage";
import { DemoPage } from "../DemoPage";
import { Layout } from "../ui/Layout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
