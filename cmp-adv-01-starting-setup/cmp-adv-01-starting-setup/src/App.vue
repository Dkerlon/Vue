<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
      </template>
    </course-goals>
    <button @click="toggleActiveComponent('manage-goals')">Show Manage Goals</button>
    <button @click="toggleActiveComponent('active-goals')">Show Active Goals</button>
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
  </div>
</template>

<script>

import TheHeader from './components/TheHeader.vue'
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';

export default {
  components:{
    'the-header':TheHeader,
    'user-info':UserInfo,
    'badge-list':BadgeList,
    'course-goals':CourseGoals,
    'manage-goals':ManageGoals,
    'active-goals': ActiveGoals

  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      activeComponent:'active-goals'
    };
  },
  methods:{
    toggleActiveComponent(cmp){
      this.activeComponent = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>