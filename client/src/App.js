import StudentRecord from "./components/index";
import DisplayData from "./components/DisplayData/DisplayData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditStudent from "./components/EditStudent/EditStudent";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayData />} />
        <Route path="/AddStudent" element={<StudentRecord />} />
        <Route path="/EditStudent/:stuId" element={<EditStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
