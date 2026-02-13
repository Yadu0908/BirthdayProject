import React, { useState, useEffect } from "react";
import "./App.css";

// Import Components based on your folder structure
import Login from "./Components/ReactCode/Login";
import BirthdaySurprise from "./Components/ReactCode/BirthdaySurprise";
import LoadingScreen from "./Components/ReactCode/LoadingScreen";

function App() {
  // State to track if user has entered the password
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State to track if the loading animation is running
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoading(true); // Trigger the loading screen immediately after login
  };

  useEffect(() => {
    if (isLoading) {
      // Wait for 3 seconds (3000ms) before showing the actual surprise
      // This gives time for the browser to load heavy assets in the background
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      {!isLoggedIn ? (
        // 1. Show Login Page first
        <Login onLogin={handleLogin} />
      ) : isLoading ? (
        // 2. Show Loading Screen for 3 seconds
        <LoadingScreen />
      ) : (
        // 3. Finally show the Birthday Surprise
        <BirthdaySurprise />
      )}
    </>
  );
}

export default App;