<template>
  <div>
    <!-- <h1>{{ message }}</h1> -->
    <!-- <element-view></element-view> -->
    <!-- 员工管理 -->
    <!-- <hero-view></hero-view>
    <sect-view></sect-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HeroView from './views/tlias/HeroView.vue'
// import SectView from './views/tlias/SectView.vue'
// import ElementView from './views/element/ElementView.vue'
export default {
  components: { /* HeroView SectView *//* ElementView */ },
  data() {
    return {
      message: "Hello Vue"
    }
  },
  methods: {

  },
}
</script>

<style></style>
