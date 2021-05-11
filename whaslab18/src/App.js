import React from 'react';
import styled from 'styled-components';
import './App.css';

const MainContainner = styled.div`
border: 1px solid black;
width: 500px;
height: 100vh;
`
const ContainerComentarios = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
height: 95%;
padding: 0 1em;
`
const Formulario = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-evenly;
` 
const InputNome =styled.input`
width: 30%;
`
const InputTexto =styled.input`
width: 50%;
`
class App extends React.Component {
  state = {
    listaComentarios: [],

    novoComentario: {
      nome: "",
      texto: "",
    }
  }

  onChangeNome = (event) =>{
    this.setState({novoComentario: {...this.state.novoComentario, nome: event.target.value}}) 
  }

  onChangeTexto = (event) =>{
    this.setState({novoComentario: {...this.state.novoComentario, texto: event.target.value}}) 
  }
  
  onClickEnviar = (event) => {
    this.setState({
      listaComentarios: [...this.state.listaComentarios, this.state.novoComentario],
      novoComentario: {
        nome: "",
        texto: "",
      }  
    })
  }

  render(){

    const listagem = this.state.listaComentarios.map((mensagem) => {
      return (
        <p>'{mensagem.nome}: {mensagem.texto}</p>
      )
    })

  return (
    <MainContainner>
      <ContainerComentarios>
        {listagem}
      </ContainerComentarios>

      <Formulario>
        <InputNome placeholder="nome" value={this.state.novoComentario.nome} onChange={this.onChangeNome} ></InputNome>
        <InputTexto placeholder="comentário" value={this.state.novoComentario.texto} onChange={this.onChangeTexto} ></InputTexto>
        <button onClick={this.onClickEnviar} >Enviar</button>
      </Formulario>
    
    </MainContainner>
  );
}
}

export default App;