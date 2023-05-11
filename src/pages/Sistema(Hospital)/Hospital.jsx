import './Hospital.css'
import LogoAtensus from '../../assets/logo atensus.png';
import { useEffect, useState } from 'react';
import api from '../../lib/axios';

const Hospital = () => {

    const [paciente, setPaciente] = useState([]);
   
    async function  buscarDadosPaciente() {
        const response = await api.get('/pacientes/645c2dfc937c38bb088c979d');
        setPaciente(response.data);
    }

    useEffect(() =>{

        buscarDadosPaciente();
        
    }, []);

    return (
        <div className="Principal2">
            <style>
                @import url('https://fonts.googleapis.com/css2?family= Montserrat :wght@500;600;900 & display=swap');
            </style>

            <div className="Cabecalho2">
                <img src={LogoAtensus} alt='Logo Atensus' className="Logo2" />
            </div>

            <div className="Gerenciamento">
                <h1>Gerenciamento de pacientes</h1>
            </div>

            <div className="Paciente">        
            <h1 className="Texto_Paciente">Paciente:</h1>
            <p className="Texto_Nome_Paciente">{paciente.nome}</p>
            <pre></pre>
            <h1 className="Texto_Paciente">CPF:</h1>
            <p className="Texto_CPF_Paciente">{paciente.cpf}</p>
                <form className="Especialidades" action="#">
                    <select name="Especialidades" id="lang">
                        <option value="Triagem">Triagem</option>
                        <option value="Oftalmologista">Oftalmologista</option>
                        <option value="Pediatria">Pediatria</option>
                        <option value="Dermatologista">Dermatologista</option>
                    </select>
                </form>
            </div>

            <div className="Texto_Inputs">
                <h1 className="Titulo_Texto_Inputs">Sintomas</h1>
                <input type='text' className="Input"></input>
                <h1>Observação</h1>
                <input type='text' className="Input"></input>
                <button className="btn_editar">Editar</button>
            </div>


            <h1 className="Texto_Agendamentos">Agendamentos</h1>
            <div className="Agendamentos">
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 1</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 2</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 3</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 4</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 5</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 6</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 7</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 8</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 9</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 10</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 1</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 2</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 3</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 4</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 5</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 6</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 7</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 8</button>
                <button className='btn_agendamentos'>Luiza Almeida ● Triagem ● Posição 9</button>

            </div>

            <div className="Bolinha" />
            <div className="Bolinha1" />
            <div className="Bolinha2" />
            <div className="Bolinha3" />
            <div className="Bolinha4" />

        </div>
    )
}

export default Hospital;
