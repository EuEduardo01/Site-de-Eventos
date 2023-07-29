import { Trash } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import "./styles.css"

export function EventCard({nome, img, data, descricao, id, deleteEvent, dataInicio, dataFinal}) {
    /* if(!props.nome || !props.img || !props.data) {
        return <div>Não tenho todos os dados</div>
    } */

    const navigate = useNavigate()

    function navegaParaDetalhesDoEvento() {
        navigate(`/eventos/${id}`)
    }

    return (
        <div className='card-eventos'>
            <img src={img} alt={nome} />
            <div className='infos-evento'>
                <div>
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                    <button onClick={navegaParaDetalhesDoEvento}>Ver detalhes do evento</button>

                    <span>{dataInicio ? dataInicio : "Sem data definida"}</span>
                    <span>{dataFinal ? dataFinal : "Sem data definida"}</span>
                </div>
                <button className = "delete"onClick={() => deleteEvent(id)}>
                    <Trash size={16} color="#FFF"/>
                </button>
            </div>
        </div>
    )
}