<template>
  <div class="games-list q-pa-lg">
      <q-page>
        <q-card 
          class="q-pa-md"
          style="background: #119DA4; color: white"
        >  
          <q-form>
            <div class="row q-mx-none q-gutter-sm q-sm-gutter-none justify-between ">
              <q-select 
                v-model="genre" 
                :options="genres" 
                filled
                class="col "
                bg-color="white" 
                label="Genre"
              />
              <q-select 
                filled 
                v-model="language" 
                :options="languages" 
                class="col "
                bg-color="white" 
                label="Language" 
                stack-label 
              />
              <q-select 
                filled 
                v-model="grade" 
                :options="grades" 
                class="col "
                bg-color="white" 
                label="Grade" 
                stack-label 
              />
            </div>
          </q-form>
        </q-card>

        <h6 class="text-right text-weight-bold q-ma-sm q-mt-md q-mr-md">
          Result: found 32
        </h6>

        <div class="q-pa-md">

          <div class="row q-col-gutter-x-md q-col-gutter-y-md">
            <div class="col-3" v-for="n in 32" :key="`none-${n}`">
              <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom">
                    <div class="text-h6">Quiz + {{n}}</div>
                    <div class="text-subtitle2">by John Doe</div>
                  </div>
                </q-img>

                <q-card-actions>
                  <q-btn flat color="secondary">view</q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>

        </div>
      </q-page>
  </div>
</template>

<script>

export default {
  data() {
    return {
      genre: '',
      language: '',
      grade: 0,
      genres: [
        'math', 'physics', 'kazakh', 'web technologies', 'html5', 'chemistry', 'biology'
      ],
      languages: [
        'russian', 'english', 'kazakh', 'turkish'
      ],
      grades: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
      ],
    }
  }
}
</script>

<style lang="sass" scoped>

</style>