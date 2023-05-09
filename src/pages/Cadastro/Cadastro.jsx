import './Cadastro.css';
import LogoAtensus from '../../assets/logo atensus.png';
import MedicaCadastro from '../../assets/medicaCadastro.png';

const Cadastro = () => {
    return (
        <div className="Container-Cadastro">
            <header className='Header-Cadastro'>
                <img src={LogoAtensus} className='Logo'></img>
            </header>
            <img src={MedicaCadastro} alt='Médica' className="Imagem_Principal3" />
            <forms>
                    <div className='Input-Cadastro'>
                        <label htmlFor="Nome">Nome Completo</label>
                        <input
                            type="text"
                            Name="Nome"
                            Id="Nome"
                            placeholder=" Nome Completo ">
                        </input>
                    </div>
                    <div className='Input-Cadastro'>
                        <label htmlFor="Idade">Idade</label>
                        <input
                            type="text"
                            Name="Idade"
                            Id="Idade"
                            placeholder=" Idade">
                        </input>
                    </div>
                    <div className='Input-Cadastro'>
                        <label htmlFor="CPF">CPF</label>
                        <input
                            type="text"
                            Name="CPF"
                            Id="CPF"
                            placeholder="CPF">
                        </input>
                    </div>
                    <div className='Input-Cadastro'>
                        <label htmlFor="Endereço">Endereço Completo</label>
                        <input
                            type="text"
                            Name="Endereço"
                            Id="Endereço"
                            placeholder=" Rua, Nº, Bairro, Cidade/Estado ">
                        </input>
                    </div>
                    <div className='Input-Cadastro'>
                        <label htmlFor="Senha">Cadastrar Senha</label>
                        <input
                            type="Password"
                            Name="Password"
                            Id="Password"
                            placeholder=" Cadastre-se a sua senha">
                        </input>
                    </div>
                    <button className="Button">Cadastrar</button>
                
            </forms>
            <div className="Bolinha" />
            <div className="Bolinha1" />
            <div className="Bolinha2" />
            <div className="Bolinha3" />
            <div className="Bolinha4" />
        </div>


    )
}

export default Cadastro;
