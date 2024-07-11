import axios from "axios";
import { useState } from "react";

export default function Content() {

    const [searchResults, add] = useState([])
    const [hasData, set] = useState(false);
    const [error, setError] = useState(false);

    function search() {

        const searchWord = document.getElementById('searchWord').value;

        try {

            axios.get(`http://localhost:4321/search/${searchWord}`)
            .then((response) => {
                console.log(response.data);
                if(response.data != null) {
                    add((items) => [...items, searchResults]);
                    set(true)
                } else {
                    set(false)
                    setError(true)
                }
            }).catch((err) => {
                console.log(err);
            })


        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="container mt-5">
            <div className="row p-3">
                <div className="col p-2">
                    <div>
                        <h1>Search</h1>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" 
                                placeholder="Search for jokes" 
                                aria-label="Search for jokes" 
                                aria-describedby="button-addon2"
                                id="searchWord"
                            />
                            <button className="btn btn-outline-primary" 
                                type="button" 
                                id="button-addon2"
                                onClick={search}
                                >Search
                            </button>
                        </div>
                    </div>
                    <div className="mt-5">
                        {
                            hasData ? 
                            searchResults.map((items) => (
                                <div>
                                    <h2 key={items.index}>{items}</h2>
                                </div>
                            ))
                            : error ? 
                            <div>
                                <h2>Results Not Found</h2>
                            </div>
                            :
                            <div>
                            </div>

                        }
                    </div>
                </div>
            </div>
        </div>
    )

}


