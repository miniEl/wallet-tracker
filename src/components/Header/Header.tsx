import logo from '../../assets/logo.svg';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import './Header.scss';

const Header = ({theme, onToggleTheme}: any) => {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" />
        <h2>Wallet Tracker</h2>
      </div>
        <span 
        className='theme-btn' 
        onClick={onToggleTheme} 
        id={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
          {theme === 'light' ? <MdDarkMode />  : <MdLightMode />}
        </span>
        
    </div>
    
  );
}

export default Header;