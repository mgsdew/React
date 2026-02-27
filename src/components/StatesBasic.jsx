import { useState } from "react"

/* Count Numbers */
// export default function Counter(){

//     const [count, setCount] = useState(0)

//     const handleAdd = () => {
//         const newCount = count + 1;
//         setCount(newCount);
//     }

//     const counterStyle = {
//         border: '2px solid yellow'
//     }

//     return ( 
//         <div style={counterStyle}>
//             <h3>Count: {count} </h3> 
//             <button onClick={handleAdd}>Add</button>
//         </div>
//     )

// }


/* Exploring More States */
export default function Batsman(){

    const [runs, setRuns] = useState(0);
    const [fours, setFours] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleRuns = (run) => { 
        const updateRuns = runs + run;
        setRuns(updateRuns);
        if(run === 4){
            setFours(fours + 1);
        }
        if(run === 6){
            setSixes(sixes + 1);
        }
    }

    return(
        <div>
        <h3> Cricket Match</h3>
        {
            runs >= 50 && <p> Your score: 50 </p>
        }
        <p>Score: {runs} </p>
        <p>Fours: {fours}, Sixes: {sixes} </p>
        <button onClick={() => handleRuns(1)}>Single</button>
        <button onClick={() => handleRuns(2)}>Double</button>
        <button onClick={() => handleRuns(3)}>Triple</button>
        <button onClick={() => handleRuns(4)}>Four</button>
        <button onClick={() => handleRuns(6)}>Six</button>

        </div>
    )
}