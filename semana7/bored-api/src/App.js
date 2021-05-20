import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivGeral = styled.div`
` 

const Header = styled.div`
  background-color: lightpink;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Body = styled.div`
  background-color: lightblue;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class App extends React.Component {
  state = {
    activity: {}  
  }

  getActivity = () => {
    axios.get("https://www.boredapi.com/api/activity/")
      .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      })
  };

  render(){
    const {activity, type, participants, price} = this.state.activity

    return (
      <DivGeral>
        <Header>
        <h2>Are you bored?</h2>
        <button onClick={this.getActivity}>Click here!</button>
        </Header>
        <hr/>
        <Body>
        <h3>Get motivated!</h3>
        <p>Activity: {activity}</p>
        <p>Type: {type}</p>
        <p>Participants: {participants}</p>
        <p>Price: ${price}</p>
        </Body>
      </DivGeral>
    )
  }
}


/* <hr/>
<h3>Activity</h3>
<p>Name: {activity}</p>
<p>Type: {type}</p>
<p>Participants: {participants}</p>
<p>Price: ${price}</p> */