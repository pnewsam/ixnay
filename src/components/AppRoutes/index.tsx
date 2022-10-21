import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../ui/Layout";
import { OverviewPage } from "../OverviewPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
