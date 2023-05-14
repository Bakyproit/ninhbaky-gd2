<template>
  <!-- Sidebar sidebar__expand sidebar__less-->
  <div class="sidebar">
    <div class="sidebar__box">
      <ul class="sidebar__list">
        <li v-for="(sidebarOption, index) in sidebarOptions" :key="index">
          <router-link
            class="sidebar__item"
            :to="sidebarOption.route"
            :class="{ 'sidebar__item--active': checkActive(sidebarOption) }"
            @click="onSelect(sidebarOption)"
          >
            <div class="icon" :class="sidebarOption.icon"></div>
            <div class="sidebar__name">
              <p>{{ sidebarOption.name }}</p>
            </div>
            <div class="icon" :class="sidebarOption.arrow"></div>
          </router-link>
          <div :class="sidebarOption.box"></div>
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
</template>
<script>
import { reactive } from "vue";
import MisaButton from "@/components/MisaButton.vue";
export default {
  name: "TheSideBar",
  components: {
    MisaButton,
  },
  data() {
    return {
      itemSidebar: null,
      isBox: false,
    };
  },
  setup() {
    const sidebarOptions = reactive([
      {
        id: 1,
        name: "Tổng quan",
        icon: "sidebar__icon",
        isActive: false,
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
      {
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
        name: "Báo cáo",
        icon: "sidebar__icon6",
        box: "box__sidebar",
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
      {
        id: 8,
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
        id: 9,
        name: "Thiết lập",
        icon: "sidebar__icon8",
        arrow: "icon__arrow",
        box: "box__sidebar",
        route: {
          path: "/emulation-tiltle",
          name: "emulation",
          params: {},
        },
      },
      {
        id: 10,
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
  methods: {
    /*
      @description : Thực hiện khi click vào li thi lấy name
      Author : NINH BA KY
      Time :  5/2023
    */
    onSelect(sidebarOption) {
      this.itemSidebar = sidebarOption.name;
    },
    /*
      @description : check phần tử khi được active
      Author : NINH BA KY
      Time :  5/2023
    */
    checkActive(sidebarOption) {
      return this.itemSidebar == sidebarOption.name;
    },
  },
};
</script>
<style>
@import url("../assets/styles/layout/sidebar.css");
@import url("../assets/styles/component/sidebarmenu.css");
</style>
