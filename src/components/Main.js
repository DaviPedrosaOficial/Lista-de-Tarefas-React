import React, { Component } from 'react';

// Importando o CSS do componente para o Formulario
import { FaPlus } from 'react-icons/fa';

// Importando os botões de editar e excluir para as tarefas
import { FaEdit, FaTrash } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

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

        <form onSubmit={this.handleSubmit} className='form'>

          <input
            onChange={this.handleChange}
            value={novaTarefa}
            type="text"
            placeholder="Digite uma tarefa" />

          <button type="submit">
            <FaPlus />
          </button>

        </form>

        <ul className='tarefas'>
          {tarefas.map((tarefa, index) =>
            <li key={index}>
              {tarefa}
              <div>
                <button
                  onClick={() => this.handleEdit(index)}
                  type="button"
                  className='edit'>
                  <FaEdit />
                </button>
                <button
                  onClick={() => this.handleDelete(index)}
                  type="button"
                  className='delete'>
                  <FaTrash />
                </button>
              </div>

            </li>)}
        </ul>
      </div>
    );
  }
}
