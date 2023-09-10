import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Formulario = ({aoColaboradorCadastrado, times, cadastrarTime}) => {

    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    let id = uuidv4()

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoColaboradorCadastrado({nome, cargo, imagem,time, id})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }
    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo 
                valor={nome} 
                aoAlterado={valor => setNome(valor)} 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome" />
                <Campo valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <Campo valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Envie sua foto" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} valor={time} aoAlterado={valor=>setTime(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={(evento)=>{
                evento.preventDefault()
                cadastrarTime({nomeTime, corTime})
                setCorTime('')
                setNomeTime('')
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo 
                valor={nomeTime} 
                aoAlterado={valor => setNomeTime(valor)} 
                obrigatorio 
                label="Nome" 
                placeholder="Digite o nome do time"
                />
                <Campo
                valor={corTime} 
                aoAlterado={valor => setCorTime(valor)} 
                obrigatorio
                label="Cor"
                type='color' 
                placeholder="Digite a cor do time" 
                />
                
                <Botao>Criar Time</Botao>
            </form>
        </section>


    )

}



export default Formulario;
