<template>
  <!-- Sidebar sidebar__expand sidebar__less-->
  <div class="sidebar__expand">
    <div class="sidebar__box">
      <ul class="sidebar__list">
        <li v-for="sidebarOption in sidebarOptions" :key="sidebarOption.name">
          <router-link :to="sidebarOption.route" class="sidebar__item">
            <div class="icon" :class="sidebarOption.icon"></div>
            <div class="sidebar__name">
              <p class="sidebar__text">{{ sidebarOption.name }}</p>
            </div>
            <div class="icon" :class="sidebarOption.arrow"></div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- sidebarmenu -->
    <div class="sidebar__menu">
      <div class="sidebar__menu-title">
        <p class="sidebar__menu-title-name">DANH MỤC</p>
      </div>
      <ul class="sidebar__menu-list">
        <li class="sidebar__menu-item">
          <p class="sidebar__menu-item-text">Danh hiệu thi đua</p>
        </li>
        <li class="sidebar__menu-item">
          <p class="sidebar__menu-item-text">Hình thức khen thưởng</p>
        </li>
        <li class="sidebar__menu-item">
          <p class="sidebar__menu-item-text">Chức vụ/chức danh</p>
        </li>
        <li class="sidebar__menu-item">
          <p class="sidebar__menu-item-text">Tiêu chí khen thưởng</p>
        </li>
      </ul>
    </div>
    <!-- sidebar menu -->
    <!-- button sidebar -->
    <div class="sidebar__btn">
      <misa-button
        :class="'btn__collapse'"
        background="var(--bg-li)"
        type="icon"
        label="Thu gọn"
      >
         <div class="sidebar__btn-icon icon"></div>
      </misa-button>
    </div>
    <!-- button sidebar -->
  </div>
  <!-- Sidebar sidebar__expand-->
</template>
<script>
import { reactive } from "vue";
import MisaButton from "@/components/MisaButton.vue";
export default {
  name: "TheSideBar",
  components: {
    MisaButton,
  },
  setup() {
    const sidebarOptions = reactive([
      {
        name: "Tổng quan",
        icon: "sidebar__icon",
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
      {
        name: "Thi đua",
        icon: "sidebar__icon1",
        arrow: "icon__arrow",
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
      {
        name: "Khen thưởng",
        icon: "sidebar__icon2",
        arrow: "icon__arrow",
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
      {
        name: "Quyết định",
        icon: "sidebar__icon3",
        arrow: "icon__arrow",
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
      {
        name: "Hồ sơ",
        icon: "sidebar__icon4",
        arrow: "icon__arrow",
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
      {
        name: "Tra cứu",
        icon: "sidebar__icon5",
        arrow: "icon__arrow",
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
      {
        name: "Báo cáo",
        icon: "sidebar__icon6",
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
      {
        name: "Danh mục",
        icon: "sidebar__icon7",
        arrow: "icon__arrow",
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
      {
        name: "Thiết lập",
        icon: "sidebar__icon8",
        arrow: "icon__arrow",
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
      {
        name: "Hướng dẫn",
        icon: "sidebar__icon1",
        arrow: "icon__arrow",
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
    ]);
    return { sidebarOptions };
  },
};
</script>
<style scoped>
@import url("../assets/styles/layout/sidebar.css");
@import url("../assets/styles/component/sidebarmenu.css");
</style>
