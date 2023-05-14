<template>
  <!--popup filter  -->
  <div class="popup__filter">
    <!-- popup header -->
    <div class="popup__header">
      <p class="popup__title">{{ titlePopup }}</p>
      <div class="popup__close icon" @click="onChangePopup"></div>
    </div>
    <!-- popup content -->
    <div class="popup__content">
      <misa-droplist
        :for="people"
        label="Đổi tượng khen thưởng"
        placeholder="Tất cả"
      ></misa-droplist>
      <misa-droplist
        :for="grant"
        label="Cấp khen thưởng"
        placeholder="Tất cả"
      ></misa-droplist>
      <misa-droplist
        :for="movement"
        label="Loại phong trào"
        placeholder="Tất cả"
      ></misa-droplist>
      <misa-droplist
        :for="status"
        label="Trạng thái"
        placeholder="Tất cả"
      ></misa-droplist>
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
</template>
<script>
import MisaButton from "../components/MisaButton.vue";
import MisaDroplist from "@/components/MisaDroplist.vue";
export default {
    name : "MisaPopup" , 
    components : {
        MisaButton , 
        MisaDroplist ,
    },
    data(){
        return{

        }
    },
    props : {
        titlePopup : {
          type :String ,
        },
        onChangePopup:{
          type : Function ,
        }
    },
};
</script>
<style>
.popup__filter{
    width: 416px;
    background: var(--white-color);
    border-radius: var(--border-radius);
    box-shadow: 0 0 16px rgba(23, 27, 42, 0.24);
    z-index: 100;
    position: absolute;
    top:44px ; 
    right: -55px;
}
.popup__filter::before {
    content: "";
    border: 10px solid;
    border-color: transparent transparent var(--white-color) transparent;
    position: absolute;
    top: -18px;
    right: 100px;
}

.popup__header{
    margin: 24px 24px 0 24px;
    display: flex;
    justify-content: space-between;
}
.popup__title{
    font-size: 24px;
    font-weight: bold;
    align-items: left;
    color : var(--color-tilte) ;
}
.popup__close{
    background: var(--url-image2) no-repeat -192px -44px;
}
.popup__content{
    margin: 24px;
}
.box{
    border-top : 1px solid #E0E0E0 ;
}

.popup__footer{
    display: flex;
    justify-content: flex-end;
    padding: 12px 24px;
    background: #fbfbfe;
}

.btn__cancel{
    padding : 8px 28px; 
    border : 1px solid var(--bg-li) ;
}
.btn__cancel:hover { 
    background: var(--bg-li);
}

.btn__apply{
    margin-left: 8px;
    border : 1px solid var(--color-blue5) ;
}
</style>
