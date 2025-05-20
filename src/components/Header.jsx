import styles from "../styles/Header.css"
import logo from "../assets/logo.png"
import ThemeToggle from "../components/ThemeToggle.jsx";

const Header = () => {
  return (
    <div className="navHeader" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <a href="/">
      <img 
          src={logo}          
           width="180"
           alt="logo" />
      </a>
      <ThemeToggle />
      </div>
  )
}

export default Header