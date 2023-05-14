<template>
  <div class="">
    <div class="combobox__control">
      <input
        type="text"
        class="inputfield"
        @focus="onFocus"
        @blur="onBlur"
        v-model="inputValue"
      />
      <div class="dropdown__icon icon"></div>

      <div class="dropdown__item-list" v-show="isDropdowVisible">
        <ul class="item">
          <li
            v-for="item in filters"
            :key="item.id"
            @click="onSelected(item)"
            class="dropdown__item"
            :class="{ 'dropdown__item--active': checkItemActive(item) }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MisaCombobox",
  components: {},
  data() {
    return {
      items: [
        { id: 1, name: "Tất cả" },
        { id: 2, name: "Gia đình" },
        { id: 3, name: "Tập thể" },
        { id: 4, name: "Cá nhân" },
      ],
      isDropdowVisible: false,
      inputValue: "",
      itemSelected: null,
    };
  },
  computed: {
    filters() {
      const self = this;
      return self.items.filter((x) => {
        return self
          .removeVietnameseAccent(x.name)
          .toLowerCase()
          .includes(self.removeVietnameseAccent(self.inputValue).toLowerCase());
      });
    },
  },
  methods: {
    /*
      @description : Thực hiện khi click vào input thi sẽ hiển thị danh sách
      Author : NINH BA KY
      Time :  5/2023
    */
    onFocus() {
      this.isDropdowVisible = true;
    },
    /*
      @description : Thực hiện khi blur ra input thi sẽ ẩn danh sách
      Author : NINH BA KY
      Time :  5/2023
    */
    // onBlur() {
    //   this.isDropdowVisible = false;
    // },
    /*
      @description : Thực hiện khi binding du lieu len input
      Author : NINH BA KY
      Time :  5/2023
    */
    onSelected(item) {
      this.itemSelected = item;
      this.inputValue = item.name;
      this.isDropdowVisible = false ;
    },
    /*
     * @description : Thực hiện chuẩn hóa tiếng việt có dấu sang không dấu
     * Author : NINH BA KY 5/2023
     */
    removeVietnameseAccent(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");

      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ấ|Ậ|Ẩ|Ẫ|Ă|Ắ|Ằ|Ặ|Ắ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ở|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "u");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");

      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g ,"");
      str = str.replace(/\u02C6|\u0306|\u031B/g ,"");

      str = str.replace(/ + /g , " ") ;
      str = str.trim() ;
      return str;
    },
    /*
     * @description : Phần tử nào được chọn thi active
     * Author : NINH BA KY 5/2023
     */
    checkItemActive(item) {
      return this.itemSelected ? this.itemSelected.id == item.id : false;
    },
  },
};
</script>
<style>
.combobox__control {
  width: 260px;
  position: relative;
}
.inputfield {
  width: 100%;
  height: 36px;
  padding: 8px 50px 8px 12px;
  color: var(--color-title);
  background: var(--white-color);
  outline: none;
  border: 1px solid var(--border);
  box-sizing: border-box;
  border-radius: var(--border-radius);
}
.dropdown__icon {
  background: var(--url-image2) no-repeat -169px -48px;
  box-sizing: border-box;
  position: absolute;
  top: 8px;
  right: 8px;
}
.dropdown__item-list {
  width: 260px;
  background: var(--white-color);
  border-radius: 4px;
  box-shadow: 0 0 16px rgba(23, 27, 42, 0.24);
  position: absolute;
  top: 36px;
  z-index: 10;
  /* display: none; */
}
/* list ul  */
.item {
  max-height: 100px;
  margin: 0 8px 8px 8px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.dropdown__item {
  width: 100%;
  height: 36px;
  padding-left: 4px;
  border-radius: 4px;
  line-height: 36px;
  text-align: left;
  box-sizing: border-box;
}
.dropdown__item:hover {
  background: var(--color-blue1);
}
.dropdown__item--active {
  background: var(--color-blue1);
}
</style>
