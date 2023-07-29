import styled from "styled-components"

export const EventTypeContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 1.8rem;
    cursor: pointer;
    width: 12.5%;
    max-width: 17rem;
    height: 17rem;
    text-align:center;
    color:${(props) => props.theme.white};
    
    img{
        width: 100%;
        border-radius: 50%;
        height:100%;
    }
    &:hover = so funciona no styled components o 

    @media(max-width: 900px){
        &{
            font-size: 1.5rem
        }
    }
`