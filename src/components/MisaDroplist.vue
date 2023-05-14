<template>
  <div class="dropdown">
    <div class="dropdown__input">
      <label :for="name">
         {{ label }}</label>
      <input type="text" :placeholder="placeholder" @focus="onFocus" @blur="onBlur" v-model="inputValue" />
      <div class="dropdown__icon icon" @click="display"></div>
    </div>
    <div class="dropdown__item-list" v-if="isDropdowVisible">
      <ul class="item">
        <li
          v-for="item in filters"
          :key="item.id"
          class="dropdown__item"
          :class="{ 'dropdown__item--active': checkItemActive(item) }"
          @click="onSelected(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MisaDroplist",
  components: {},
  data() {
    return {
      items: [
        { id: 1, name: "Tất cả" },
        { id: 2, name: "Gia đình" },
        { id: 3, name: "Tập thể" },
        { id: 4, name: "Cá nhân và tập thể" },
      ],
      isDropdowVisible: false,
      inputValue: "",
      itemSelected: null,
    };
  },
  props: {
       for : String ,
       label : String ,
       placeholder : String ,
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
      @description : Thực hiện khi click vào icon input thi sẽ hiển thị danh sách
      Author : NINH BA KY
      Time :  5/2023
    */
    display(){
      this.isDropdowVisible = !this.isDropdowVisible ;
    },
    /*
      @description : Thực hiện khi click vào input thi sẽ hiển thị danh sách
      Author : NINH BA KY
      Time :  5/2023
    */
    onFocus() {
      this.isDropdowVisible = true;
    },

    /*
      @description : Thực hiện khi binding du lieu len input
      Author : NINH BA KY
      Time :  5/2023
    */
    onSelected(item){
      this.itemSelected = item;
      this.inputValue = item.name;
      this.isDropdowVisible =false ;
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
.dropdown {
  position: relative;
}
.dropdown label {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: var(--color-tilte);
  line-height: 20px;
  margin-top: 16px;
}
.dropdown input {
  margin-top: 8px;
  width: 100%;
  height: 36px;
  padding: 0 8px 0 12px;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
}
.dropdown input[type="text"]:focus {
  border: 1px solid var(--color-blue5);
}
.dropdown__icon {
  background: var(--url-image2) no-repeat -169px -48px;
  position: absolute;
  top: 36px;
  right: 4px;
}
.dropdown__item-list {
  width: 100%;
  background: var(--white-color);
  border-radius: 4px;
  box-shadow: 0 0 16px rgba(23, 27, 42, 0.24);
  position: absolute;
  top: 64px;
  z-index: 10;
}

.item {
  max-height: 300px;
  margin: 8px 0 8px 8px;
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
