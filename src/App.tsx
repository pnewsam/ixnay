import { AppRoutes } from "./components/AppRoutes";
import { EnvProvider } from "./contexts";

function App() {
  return (
    <EnvProvider>
      <AppRoutes />
    </EnvProvider>
  );
}

export default App;
