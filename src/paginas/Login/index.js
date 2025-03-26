import { useContext, useState } from "react";
import logo from "../../assets/treina_recife_logo.png";
import { useNavigate } from "react-router-dom";
import { ContextoGlobal } from "../../contextos/ContextoGlobal";

function Login() {
    const navigate = useNavigate();

    const { login } = useContext(ContextoGlobal);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [manterConectado, setManterConectado] = useState(true);

    const efetuarLogin = (e) => {
        e.preventDefault();

        const dadosUsuario = { email, senha, manterConectado };

        // Chamada a API de autenticacao

        login(dadosUsuario);

        navigate("/cadastro");
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center">
                <img className="my-3" src={logo} alt="Treina Recife" width="200px" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit={efetuarLogin}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">Nunca compartilhe seu e-mail com ninguem.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="exampleCheck1" 
                            checked={manterConectado}
                            onChange={() => setManterConectado(!manterConectado)}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Manter conectado</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;