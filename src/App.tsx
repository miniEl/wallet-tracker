import useTheme from "./Custom-Hooks/useTheme";
import Header from "./components/Header/Header";
import ExpenseList from "./components/Expenses/ExpenseList/ExpenseList";
import Footer from "./components/Footer";
import './App.scss';


const App = () => {
  const [theme, toggleTheme] = useTheme();

    return ( 
      <div className="app">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <ExpenseList />
        <Footer />
      </div>
    );
}

export default App;