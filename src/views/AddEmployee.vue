<template>
    <div>
        <form @submit.prevent="addEmployee">
            <input type="text" v-model="login" placeholder="Login">
            <input type="text" v-model="type" placeholder="Type">
            <button type="submit" >Create</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data () {
        return {
            login: '',
            type: ''
        }
    },
    methods: {
        ...mapActions('employees', ['createEmployee']),
        addEmployee () {
            this.createEmployee({ login: this.login, type: this.type })
            this.login = ''
            this.type = ''
            this.$router.push('/')
        }
    }
}
</script>
