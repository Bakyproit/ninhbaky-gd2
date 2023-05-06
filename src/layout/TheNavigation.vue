<template>
     <!-- Navigation bar -->
      <div class="navigation flex">
        <div class="flex">
          <div class="navigation__menu icon m-4"></div>
          <div class="navigation__logo my-2.5">
            <img class="w-9 h-9" src="../assets/img/ic_cegoLogo_new.89475e3e.svg" alt="" />
          </div>
          <div class="my-4 mr-9 ml-2 ">
            <h1 class="text-xl font-bold">MISA CeGov</h1>
          </div>
        </div>
        <div class="flex">
          <!-- notification -->
          <div class="navigation__notification rounded-full icon">
            <div class="navigation__note-notification box-content p-2.5 rounded-lg ">
              <p class="text-sm">Thông báo</p>
            </div>
          </div>
          <div class="navigation__right-notification-list">
            <div class="navigation__right-notification-header">
              <h1 class="navigation__right-notification-title text-title">Thông báo</h1>
              <div class="navigation__right-notification-header-all">
                <div class="navigation__right-notification-all">
                  <p class="navigation__right-notification-all-title">Tất cả</p>
                  <div class="navigation__right-notification-all-icon icon">
                    <ul class="navigation__right-notification-all-list">
                      <div class="navigation__right-notification-all-item">Tất cả</div>
                      <div class="navigation__right-notification-all-item">Chưa xem</div>
                      <div class="navigation__right-notification-all-item bb-right">Đã xem</div>
                    </ul>
                  </div>
                </div>
                <div
                  class="navigation__right-notification-header-all-icon icon"
                  title="Đánh dấu tất cả đã đọc"
                ></div>
              </div>
            </div>
            <div class="navigation__right-notification-filter">
              <div
                class="navigation__right-notification-filter-item navigation__right-notification-filter-item--active"
              >
                Tất cả (99+)
              </div>
              <div class="navigation__right-notification-filter-item">Hoạt động (9)</div>
              <div class="navigation__right-notification-filter-item">Hệ thống (81)</div>
            </div>

            <div class="navigation__right-notification-item-list">
              <div
                class="navigation__right-notification-item navigation__right-notification-item--active"
              >
                <div class="navigation__right-notification-item-icon item-icon"></div>
                <div class="navigation__right-notification-item-content">
                  <p class="navigation__right-notification-item-title">
                    <b>UBND Tỉnh CeGov</b> ban hành quyết định số <b>163/QD-UBND</b> , quyết định
                    ngày <b>04/10/2022</b> khen thưởng
                    <b
                      >Phong trào Thi đua thực hiện thắng lợi nhiệm vụ Kinh tế - Xã hội tỉnh CeGov
                      năm 2022</b
                    >
                  </p>
                  <div class="navigation__right-notification-item-time">6 tháng</div>
                </div>
              </div>
            </div>
          </div>
          <!-- notification -->
          <!-- instruct -->
          <div class="navigation__instruct rounded-full icon">
            <div class="navigation__note-instruct box-content p-2.5 rounded-lg ">
              <p class="text-sm">Hướng dẫn</p>
            </div>
          </div>
          <!-- intruct -->
          <!-- regulations -->
          <div class="navigation__regulations rounded-full icon">
            <div class="navigation__note-regulations box-content p-2.5 rounded-lg">
              <p class="text-sm">Văn bản quy định</p>
            </div>
          </div>
          <!-- regulatios -->
          <!-- setting -->
          <div class="navigation__setting rounded-full icon">
            <div class="navigation__note-setting box-content p-2.5 rounded-lg">
              <p class="text-sm">Thiết lập hệ thống</p>
            </div>
            <div class="navigation__setting-list">
              <p class="navigation__setting-title block py-3 px-6 font-bold text-base">Thiết lập hệ thống</p>
              <ul class="my-4">
                <li class="navigation__setting-item py-3 px-6 text-base">Thông tin đơn vị</li>
                <li class="navigation__setting-item py-3 px-6 text-base">Lịch sử thỏa thuận</li>
                <li class="navigation__setting-item py-3 px-6 text-base">Người dùng - vai trò</li>
                <li class="navigation__setting-item py-3 px-6 text-base">Gia hạn phần mềm</li>
              </ul>
            </div>
          </div>
          <!-- setting -->
          <!-- AVATAR -->
          <div class="navigation__avatar w-8 h-8 my-3 mx-4">
            <img
             class="rounded-full"
              src="https://id.misa.vn/image/getavatar?userId=74c75e29-bc30-4210-87e2-d61a38f91a21&width=64&height=64"
              alt=""
            />
          </div>
          <!-- usermenu -->
          <div class="navigation__avatar-menu rounded-lg">
            <div class="w-16 h-16 mx-auto mt-6 mb-3 ">
              <img
                class="rounded-full"
                src="https://id.misa.vn/image/getavatar?userId=74c75e29-bc30-4210-87e2-d61a38f91a21&width=64&height=64"
                alt=""
              />
            </div>
            <h1 class="text-title text-center text-xl">NINH BÁ KỶ</h1>
            <p class="navigation__avatar-email mt-1 text-sm text-center">baky2311@gmail.com</p>
            <div class="my-4 mx-6">
              <div class="flex justify-between mb-2">
                <p class="navigation__avatar-text font-medium text-sm">Hoàn thiện hồ sơ</p>
                <p class="navigation__avatar-update text-sm font-normal">Cập nhật</p>
              </div>
              <div class="navigation__avatar-scroll">
                <div class="navigation__avatar-scroll-item"></div>
              </div>
            </div>
            <div class="navigation__avatar-company mx-6 mb-4">
              <input
                type="text"
                placeholder="Công ty cổ phần MISA"
                class="navigation__avatar-company-input active inputfield rounded"
              />
              <div class="navigation__avatar-company-icon w-5 h-5"></div>
            </div>
            <ul class="">
              <li class="navigation__avatar-item flex py-2.5 px-6">
                <div class="navigation__avatar-icon1 w-5 h-5"></div>
                <div class="navigation__avatar-name ml-2">
                  <p class="navigation__avatar-text leading-5">Đổi mật khẩu</p>
                </div>
              </li>
              <li class="navigation__avatar-item flex py-2.5 px-6">
                <div class="navigation__avatar-icon2 w-5 h-5"></div>
                <div class="navigation__avatar-name ml-2">
                  <p class="navigation__avatar-text leading-5">Thiết lập tài khoản</p>
                </div>
              </li>
              <li class="navigation__avatar-item flex py-2.5 px-6">
                <div class="navigation__avatar-icon3 w-5 h-5"></div>
                <div class="navigation__avatar-name ml-2">
                  <p class="navigation__avatar-text leading-5">Thiết lập bảo mật</p>
                </div>
              </li>
              <li class="navigation__avatar-item flex py-2.5 px-6">
                <div class="navigation__avatar-icon4 w-5 h-5"></div>
                <div class="navigation__avatar-name ml-2">
                  <p class="navigation__avatar-text leading-5">
                    Giới thiệu - tích điểm
                  </p>
                </div>
              </li>
            </ul>
            <div class="borbox mt-3"></div>
            <div class="navigation__avatar-btn">
              <div class="btn-icon btn__logout">
                <div class="navigation__avatar-btn-icon icon"></div>
                <div class="btn-text ml-2 text-center leading-6">
                  <p>Đăng xuất</p>
                </div>
              </div>
            </div>
            <div class="divs bb-right h-2"></div>
          </div>
          <!-- usermenu -->
        </div>
      </div>
      <!-- End Navigation bar -->
</template>
<script>
export default {
    name : "TheNavigation",
}
</script>
<style>
@import url('../assets/styles/layout/navigation.css'); 
</style>