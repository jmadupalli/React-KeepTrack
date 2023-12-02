import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoApp from "./components/todoComps/ToDoApp";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ToDoApp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
