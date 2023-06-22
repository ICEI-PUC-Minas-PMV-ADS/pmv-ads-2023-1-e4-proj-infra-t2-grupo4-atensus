import './Agendamento.css';
import LogoAtensus from '../../assets/logo atensus.png';
import { opcoesTriagem } from "./opcoes-consulta";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const Agendamento = () => {

    const navigate = useNavigate(); // Importe o useNavigate
    var location = useLocation();
  
    console.log(location)
 

    async function handleSubmit  (event)  {
        event.preventDefault();
        location.state.formData.descricao =  document.getElementById('Descricao').value
 
          fetch('https://localhost:7160/api/Pacientes/atualizar', {
            method: 'PUT',
            body: JSON.stringify(location.state.formData),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error(error);
          });
      };

    return (
        <div className="Container-Agendamento">
            <header className='Header-Agendamento'>
                <img src={LogoAtensus} className='Logo'></img>
            </header>
            <div className='Page-Title'>
                <h1>Agende sua Consulta!</h1>
            </div>
            <br />

            <form  onSubmit={ handleSubmit}>
                <div className='Input-Agendamento'>
                    <label htmlFor="Consulta">Escolha a especialidade</label>
                    <select name="Consulta" id="Consulta" className='Input-Field'>
                        {opcoesTriagem.map((opcao) => (
                            <option style={{color: 'black'}} key={opcao.value} value={opcao.value}>
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

                <button type="submit"  className="Button">Enviar</button>
 
                <button className="ButtonCancel">Cancelar</button>
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