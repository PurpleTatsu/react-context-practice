import React from 'react';
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./contexts/themeContext";
import AuthContextProvider from "./contexts/authContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>

          <Navbar />
          <Booklist />
          <ThemeToggle />

        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
