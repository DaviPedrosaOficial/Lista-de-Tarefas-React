import React, { Component } from 'react';

import Form from './Form';

import Ul from './Ul';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  componentDidMount() {                                               // Carregar as tarefas do localStorage quando o componente for montado, para verificar se existem tarefas no mesmo, e caso existam, elas serão inseridas em nosso estado, para que sejam exibidas na tela.
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas){
      return;
    }

    this.setState({
      tarefas: tarefas,
    })
  }

  componentDidUpdate (prevProps, prevState) {                         // Salvando as tarefas no LocalStorage, sempre que o estado da mesma for alterado, passando a serem armazenadas em formato JSON, para que possam ser recuperadas posteriormente.
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) {
      return;
    }

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }


  handleChange = (eventoOnChange) => {
    this.setState({
      novaTarefa: eventoOnChange.target.value,
    })
  }

  handleSubmit = (eventoOnSubmit) => {
    eventoOnSubmit.preventDefault();

    this.setState({
      tarefas: [...this.state.tarefas, this.state.novaTarefa],
      novaTarefa: '',
    });
  }

  handleEdit = (index) => {
    const tarefaEditada = prompt('Digite a nova tarefa:');

    if (tarefaEditada) {
      const { tarefas } = this.state;
      const tarefasAtualizadas = [...tarefas];
      tarefasAtualizadas[index] = tarefaEditada;

      this.setState({
        tarefas: tarefasAtualizadas,
      });
    }

  }

  handleDelete = (index) => {
    const { tarefas } = this.state;
    const tarefasAtualizadas = tarefas.filter((tarefa, i) => i !== index);

    this.setState({
      tarefas: tarefasAtualizadas,
    });
  }

  render() {

    const { novaTarefa, tarefas } = this.state;

    return (

      <div className='main'>

        <h1>Lista de Tarefas</h1>

        <Form                               // Passando as funções de manipulação de eventos e o valor da nova tarefa como props(propriedades) para o componente Form, para que ele possa utilizá-los para atualizar o estado do componente Main e adicionar novas tarefas à lista.
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          novaTarefa={novaTarefa}
        />

        <Ul                                 // Passando a lista de tarefas e as funções de manipulação de eventos para o componente Ul, para que ele possa exibir as tarefas e permitir a edição e exclusão das mesmas.
         tarefas={tarefas}
         handleEdit={this.handleEdit}
         handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
