import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Isaac Katana. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/isaackatana" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
          <a href="https://linkedin.com/in/isaackatana" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
          <a href="https://twitter.com/1isaackatana" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer