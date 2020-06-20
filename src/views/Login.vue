<template>
    <div>
        <h1>Login</h1>
        <article class="card flex two">
        <form @submit.prevent="login">
        <fieldset class="flex two">
            <label><input v-model="username" placeholder="Username"></label>
            <label><input v-model="password" type="password" placeholder="Password"></label>
        </fieldset>
        <button type="submit">Login</button>
        </form>
        <p>{{ error }}</p>
        </article>
    </div>
</template>

<script>
const validCredentials = { name: 'Ankit Sharma',profileImg: 'https://cdn.quasar.dev/img/boy-avatar.png', username: 'admin', password: '123456' }
export default {
    data () {
        return {
            username: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login() {
            this.error = ''
            if (this.username === validCredentials.username && this.password === validCredentials.password) {
                // Login Success
                localStorage.token = "SomerandomBearerToken";
                localStorage.username = validCredentials.name
                localStorage.profileImg = validCredentials.profileImg
                this.$router.push('/')
            } else {
               this.error = 'Not able To login.Invalid Credentials'
            }
        }
    }
}
</script>
