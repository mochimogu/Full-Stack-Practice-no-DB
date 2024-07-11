

export default function Content() {

    return (
        <div className="container mt-5">
            <div className="row p-3">
                <div className="col p-2">
                    <div>
                        <h1>Search</h1>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" 
                                placeholder="Search for jokes" 
                                aria-label="Search for jokes" 
                                aria-describedby="button-addon2"
                            />
                            <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


