<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Teacher</div>
              <div class="text-h5 q-mt-sm q-mb-xs">Zhanatkhan Qayrat</div>
              <div class="text-caption text-grey">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate iusto blanditiis officia numquam, tempora facere culpa! Assumenda atque doloribus, blanditiis dolorem fugiat nulla asperiores dicta, necessitatibus id iure, unde hic.
              </div>
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/boy-avatar.png"
              />
            </q-card-section>
          </q-card-section>

          <q-separator/>

          <q-card-section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, beatae explicabo! Nisi, mollitia. Eum sint vel deserunt eius sunt commodi perferendis quam laborum necessitatibus dolor optio, obcaecati eveniet aspernatur, deleniti ullam? Nihil illum fuga sint porro itaque facilis, reiciendis rem inventore eum sapiente, error doloribus deserunt hic amet quo similique quos nesciunt totam, recusandae optio reprehenderit! Mollitia tempora, facilis illum exercitationem molestias nisi harum nostrum maiores ducimus minus corrupti omnis assumenda laboriosam amet possimus voluptatum ratione adipisci at. Dolor, ipsum?
         </q-card-section>
        </q-card>
      </div>


      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section>
            <q-form
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="user.first_name"
                label="First Name"
              />

              <q-input
                filled
                v-model="user.last_name"
                label="Last Name"

              />

              <q-input
                filled
                v-model="user.age"
                label="Age"

              />

              <q-input
                filled
                v-model="user.email"
                label="Email"

              />

              <q-input
                filled
                v-model="user.phone"
                label="Phone"

              />

              <div>
                <q-btn label="Update" type="submit" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="Buttons">
        <div class="Pricing">
            <p class="q">
                Did u get Pro version?
            </p>
            <q-btn to="/price" color="primary" label="Pro" />
        </div>
        <div class="statistics">
            <p class="q">
                Did u know grades of your Students?
            </p>
            <q-btn to="/table" color="primary" label="Students" />
        </div>
    </div>
  </q-page>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    first_name: 'Qayrat',
                    last_name: 'Zhanatkhan',
                    age: 63,
                    email: '2******@****.com',
                    phone: '87******82'
                },
            }
        },
    }
</script>

<style lang = "scss" scoped>
    .statistics{
        margin-left: 15px;
        margin-bottom: 30px;
    }
    .Pricing{
        margin-left: 15px;
    }

    .Buttons{
        display: flex;
    }
    
    .q{
        font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 20px;
    }
</style>