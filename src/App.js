import logo from './logo.svg';
import './App.css';
import "./acg.js";


function App() {
  return (
    <div className="corpo">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#"><i className="bi bi-house-door"></i> Início</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="bi bi-shop"></i> Loja</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="bi bi-person"></i> Conta</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownMenu" role="button" data-bs-toggle="dropdown">
                            <i className="bi bi-gear"></i> Configurações
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-palette"></i> Aparência</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-shield-lock"></i> Segurança</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-box-arrow-right"></i> Sair</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    <section>
        <div className="portada">
            <div className="text-apr">
                <h1 className="titulo">A casa do <span>Gamer</span>  </h1>
                <p className="descricao">Bem-vindo ao Game Store! Aqui encontras os melhores jogos e acessórios.</p>
            </div>
            <div className="icon-apr">
                <i className="bi bi-controller icone comando"></i>
            </div>
        </div>
    </section>


      </div>
  );
}

export default App;
