<template>
  <!-- Main content -->
  <div class="maincontent">
    <!-- header -->
    <div class="maincontent__header">
      <h1 class="maincontent__title">{{ title }}</h1>
      <div class="maincontent__search">
        <div class="search">
          <div class="search__input">
            <misa-textfield
              type="text"
              placeholder="Nhập mã hoặc tên danh hiệu ..."
            >
              <div class="input-icon icon"></div>
            </misa-textfield>
          </div>
          <!-- filter -->
          <div class="filter">
            <misa-button
              type="icon"
              :label="filter"
              class="btn__filter"
              @click="onChangePopup"
            >
              <div class="filter__icon icon"></div>
            </misa-button>
             
            <misa-popup v-if="isShowPopup" :titlePopup="titlePopup" :onChangePopup="onChangePopup" />
          </div>
        </div>
        <!-- add -->
        <div class="maincontent__add">
          <misa-button
            background="var(--color-blue5)"
            color="var(--white-color)"
            bordercolor="var(--color-blue5)"
            type="icon"
            :label="add"
            class="btn__add"
          >
            <div class="add__icon icon"></div>
          </misa-button>
        </div>
        <!--act  -->
        <div class="maincontent__act">
          <p class="maincontent__select">{{ check }}</p>
          <span class="maincontent__number">01</span>
          <misa-button
            type="link"
            background="var(--bg-main)"
            class="maincontent__cancel"
            label="Bỏ chọn"
          >
          </misa-button>
          <misa-button
            type="main"
            color="var(--color-blue5)"
            class="maincontent__filter"
            label="Sử dụng"
          >
          </misa-button>
          <misa-button
            type="main"
            class="maincontent__default"
            label="Ngưng sử dụng"
          >
          </misa-button>
          <misa-button
            type="main"
            color="var(--color-red1)"
            class="maincontent__delete"
            label="Xóa"
          >
          </misa-button>
        </div>
      </div>
      <misa-table  />
    </div>
  </div>
  <!-- End Main content -->
</template>
<script>
import MisaButton from "../components/MisaButton.vue";
import MisaTextfield from "../components/MisaTextfield.vue";
import MisaPopup from "@/components/MisaPopup.vue";
import MisaTable from "@/components/MisaTable.vue" ;
export default {
  name: "TheMain",
  components: {
    MisaTextfield,
    MisaButton,
    MisaPopup ,
    MisaTable ,
  },
  data() {
    return {
      title: "Danh hiệu thi đua" ,
      use: "Sử dụng",
      usestop: "Ngưng sử dụng",
      deletes: "Xóa",
      update: "Sửa",
      adds: "Thêm nữa ...",
      check: "Đã chọn",
      cancel: "Hủy",
      apply: "Áp dụng",

      filter : "Bộ lọc",
      add : "Thêm danh hiệu",

      titlePopup: "Lọc danh hiệu",
      isShowPopup: false,
    };
  },
  methods: {
    /*
      @description : Thực hiện khi click thi mở popup
      Author : NINH BA KY
      Time :  5/2023
    */
    onChangePopup() {
      this.isShowPopup = !this.isShowPopup;
    },
  },
  props: {

  },
};
</script>

<style scoped>
@import url(../assets/styles/layout/maincontent.css);
</style>
