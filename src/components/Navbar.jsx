import { getImages } from "../constants/imagePath";
import "../styles/commonStyle.css";

function Navbar({ isMinimized, setMinimized }) {
  return (
    <nav
      className="navbar navbar-light bg-light"
      style={{ backgroundColor: "white" }}
    >
      <div className="container-fluid">
        <div className=" d-flex justify-content-between align-items-center w-100">
          <div >
            <form className="d-flex gap-2">
              <div className="d-flex justify-content-first">
                <img
                  className="d-lg-none pt-2 justify-content-center align-items-center"
                  src={getImages().toggle_button}
                  onClick={() => {
                    setMinimized(!isMinimized);
                  }}
                  style={{ width: "25px",height:'30px' }}
                  alt=""
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control d-sm-none d-lg-inline d-md-inline d-none"
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <span className="input-group-text" id="basic-addon1">
                  <img src={getImages().search} alt="Search" />
                </span>
              </div>
            </form>
          </div>
          <div >
            <div className="d-flex justify-content-end">
              <a className="me-3" style={{ textDecoration: "none" }}>
                <img src={getImages().notification} alt="Icon" />
              </a>
              <a className="me-3" style={{ textDecoration: "none" }}>
                <img src={getImages().message} alt="Icon" />
              </a>
              <a style={{ textDecoration: "none" }}>
                <img
                  className="rounded-5"
                  style={{ width: "24px", height: "24px" }}
                  src={getImages().profile}
                  alt="Icon"
                />
                <span className="dropdown-toggle d-lg-inline d-md-none d-sm-none d-none"> radhe</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
