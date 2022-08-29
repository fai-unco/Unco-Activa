import axios from "axios";

const endpoint = 'http://127.0.0.1:8000/api/login'

export default async function login({user_name, password}){

    /* const handleChange = (e) => {
        if(e.target.name === 'user_name'){
            setUser_name(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    } */
    
    return axios.post(endpoint, {user_name, password})
    .then(function (response) {
        console.log(response);
        localStorage.setItem('token', response.data.accesstoken);
        console.log(response.data.accesstoken)
        return response.data.accesstoken
    })
    .catch(function (err) {
        console.log(err);
       /*  return handleChange({target: {name: 'err', value: 'Credenciales inválidas'}}); */
    });
}