import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OverviewPage } from "../OverviewPage";
import { TypographyPage } from "../TypographyPage";
import { ColorsPage } from "../ColorsPage";
import { IconographyPage } from "../IconographyPage";
import { AvatarsPage } from "../AvatarsPage";
import { EffectsPage } from "../EffectsPage";
import { LogoPage } from "../LogoPage";
import { ButtonsPage } from "../ButtonsPage";
import { ControlPage } from "../ControlPage";
import { NavigationPage } from "../NavigationPage";
import { FormsPage } from "../FormsPage";
import { CardsPage } from "../CardsPage";
import { TablesPage } from "../TablesPage";
import { ModalsPage } from "../ModalsPage";
import { Layout } from "../ui/Layout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          {/* Tokens */}
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/colors" element={<ColorsPage />} />
          <Route path="/iconography" element={<IconographyPage />} />
          <Route path="/avatars" element={<AvatarsPage />} />
          <Route path="/effects" element={<EffectsPage />} />
          {/* Components */}
          <Route path="/logo" element={<LogoPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/control" element={<ControlPage />} />
          <Route path="/navigation" element={<NavigationPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/tables" element={<TablesPage />} />
          <Route path="/modals-popups" element={<ModalsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
