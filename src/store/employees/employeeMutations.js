
export function loadEmployees (state, payload) {
    state.employees = payload
}

export function createEmployee (state, payload) {
    state.employees = [ ...state.employees, payload ]
}

export function deleteEmployee (state, payload) {
    state.employees = state.employees.filter(emp => emp.id !== payload)
}

export function updateEmployee (state, payload) {
    console.log(payload)
    state.employees = state.employees.filter(emp => {
        if (emp.id === payload.id) {
            return payload
        }
        return emp
    })
}
