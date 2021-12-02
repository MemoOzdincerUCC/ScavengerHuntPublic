
import { useState } from "react";
function Counters() {
  const [Riddles, setRiddles] = useState(0);
    const [Trivia, setTrivia] = useState(0);
    const [Directions, setDirections] = useState(0);
    const [Problems, setProblems] = useState(0);
    const [Counter, setCounter] = useState(0);


    return (
        <div>
            <h3 className='text-primary px-2 py-2'>Choose what type of puzzles you'd like to solve. <br/> The maximum total number of puzzles is 6.</h3>
    <div className="App">
    <header className="Title text-center py-3">
    </header>
  </div>
        <div className="Counters px-2">
            <h1 className="text-primary">Puzzle Menu:</h1>
            <div className="Counters-container">
                <ul className="list-group">
                <li className="list-group-item">
                <div className="Counters-item">
                    <h2 className="text-secondary">Riddles:</h2>
                    <div className="Counters-item-container">
                        <div className="Counters-item-count">
                            <h3 className="text-primary mx-1">{Riddles}
                            </h3></div>
                        <div className="Counters-item-buttons py-2">
                            <button className="btn btn-primary mxr-2" onClick={() => {
                                if (Counter < 6) {
                                    setRiddles(Riddles + 1)
                                    setCounter(Counter + 1)
                                }
                            }
                            }>+</button>
                            <button className="btn btn-primary mx-2" onClick={() => {

                                if (Riddles > 0) {
                                    setRiddles(Riddles - 1)
                                    setCounter(Counter - 1)
                                }
                            }
                            }>-</button>
                        </div>
                    </div>
                </div>
                </li>
                <div className="Counters-item">
                <li className="list-group-item">
                    <h2 className="text-secondary">Trivia:</h2>
                    <div className="Counters-item-container">
                        <div className="Counters-item-count"><h3 className="text-primary mx-1">
                            {Trivia}</h3>
                            </div>
                        <div className="Counters-item-buttons py-2">
                            <button className="btn btn-primary mxr-2" onClick={() => {
                                if (Counter < 6) {
                                    setTrivia(Trivia + 1)
                                    setCounter(Counter + 1)
                                }
                            }
                            }>+</button>
                            <button className="btn btn-primary mx-2" onClick={() => {

                                if (Trivia > 0) {
                                    setTrivia(Trivia - 1)
                                    setCounter(Counter - 1)
                                }
                            }
                            }>-</button>
                        </div>
                    </div>
                    </li>
                </div>
                <div className="Counters-item">
                <li className="list-group-item">
                    <h2 className="text-secondary">Directions:</h2>
                    <div className="Counters-item-container">
                        <div className="Counters-item-count">
                            <h3 className="text-primary mx-1">{Directions}</h3></div>
                        <div className="Counters-item-buttons py-2">
                            <button className="btn btn-primary mxr-2" onClick={() => {
                                if (Counter < 6) {
                                    setDirections(Directions + 1)
                                    setCounter(Counter + 1)
                                }
                            }
                            }>+</button>
                            <button className="btn btn-primary mx-2" onClick={() => {

                                if (Directions > 0) {
                                    setDirections(Directions - 1)
                                    setCounter(Counter - 1)
                                }
                            }
                            }>-</button>
                        </div>
                    </div>
                    </li>
                </div>
                <div className="Counters-item">
                <li className="list-group-item">
                    <h2 className="text-secondary">Problems:</h2>
                    <div className="Counters-item-container">
                        <div className="Counters-item-count">
                            <h3 className="text-primary mx-1">{Problems}</h3>
                            </div>
                        <div className="Counters-item-buttons py-2">
                            <button className="btn btn-primary mxr-2" onClick={() => {
                                if (Counter < 6) {
                                    setProblems(Problems + 1)
                                    setCounter(Counter + 1)
                                }
                            }
                            }>+</button>
                            <button className="btn btn-primary mx-2" onClick={() => {

                                if (Problems > 0) {
                                    setProblems(Problems - 1)
                                    setCounter(Counter - 1)
                                }
                            }
                            }>-</button>

                        </div>
                        </div>
                        </li>
                        </div>
                </ul>
                        </div>
                        </div>
                        </div>
    )
                        }
export default Counters;