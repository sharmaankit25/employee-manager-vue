<template>
    <div>
        <h2>Employee Details</h2>
        Login {{ emp.login }}
        Type {{ emp.type }}
        <router-link
          to="/"
        >Back</router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            emp: null
        }
    },
    computed: {
        ...mapGetters('employees', ['employees'])
    },
    mounted () {
        const { id } = this.$route.params
        console.log(id)
        this.emp = this.employees.find(emp => emp.id === id)
    }
}
</script>
