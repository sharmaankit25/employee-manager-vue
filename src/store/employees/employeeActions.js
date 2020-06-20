import axios from 'axios'
export const loadEmployees = async ({ commit }) => {
    try{
        const {data} = await axios.get('https://api.github.com/users')
        commit('loadEmployees', data)
    }catch(err){
    console.log(err)
    }
}

export const createEmployee = ({ commit, state }, employee) => {
    employee.id = Number(state.employees[state.employees.length - 1].id) + 1
    commit('createEmployee', employee)
}

export const deleteEmployee = ({ commit }, employeeID) => {
    commit('deleteEmployee', employeeID)
}

export const updateEmployee = ({ commit }, employee) => {
    commit('updateEmployee', employee)
}
