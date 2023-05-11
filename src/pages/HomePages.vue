<template>
  <div class="container">
    <TheNavigation></TheNavigation>
    <TheSideBar></TheSideBar>
    <TheMainContent>
      
    </TheMainContent>
  </div>
</template>

<script>
import TheNavigation from "../layout/TheNavigation.vue";
import TheSideBar from "../layout/TheSideBar.vue";
import TheMainContent from "../layout/TheMainContent.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
    TheSideBar,
    TheMainContent,
  },
};
</script>
<style></style>
