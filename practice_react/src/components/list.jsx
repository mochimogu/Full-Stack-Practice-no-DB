import Navigation from "./navbar";



export default function List() {



    return (
        <div>
            <Navigation/>
            <h2 className="text-center mt-3">List of Jokes</h2>
            <div className="container mt-4">
                <ol className="list-group list-group-numbered">
                    <li className="list-group-item">A list item
                        <div className="d-flex justify-content-md-end p-1">
                            <button type="submit">Details</button>
                            <button type="submit">Delete</button>
                        </div>
                    </li>
                    <li className="list-group-item">A list item
                        <div className="d-flex justify-content-md-end p-1">
                            <button type="submit">Details</button>
                            <button type="submit">Delete</button>
                        </div>
                    </li>                    
                    <li className="list-group-item">A list item
                        <div className="d-flex justify-content-md-end p-1">
                            <button type="submit">Details</button>
                            <button type="submit">Delete</button>
                        </div>
                    </li>                
                </ol>
            </div>
        </div>
    )


}




