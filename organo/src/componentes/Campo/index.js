import './Campo.css'

const Campo = ({label, obrigatorio, aoAlterado, valor, placeholder, type='text'})=>{
    
    const placeholderModificado = `${placeholder}...`
    
    
    
    
    const aoDigitado =(evento) =>{
        aoAlterado(evento.target.value)

    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value ={valor} onChange={aoDigitado} placeholder={placeholderModificado} required={obrigatorio}/>
      
        </div>
    )
        
    

}




export default Campo;
