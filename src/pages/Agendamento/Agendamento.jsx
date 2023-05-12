import './Agendamento.css';
import LogoAtensus from '../../assets/logo atensus.png';
import { opcoesTriagem } from "./opcoes-consulta";

const Agendamento = () => {
    return (
        <div className="Container-Agendamento">
            <header className='Header-Agendamento'>
                <img src={LogoAtensus} className='Logo'></img>
            </header>
            <div className='Page-Title'>
                <h1>Agende sua Consulta!</h1>
            </div>
            <br />
            <forms>
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
                    <label htmlFor="Sintomas">Descreva seus sintomas</label>
                    <textarea
                        type="text"
                        Name="Sintomas"
                        Id="Sintomas"
                        placeholder=" Sintomas">
                    </textarea>
                </div>

                <div className='Input-Agendamento'>
                    <label htmlFor="Observacoes">Observações</label>
                    <textarea
                        type="text"
                        Name="Observacoes"
                        Id="Observacoes"
                        placeholder=" Observacoes">
                    </textarea>
                </div>

                <button className="Button">Enviar</button>
                <button className="ButtonCancel">Cancelar</button>


            </forms>
            <div className="Bolinha" />
            <div className="Bolinha1" />
            <div className="Bolinha2" />
            <div className="Bolinha3" />
            <div className="Bolinha4" />
        </div>


    )
}

export default Agendamento;
