<template>
    
    <!--add emulation  -->
    <form class="popup addemulation">
      <!-- popup header -->
      <div class="popup__header">
        <p class="popup__title">Thêm danh hiệu thi đua</p>
        <div class="popup__ask icon"></div>
        <div class="popup__close icon"></div>
      </div>
      <!-- popup content -->
      <div class="popup__content">
        <div class="dropdown">
          <label for=""
            ><p>Tên danh hiệu thi đua</p>
            <input type="text" placeholder="Nhập tên danh hiệu thi đua" />
            <p class="text__error">Tên danh hiệu thi đua không được để trống</p>
          </label>
        </div>
        <div class="popup__type">
          <div class="popup__input">
            <div class="dropdown">
              <label for=""
                ><p>Mã danh hiệu</p>
                <input type="text" placeholder="Nhập mã danh hiệu" />
                <p class="text__error">Mã danh hiệu không được để trống</p>
              </label>
            </div>
            <div class="dropdown">
              <label for=""
                >Cấp khen thưởng
                <input type="text" placeholder="Tất cả" />
                <div class="dropdown__icon icon"></div>
                <p class="text__error">Cấp khen thưởng không được để trống</p>
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
          </div>
          <div class="popup__checkbox">
            <div class="popup__check-user">
              <label for="">Đối tượng khen thưởng</label>
              <div class="check__name">
                <div class="popup__box">
                  <label for="" class="box__check">
                    <input type="checkbox" />
                  </label>
                  <p>Cá nhân</p>
                </div>
  
                <div class="popup__box">
                  <label for="" class="box__check">
                    <input type="checkbox" />
                  </label>
                  <p>Tập thể</p>
                </div>
              </div>
              <p class="text__error">Đối tượng khen thưởng không được để trống</p>
            </div>
            <div class="popup__check-movement">
              <label for="">Loại phong trào áp dụng</label>
              <div class="check__name">
                <div class="popup__box">
                  <label for="" class="box__check">
                    <input type="checkbox" />
                  </label>
                  <p>Thường xuyên</p>
                </div>
  
                <div class="popup__box">
                  <label for="" class="box__check">
                    <input type="checkbox" />
                  </label>
                  <p>Theo đợt</p>
                </div>
              </div>
              <p class="text__error">Loại phong trào áp dụng không được để trống</p>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <label for=""><p>Ghi chú</p> </label>
          <div class="text-note">
            <textarea rows="4" placeholder="Nhập ghi chú"></textarea>
          </div>
        </div>
      </div>
      <div class="box"></div>
      <div class="popup__footer popup__footer-bg">
        <button
          class="btn__cancel btn__cancel-add btn__bg btn__main btn__text btn__focus"
        >
          <p>Hủy</p>
        </button>
        <button class="popup__btn-add btn__main btn__text btn__focus">
          <p>Lưu $ thêm mới</p>
        </button>
        <button class="btn__cancel btn__apply btn__main btn__text btn__focus">
          <p>Lưu</p>
        </button>
      </div>
    </form>
    <!--add emulation  -->
  </template>
  <script>
  export default {
    name: "TheModal",
  
  };
  </script>
  <style>
  @import url("../assets/styles/component/addemulation.css");
  </style>
  