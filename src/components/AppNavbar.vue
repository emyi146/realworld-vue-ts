<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <a class="nav-link active" href>Home</a>
        </li>
        <li v-if="username" class="nav-item">
          <router-link to="/editor" class="nav-link">
            <i class="ion-compose"></i>&nbsp;New Article
          </router-link>
        </li>
        <li v-if="username" class="nav-item">
          <router-link to="/settings" class="nav-link">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li v-if="username" class="nav-item">
          <router-link :to="'/@' +  username" class="nav-link">{{ username }}</router-link>
        </li>
        <li v-if="!username" class="nav-item">
          <router-link to="/register" class="nav-link">Sign Up</router-link>
        </li>
        <li v-if="!username" class="nav-item">
          <router-link to="/login" class="nav-link">Sign In</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import users from '@/store/modules/users';
@Component
export default class AppNavbar extends Vue {
  get username() {
    return users.username;
  }
}
</script>
