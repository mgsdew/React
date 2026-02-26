import '../App.css'

/* Inside Function Component */

// function ToDo({task, isDone, time = 0}) {

// const todoDoneStyle = {
//     backgroundColor: 'lightgreen',
//     padding: '10px',
//     margin: '10px',
//     borderRadius: '5px'
// }

//     if(isDone === true) {
//         return (
//             <div style={todoDoneStyle}>
//                 <h1>ToDo List: {task}</h1>
//                 <p>Is Done: Yes</p>
//                 <p>Time Taken: {time} hours</p>
//             </div>
//         )
//     } else {    
//                 return (
//                 <div style={todoDoneStyle}>
//                     <h1>ToDo List: {task}</h1>
//                     <p>Is Done: <b style={{color: 'red'}}>No</b></p>
//                     <p>Time Taken: {time} hours</p>
//                 </div>
//             )
//     }

// }

// export default ToDo



/* Direct Return Component */

// export default function ToDo({task, isDone}) {

// const todoDoneStyle = {
//     backgroundColor: 'lightgreen',
//     padding: '10px',
//     margin: '10px',
//     borderRadius: '5px'
// }

// if(isDone === true) {
//     return (
//         <div style={todoDoneStyle}>
//             <h1>ToDo List: {task}</h1>
//             <p>Is Done: Yes</p>
//         </div>
//     )
// } else {    
//             return (
//             <div style={todoDoneStyle}>
//                 <h1>ToDo List: {task}</h1>
//                 <p>Is Done: <b style={{color: 'red'}}>No</b></p>
//             </div>
//         )
// }
    
// }


/* Condtional Rendering with Variable */

// export default function ToDo({task, isDone, time = 0}) {    
//     const todoDoneStyle = {
//         backgroundColor: 'lightgreen',
//         padding: '10px',
//         margin: '10px',
//         borderRadius: '5px'
//     }

//     let listItem;

//     if(isDone === true) {
//         listItem = <><li>Is Done: Yes</li><li>Time Taken: {time} hours</li></>
//     } else {
//         listItem = <><li>Is Done: <b style={{ color: 'red' }}>No</b></li><li>Time Taken: {time} hours</li></>
//     }

//     return (
//         <div style={todoDoneStyle}>
//             <h1>ToDo List: {task}</h1>
//             <ul>
//                 {listItem}
//             </ul>
//         </div>
//     )
// }


/* Conditional Rendering with Ternary Operator */

export default function ToDo({task, isDone, time = 0}) {    
    const todoDoneStyle = {
        backgroundColor: 'lightgreen',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px'
    }

    let listItem;

    listItem = isDone ? (
        <><li>Is Done: Yes</li><li>Time Taken: {time} hours</li></>
    ) : (
        <><li>Is Done: <b style={{ color: 'red' }}>No</b></li><li>Time Taken: {time} hours</li></>
    )

    return (
        <div style={todoDoneStyle}>
            <h1>ToDo List: {task}</h1>
            <ul>
                {listItem}
            </ul>
        </div>
    )
}