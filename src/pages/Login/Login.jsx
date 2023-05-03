import './Login.css';
import LogoAtensus from '../../assets/logo atensus.png';
import Medica from '../../assets/medica.png';

const Login = () => {
    return (
        <><div className="Principal">

            <div className="Cabecalho">
                <img src={LogoAtensus} className="Logo" />
            </div>

            <img src={Medica} className="Imagem_Principal" />
              
            <div className='Div_Login'> 
                   <h3> Entre ou Cadastre-se</h3>
                    <form>
                        <div className='Inputs1'>
                    <div class="form">
      <input type="text" class="form-control"  placeholder="Digite seu CPF"></input>
      <label for="floatingInput"></label>
    </div></div>
    <div className='Inputs2'>
    <div className="Form">
      <input type="password" class="form-control"  placeholder="Digite a sua senha"></input>
      <label for="FloatingPassword"></label>
    </div>
    </div>
  <div class="mb-3form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Lembrar senha </label>
  </div>
  <button type="submit" class="btn btn-primary">Entrar</button>
</form>
<br/>
<h4> Não tem cadastro? Registre-se</h4>
</div>

        </div><div className="Bolinha" /><div className="Bolinha1" /><div className="Bolinha2" /><div className="Bolinha3"/><div className="Bolinha4" /></>


    )
}

export default Login;
