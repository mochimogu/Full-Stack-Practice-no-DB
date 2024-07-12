import axios from "axios";
import { useState } from "react";

export default function Content() {

    const [searchResults, add] = useState([])
    const [hasData, set] = useState(false);
    const [message, showMessage] = useState(false);

    const displayMessage = () => {
        if(message === false) {
            showMessage(true);
        } else {
            showMessage(false);
        }
    }

    function search() {

        const searchWord = document.getElementById('searchWord').value;

        try {

            axios.get(`http://localhost:4321/search/${searchWord}`)
            .then((response) => {
                console.log(response.data);
                if(response.data != null) {
                    for(let i = 0; i < response.data.length; i++) {
                        add((items) => [...items, response.data[i]]);
                    }
                    set(true)
                } else {
                    set(false)
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
                                <div className="border rounded-2 p-3 m-2">
                                    <p className="fs-4">{items.joke}</p>
                                    { message && <span>{items.answer}</span>}
                                    <div className="d-flex justify-content-md-end">
                                        <button key={items.index} type="button" onClick={displayMessage}>Show</button>
                                    </div>
                                </div>
                            ))
                            : 
                                <div>
                                    <h2>Results Not Found</h2>
                                </div>

                        }
                    </div>
                </div>
            </div>
        </div>
    )

}


