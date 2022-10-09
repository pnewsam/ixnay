import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ButtonPage } from "../ButtonPage";
import { ColorsPage } from "../ColorsPage";
import { DemoPage } from "../DemoPage";
import { DialogPage } from "../DialogPage";
import { IconsPage } from "../IconsPage";
import { InputPage } from "../InputPage";
import { Layout } from "../ui/Layout";
import { ListPage } from "../ListPage";
import { OverviewPage } from "../OverviewPage";
import { TablePage } from "../TablePage";
import { TypographyPage } from "../TypographyPage";
import { UtilityClassesPage } from "../UtilityClassesPage";
import { VariablesPage } from "../VariablesPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Overview */}
          <Route path="/" element={<OverviewPage />} />
          <Route path="/colors" element={<ColorsPage />} />
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/icons" element={<IconsPage />} />
          <Route path="/variables" element={<VariablesPage />} />
          <Route path="/utility-classes" element={<UtilityClassesPage />} />

          {/* Components */}
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/dialog" element={<DialogPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/table" element={<TablePage />} />

          {/* Demo */}
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
