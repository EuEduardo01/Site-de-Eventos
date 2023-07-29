import { EventTypeContainer } from "./style"
 
export function EventTypeDisplay({nome, photo, ativo}) {
    return (
        <EventTypeContainer colorText={ativo ? "black" : "red"}>
            <img src={photo}/>
            <span>{nome}</span>
        </EventTypeContainer>
    )
}