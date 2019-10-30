<template>
  <div>
    <input type="text" placeholder="username" v-model="username" />
    <input type="password" placeholder="password" v-model="password" />
    <div class="button" @click="logInHandler">Sign in</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    logInHandler() {
      const { username, password } = this;
      if (username.length > 0 && password.length > 0) {
        console.log(username, password);
        // TODO:
        // закончил тут, написать экшин
      } else {
        alert('введите все данные');
      }
    },
  },
};
</script>

<style lang="sass" scoped></style>
