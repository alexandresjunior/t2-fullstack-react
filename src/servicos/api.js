import axios from "axios";

export const api = axios.create({
    baseURL: "https://viacep.com.br/"
});

export const obterEndereco = async (cep, setLogradouro, setBairro, setCidade, setUf) => {
    await api.get(`ws/${cep}/json`)
        .then((resposta) => {
            const endereco = resposta.data;

            setLogradouro(endereco?.logradouro);
            setBairro(endereco?.bairro);
            setCidade(endereco?.localidade);
            setUf(endereco?.uf);
        })
        .catch((erro) => {
            console.error("Erro ao chamar API: ", erro);
        });
}