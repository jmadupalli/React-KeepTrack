import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoApp from "./components/todoComps/ToDoApp";
import Register from "./components/userComps/Register";
import Login from "./components/userComps/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { AuthContext, userContextType } from "./components/reducer/UserContest";
import ToDoAppAuth from "./components/todoComps/ToDoAppAuth";

const getUserState = () => {
  const storedUser = localStorage.getItem("userInfo");
  return storedUser ? (JSON.parse(storedUser) as userContextType) : null;
};

function App() {
  const [userState, setUserState] = useState(() => getUserState());
  const queryClient = new QueryClient();
  return (
    <>
      <div className="flex flex-col h-screen">
        <AuthContext.Provider value={userState}>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <Header />
              <div className="bg-gray-700 lg:p-12 p-6 grow">
                <Routes>
                  <Route
                    path="/"
                    element={userState ? <ToDoAppAuth /> : <ToDoApp />}
                  />
                  <Route path="/register" element={<Register />} />
                  <Route
                    path="/login"
                    element={<Login setUserState={setUserState} />}
                  />
                </Routes>
              </div>
              <Footer />
            </QueryClientProvider>
          </BrowserRouter>
        </AuthContext.Provider>
      </div>
    </>
  );
}

export default App;
