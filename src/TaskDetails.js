import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const TaskDetails = () => {
    const {id} = useParams()
    const {data : Task , error , isPending} = useFetch(`http://localhost:9000/tasks/${id}`);
    const history = useHistory();

    const handleDelete = () => {
        fetch(`http://localhost:9000/tasks/${id}` , {
            method:"DELETE"
        })
        .then(() => history.push('/'))
    }
    return ( 
        <div className="task-details">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {Task &&(
                <article>
                    <h1>{ Task.body }</h1>
                    <p>Type: { Task.type }</p>
                    <div>{ Task.notes }</div>
                </article>
            )}
            <button onClick={ handleDelete }>Delete</button>
        </div>
        );
}

export default TaskDetails;