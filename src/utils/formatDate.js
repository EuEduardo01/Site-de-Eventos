export function formatDate(date){
    const formattedDate = new Date(date).toLocaleDateString("pt-br",{
        weekday: "short",
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour:"2-digit",
        minute: "2-digit"
    })

    const fistLetter = formattedDate.substring(0, 1).toUpperCase()
    const dateCapitalized = fistLetter + formattedDate.substring(1)

    return dateCapitalized
    
    
}