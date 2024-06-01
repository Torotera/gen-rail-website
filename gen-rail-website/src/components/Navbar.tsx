import "bootstrap/dist/css/bootstrap.css";

//TODO - Create a logo where the word logo is
//TODO - Set up so each off the navbar set to a different site and make the current selected active

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Profiles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Characters
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Wishing History
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Guides
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PVP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
