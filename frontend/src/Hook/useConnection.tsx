import axios from "axios"

export default function useConnection() {
    return (username: string) => {
        return axios.post('http://localhost:2345/register.php', null, { 
            params: {
                username: username
            }
        })
            .then(res => res.data)
    }
}