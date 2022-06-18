import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

const useTheme = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {      
    document.body.setAttribute('theme-mode', theme);
    return () => {
      document.body.removeAttribute('theme-mode');
    };
  }, [theme]);

  return [theme, toggleTheme];
}

export default useTheme;