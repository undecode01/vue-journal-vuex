<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button 
      class="btn btn-primary"
      @click="redirectToDaybook"
    >
      Primary
    </button>
    <button 
      class="btn btn-secondary"
      @click="redirectToDaybook"
    >
      Secondary
    </button>
    <button 
      class="btn btn-success"
      @click="redirectToDaybook"
    >
      Success
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToDaybook(){
      this.$router.push({ name: 'no-entry-daybook' })
    }
  }
}
</script>
