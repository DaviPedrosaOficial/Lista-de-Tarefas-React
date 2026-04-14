import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  inputTarefa = (eventoOnChange) => {
    this.setState({
      novaTarefa: eventoOnChange.target.value,
    })
  }

  adicionaTarefa = (eventoOnSubmit) => {
    eventoOnSubmit.preventDefault();

    this.setState({
      tarefas: [...this.state.tarefas, this.state.novaTarefa],
      novaTarefa: '',
    });
  }

  render() {
    return (
      <div className='main'>
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.adicionaTarefa}>
          <input onChange={this.inputTarefa} value={this.state.novaTarefa} type="text" placeholder="Digite uma tarefa" />
          <button type="submit">Adicionar</button>
        </form>

        <ul className='tarefas'>
          {this.state.tarefas.map((tarefas, index) =>
            <li key={index}>{tarefas}</li>)}
        </ul>
      </div>
    );
  }
}
