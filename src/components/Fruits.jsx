
/* Using Props to Send Array */
// export default function Fruits({fruit}) {

//     return <li>Fruit Name: {fruit}</li>

// }


/* Using Props to Send Array of Objects */
// export default function Fruits(props) {

//     return <li>Fruit Name: {props.fruit.name}, Quantity: {props.fruit.quantity}</li>

// }


/* Using Destruction to Send Array of Objects */
// export default function Fruits({fruit}) {

//     return <li>Fruit Name: {fruit.name}, Quantity: {fruit.quantity}</li>

// }


/* Using Destruction to Send Array of Objects */
export default function Fruits({fruit: {name, quantity}}) {

    return <li>Fruit Name: {name}, Quantity: {quantity}</li>

}