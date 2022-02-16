import { Route, Routes } from "react-router-dom";
import CharacterList from "../../pages/CharacterList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<CharacterList />} />
    </Routes>
  );
}
