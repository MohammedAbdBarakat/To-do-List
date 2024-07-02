import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error('The data requested not found');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            }) 
    }, 1000);
    },[url]) //this is a dependency .. it triggers the use effect function when the variable in the array changed
    return {data,isPending,error}
}

export default useFetch;