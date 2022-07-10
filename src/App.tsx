import { useState } from "react";
import Layout from "./Layout/Layout";
import Theme from "./styles/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Theme isDarkMode={isDarkMode}>
        <Layout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
          <Routes>
            <Route path="/" element={<p>Home</p>} />
            <Route path="/others" element={<p>Other</p>} />
          </Routes>
        </Layout>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
