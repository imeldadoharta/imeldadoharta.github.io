import axios from 'axios'
//import config from '../Config/config'


const ApiLogin = {
    login: async (username, password) => {
        //apiconfig.BASE_URL+apiconfig.ENDPOINTS.LOGIN
        let option = {
            url: 'http://localhost:3001/auth',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username: username,
                password: password
            }
        }
       
        try {
            let result = await axios(option)
          
            return result.data
           
        } catch (error) {
         
            return error
           
        }
    }
}

export default ApiLogin