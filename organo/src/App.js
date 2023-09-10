import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Form';
import { useState } from 'react'
import Time from './componentes/Time';
import Rodape from './componentes/rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times,setTimes] = useState(
    [{
      id:uuidv4(),
      nome:'Programação',
      cor:'#57c278',
      
    },
    {
      id:uuidv4(),
      nome:'Front-End',
      cor:'#82CFFA',
      
    },
    {
      id:uuidv4(),
      nome:'Data Science',
      cor:'#A6D157',
      
    },
    {
      id:uuidv4(),
      nome:'Devops',
      cor:'#E06B69',
      
    },
    {
      id:uuidv4(),
      nome:'UX e Design',
      cor:'#DB6EBF',
      
    },
    {
      id:uuidv4(),
      nome:'Mobile',
      cor:'#FFBA05',
      
    },
    {
      id:uuidv4(),
      nome:'Inovação e Gestão',
      cor:'#FF8A29',
      
    }]
  )

  // const inicial=[
  //   {
  //     id:uuidv4(),
  //     nome:'Paulo Silveira',
  //     cargo: 'Hipster e CEO',
  //     imagem:'',
  //     time: times.map
  //   }
  // ]


  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado =(colaborador)=>{
      console.log(colaborador)
      setColaboradores([...colaboradores,colaborador])}

  function deletarColab(idColab){
    console.log(colaboradores.map(colaborador=>colaborador.identificador))
    setColaboradores(colaboradores.filter(colaborador=>colaborador.id !==idColab ))
  }    

  function mudaCorTime(cor,id){
    setTimes(times.map(time=>{
      if(time.id===id){
        time.cor = cor
      }
      return time
    }))
  }


  function cadastrarTime(novoTime) {
    setTimes([...times,{...novoTime, id:uuidv4()}])
    console.log('Retorno da função', novoTime)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      cadastrarTime={cadastrarTime}
      times={times.map(time => time.nome)} 
      aoColaboradorCadastrado={colaborador=>aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time=> <Time 
                            idColab={colaboradores.map(colaborador=>colaborador.id)}
                            key={time.nome} 
                            nome={time.nome} 
                            cor={time.cor}
                            corBG={time.cor}
                            colaboradores={colaboradores.filter(colaborador=>colaborador.time===time.nome)}
                            aoDeletar={deletarColab}
                            mudarCor={mudaCorTime}/>)}
      <Rodape />                      
    </div>
  );
}

export default App;
