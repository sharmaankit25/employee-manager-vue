<template>
    <div>
        <h1>Login</h1>
        <article class="card flex two">
        <form @submit.prevent="">
        <fieldset class="flex two">
            <label><input type="email" placeholder="Email"></label>
            <label><input type="password" placeholder="Password"></label>
        </fieldset>
        <button type="submit">Login</button>
        </form>
        </article>
    </div>
</template>

<script>
export default {

}
</script>
