import { createContext, useState, useEffect } from "react";
import { formatDate } from '../utils/formatDate'

export const EventContext = createContext({})
/* 
    Criamos o contexto referente aos eventos,
    onde qualquer coisa que valha para os eventos, a lista de eventos,
    funções de eventos, apagar, criar ou editar, ficam todos aqui
    para serem compartilhados pela tela. O contexto criado
    recebe um valor inicial
*/

export function EventContextProvider({ children }) {
     /* O children é uma propriedade existente para componentes,
    que vai representar qualquer tag filha que esse componente possuir
    caso seja utilizado com tag de abertura e fechamento */

    const state = JSON.parse(localStorage.getItem('eventos:1.0'))

    const [eventos, setEventos] = useState(state ?? [])
    const [modalOpen, setModalOpen] = useState(false)
    const [ordenacao, setOrdenacao] = useState('')

    function closeModal() {
        setModalOpen(false)
    }

    function openModal() {
        setModalOpen(true)
    }


    function handleCreateNewEvent(data) { 
        if(data.img.length == 0) {
            alert("Você precisa escolher uma imagem")
            return;
        }
        
        const reader = new FileReader()
        reader.readAsDataURL(data.img[0])
    
        
        let ultimoId = eventos.length > 0 ? eventos[eventos.length - 1].id : 0 
        
        reader.onload = () => {
          const novoEvento = {
            id: ultimoId + 1,
              nome: data.nome,
              img: reader.result,
              descricao: data.descricao,
              dataInicio: formatDate(data.dataInicial),
              dataFinal: formatDate(data.dataFinal)
            }
            
            setEventos([...eventos, novoEvento])
            setModalOpen(false)      
        } 
       }

    function handleEditEvent(id, dados) {
        const eventosAtualizados = eventos.map(evento => {
            /* 
                faço um map para retornar um novo array com os valores
                modificados. se o evento do array tiver o mesmo id que o id que eu
                quero, então retornamos o evento modificado com os novos valores,
                os outros eventos que não me interessam eu devolvo inalterados
            */
            if(evento.id == id) {
                
                return {
                    ...evento,
                    nome: dados.nome,
                    dataInicio: dados.dataInicio,
                    dataFinal: dados.dataFinal,
                    descricao: dados.descricao,
                    img: dados.img
                }
            }

            return evento            
        })

        setEventos(eventosAtualizados)
    }

    function handleDeleteEvent(id) {
    /*  let deletar = confirm("Tem certeza de que quer deletar este evento?")
    
        if(!deletar) {
        return;
        } */    
    
        let eventosFiltrados = eventos.filter(evento => evento.id !== id)
    
        setEventos(eventosFiltrados)    
    }

    useEffect(() => {
        const eventosOrdenados = eventos.sort((a, b) => {
            if(ordenacao == 'antigas') {
              return new Date(a.data).getTime() > new Date(b.data).getTime()
            }
    
            return -1
        })
    
        setEventos(eventosOrdenados)
       }, [ordenacao])
    

    /* useEffect(() => {
        localStorage.setItem('eventos:1.0', JSON.stringify(eventos))
      }, [eventos]) */

      return (
         /* 
            O provider do contexto é quem vai prover estas
            informações para todo o código. Ele pede um atributo value, que 
            é o valor a ser compartilhado
         */
        <EventContext.Provider value={{
            eventos,
            modalOpen,
            handleCreateNewEvent,
            handleDeleteEvent,
            openModal,
            closeModal,
            setOrdenacao,
            handleEditEvent
        }}>
            {children}
        </EventContext.Provider>
      )
}

/* <EventContextProvider>
        <App />
</EventContextProvider> */