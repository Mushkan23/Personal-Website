import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/mushkan-singh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> <FaLinkedin/>
            </a>
            <a href="https://github.com/Mushkan23" target="_blank" rel="noopener noreferrer" aria-label="GitHub"> <FaGithub/>
            </a>
            <a href="https://medium.com/@mushkansingh733" target="_blank" rel="noopener noreferrer" aria-label="Medium"> <FaMedium/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar