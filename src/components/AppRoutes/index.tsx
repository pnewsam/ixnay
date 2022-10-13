import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AvatarPage } from "../AvatarPage";
import { BadgePage } from "../BadgePage";
import { ButtonPage } from "../ButtonPage";
import { ColorsPage } from "../ColorsPage";
import { CheckboxPage } from "../CheckboxPage";
import { ComboboxPage } from "../ComboboxPage";
import { DemoPage } from "../DemoPage";
import { DialogPage } from "../DialogPage";
import { IconsPage } from "../IconsPage";
import { InputPage } from "../InputPage";
import { Layout } from "../ui/Layout";
import { ListPage } from "../ListPage";
import { OverviewPage } from "../OverviewPage";
import { RadioPage } from "../RadioPage";
import { SelectPage } from "../SelectPage";
import { SkeletonPage } from "../SkeletonPage";
import { SpinnerPage } from "../SpinnerPage";
import { TablePage } from "../TablePage";
import { TagPage } from "../TagPage";
import { TogglePage } from "../TogglePage";
import { TooltipPage } from "../TooltipPage";
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

          {/* Simple Components */}
          <Route path="/avatar" element={<AvatarPage />} />
          <Route path="/badge" element={<BadgePage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/checkbox" element={<CheckboxPage />} />
          <Route path="/combobox" element={<ComboboxPage />} />
          <Route path="/dialog" element={<DialogPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/radio" element={<RadioPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/skeleton" element={<SkeletonPage />} />
          <Route path="/spinner" element={<SpinnerPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/tag" element={<TagPage />} />
          <Route path="/toggle" element={<TogglePage />} />
          <Route path="/tooltip" element={<TooltipPage />} />

          {/* Demo */}
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
