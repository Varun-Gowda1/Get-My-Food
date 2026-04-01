import { useEffect, useState } from "react"


const useUserStatus = () => {
    const [status ,setStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setStatus(false)
        })
        window.addEventListener("online",() => {
            setStatus(true);
        })
    },[])
    return status;
}

export default useUserStatus;