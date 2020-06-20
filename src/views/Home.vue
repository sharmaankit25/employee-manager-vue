<template>
  <div class="home">
    Dashboard
    <button @click="logout">Logout</button>
    <ul>
      <li v-for="emp in employees" :key="emp.id">
        {{ emp.type }} - {{ emp.login }}
        <router-link
          :to="{ name: 'employee-details', params: { id: emp.id } }"
        >Details</router-link>
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
    ...mapActions('employees', ['loadEmployees']),
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  async mounted () {
    this.loadEmployees()
  }
}
</script>
