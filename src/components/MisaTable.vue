<template>
  <div class="table">
    <!-- table -->
    <div class="table__box">
      <table class="table__main">
        <thead class="table__header">
          <tr class="table__tilte">
            <th class="table__ckeckbox">
              <label class="box__check check__list">
                <input type="checkbox" />
                <!-- <span class="checkmark"></span> -->
              </label>
            </th>
            <th class="table__brand">{{ brand }}</th>
            <th class="table__id">{{ id }}</th>
            <th class="table__people">{{ people }}</th>
            <th class="table__grant">{{ grant }}</th>
            <th class="table__movement">{{ movement }}</th>
            <th class="td__status">{{ status }}</th>
          </tr>
        </thead>
        <tbody id="table__list">
          <!--  -->
          <tr class="table__item">
            <td class="table__ckeckbox">
              <label class="box__check check__table">
                <input type="checkbox" class="checkbox" />
              </label>
            </td>
            <td class="table__brand">Lao động tiên tiến</td>
            <td class="table__id">LDTTCX</td>
            <td class="table__people">Cá nhân</td>
            <td class="table__grant">Cấp xã/tương đương</td>
            <td class="table__movement">Thường xuyên</td>
            <td class="td__status">
              <div class="status">
                <div class="status__icon icon"></div>
                <div class="status__text">Sử dụng</div>
              </div>
              <div class="act">
                <div class="box__act">
                  <div class="act__fix icon">
                    <div class="act__fix-toolip">
                      <p>{{ update }}</p>
                    </div>
                  </div>
                </div>
                <div class="box__act">
                  <div class="act__add icon">
                    <div class="act__add-toolip">
                      <p>{{ adds }}</p>
                    </div>
                    <ul class="act__add-item-list">
                      <li class="act__add-item act__add-item--defaul">
                        <p>{{ use }}</p>
                      </li>
                      <li class="act__add-item">
                        <p>{{ usestop }}</p>
                      </li>
                      <li class="act__add-item bb-right act__add-item--delete">
                        <p>{{ deletes }}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <!--  -->
        </tbody>
      </table>
    </div>
    <!-- pagination -->
    <div class="box"></div>
    <misa-pagination />
  </div>
</template>
<script>
import MisaPagination from "./MisaPagination.vue";
export default {
  name: "MisaTable",
  components: {
    MisaPagination,
  },
  data() {
    return {
      brand: "Tên danh hiệu thi đua",
      id: "Mã danh hiệu",
      people: "Đối tượng khen thưởng",
      grant: "Cấp khen thưởng",
      movement: "Loại phong trào",
      status: "Trạng thái",
      sum: "Tổng số :",
      record: "Bản ghi",
      page: "Số bản ghi / trang",
      use: "Sử dụng",
      usestop: "Ngưng sử dụng",
      deletes: "Xóa",
      update: "Sửa",
      adds: "Thêm nữa ...",
      check: "Đã chọn",
      cancel: "Hủy",
      apply: "Áp dụng",

      filter: "Bộ lọc",
      add: "Thêm danh hiệu",

      titlePopup: "Lọc danh hiệu",
      isShowPopup: false,
    };
  },
  props: {},
};
</script>
<style>
@import url(../assets/styles/component/table.css);
</style>
