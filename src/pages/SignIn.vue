<template>
  <div class="q-pa-md">
    <q-btn label="Reset" push color="white" text-color="primary" @click="step = 1" class="q-mb-md" />

    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Fullname"
        icon="settings"
        :done="step > 1"
        :header-nav="step > 1"
      >
        <p class="text">
            Write your name:
        </p>
        <q-input v-model="text" label="Fullname" />

        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Write your Phone Number"
        caption="Optional"
        icon="phone"
        :done="step > 2"
        :header-nav="step > 2"
      >
        <p class="text">
            Write your name:
        </p>
        <q-input v-model="text" label="Phone number" />

        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Write your name"
        icon="email"
        :header-nav="step > 3"
      >
        <p class="text">
            Write your email:
        </p>
        <q-input v-model="text" label="Fullname" />

        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      step: ref(1),
      text: ref('')
    }
  }
}
</script>

<style lang="scss" scoped>
    .text {
        font-family:  'Arial Narrow Bold', sans-serif;
    }

</style>
