<template>
  <div class="container">
    <div>
      <h1 class="title">
        This page is loaded from the {{ name }}
      </h1>
      <h2 class="info" v-if="name === 'client'">
        Please refresh the page
      </h2>
      <h2 class="socket">Sails io.socket is {{ socketConnected?'connected':'disconnected'}}</h2>
      <div class="links">
        <nuxt-link class="button--grey" to="/">
          Home page
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socketConnected: false
    }
  },
  asyncData({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  mounted() {
    this.socketConnected = this.$socket.isConnected()
    this.$socket.on('connect', () => {
      this.socketConnected = 'connected'
    })
    this.$socket.on('disconnect', () => {
      this.socketConnected = 'disconnected'
    })
  },
  head() {
    return {
      title: `About Page (${this.name}-side)`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.socket {
  color: #505153;
  font-weight: 300;
}
</style>
