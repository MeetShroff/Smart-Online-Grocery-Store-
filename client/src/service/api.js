import axios from 'axios';	


const URL = "http://localhost:8000";

export const authenticatesignup = async (data) => {
    try {
         return await axios.post(`${URL}/signup`, data)
        
    } catch (error) {
        console.log("Error while calling signup Api",error.message); 
    }
}

export const authenticatelogin = async (data) => {
    try {
         return await axios.post(`${URL}/login`, data)
        
    } catch (error) {
        console.log("Error while calling login Api",error.message); 
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}