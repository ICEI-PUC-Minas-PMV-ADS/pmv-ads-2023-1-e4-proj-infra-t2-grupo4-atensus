import './Agendamento.css';
import LogoAtensus from '../../assets/logo atensus.png';
import { opcoesTriagem } from "./opcoes-consulta";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Agendamento = () => {

  const navigate = useNavigate(); // Importe o useNavigate
  var location = useLocation();

  const handleFila = (event) => {
    navigate('/Fila')
  };

  const handleCancelar = (event) => {
    navigate('/Login')
  };

  console.log(location.state.atualizeiDadosCadastro)

  async function handleSubmit(event) {
    event.preventDefault();
    var obj;

    if (location.state.atualizeiDadosCadastro) {
      obj = location.state.formData
      obj.descricao = document.getElementById('Descricao').value
    } else {
      obj = location.state.objetoRota
      obj.descricao = document.getElementById('Descricao').value
    }

    fetch('https://localhost:7160/api/Pacientes/atualizar', {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
          toastId.current = toast.success('Descrição de sitomas cadastrados com sucesso.' );
      })
      .catch(error => {
          toastId.current = toast.success('Ocorreu um erro ao cadastrar o sintomas.' );
        console.error(error);
      });
  };

  return (
    <div className="Container-Agendamento">
      <header className='Header-Agendamento'>
        <img src={LogoAtensus} className='Logo'></img>

        <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      </header>
      <div className='Page-Title'>
        <h1>Agende sua Consulta!</h1>
      </div>
      <br />

      <form onSubmit={handleSubmit}>
        <div className='Input-Agendamento'>
          <label htmlFor="Consulta">Escolha a especialidade</label>
          <select name="Consulta" id="Consulta" className='Input-Field'>
            {opcoesTriagem.map((opcao) => (
              <option style={{ color: 'black' }} key={opcao.value} value={opcao.value}>
                {opcao.name}
              </option>
            ))}
          </select>
        </div>

        <div className='Input-Agendamento'>
          <label htmlFor="Descricao">Descreva seus sintomas</label>
          <textarea
            type="text"
            Name="Descricao"
            Id="Descricao"
            placeholder=" Descricao">
          </textarea>
        </div>

        <button type="submit" className="Button">Enviar</button>
        <button type="submit" className="Button" onClick={handleFila} >Fila</button>

        <button className="ButtonCancel" onClick={handleCancelar} >Cancelar</button>

      </form>

      <div className="Bolinha" />
      <div className="Bolinha1" />
      <div className="Bolinha2" />
      <div className="Bolinha3" />
      <div className="Bolinha4" />
    </div>
  )
}

export default Agendamento;