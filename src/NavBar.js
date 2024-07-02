import { Link } from "react-router-dom"
const NavBar = () => {
    return ( 
        <nav className="navbar">
        <h1>THE LIST</h1>
        <div className="links">
            <Link to="/sortTasks">Sort</Link>
            <Link to="/">All tasks</Link>
            <Link to="/create" style={{
            color:"white",
            backgroundColor:"rgb(27, 139, 213)",
            borderRadius:'8px',
        }}>Add new task</Link>
        </div>
    </nav>
    );
}

export default NavBar;