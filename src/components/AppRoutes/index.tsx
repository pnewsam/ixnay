import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DemoPage } from "../DemoPage";
import { Layout } from "../ui/Layout";
import { OverviewPage } from "../OverviewPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<OverviewPage />} />

          <Route path="/demo" element={<DemoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
