import { AppRoutes, BaseLayout } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <AppRoutes />
      </BaseLayout>
    </div>
  );
}

export default App;
