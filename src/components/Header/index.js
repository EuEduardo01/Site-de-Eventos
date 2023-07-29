import './styles.css'
import { MagnifyingGlass } from 'phosphor-react'
import eventLogo from "../../assets/evento.png"
import { NavLink } from 'react-router-dom'

export function Header() {

    return (
        <header className='header-padrão'>
            <div>
                <h1>Eventos</h1>
                <img src={eventLogo} alt='logo do site' />
                <div className='search'>
                    <MagnifyingGlass size={32}/>
                    <input type='text' placeholder='Pequisar eventos show'></input>
                </div>
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink to="/login">Acesse sua conta</NavLink>
                    </li>
                    <li>
                        <NavLink to="/eventos">Eventos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/criar-eventos">Crie seu evento</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}