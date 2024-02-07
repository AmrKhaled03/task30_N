import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Register from "./components/Register";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

import Navs from "./Navs";
import Cart from "./components/Cart";

import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import About from "./components/About";
import Cakes from "./components/Cakes";
import Contact from "./components/Contact";
import Special from "./components/Special";
import { ContextProvider } from "./components/ShoppingContext";
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInUsername, setLoggedInUsername] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);
  useEffect(() => {
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      const { email, username } = JSON.parse(loggedInUserData);
      setLoggedInUser(email);
      setLoggedInUsername(username);
    }
  }, []);

  const handleLogin = (userEmail, userUsername) => {
    setLoggedInUser(userEmail);
    setLoggedInUsername(userUsername);
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ email: userEmail, username: userUsername })
    );
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setLoggedInUsername(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <ContextProvider>
      <div>
        {loader === true ? (
          <div className="container d-flex justify-content-center align-items-center flex-column vh-100 ">
            <span className="loader-two  text-dark">Loading</span>
          </div>
        ) : (
          <>
            <Navs loggedInUser={loggedInUser} handleLogout={handleLogout} />

            <Routes>
              <Route index path="/" exact element={<Home />} />

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/cart" element={<Cart />} />

              <Route
                path="/profile"
                exact
                element={
                  <UserProfile
                    email={loggedInUser}
                    username={loggedInUsername}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/cakes" element={<Cakes />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/specials" element={<Special />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </ContextProvider>
  );
}

export default App;
