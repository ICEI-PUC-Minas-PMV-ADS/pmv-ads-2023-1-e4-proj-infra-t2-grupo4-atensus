import { Link } from 'react-router-dom';
import './sobrenos.css';
import LogoAtensus from '../../assets/logo atensus.png';


const Inicial = () => {

    return (
        <div className="Principal">
            <style>
                @import url('https://fonts.googleapis.com/css2?family= Montserrat :wght@500;600;900 & display=swap');
            </style>

            <div className="Cabecalho">
                <img src={LogoAtensus} alt='Logo Atensus' className="Logo" />
            </div>


            <div className="Div_Textos">
                <div className="Textos">
                    <p>Sobre Nós</p>
                    <h1 className="Titulo_Textos">Nossa proposta é agilizar as marcações de consultas  <br /> reduzir as filas de hospitais públicos <br /> diminuir o tempo de espera </h1>

                    <Link to='/Login'><button className="Saiba_Mais_">
                        <h1>Saiba mais</h1>
                    </button> </Link>

                    <Link to='/Login'><button className="Saiba_Mais_">
                        <h1>Links Sobre Saúde</h1>
                    </button> </Link>

                </div>
            </div>

            <div className="Bolinha" />
            <div className="Bolinha1" />
            <div className="Bolinha2" />
            <div className="Bolinha3" />
            <div className="Bolinha4" />


        </div>
    )
}

export default sobrenos;
