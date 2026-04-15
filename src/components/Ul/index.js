import React from "react";

import './Ul.css';

import { FaEdit, FaTrash } from 'react-icons/fa'; // Importando os botões de editar e excluir para as tarefas

import PropTypes from 'prop-types'; // Importando a biblioteca PropTypes para validar as props (propriedades) do componente Ul

export default function Ul ({tarefas, handleEdit, handleDelete}) {
  return (
    <ul className='tarefas'>
      {tarefas.map((tarefa, index) =>
        <li key={index}>
          {tarefa}
          <div>
            <button
              onClick={() => handleEdit(index)}
              type="button"
              className='edit'>
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(index)}
              type="button"
              className='delete'>
              <FaTrash />
            </button>
          </div>

        </li>)}
    </ul>
  )
}

Ul.propTypes = {
  tarefas: PropTypes.arrayOf(PropTypes.string).isRequired, // Validando se a prop tarefas é um array de strings e é obrigatória para o componente Ul
  handleEdit: PropTypes.func.isRequired, // Validando se a função handleEdit é passada como prop e é obrigatória para o componente Ul
  handleDelete: PropTypes.func.isRequired, // Validando se a função handleDelete é passada como prop e é obrigatória para o componente Ul
}
