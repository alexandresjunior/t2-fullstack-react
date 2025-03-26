import { createContext, useState } from "react";

export const ContextoGlobal = createContext({});

export const GlobalProvider = ({ children }) => {
    const [usuarioLogado, setUsuarioLogado] = useState({});

    const login = (dadosUsuario) => {
        if (dadosUsuario?.manterConectado) {
            localStorage.setItem("usuarioLogado", JSON.stringify(dadosUsuario));
        }

        sessionStorage.setItem("usuarioLogado", JSON.stringify(dadosUsuario));
        setUsuarioLogado(dadosUsuario);
    }

    const logout = () => {
        localStorage.removeItem("usuarioLogado");
        sessionStorage.removeItem("usuarioLogado");
    }

    return (
        <ContextoGlobal.Provider value={{ usuarioLogado, login, logout }}>
            {children}
        </ContextoGlobal.Provider>
    )
}