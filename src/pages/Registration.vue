<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        
        <q-card
          class="login-form"
          v-bind:style="
            $q.platform.is.mobile ? { width: '100%' } : { width: '30%' }
          "
        >
          <q-card-section>
            <q-avatar
              size="74px"
              class="absolute"
              style="top: 0;right: 25px;transform: translateY(-50%);"
            >
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Register to QUIZDAR
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input filled v-model="username" label="Username" lazy-rules />
              <q-input filled v-model="email" label="Email" lazy-rules />
              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules
              />
              <q-toggle v-model="accept" label="I accept the license and terms" />

              <div>
                <q-btn
                  label="Login"
                  to="/profile"
                  type="button"
                  color="primary"
                  @click="loginNotify"
                />

                <a
                  style="font-size: 30px;"
                  class="float-right"
                  target="_blank"
                  title="Donate"
                  ><i class="fas fa-heart" style="color: #eb5daa"></i
                ></a>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    data() {
        return {
            username: 'admin',
            email: 'admin@gmail.com',
            password: 'Admin@CRM',
            accept: false
        }
    },
    methods: {
      loginNotify(){
        this.$q.notify({
          message: 'Login Successful',
        })
      }
    },
  }
</script>

<style>
.normal_gradient {
  background: linear-gradient(145deg, rgb(74, 94, 137) 15%, #b61924 70%);
}
.dark_gradient {
  background: linear-gradient(145deg, rgb(11, 26, 61) 15%, #4c1014 70%);
}
.login-form {
  position: absolute;
}
</style>