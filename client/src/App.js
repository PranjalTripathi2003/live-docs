import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import TextEditor from "./TextEditor"; // Adjust the import path as necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={`/documents/${uuidV4()}`} />}
        />
        <Route path="/documents/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
