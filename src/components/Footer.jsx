// eslint-disable-next-line import/no-extraneous-dependencies
import { FaGithub, FaDev, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-6 px-4">
            <p className="text-muted">
              &copy; Copyright {new Date().getFullYear()}
            </p>
          </div>
          <div className="col-6 px-4 social-icons">
            <a
              href="https://github.com/theRealOwenRees/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://dev.to/therealowenrees"
              target="_blank"
              rel="noreferrer"
            >
              <FaDev />
            </a>
            <a
              href="https://www.linkedin.com/in/therealowenrees/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
