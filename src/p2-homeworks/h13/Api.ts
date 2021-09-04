import axios from 'axios';





export const requestAPI = {
    getUrl(success:boolean){
       return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success:true})



    }
}

/**/