import { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import Header from "./components/Header/Header";
import ExpenseList from "./components/Expenses/ExpenseList/ExpenseList";
import Footer from "./components/Footer";
import './App.scss';


const App = () => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {      
      document.body.setAttribute('data-theme', theme);
      return () => {
        document.body.removeAttribute('data-theme');
      };
    }, [theme])

    return ( 
      <div className="app">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <ExpenseList />
        <Footer />
      </div>
    );
}

export default App;