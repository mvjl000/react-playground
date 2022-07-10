import { useState } from "react";
import Layout from "./Layout/Layout";
import Theme from "./styles/Theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Theme isDarkMode={isDarkMode}>
      <Layout>
        <div>
          <h1>Hello Vite</h1>
          <button type="button" onClick={() => setIsDarkMode(!isDarkMode)}>
            Toggle Dark Mode
          </button>
        </div>
      </Layout>
    </Theme>
  );
}

export default App;
