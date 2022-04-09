import { useState } from "react"


interface SubscribeProps {

    setEmail: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    setIsType: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    password: string
}

const Login: React.FC<SubscribeProps> = ({setEmail, setPassword, email, password, setIsType}) => {

    const [newEmail, setNewEmail] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')

    const newEmailHandler = (e: any) => {

        setNewEmail(e.target.value)
    }
    const newPasswordHandler = (e: any) => {

        setNewPassword(e.target.value)
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        setEmail(newEmail)
        setPassword(newPassword)
        setIsType('login')
        console.log(email, password)
    }


    return (
        <>
        <form onSubmit={submitHandler} >
        <h2>Connexion</h2>
        <input type='text' onChange={newEmailHandler} value={newEmail}></input>
        <input type='text' onChange={newPasswordHandler} value={newPassword}></input>
        <button>s'inscrire</button>
      </form>
        </>
    )
}

export default Login