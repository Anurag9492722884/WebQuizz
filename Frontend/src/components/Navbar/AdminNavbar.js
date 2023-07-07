import '../Navbar/AdminNavbar.css'
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
    const history = useNavigate();

    const Logout = () => {
        try {
            console.log(localStorage.getItem("user"));
            localStorage.removeItem("user");
            history("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#0459d8b5",color:"white",display:"flex",alignItems:"center"}}>
        <a className="navbar-brand text-light" href="/Admin-page">Welcome to Admin Panel</a>
       
           
           
            <a className="is-light Feature " onClick={Logout}>
                
                                    Log Out
       </a>    
       </nav>
    );
  }
  
  export default Navbar;
  