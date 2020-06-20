<template>
    <div>
        <form @submit.prevent="editEmployee">
            <input type="text" v-model="emp.login" placeholder="Emp Login">
            <input type="text" v-model="emp.type" placeholder="Emp Type">
            <button type="submit">Edit</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data () {
        return {
            emp: null
        }
    },
    computed: {
        ...mapGetters('employees', ['employees']),

    },
    methods: {
        ...mapActions('employees', ['updateEmployee']),
        editEmployee () {
            this.updateEmployee(this.emp)
            this.$router.push('/')
        }
    },
    mounted () {
        const { id } = this.$route.params
        if (this.employees.length) {
            this.emp = this.employees.find(emp => emp.id === id)
        } else {
            this.$router.push('/')
        }
    }
}
</script>
