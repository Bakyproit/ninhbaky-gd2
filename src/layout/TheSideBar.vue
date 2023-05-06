<template>
      <!-- Sidebar sidebar__expand-->
      <div class="sidebar pt-3">
        <div class="sidebar__box">
          <ul class="sidebar__list m-3 max-h-11">
            <li class="sidebar__item grid py-2.5 px-3 mb-1 rounded">
              <div class="sidebar__item-icon icon"></div>
              <div class="sidebar__item-name ml-3">
                <p class="leading-6 text-sm font-medium">Tổng quan</p>
              </div>
            </li>
            <li class="sidebar__item grid py-2.5 px-3 mb-1 rounded">
              <div class="sidebar__item-icon1 icon"></div>
              <div class="sidebar__item-name ml-3">
                <p class="leading-6 text-sm font-medium">Thi đua</p>
              </div>
              <div class="sidebar__item-arrow icon bg-arrow"></div>
            </li>
            <li class="sidebar__item grid py-2.5 px-3 mb-1 rounded">
              <div class="sidebar__item-icon2 icon"></div>
              <div class="sidebar__item-name ml-3">
                <p class="leading-6 text-sm font-medium">Khen thưởng</p>
              </div>
              <div class="sidebar__item-arrow icon bg-arrow"></div>
            </li>
            <li class="sidebar__item grid py-2.5 px-3 mb-1 rounded">
              <div class="sidebar__item-icon3 icon"></div>
              <div class="sidebar__item-name ml-3">
                <p class="leading-6 text-sm font-medium">Quyết định</p>
              </div>
              <div class="sidebar__item-arrow icon bg-arrow"></div>
            </li>
            <li class="sidebar__item grid py-2.5 px-3 mb-1 rounded">
              <div class="sidebar__item-icon4 icon"></div>
              <div class="sidebar__item-name ml-3">
                <p class="leading-6 text-sm font-medium">Hồ sơ</p>
              </div>
              <div class="sidebar__item-arrow icon bg-arrow"></div>
            </li>
            <li class="sidebar__item grid py-2.5 px-3 mb-1 rounded">
              <div class="sidebar__item-icon5 icon"></div>
              <div class="sidebar__item-name ml-3">
                <p class="leading-6 text-sm font-medium">Tra cứu</p>
              </div>
              <div class="sidebar__item-arrow icon bg-arrow"></div>
            </li>
            <li class="sidebar__item grid py-2.5 px-3 mb-1 rounded">
              <div class="sidebar__item-icon6 icon"></div>
              <div class="sidebar__item-name ml-3">
                <p class="leading-6 text-sm font-medium">Báo cáo</p>
              </div>
            </li>
            <div class="box__sidebar mb-1"></div>
            <li class="sidebar__item grid py-2.5 px-3 mb-1 rounded">
              <div class="sidebar__item-icon7 icon"></div>
              <div class="sidebar__item-name ml-3">
                <p class="leading-6 text-sm font-medium">Danh mục</p>
              </div>
              <div class="sidebar__item-arrow icon bg-arrow"></div>
            </li>
            <li class="sidebar__item grid py-2.5 px-3 mb-1 rounded">
              <div class="sidebar__item-icon8 icon"></div>
              <div class="sidebar__item-name ml-3">
                <p class="leading-6 text-sm font-medium">Thiết lập</p>
              </div>
              <div class="sidebar__item-arrow icon bg-arrow sidebar__less-icon"></div>
            </li>
            <div class="box__sidebar mb-1"></div>
            <li class="sidebar__item  grid py-2.5 px-3 mb-1 rounded">
              <div class="sidebar__item-icon9 icon"></div>
              <div class="sidebar__item-name ml-3">
                <p class="leading-6 text-sm font-medium">Hướng dẫn</p>
              </div>
              <div class="sidebar__item-arrow icon bg-arrow"></div>
            </li>
          </ul>
        </div>

        <!-- sidebarmenu -->
        <div class="sidebar__menu">
          <div class="mt-5 mb-3">
            <p class="sidebar__menu-title-name text-base py-2.5 px-3">DANH MỤC</p>
          </div>
          <ul class="sidebar__menu-list mx-3">
            <li class="sidebar__menu-item p-3 mb-1 rounded">
              <p class="sidebar__menu-item-text text-sm">Danh hiệu thi đua</p>
            </li>
            <li class="sidebar__menu-item p-3 mb-1 rounded">
              <p class="sidebar__menu-item-text text-sm">Hình thức khen thưởng</p>
            </li>
            <li class="sidebar__menu-item p-3 mb-1 rounded">
              <p class="sidebar__menu-item-text text-sm">Chức vụ/chức danh</p>
            </li>
            <li class="sidebar__menu-item p-3 mb-1 rounded">
              <p class="sidebar__menu-item-text text-sm">Tiêu chí khen thưởng</p>
            </li>
          </ul>
        </div>
        <!-- sidebar menu -->
        <!-- button sidebar -->
        <div class="sidebar__btn">
          <div class="btn__sidebar btn-icon">
            <div class="sidebar__btn-icon icon"></div>
            <div class="sidebar__btn-text ml-4 btn__text text-sm">Thu gọn</div>
          </div>
        </div>
        <!-- button sidebar -->
      </div>
      <!-- Sidebar sidebar__expand-->
</template>
<script>
export default {
    name : "TheSideBar"
}
</script>
<style >
@import url("../assets/styles/layout/sidebar.css");
@import url("../assets/styles/component/sidebarmenu.css");
</style>