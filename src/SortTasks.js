import useFetch from "./useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

const SortTasks = () => {
    const { error , isPending , data: tasks } = useFetch('http://localhost:9000/tasks');
    const [selectedType, setSelectedType] = useState("Education");
    const [filteredTasks, setFilteredTasks] = useState([]);

    const handleClick = () => {
        const filtered = tasks.filter((task) => task.type === selectedType);
        setFilteredTasks(filtered);
    }

    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    }

    return (
        <div className="sort-tasks">
            <label>Sort By:</label>
            <select id="taskType" value={selectedType} onChange={handleSelectChange}>
                <option value="Education">Education</option>
                <option value="Sport">Sport</option>
                <option value="Spiritual">Spiritual</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Work">Work</option>
            </select>
            <button onClick={handleClick}>Sort</button>

            <div>
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                        <div className="sorted-task-list" key={task.id}>
                            <Link to = {`/tasks/${task.id}`}>
                            <h1>{task.body}</h1>
                            <p>Type {task.type}</p>
                            </Link>
                        </div>

                    ))
                ) : (
                    <p>No tasks found for the selected type.</p>
                )}
            </div>
        </div>
    );
}

export default SortTasks;