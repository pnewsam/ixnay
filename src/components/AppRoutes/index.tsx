import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OverviewPage } from "../OverviewPage";
import { DemoPage } from "../DemoPage";
import { ButtonPage } from "../ButtonPage";
import { IconPage } from "../IconPage";
import { InputPage } from "../InputPage";
import { TablePage } from "../TablePage";
import { DialogPage } from "../DialogPage";
import { ListPage } from "../ListPage";
import { TypographyPage } from "../TypographyPage";
import { Layout } from "../ui/Layout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/dialog" element={<DialogPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/icon" element={<IconPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/typography" element={<TypographyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
