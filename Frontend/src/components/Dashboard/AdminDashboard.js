import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../Navbar/AdminNavbar";
import MediaCard from "./Createquiz";
import MediaCard2 from "./seequiz";
import MediaCard3 from "./quizstats";
function Dashboard() {
  var gg = JSON.parse(localStorage.getItem("user"));
  console.log(gg.roles);
  const history = useNavigate();
  return (
    <div className="Dashboard">
      <AdminNavbar />
    
      <div className="mjkh" style={{ marginTop: "90px", marginLeft: "20px" }}>
        <h1
          className="heading"
          style={{ marginTop: "26px", marginLeft: "371px" }}
        >
          Welcome to Admin Dashboard {gg.username}!{" "}
        </h1>

        <div className="tekken">
          <div
            style={{
              display: "flex",
              gap: "10em",
              marginTop: "5em",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <div className="create" style={{ marginLeft: "339px", marginTop: "100px" }} onClick={() => history('/create-quiz')}>
            
            <Button>create a quiz</Button>
            </div> */}
            <MediaCard />

            {/* <Button onClick={() => history("/see-all-quiz")}>

              see created quizzes
            </Button> */}
            <MediaCard2 />

            {/* <div
            className="stats"
            style={{ marginLeft: "721px", marginTop: "-39px" }}
          >
            <Button onClick={() => history("/student-stats")}>
              show quizzes stats
            </Button>
          </div> */}
            <MediaCard3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
