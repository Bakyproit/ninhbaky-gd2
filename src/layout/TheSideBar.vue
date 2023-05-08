<template>
      <!-- Sidebar sidebar__expand sidebar__less-->
      <div class="sidebar__expand">
        <div class="sidebar__box">
          <ul class="sidebar__list">
            <li class="sidebar__item">
              <div class="sidebar__icon"></div>
              <div class="sidebar__name">
                <p class="sidebar__text">Tổng quan</p>
              </div>
            </li>
            <li class="sidebar__item">
              <div class="sidebar__icon1 icon"></div>
              <div class="sidebar__name">
                <p class="sidebar__text">Thi đua</p>
              </div>
              <div class="sidebar__arrow icon bg-arrow"></div>
            </li>
            <li class="sidebar__item">
              <div class="sidebar__icon2 icon"></div>
              <div class="sidebar__name">
                <p class="sidebar__text">Khen thưởng</p>
              </div>
              <div class="sidebar__arrow icon bg-arrow"></div>
            </li>
            <li class="sidebar__item">
              <div class="sidebar__icon3 icon"></div>
              <div class="sidebar__name">
                <p class="sidebar__text">Quyết định</p>
              </div>
              <div class="sidebar__arrow icon bg-arrow"></div>
            </li>
            <li class="sidebar__item">
              <div class="sidebar__icon4 icon"></div>
              <div class="sidebar__name">
                <p class="sidebar__text">Hồ sơ</p>
              </div>
              <div class="sidebar__arrow icon bg-arrow"></div>
            </li>
            <li class="sidebar__item">
              <div class="sidebar__icon5 icon"></div>
              <div class="sidebar__name">
                <p class="sidebar__text">Tra cứu</p>
              </div>
              <div class="sidebar__arrow icon bg-arrow"></div>
            </li>
            <li class="sidebar__item">
              <div class="sidebar__icon6 icon"></div>
              <div class="sidebar__name">
                <p class="sidebar__text">Báo cáo</p>
              </div>
            </li>
            <div class="box__sidebar"></div>
            <li class="sidebar__item">
              <div class="sidebar__icon7 icon"></div>
              <div class="sidebar__name">
                <p class="sidebar__text">Danh mục</p>
              </div>
              <div class="sidebar__arrow icon bg-arrow"></div>
            </li>
            <li class="sidebar__item">
              <div class="sidebar__icon8 icon"></div>
              <div class="sidebar__name">
                <p class="sidebar__text">Thiết lập</p>
              </div>
              <div class="sidebar__arrow icon bg-arrow sidebar__less-icon"></div>
            </li>
            <div class="box__sidebar"></div>
            <li class="sidebar__item">
              <div class="sidebar__icon9 icon"></div>
              <div class="sidebar__name">
                <p class="sidebar__text">Hướng dẫn</p>
              </div>
              <div class="sidebar__arrow icon bg-arrow"></div>
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
        <div class="sidebar__btn bb-right">
          <div class="btn__sidebar btn-icon">
            <div class="sidebar__btn-icon icon"></div>
            <div class="sidebar__btn-text">Thu gọn</div>
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
<style scoped>
@import url("../assets/styles/layout/sidebar.css");
@import url("../assets/styles/component/sidebarmenu.css");
</style>