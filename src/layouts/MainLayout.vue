<template>
  <q-layout view="lHh lpr lFf" class="wrapper">
    <q-header reveal elevated>
      <q-toolbar class="bg-secondary" >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          onQuiz.kz
        </q-toolbar-title>

        <q-btn to='/register' label="Register" color="" flat></q-btn>
        <q-btn to='/login' label="Login"  color="primary" ></q-btn>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <q-item
          clickable
        >
          <q-btn to="/game" color="primary" icon-right="navigation" label="Join Game" push class="fit q-py-md">  </q-btn>
        </q-item>

        <q-item
          clickable
        >
          <q-btn to="/create_game" color="secondary" icon-right="add" label="Create Game" push class="fit q-py-md">  </q-btn>
        </q-item>

        <q-item
          clickable
        >
          <q-btn to="/gameslist" color="secondary" icon-right="my_location" label="Explore" class="fit q-py-sm" flat> </q-btn>
        </q-item>


      </q-list>
    </q-drawer>

    <q-footer reveal elevated>
      <div class="site-footer">
        <div class="container">
          <div class="row items-center">
            <div class="col-md-8 col-sm-6 col-xs-12 ">
              <p class="copyright-text">Copyright &copy; 2021  All Rights Reserved by 
                <a href="#">Quizdar.kz</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12 ">
              <ul class="social-icons">
                <li><q-btn round outline color="grey" icon="shopping_cart" /></li>
                <li><q-btn round outline color="grey" icon="navigation" /></li>
                <li><q-btn round outline color="grey" icon="my_location" /></li>
                <li><q-btn round outline color="grey" icon="directions" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
.wrapper {
  /* background-color:#26272b; */
}
.site-footer
{
  background-color:#26272b;
  padding: 0 20px;
  font-size:15px;
  /* line-height:24px; */
  color:#737373;
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}

.site-footer .social-icons
{
  text-align:right;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}
.copyright-text
{
  margin:0
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0;
    display: flex;
    align-items: center;
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center;
  }
}
.social-icons
{
  padding-left:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
</style>