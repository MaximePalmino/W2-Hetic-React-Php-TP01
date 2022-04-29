import { useEffect } from "react"
import axios from '../API/axios'

const Admin: React.FC = () => {

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getUsers = async () => {
            try {
                const response = await axios.get('/', {
                    signal: controller.signal
                })
                console.log(response.data)
                isMounted && console.log("BLABLABLA")
            } catch(err) {
                console.log(err)
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort()
        }
    }, [])

    return (
        <>
        <h1>Hi from Admin</h1>
        </>
    )
}

export default Admin