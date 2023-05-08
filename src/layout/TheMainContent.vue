<template>
  <!-- Main content -->
  <div class="maincontent">
    <!-- header -->
    <h1 class="maincontent__title-name text-title">Danh hiệu thi đua</h1>
    <div class="maincontent__header">
      <div class="maincontent__search">
        <div class="search__input">
          <input
            type="text"
            placeholder="Nhập mã hoặc tên danh hiệu.."
            class="search__input-content inputfield"
          />
          <div class="search__input-icon icon"></div>
        </div>
        <!-- filter -->
        <div class="filter">
          <button class="btn-icon btn__filter">
            <div class="filter__icon icon"></div>
            <div class="filter__name">
              <p>Bộ lọc</p>
            </div>
          </button>
          <!--popup filter  -->
          <div class="popup popup__filter">
            <!-- popup header -->
            <div class="popup__header">
              <p class="popup__title">Lọc danh hiệu</p>
              <div class="popup__close icon"></div>
            </div>
            <!-- popup content -->
            <div class="popup__content">
              <div class="dropdown">
                <label for=""
                  >Đối tượng khen thưởng
                  <input type="text" placeholder="Tất cả" value="" />
                  <div class="dropdown__icon icon"></div>
                </label>
                <div class="dropdown__item">
                  <ul class="item">
                    <li class="dropdown__item1">Tất cả</li>
                    <li class="dropdown__item1">Gia đình</li>
                    <li class="dropdown__item1">Tập thể</li>
                    <li class="dropdown__item1">Cá nhân</li>
                  </ul>
                </div>
              </div>
              <div class="dropdown">
                <label for=""
                  >Cấp khen thưởng
                  <input type="text" placeholder="Tất cả" />
                  <div class="dropdown__icon icon"></div>
                </label>
                <div class="dropdown__item">
                  <ul class="item">
                    <li class="dropdown__item1">Tất cả</li>
                    <li class="dropdown__item1">Cấp Nhà nước</li>
                    <li class="dropdown__item1">Cấp Tỉnh/tương đương</li>
                    <li class="dropdown__item1">Cấp Huyện/tương đương</li>
                    <li class="dropdown__item1">Cấp Xã/tương đương</li>
                  </ul>
                </div>
              </div>
              <div class="dropdown">
                <label for=""
                  >Loại phong trào
                  <input type="text" placeholder="Tất cả " />
                  <div class="dropdown__icon icon"></div>
                </label>
                <div class="dropdown__item">
                  <ul class="item">
                    <li class="dropdown__item1">Tất cả</li>
                    <li class="dropdown__item1">Thường xuyên</li>
                    <li class="dropdown__item1">Theo đợt</li>
                  </ul>
                </div>
              </div>
              <div class="dropdown">
                <label for=""
                  >Trạng thái
                  <input type="text" placeholder="Tất cả" />
                  <div class="dropdown__icon icon"></div>
                </label>
                <div class="dropdown__item">
                  <ul class="item">
                    <li class="dropdown__item1">Tất cả</li>
                    <li class="dropdown__item1">Sử dụng</li>
                    <li class="dropdown__item1">Ngưng sử dụng</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box"></div>
            <div class="popup__footer">
              <button
                class="btn__cancel btn__cancel-add btn__main btn__text btn__focus"
              >
                <p>Hủy</p>
              </button>
              <button class="btn__apply btn__main btn__text btn__focus">
                <p>Áp dụng</p>
              </button>
            </div>
          </div>
          <!-- popup filter -->
        </div>
      </div>
      <!--  -->
      <!-- add -->
      <div class="maincontent__add">
        <button class="btn-icon btn__add">
          <div class="add__icon icon"></div>
          <div class="add__name">
            <p>Thêm danh hiệu</p>
          </div>
        </button>
      </div>
      <!-- add -->
      <!--  -->
      <div class="maincontent__act">
        <p class="maincontent__select">Đã chọn</p>
        <span class="maincontent__number">01</span>
        <button class="maincontent__cancel btn__link btn__text">
          <p>Bỏ chọn</p>
        </button>
        <button class="maincontent__filter btn__main btn__text">
          <p>Sử dụng</p>
        </button>
        <button class="maincontent__default btn__main btn__text">
          <p>Ngưng Sử dụng</p>
        </button>
        <button class="maincontent__delete btn__main btn__text">
          <p>Xóa</p>
        </button>
      </div>
      <!-- -->
    </div>

    <!-- header -->
    <!-- table -->
    <div class="table">
      <!-- table -->
      <div class="table__box">
        <table>
          <thead>
            <tr>
              <th>
                <label class="box__check check__list">
                  <input type="checkbox" />
                  <!-- <span class="checkmark"></span> -->
                </label>
              </th>
              <th>Tên danh hiệu thi đua</th>
              <th>Mã danh hiệu</th>
              <th>Đối tượng khen thưởng</th>
              <th>Cấp khen thưởng</th>
              <th>Loại phong trào</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody id="table__list">
            <!--  -->
            <tr class="table__tr">
              <td>
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
                        <p>Sửa</p>
                      </div>
                    </div>
                  </div>
                  <div class="box__act">
                    <div class="act__add icon">
                      <div class="act__add-toolip">
                        <p>Thêm nữa ...</p>
                      </div>
                      <ul class="act__add-item-list">
                        <li class="act__add-item act__add-item--defaul">
                          <p>Sử dụng</p>
                        </li>
                        <li class="act__add-item"><p>Ngưng sử dụng</p></li>
                        <li class="act__add-item bb-right act__add-item--delete">
                          <p>Xóa</p>
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
        <!-- table -->
      </div>
      <!-- pagination -->
      <div class="box"></div>
      <div class="pagination">
        <div class="pagination__left">
          <p>Tổng số :</p>
          <span class="record">12</span>
          <p>bản ghi</p>
        </div>
        <div class="pagigation__right">
          <p>Số bản ghi/trang</p>
          <div class="drop">
            <div class="drop__number">
              <p class="number">50</p>
            </div>
            <div class="drop__btn">
              <div class="drop__icon icon"></div>
            </div>
            <div class="drop__item">
              <div class="drop__item1">10</div>
              <div class="drop__item1">20</div>
              <div class="drop__item1">50</div>
              <div class="drop__item1">100</div>
            </div>
          </div>
          <p>
            <span class="number__to">1</span>-<span class="number__from"
              >12</span
            >bản ghi
          </p>
          <div class="prev">
            <div class="prev__left icon"></div>
            <div class="prev__right icon"></div>
          </div>
        </div>
      </div>
      <!-- pagination -->
    </div>
    <!-- table -->
  </div>
  <!-- End Main content -->
</template>

<script>
// import MisaButton from "../components/MisaButton.vue";
// import MisaTextfield from "../components/MisaTextfield.vue";
export default {
  name: "TheMainContent",
  // components: {
  //   MisaTextfield,
  //   MisaButton,
  // },
};
</script>

<style scoped>
@import url("../assets/styles/layout/maincontent.css");
</style>
