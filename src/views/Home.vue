<template>
  <div class="home">
    Dashboard
    <button @click="logout">Logout</button>
    <router-link
          :to="{ name: 'employee-create' }"
        >Add Employee</router-link>
    <ul>
      <li v-for="emp in employees" :key="emp.id">
        {{ emp.type }} - {{ emp.login }}
        <router-link
          :to="{ name: 'employee-details', params: { id: emp.id } }"
        >Details</router-link>

        <button @click="deleteEmployee(emp.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapGetters('employees', ['employees'])
  },
  methods: {
    ...mapActions('employees', ['loadEmployees', 'deleteEmployee']),
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  async mounted () {
    if (this.employees.length <= 0) {
      await this.loadEmployees()
    }
  }
}
</script>
