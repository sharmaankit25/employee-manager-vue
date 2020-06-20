
export function loadEmployees (state, payload) {
    state.employees = payload
}

export function createEmployee (state, payload) {
    state.employees = [ ...state.employees, payload ]
}

export function deleteEmployee (state, payload) {
    state.employees = state.employees.filter(emp => emp.id !== payload)
}
