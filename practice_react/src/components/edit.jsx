import axios from "axios";
import Navigation from "./navbar";
import { useEffect, useState } from "react";




export default function Edit() {

    const [joke, setJoke] = useState("");
    const [answer, setAnswer] = useState("");

    function sendData() {

        try {

            // const joke = document.getElementById('joke').value;
            // const answer = document.getElementById('answer').value;
            console.log(joke);
            console.log(answer);

            const sending = {
                'joke' : joke,
                'answer' : answer
            }

            axios.post("http://localhost:4321/addToList", sending)
            .then((response) => {
                console.log(response.data);
            }).catch((err) => {
                console.log(err);
            })


        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <Navigation/>
            <div className="container mt-5">
                <div className="row p-3">
                    <div className="col p-2">
                        <h2 className="mb-3">Jokes</h2>
                        <div className="input-group mt-2">
                            <input id="joke" className="rounded-1 w-100"
                                type="text"
                                placeholder="Enter Joke Here"
                                onChange={(e) => setJoke(e.target.value)}
                            />
                        </div>
                        <div className="input-group mt-4 mb-4">
                            <input id="answer" className="rounded-1 w-100"
                                type="text"
                                placeholder="Enter Answer Here"
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="submit" onClick={sendData}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}


