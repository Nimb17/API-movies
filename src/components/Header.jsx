import styles from "../styles/Header.css"
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="navHeader">
      <a href="/">
      <img 
          src={logo}          
           width="180"
           alt="logo" />
      </a>
      </div>
  )
}

export default Header