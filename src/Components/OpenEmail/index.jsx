import { useEffect, useState } from "react"
import EmailPreview from "../EmailPreview"

const OpenEmail = ({id}) => {
    const [email, setEmail ] = useState(false)
    const getEmail =  async () => {
        let response = await fetch(`http://localhost:8080/emails/${id}`)
        let email = await response.json()
        setEmail(email.data.email)
    }

    useEffect(() => {
        getEmail()
    }, [])
    
    return (
        <div>
            {email.id}
        </div>

    ) 
}

export default OpenEmail
