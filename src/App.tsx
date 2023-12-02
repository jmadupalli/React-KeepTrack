import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoApp from "./components/todoComps/ToDoApp";
import Register from "./components/userComps/Register";
import Login from "./components/userComps/Login";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <BrowserRouter>
          <Header />
          <div className="bg-gray-700 lg:p-12 p-6 grow">
            <Routes>
              <Route path="/" element={<ToDoApp />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
