import { useState } from 'react'

function Props() {

  const person1 = "John Doe";
  const person1Age = 25;
  const person1Professional = "Software Engineer";

  const person2 = "Jane Smith";
  const person2Age = 30;
  const person2Professional = "Web Developer";

  const player1 = "Brendon McCullum";
  const player1Professional = "Cricketer";
  const player1Country = "New Zealand";

  const player2 = "Christiany Ronaldo";
  const player2Professional = "Footballer";
  const player2Country = "Portugal";


  return (
    <> 
      <h1> React Props </h1>
      <Person person={person1} age={person1Age} professional={person1Professional}></Person>
      <Person person={person2} age={person2Age} professional={person2Professional}></Person>
      <Player name={player1} professional={player1Professional} country={player1Country}></Player>
      <Player name={player2} professional={player2Professional} country={player2Country}></Player>
    </>
  )
}

//   Props Example 
function Person(props) {

  const personStyle = {
    border: '1px solid #3edc7a',
    padding: '2em'
  }

  const professionalStyle = {
    color: '#f72828',
  }

  return (
    <div style={personStyle}>
      <h2> I'm {props.person} and my age is {props.age}</h2>
        <p> I'm a &nbsp;
                <b style={professionalStyle}>{props.professional}</b>
        </p>
    </div>
  )
}

//   Props with Destructuring
function Player({name, professional, country}) {

  const playerStyle = {
    border: '1px solid #de334a',
    padding: '2em'
  }

  const professionalStyle = {
    color: '#f72828',
  }

  const countryStyle = {
    color: '#3edc7a',
  }

  return (
    <div style={playerStyle}>
      <h2> Player: {name}</h2>
        <p> Professinal: &nbsp;
                <b style={professionalStyle}>{professional}</b>
        </p>
        <p> Country: &nbsp;
                <b style={countryStyle}>{country}</b>
        </p>
    </div>
  )
}



export default Props
