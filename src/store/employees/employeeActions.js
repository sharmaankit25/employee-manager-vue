import axios from 'axios'
export const loadEmployees = async ({ commit }) => {
    try{
        const {data} = await axios.get('https://api.github.com/users')
        commit('loadEmployees', data)
    }catch(err){
    console.log(err)
    }
}
