import { useEffect, useState } from "react";
import Navigation from "./navbar";
import axios from "axios";



export default function List() {

    const [jokeData, add] = useState([])
    const [hasData, set] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            try {
                axios.get("http://localhost:4321/getList")
                .then(res => {
                    console.log(res.data.backendDatabase)
                    for(let i = 0; i < res.data.backendDatabase.length; i++) {
                        add((items) => [...items, res.data.backendDatabase[i]]);
                    }
                    set(true)
                }).catch(err => {
                    console.log(err)
                })
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
    }, []);

    
    return (
        <div>
            <Navigation/>
            <h2 className="text-center mt-3">List of Jokes</h2>
            <div className="container mt-4">
                <ol className="list-group list-group-numbered">
                    {
                        hasData ?                         
                            jokeData.map((items) => (
                                <li className="list-group-item">{items.joke}
                                    <div className="d-flex justify-content-md-end p-1">
                                        <button type="submit" key={items.index}>Details</button>
                                        <button type="submit" key={items.index}>Delete</button>
                                    </div>
                                </li>
                            )) :
                            <li></li>
                    }            
                </ol>
            </div>
        </div>
    )


}




