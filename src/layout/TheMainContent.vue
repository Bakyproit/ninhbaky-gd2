<template>
  <!-- Main content -->
  <div class="maincontent">
    <!-- header -->
    <h1 class="maincontent__title-name text-title">{{ title }}</h1>
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
          <misa-button 
             type="icon"  
             label="Bộ lọc"
             class="btn__filter"
             @click="onChangePopup"
            >
            <div class="filter__icon icon"></div>
          </misa-button>
          <!--popup filter  -->
          <div class="popup__filter" v-if="isShowPopup">
            <!-- popup header -->
            <div class="popup__header">
              <p class="popup__title">{{ filtertitle }}</p>
              <div class="popup__close icon" @click="onChangePopup"></div>
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
              <misa-button 
                  type="main" 
                  class="btn__cancel" 
                  label="Hủy"
                  @click="onChangePopup"
                >
              </misa-button>
              <misa-button 
                 background="var(--color-blue5)"
                 color="var(--white-color)"
                 type="main" 
                 class="btn__apply"
                 label="Áp dụng"
                >
              </misa-button>
            </div>
          </div>
          <!-- popup filter -->
        </div>
      </div>
      <!--  -->
      <!-- add -->
      <div class="maincontent__add">
        <misa-button 
             background="var(--color-blue5)"
             color = "var(--white-color)"
             bordercolor="var(--color-blue5)"
             type="icon"  
             label="Thêm danh hiệu"
             class="btn__add"
            >
            <div class="add__icon icon"></div>
        </misa-button>
      </div>
      <!--  -->
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
           color ="var(--color-blue5)"
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
              <th>{{ brand }}</th>
              <th>{{ id }}</th>
              <th>{{ people }}</th>
              <th>{{ grant }}</th>
              <th>{{ movement }}</th>
              <th>{{ status }}</th>
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
                        <li
                          class="act__add-item bb-right act__add-item--delete"
                        >
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
        <!-- table -->
      </div>
      <!-- pagination -->
      <div class="box"></div>
      <div class="pagination">
        <div class="pagination__left">
          <p>{{ sum }}</p>
          <span class="record">12</span>
          <p>{{ record }}</p>
        </div>
        <div class="pagigation__right">
          <p>{{ page }}</p>
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
            >
            {{ record }}
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
import MisaButton from "../components/MisaButton.vue";
// import MisaTextfield from "../components/MisaTextfield.vue";
export default {
  name: "TheMainContent",
  components: {
    // MisaTextfield,
    MisaButton,
  },
  data() {
    return {
      title: "Danh hiệu thi đua",
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
      isShowPopup: false,
      
      cancel : "Hủy",
      apply : "Áp dụng",
      filtertitle : "Lọc danh hiệu",
    };
  },
  methods: {
    onChangePopup() {
      this.isShowPopup = !this.isShowPopup;
    },
  },
  props : {
  
  }
};
</script>

<style scoped>
@import url("../assets/styles/component/popupfilter.css");
@import url("../assets/styles/component/dropdownlist.css");
@import url("../assets/styles/layout/maincontent.css");
</style>
