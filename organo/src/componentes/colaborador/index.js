import './colaborador.css'
import {AiFillCloseCircle} from 'react-icons/ai';


const Colaborador=(props)=>{

    return(
        <div className='colaborador' id={props.id}>
            <AiFillCloseCircle
                size={25} 
                className='deletar' 
                onClick={()=>props.aoDeletar(props.identificador)}
            />
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <div className='favoritar'>
                    {}
                </div>

            </div>
        </div>
    )

}



export default Colaborador;
