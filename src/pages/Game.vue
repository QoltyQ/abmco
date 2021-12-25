<template>
  <div class="body">
    <div class="main">
      <div class="logo">
        <p class="quizdar">
          Quizdar
        </p>
      </div>
      <q-card class="join">
        <q-input class="gamepin" outlined v-model="text" label="Game Pin" />
        <q-btn class="btn" text-color="black" label="Enter" />
      </q-card>
    </div>
  </div>

</template>

<script>
import {useQuasar} from 'quasar'
export default {
  data() {
    return {
    };
  },
  
  setup () {
    const $q = useQuasar()
    return {
      triggerNegative () {
        $q.notify({
          type: 'negative',
          message: 'Error connecting with server.'
        })
      },
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {
    openQ(event){
      alert(event.target.id)
    }
  }
};
</script>

<style lang="scss" scoped>
  .body{
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: var(--q-secondary);
  }
  
  .main{
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;

  }

  .gamepin{
    width: 85%;
    margin: auto;

  }

  .text-black{
    color: #fff !important;
  }

  .btn{
    color: #fff;
    background-color: rgb(51, 51, 51);
    box-shadow: rgb(0 0 0 / 25%) 0px -4px inset;
    width: 85%;
    border-radius: 4px;
    font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
    // font-size: 0.875rem;
    min-height: 48px;
    font-weight: bold;
    margin-bottom: auto;
  }

  .join{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background: cornsilk;
    height: 150px;
    width: 300px;
  }

  .quizdar{
    font-size: 30px;
        font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;

  }
</style>