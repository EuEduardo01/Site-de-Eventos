import './style.css';
import { Header } from '../../components/Header'
import { EventCard } from '../../components/EventCard';
import { useContext } from 'react';
import { PlusCircle } from 'phosphor-react';
import { EventContext} from '../../contexts/EventContext';
import { EventTypeDisplay} from '../../components/EventTypeDisplay';
import {eventsTypeData} from "../../data/events-display-data"
import { useForm } from 'react-hook-form'

// let eventosChumbados = [
//   { 
//     id: 1,
//     nome: "XV Caminhada pela carga horária de quatro dias sem mudar o salário",
//     img: "https://atualeventos.com/wp-content/uploads/2020/09/atual-eventos-banner.jpg",
//     data: "SEX, 31/06/2022"
//   },
//   { 
//     id: 2,
//     nome: "Reforço em Javascript",
//     img: "https://atualeventos.com/wp-content/uploads/2020/09/atual-eventos-banner.jpg",
//     data: "DOM, 11/06/2023"
//   },
//   { 
//     id: 3,
//     nome: "Final do módulo de React",
//     img: "https://atualeventos.com/wp-content/uploads/2020/09/atual-eventos-banner.jpg",
//     data: "SAB, 29/07/2023"
//   },
//   {
//     id: 4,
//     nome: "Comemoração pelo dia de são nunca",
//     img: "https://atualeventos.com/wp-content/uploads/2020/09/atual-eventos-banner.jpg",
//     data: "QUA, 32/12/2024" 
//   },
// ]

export function Home() {
  
  // const state = JSON.parse(localStorage.getItem("eventos: 1.0"))
  //Para ultilizar o contexto, deve-se importar a função useContext e passar entre parenteses o contexto a ser usado.
  //Guardo o vlaor devolvido
  const { 
    eventos, 
    handleCreateNewEvent, 
    modalOpen, 
    openModal,
    setOrdenacao,
    handleDeleteEvent
  } = useContext(EventContext) 

  const { register, handleSubmit } = useForm()
  

   return (
     <>
      <Header />
   <div className='titulo-container'>
      <h1 className='titulo-eventos'>CRIE MOMENTOS INESQUECIVEIS </h1>
      
      <button className='btn-criar-evento' onClick={openModal}>
        Criar novo evento
        <PlusCircle size={20}/>
      </button>
   </div>

      <div className='container'>

        <div className='form-modal' style={{display: modalOpen ? "flex" : "none"}}>
          <form onSubmit={handleSubmit(handleCreateNewEvent)} >
            <div>
              <label htmlFor="nome">Nome</label>
              <input 
                id="nome" 
                type='text' 
                placeholder='Digite o nome do evento' 
                required
                {...register("nome")}
                />
            </div>
            <div>
              <label htmlFor="data">Data de Inicio</label>
              <input 
                id="data" 
                type='datetime-local' 
                required
                {...register("dataInicial")}
                />
            </div>
            <div>
              <label htmlFor="data">Data de Final</label>
              <input 
                id="data" 
                type='datetime-local' 
                required
                {...register("dataFinal")}
                />
            </div>

            <div>
              <label htmlFor="descricao">Descrição</label>
              <input 
                id="descricao" 
                type='text' 
                placeholder='Digite a descrição do evento'
                required
                {...register("descricao")}
                />
            </div>
            <div>
              <label className='label-imagem' htmlFor="imagem">Selecione a imagem do evento</label>
              <input {...register("img")} id="imagem" type='file' />
            </div>
            {/* <div className='preview-imagem'>
              {img && <img src={img} alt='preview da imagem do formulário'/>}
            </div> */}

            <button>Cadastrar evento</button>
          </form>
        </div>
      </div>
      <section className="events-types">
        {eventsTypeData.map(eventType=> {
          return (
            <EventTypeDisplay
              key = {eventType.nome}
              nome = {eventType.nome}
              photo = {eventType.photo}
              ativo = {eventType.ativo}
            />)
        })}
      </section>

        <div className='container-eventos'>
          {eventos.map(evento => {
            // const dataFomatada = new Date(evento.data) 
            return (
              <EventCard 
                key={evento.id}
                id={evento.id}
                nome={evento.nome}
                dataInicio={evento.dataInicio}
                dataFinal ={evento.dataFinal}
                img={evento.img}
                descricao={evento.descricao}
                deleteEvent={handleDeleteEvent}
              />
            )
          })}

        </div>
    </>
  );
}

