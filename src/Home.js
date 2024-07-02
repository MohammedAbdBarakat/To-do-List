import TaskList from "./TaskList";
import useFetch from "./useFetch";
const Home = () => {
    const {error , isPending , data : tasks} = useFetch('http://localhost:9000/tasks');
    return ( 
        <div className="home">
            {error && <div>{ error }</div> }
            {isPending && <div>Loading...</div>}
            {tasks && <TaskList tasks= {tasks} title = "All tasks" />}
        </div>
    );
}

export default Home;