import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AppRoutes from "./routes/approutes";
function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;