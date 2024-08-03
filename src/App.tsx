import { Routes, Route } from "react-router-dom";
import { routes } from "./commons/routes";

function App() {
  return (
    <Routes>
      {routes.map(({ id, component, path }) => (
        <Route key={id} path={path} element={component} />
      ))}
    </Routes>
  );
}

export default App;
