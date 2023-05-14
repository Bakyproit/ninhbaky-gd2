<template>
  <div class="container">
    <TheNavigation></TheNavigation>
    <div class="content">
      <TheSideBar></TheSideBar>
      <TheMain>
        
      </TheMain>
    </div>
    <!-- <misa-combobox ></misa-combobox> -->
  </div>
</template>

<script>
import TheNavigation from "../layout/TheNavigation.vue";
import TheSideBar from "../layout/TheSideBar.vue";
import TheMain from "@/layout/TheMain.vue";
export default {
  name: "App",
  components: {
    TheNavigation,
    TheSideBar,
    TheMain ,
  },
};
</script>
<style>
.container{
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;  
}
.content{
  display: flex;
}
</style>
