import{ useState, useEffect } from "react";

export const useOutsideClick = ( el, initialState) => {
    const [isActive, setIsActive] = useState(initialState)

    useEffect(() =>{
        const onclick = e => {
            if(el.current !== null && !el.current.contains(e.target) ){
                setIsActive ( !isActive)
            }
        }
        if(isActive){
            window.addEventListener("click", onclick)
        }

        return () => {
            window.removeEventListener("click", onclick)
        }
    }, [isActive, el])
    return [isActive, setIsActive]
}
