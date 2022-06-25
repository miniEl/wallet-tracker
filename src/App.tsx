import useTheme from "./Hooks/useTheme";
import Header from "./components/UI/Header/Header";
import AddExpense from "./components/NewExpense/NewExpense";
import ExpenseList from "./components/Expenses/ExpenseList/ExpenseList";
import Footer from "./components/UI/Footer";
import './App.scss';


const App = () => {
  const [theme, toggleTheme] = useTheme();

    return ( 
      <div className='app'>
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <AddExpense />
        <ExpenseList />
        <Footer />
      </div>
    );
}

export default App;