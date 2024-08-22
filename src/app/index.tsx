import { RouterProvider } from "react-router-dom";
import { createRoutes } from "./routes";
import { AppProvider } from "./providers";

const AppRouter = () => {
  const routes = createRoutes();

  return <RouterProvider router={routes} />;
};

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
