import { useContext } from 'react';
import logo from '../../assets/treina_recife_logo.png';
import { ContextoGlobal } from '../../contextos/ContextoGlobal';

function Cabecalho() {
    const { usuarioLogado } = useContext(ContextoGlobal);

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Treina Recife" width="250px" />
                </a>

                <p>Usuario: {usuarioLogado?.email}</p>

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                    <button className="btn btn-primary" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    );
}

export default Cabecalho;