import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage";
import { TextPage } from "../TextPage";
import { FormPage } from "../FormPage";
import { Layout } from "../ui/Layout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/text" element={<TextPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
