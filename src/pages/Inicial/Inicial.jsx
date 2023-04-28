import './Inicial.css';
import Medica from '../../assets/medica.png';
import LogoAtensus from '../../assets/logo atensus.png';
import LogoGerenciamento from '../../assets/gerenciamento logo.png'

const Inicial = () => {
    return (
        <div className="Principal">
            <style>
                @import url('https://fonts.googleapis.com/css2?family= Montserrat :wght@500;600;900 & display=swap');
            </style>

            <div className="Cabecalho">
                <img src={LogoAtensus} className="Logo" />
            </div>

            <img src={Medica} className="Imagem_Principal" />

            <div className="Div_Textos">
                <div className="Textos">
                    <h1>Consulte e gerencie atendimentos <br />sem burocracia, fácil e rápido!</h1>
                    <p>O sistema que você precisa para se manter em dia!</p>
                    <button className="Botao_Comece_Ja">
                        <h1>Comece já</h1>
                    </button>
                </div>
                <img src={LogoGerenciamento} className="Logo_Div" />
            </div>

            <div className="Bolinha" />
            <div className="Bolinha1" />
            <div className="Bolinha2" />
            <div className="Bolinha3" />
            <div className="Bolinha4" />


        </div>
    )
}

export default Inicial;