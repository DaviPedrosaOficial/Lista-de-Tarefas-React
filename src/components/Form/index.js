import React from "react";

import './Form.css';

import { FaPlus } from 'react-icons/fa'; // Importando o botão de adicionar tarefa

export default function Form (props) {
  return (
      <form onSubmit={props.handleSubmit} className='form'>

        <input
          onChange={props.handleChange}
          value={props.novaTarefa}
          type="text"
          placeholder="Digite uma tarefa" />

        <button type="submit">
          <FaPlus />
        </button>

      </form>
  );
}
