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



// import React, { useState } from "react";

// export default function Agendar() {
//   const [selected, setSelected] = useState("");
//   const [Descricao, setDescricao] = useState("");

//   const data = [
//     { key: '1', value: 'Triagem' },
//     { key: '2', value: 'Odontologia' },
//     { key: '3', value: 'Ortopedia' },
//     { key: '4', value: 'Dermatologia' },
//     { key: '5', value: 'Oftalmologia' },
//   ];

//   const handleUpdate = () => {
//     const route = { params: { descricao: Descricao } };

//     fetch('https://localhost:7160/api/Pacientes/atualizar', {
//       method: 'PUT',
//       body: JSON.stringify(route.params),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         alert('Descrição enviada com sucesso!');
//         //navigation.navigate('FILA');
//       })
//       .catch(error => {
//         alert('Erro ao alterar o paciente.');
//         console.error(error);
//       });
//   };

//   return (
//     <div className="containerAgendar">
//       <h1 className="textoPrincipal">Agende sua consulta!</h1>
//       <p className="subtituloPrincipal">Responda a ficha com o que deseja.</p>
//       <label className="textoEspecialidade">Escolha a especialidade</label>
//       <select
//         className="selectList"
//         value={selected}
//         onChange={(e) => setSelected(e.target.value)}
//       >
//         {data.map(option => (
//           <option key={option.key} value={option.value}>
//             {option.value}
//           </option>
//         ))}
//       </select>
//       <div className="textoPrincipal">
//         <label className="label">Descreva seus sintomas</label>
//         <textarea
//           className="textInputSintomas"
//           placeholder="Descreva seus sintomas"
//           value={Descricao}
//           onChange={(e) => setDescricao(e.target.value)}
//         />
//       </div>
//       <button className="botaoEnviar" onClick={handleUpdate}>
//         Enviar
//       </button>
//       <button
//         className="botaoFila"
//         onClick={() => navigation.navigate('Fila', { screen: 'Fila' })}
//       >
//         Ir para fila
//       </button>
//       <button
//         className="botaoCancelar"
//         onClick={() => navigation.navigate('TelaInicial', { screen: 'TelaInicial' })}
//       >
//         Cancelar
//       </button>
//     </div>
//   );
// }
