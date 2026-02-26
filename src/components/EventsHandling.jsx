import React from 'react'

export default function EventsHandling() {

  /* Event Handling Example */
  function handleClick() {
    alert("Button Clicked!")
  }

  const handleClick2 = () =>{
    alert("Second Button Clicked!")
  }

  const handleClick3 = (num) => {
    const result = num * 2;
    alert(`The result is: ${result}`)
  }

    return (
        <>

      <button style={{borderColor:"green"}} onClick={handleClick}> Click Me
        </button> &nbsp;

      <button style={{borderColor: "red"}} onClick={handleClick2}> Click Me Too!
        </button> &nbsp;

      <button style={{borderColor: "violet"}} 
               onClick={() => alert('Clicked from Inside Button')}> Button 3
               </button> &nbsp;
      
   
      {/* 
         // If you want to pass arguments to the event handler, 
       //      you can use an arrow function to call the handler with the desired arguments.
        //     Which will trigger on Page load 
      
      <button style={{borderColor: "blue"}} 
               onClick={handleClick3(10)}> Button 4
               </button>   */}
      
       {/* To prevent the function from being called on page load, 
           you can wrap the function call in an anonymous function (or arrow function) like this:  */}
      <button style={{borderColor: "blue"}} 
               onClick={() => handleClick3(10)}> Button 4
               </button> 

        </>
    )
}
