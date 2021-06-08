import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardPlaylist = styled.div`
  background-color: pink;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  margin-left: 5px;
`

const DivGeral = styled.div`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  padding: 10px;
`

const Body = styled.div`
  padding: 10px;
`

const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";


export default class App extends React.Component {
  state = {
    playlists: [],
    inputName: ""
  };

  componentDidMount() {
    this.getPlaylists();
  };

  handleName = (e) => {
    this.setState({inputName: e.target.value});
  };

  handleClickEnter = (e) => {
    if (e.keyCode === 13) {
      this.createPlaylist();
    }
  };

  createPlaylist = () => {
    const header = {
      headers: {
        Authorization: "tulio-dias-paiva"
      }
    };

    const body = {
      name: this.state.inputName
    };

    axios
      .post(BASE_URL, body, header)
      .then(() => {
        alert("Playlist criada com sucesso!");
        this.setState({inputName: ""});
        this.getPlaylists();
      })
      .catch((err) => {
        if (
          err.response.data.message === "There already is a playlist with a similiar name."
        ) {
          alert("Essa playlist já foi criada! Escolha outro nome");
        }
      });
    };

  getPlaylists = () => {
    const header = {
      headers: {
        Authorization: "tulio-dias-paiva"
      }
    };

    axios
      .get(BASE_URL, header)
      .then((res) => {
        this.setState({playlists: res.data.result.list});
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  getInfo = (id, name, artist,) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios.get(url, {
      headers: {
        Authorization: "tulio-dias-paiva"
      }
    })
    .then((res) => {
      alert(`${id}, ${name}, ${artist}`)
      console.log(res.data.result.list)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  };


  delPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "tulio-dias-paiva"
      }
    })
    .then((res) => {
      alert("Playlist deletada com sucesso!")
      this.getPlaylists()
    })
    .catch((err) => {
      alert("Ocorreu um erro, tente novamente.")
    })
  }; 


  render() {
    const playlistComponents = this.state.playlists.map((play)=> {
      return (
        <CardPlaylist key={play.id}>
          {play.name}
          <Button onClick={() => this.delPlaylist(play.id)}>X</Button>
        </CardPlaylist>
      );
    });

    return (
      <DivGeral>
        <Header>
          <h1>Labefy</h1>
          <input
            placeholder="Criar Playlist"
            onKeyDown={this.handleClickEnter}
            value={this.state.inputName}
            onChange={this.handleName}
          />
          <Button onClick={this.createPlaylist}>Enviar</Button>
        </Header>
        <hr/>
        <Body>
        <h2>Playlists:</h2>
        {playlistComponents}
        </Body>
      </DivGeral>
    );
  }
}


