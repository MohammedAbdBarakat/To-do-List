import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    let [body,setBody] = useState('');
    let [type,setType] = useState('Education');
    let [notes,setNotes] = useState('')
    
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {body,type,notes};
        setIsPending(true);
        setTimeout(() => {
            fetch('http://localhost:9000/tasks',{
                method : "POST",
                headers : {"Content-Type": "application/json"},
                body : JSON.stringify(task)
            }).then(() =>{
                console.log("new task added")
                setIsPending(false)
                history.push("/")
            })
        }, 2000);
    }
    return ( 
        <div className="create">
            <h2>Add a new task</h2>
            <form onSubmit={handleSubmit}>
                <label>Task:</label>
                <textarea
                type="text"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Notes:</label>
                <textarea
                type="text"
                required
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                ></textarea>
                <label>Type:</label>
                <select
                required
                value={type}
                onChange={(e) => setType (e.target.value)}
                >
                    <option value="Education">Education</option>
                    <option value="Sport">Sport</option>
                    <option value="Spiritual">Spiritual</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Work">Work</option>
                </select>
                {!isPending && <button>Add task</button>}
                {isPending && <button disabled>Adding task...</button>}

            </form>
        </div>
    );
}

export default Create;