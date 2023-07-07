import '../Navbar/Navbar.css'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    try {
      console.log(localStorage.getItem("user"));
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-custom"  style={{backgroundColor:"rgb(4 41 75 / 98%)",color:"white",display:"flex",alignItems:"center"}}>
      <Link to="/dashboard" className="navbar-brand">Iquiz</Link>
      <Link to="/quizzes" className="is-light" style={{ marginLeft: "40px",color:'#fdfdfd' }}>Quizzes</Link>
      <Link to="/scores-page" className="is-light" style={{ marginLeft: "40px",color:'#fdfdfd' }}>Scores</Link>
      <Link to="/dashboard" className="is-light" style={{ marginLeft: "40px",color:'#fdfdfd' }}>Dashboard</Link>
      <Link to="/contact-us" className="is-light" style={{ marginLeft: "40px",color:'#fdfdfd' }}>Contact Us</Link>
      

      <span className="is-light" style={{  cursor: "pointer",marginRight:"10px" }} onClick={handleLogout}>
        Log Out
      </span>
    </nav>
  );
}

export default Navbar;
