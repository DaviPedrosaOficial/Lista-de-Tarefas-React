import React from "react";

import './Ul.css';

import { FaEdit, FaTrash } from 'react-icons/fa'; // Importando os botões de editar e excluir para as tarefas

export default function Ul (props){
  return (
    <ul className='tarefas'>
      {props.tarefas.map((tarefa, index) =>
        <li key={index}>
          {tarefa}
          <div>
            <button
              onClick={() => props.handleEdit(index)}
              type="button"
              className='edit'>
              <FaEdit />
            </button>
            <button
              onClick={() => props.handleDelete(index)}
              type="button"
              className='delete'>
              <FaTrash />
            </button>
          </div>

        </li>)}
    </ul>
  )
}
