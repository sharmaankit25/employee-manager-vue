import state from './employeeState'
import * as getters from './employeeGetters'
import * as mutations from './employeeMutations'
import * as actions from './employeeActions'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
