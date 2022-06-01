import { createContext, useState } from 'react'
import { useForm } from 'react-hook-form'

export const AppContext = createContext()

export function AppContextProvider({ children }) {
    const [entrar, setEntrar] = useState(true)
    const [report, setReport] = useState(false)
    const [relatorios, setRelatorios] = useState(false)
    const [invalido, setInvalido] = useState(false)
    const [card, setCard] = useState(false)
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [nomeJovem, setNomeJovem] = useState([{ nome: '' }])
    const { register, handleSubmit } = useForm()
    const dataAtual = new Date()
    const dia = dataAtual.getDate()
    const mes = dataAtual.getMonth() + 1
    const ano = dataAtual.getFullYear()
    const data = `${dia}/${mes}/${ano}`

    function Entrar(e) {
        if (usuario === 'fjubelavista' && senha === 'belavista1401') {
            setEntrar(false)
            setReport(true)
        } else if (
            usuario === 'relatoriofjubelavista' &&
            senha === 'belavista1401'
        ) {
            setEntrar(false)
            setRelatorios(true)
        } else {
            e.preventDefault()
            setInvalido(true)
        }
    }

    function Enviar(data) {
        fetch('http://localhost:3333/db', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))

        setReport(false)
        setCard(true)
    }

    function addJovem() {
        setNomeJovem([...nomeJovem, { nome: '' }])
    }

    return (
        <AppContext.Provider
            value={{
                entrar,
                report,
                relatorios,
                card,
                Entrar,
                usuario,
                setUsuario,
                senha,
                setSenha,
                invalido,
                register,
                handleSubmit,
                Enviar,
                nomeJovem,
                addJovem,
                data,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
