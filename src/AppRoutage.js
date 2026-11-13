import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApi from "./TodosApi";
import DetailsTache from "./DetailsTache";
import NonAccomplies from "./Nonaccomplies";

export default function AppRoutage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApi />} />
        <Route path="/incompleted" element={<NonAccomplies />} />
        <Route path="/:id" element={<DetailsTache />} />
      </Routes>
    </BrowserRouter>
  );
}