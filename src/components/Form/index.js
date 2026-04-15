import React from "react";

import './Form.css';

import { FaPlus } from 'react-icons/fa'; // Importando o botão de adicionar tarefa

import PropTypes from 'prop-types'; // Importando a biblioteca PropTypes para validar as props (propriedades) do componente Form

export default function Form ({handleSubmit, handleChange, novaTarefa}) {
  return (
      <form onSubmit={handleSubmit} className='form'>

        <input
          onChange={handleChange}
          value={novaTarefa}
          type="text"
          placeholder="Digite uma tarefa" />

        <button type="submit">
          <FaPlus />
        </button>

      </form>
  );
}

Form.propTypes = {
  handleSubmit : PropTypes.func.isRequired, // Validando se a funcão handleSubmit é passada como prop e é obrigatória para o componente Form
  handleChange : PropTypes.func.isRequired, // Validando se a função handleChange é passada como prop e é obrigatória para o componente Form
  novaTarefa : PropTypes.string.isRequired, // Validando se a String novaTarefa é uma propriedade e obrigatória para o componente Form
}
