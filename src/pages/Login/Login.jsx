import './Login.css';
import LogoAtensus from '../../assets/logo atensus.png';


const Login = () => {
    return (
<div className="Container">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
</style>

<header className='Header'>
  <img src={LogoAtensus} className='Logo'></img>
</header>
<h3> Entre ou Cadastre-se</h3>
<forms>
  <div className="InputContainer">
    <label htmlFor="CPF">CPF</label>
    <input 
        type="text" 
        Name="CPF" 
        Id="CPF" 
        placeholder=" Ex: 856.457.857-86">
    </input>
  </div>
  <div className="InputContainer">
    <label htmlFor="Password">Digite a sua Senha</label>
    <input 
        type="Password" 
        Name="Password" 
        Id="Password" 
        placeholder="**********">
    </input>
  </div>
  <button className="Button">Entrar</button>
  <div className="footer"> 
  <p> Não tem Cadastro? Registre-se aqui</p>
  </div>
  
</forms>
<div className="Bolinha" />
<div className="Bolinha1" />
<div className="Bolinha2" />
<div className="Bolinha3" />
<div className="Bolinha4" />

</div>


    )
}

export default Login;
