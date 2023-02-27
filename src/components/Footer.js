
import "../styles/Footer.css";
import {FaGithub, FaLinkedin} from "react-icons/fa";
const Footer = ({isDarkMode}) => {
    return (
        <footer className={`footer ${isDarkMode ? 'footer--dark' : ''}`}>
          <div className="container">
            <div className="footer-content">
                <div className="footer-col">
                    <h4>Social Medias</h4>
                    <ul>
                        <li className="github">
                            <a href="https://github.com/Matthieu-Tran" target="_blank" rel="noreferrer">
                                <FaGithub size="2.5em" className="github-icon"/> 
                                Check out my GitHub
                            </a>
                        </li>
                        <li className="linkedin">
                            <a href="https://www.linkedin.com/in/matthieu-tran/" target="_blank" rel="noreferrer">
                                <FaLinkedin  size="2.5em" className="linkedin-icon"/>
                                My LinkedIn
                            </a>
                        </li>
                    </ul>
              </div>
              <div className="footer-col">
                <h4>Website made by <strong>Matthieu Tran</strong></h4>
                <p>Copyright © {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </footer>
      );
    }

export default Footer;
