<template lang="">
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
        <span class="number__to">1</span>-<span class="number__from">12</span>
        {{ record }}
      </p>
      <div class="prev">
        <div class="prev__left icon"></div>
        <div class="prev__right icon"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MisaPagination",
  data() {
    return {
      sum: "Tổng số :",
      record: "Bản ghi",
      page: "Số bản ghi / trang",
    };
  },
  props: {},
};
</script>
<style>

/* pagination */
.pagination{
    height: 48px;
    padding: 0 16px ;
    border-left : 1px solid #E0E0E0 ;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background: #FAFAFA;
}
/* left */
.pagination__left{
    display: flex;
}
.pagination__left p,
.pagigation__right p{
    padding: 12px 0px ;
    font-weight: 400;
    line-height: 24px;

}
.pagination__left span,
.pagigation__right span{
    padding : 12px 8px ;
    font-weight: 700;
    line-height: 24px;
}
/* right */
.pagigation__right{
    display: flex;
    justify-content: space-between;
}
.drop{
    width: 74px;
    height: 24px;
    margin  : 12px 16px;
    border : 1px solid #E0E0E0 ;
    border-radius: var(--border-radius);
    background: #fff;
    display: flex;
    justify-content: space-between;
    position: relative;
}
.drop:hover{
    border : 1px solid var(--color-border) ;
}

.drop__number .number{
    width: 24px;
    margin: 0;
    padding: 0;
    padding-left: 8px;
}
.drop__btn{
    margin: 5px;
}
.drop__icon{
    background: var(--url-image2) no-repeat -170px -48px;
    position: absolute;
    top : 0px ; 
    right :8px; 
} 
.drop:hover .drop__item{
    display: block;
}

.drop__item{
   width: 100% ;
   background: var(--white-color);
   box-shadow: 0 0 16px rgba(23, 27, 42, 0.24);
   box-sizing: border-box;
   border-radius: var(--border-radius) ;
   padding: 8px;
   position: absolute;
   top: -146px;
   left: 0;
   display: none;
}
.drop__item1{
    padding: 8px ;
}
.drop__item1:hover{
    background: #e0ebff;
    border-radius: var(--border-radius) ;
}

.prev{
    padding: 12px 0;
    margin-left: 16px;
    display: flex;
}
.prev__left{
    background: var(--url-image2) no-repeat -26px -159px;
    margin-right: 16px;
}

.prev__right{
    background: var(--url-image2) no-repeat -47px -160px;
}
</style>
