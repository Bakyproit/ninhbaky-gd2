<template>
  <!-- Main content -->
  <div class="maincontent pt-6 pl-6">
    <!-- header -->
    <h1 class="text-xl font-bold mr-6">Danh hiệu thi đua</h1>
    <div class="my-4 mr-6 flex justify-between">
      <div class="flex">
        <div class="search__input mr-2.5 relative">
          <!-- <input type="text" placeholder="Nhập danh hiệu..." class="input__content inputfield rounded" />
          <div class="input__icon w-5 h-5">
          </div> -->
          <misa-textfield />
        </div>
        <!-- filter -->
        <div class="search__filter cursor-pointer relative">
          <!-- <button class="btn-icon btn__filter rounded">
            <div class="filter__icon mr-1 w-5 h-5"></div>
            <div class="text-sm">
              <p>Bộ lọc</p>
            </div>
          </button> -->
          <misa-button>
            
          </misa-button>
          <!--popup filter  -->
          <div class="popup popup__filter rounded">
            <!-- popup header -->
            <div class="popup__header mt-6 mx-6 flex justify-between">
              <p class="popup__title text-xl font-bold">Lọc danh hiệu</p>
              <div class="popup__close icon"></div>
            </div>
            <!-- popup content -->
            <div class="popup__content m-6">
              <div class="dropdown">
                <label for="" class="flex text-sm flex-col font-bold mt-4"
                  >Đối tượng khen thưởng
                  <input
                    class="mt-2 pr-2 pl-3 text-sm font-normal"
                    type="text"
                    placeholder="Tất cả"
                    value=""
                  />
                  <div class="dropdown__icon icon"></div>
                </label>
                <div class="dropdown__item rounded">
                  <ul class="item m-2">
                    <li class="dropdown__item1 pl-1 rounded">Tất cả</li>
                    <li class="dropdown__item1 pl-1 rounded">Gia đình</li>
                    <li class="dropdown__item1 pl-1 rounded">Tập thể</li>
                    <li class="dropdown__item1 pl-1 rounded">Cá nhân</li>
                  </ul>
                </div>
              </div>
              <div class="dropdown">
                <label for="" class="flex text-sm flex-col font-bold mt-4"
                  >Cấp khen thưởng
                  <input
                    class="mt-2 pr-2 pl-3 text-sm font-normal"
                    type="text"
                    placeholder="Tất cả"
                  />
                  <div class="dropdown__icon icon"></div>
                </label>
                <div class="dropdown__item rounded">
                  <ul class="item m-2">
                    <li class="dropdown__item1 pl-1 rounded">Tất cả</li>
                    <li class="dropdown__item1 pl-1 rounded">Cấp Nhà nước</li>
                    <li class="dropdown__item1 pl-1 rounded">
                      Cấp Tỉnh/tương đương
                    </li>
                    <li class="dropdown__item1 pl-1 rounded">
                      Cấp Huyện/tương đương
                    </li>
                    <li class="dropdown__item1 pl-1 rounded">
                      Cấp Xã/tương đương
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dropdown">
                <label for="" class="flex text-sm flex-col font-bold mt-4"
                  >Loại phong trào
                  <input
                    class="mt-2 pr-2 pl-3 text-sm font-normal"
                    type="text"
                    placeholder="Tất cả "
                  />
                  <div class="dropdown__icon icon"></div>
                </label>
                <div class="dropdown__item rounded">
                  <ul class="item m-2">
                    <li class="dropdown__item1 pl-1 rounded">Tất cả</li>
                    <li class="dropdown__item1 pl-1 rounded">Thường xuyên</li>
                    <li class="dropdown__item1 pl-1 rounded">Theo đợt</li>
                  </ul>
                </div>
              </div>
              <div class="dropdown">
                <label for="" class="flex text-sm flex-col font-bold mt-4"
                  >Trạng thái
                  <input
                    class="mt-2 pr-2 pl-3 text-sm font-normal"
                    type="text"
                    placeholder="Tất cả"
                  />
                  <div class="dropdown__icon icon"></div>
                </label>
                <div class="dropdown__item rounded">
                  <ul class="item m-2">
                    <li class="dropdown__item1 pl-1 rounded">Tất cả</li>
                    <li class="dropdown__item1 pl-1 rounded">Sử dụng</li>
                    <li class="dropdown__item1 pl-1 rounded">Ngưng sử dụng</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box"></div>
            <div class="popup__footer flex justify-end py-3 px-6">
              <button
                class="btn__cancel btn__cancel-add btn__main btn__text btn__focus rounded text-sm"
              >
                <p>Hủy</p>
              </button>
              <button
                class="btn__apply btn__main btn__text btn__focus ml-2 rounded text-sm"
              >
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
        <!-- <button class="btn-icon rounded btn__add">
          <div class="add__icon mr-1 w-5 h-5"></div>
          <div class="add__name text-sm">
            <p>Thêm danh hiệu</p>
          </div>
        </button> -->
        <misa-button></misa-button>
      </div>
      <!-- add -->
      <!--  -->
      <div class="maincontent__act">
        <p class="text-sm py-2">Đã chọn</p>
        <span class="text-sm py-2 font-bold mr-2.5 ml-1">01</span>
        <button class="maincontent__act-cancel btn__link btn__text ml-3">
          <p>Bỏ chọn</p>
        </button>
        <button
          class="maincontent__act-filter btn__main btn__text ml-3 rounded"
        >
          <p>Sử dụng</p>
        </button>
        <button
          class="maincontent__act-default btn__main btn__text ml-3 rounded"
        >
          <p>Ngưng Sử dụng</p>
        </button>
        <button
          class="maincontent__act-delete btn__main btn__text ml-3 rounded py-2 px-7"
        >
          <p>Xóa</p>
        </button>
      </div>
      <!-- -->
    </div>
    <!-- header -->
    <!-- table -->
    <div class="table rounded mr-6 mb-6 text-sm">
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
              <td class="td__status flex">
                <div class="status flex py-1">
                  <div class="status__icon icon"></div>
                  <div class="leading-6">Sử dụng</div>
                </div>
                <div class="act flex">
                  <div class="box__act p-1.5 mr-1 ml-1 rounded-full">
                    <div class="act__fix icon">
                      <div
                        class="act__fix-toolip w-10 rounded-lg leading-6 text-center"
                      >
                        <p class="p-2">Sửa</p>
                      </div>
                    </div>
                  </div>
                  <div class="box__act p-1.5 mr-1 ml-1 rounded-full">
                    <div class="act__add icon">
                      <div
                        class="act__add-toolip w-28 rounded-lg leading-6 text-center"
                      >
                        <p class="p-2">Thêm nữa ...</p>
                      </div>
                      <ul class="act__item-list rounded">
                        <li
                          class="act__item py-3 px-6 mt-4 font-normal act__item--defaul"
                        >
                          <p class="leading-6">Sử dụng</p>
                        </li>
                        <li class="act__item py-3 px-6 font-medium">
                          <p class="leading-6">Ngưng sử dụng</p>
                        </li>
                        <li
                          class="act__item py-3 px-6 mb-4 font-medium act__item--delete"
                        >
                          <p class="leading-6">Xóa</p>
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
      <div class="pagination h-12 px-4 flex justify-between">
        <div class="flex">
          <p class="py-3 font-normal leading-6">Tổng số :</p>
          <span class="record py-3 px-2 leading-6 font-bold">12</span>
          <p class="py-3 font-normal leading-6">bản ghi</p>
        </div>
        <div class="flex justify-between">
          <p class="py-3 font-normal leading-6">Số bản ghi/trang</p>
          <div class="drop rounded my-3 mx-4 flex justify-between">
            <div class="">
              <p class="number h-5 m-px pl-2">150</p>
            </div>
            <div class="drop__btn">
              <div class="drop__icon m-px w-5 h-5"></div>
            </div>
            <div class="drop__item rounded p-2">
              <div class="drop__item1 rounded p-2">10</div>
              <div class="drop__item1 rounded p-2">20</div>
              <div class="drop__item1 rounded p-2">50</div>
              <div class="drop__item1 rounded p-2">100</div>
            </div>
          </div>
          <p class="py-3 font-normal leading-6">
            <span class="number__to py-3 px-2 leading-6 font-bold">1</span
            >-<span class="number__frompy-3 px-2 leading-6 font-bold">12</span
            >bản ghi
          </p>
          <div class="py-3 ml-4 flex">
            <div class="prev__left mr-4 icon"></div>
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
import MisaTextfield from "../components/MisaTextfield.vue";
export default {
  name: "TheMainContent",
  components: {
    MisaTextfield,
    MisaButton,
  },
};
</script>

<style scoped>
@import url("../assets/styles/layout/maincontent.css");
</style>
