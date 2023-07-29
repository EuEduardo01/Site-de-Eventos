import { Header } from '../../components/Header'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { CaretCircleLeft } from 'phosphor-react'
import './style.css'
import { useContext, useEffect } from 'react'
import { EventContext } from '../../contexts/EventContext'
export function EventDetails (){
    const {id} = useParams()
    const {eventos, handleEditeEvent} = useContext(EventContext)
    const navigate = useNavigate()

    const evento =  eventos.find(evento => evento.id === Number(id))

    function editEvent(dados){
        const reader = new FileReader()
        reader.readAsDataURL(dados.img[0])

        reader.onload = () => {
            handleEditeEvent(id,{
                nome: dados.nome,
                dataInicio: dados.dataInicio,
                dataFinal: dados.dataFinal,
                descricao: dados.descricao,
                img: reader.result
            })
        }
    }


    // useEffect(()=>{
    //    if(!state){
    //     return navigate("/")
    // }  
    // }, [])
return (
<>
<Header />
    <h1 className="titulo-detalhes-evento">Detalhes do evento</h1>
    <NavLink className= "voltar" to="/">
        <CaretCircleLeft size={20}/>voltar</NavLink>
    <div className='container-detalhes-evento'>
        <img src={evento.img}/>
        
        <div>
            <h2>{evento.nome}</h2>
            <p>{evento.decricao}</p>
            <p className='data-evento'>{evento.data} </p>
            <button>Editar evento</button>

        </div>
    </div>
</>
)
}