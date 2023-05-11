<template>
  <button 
      type="" 
      :class="`btn__${this.type}`" 
      :style="{background , color }"
    >
      <slot></slot>
    <p>{{ label }}</p>
  </button>
</template>
<script>
export default {
  name: "MisaButton",
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: 'icon'
    },
    color : { 
      type : String , 
    },
    background : {
      type :String,
    },
    label : {
      type : String ,
    }
  },
};
</script>
<style>
.btn__icon {
  height: 36px;
  display: flex;
  justify-content: center;
  padding: 8px 16px 8px 12px;
  background: var(--white-color);
  border-radius: var(--border-radius);
  border: 1px solid var(--border);
  cursor: pointer;
  box-sizing: border-box;
  line-height: 20px;
  text-align: center;
}

/* main */
.btn__main {
  height: 36px;
  border-radius: var(--border-radius);
  background: var(--white-color);
  color: var(--color-primary-text) ;
  padding: 8px 16px;
  cursor: pointer;
  line-height: 20px;
  text-align: center;
}

/* link */
.btn__link {
  height: 36px;
  padding: 8px 0;
  border: none;
  background: var(--bg-main);
  color: var(--color-blue5);
  line-height: 20px;
  text-align: center;
}
</style>

