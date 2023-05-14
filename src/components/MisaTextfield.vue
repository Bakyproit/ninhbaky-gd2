<template>
  <div class="textfield">
    <input
      class="inputfield"
      :type="type"
      :placeholder="placeholder"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MisaTextfield",
  props : {
    type : {
      type : String ,
    },
     placeholder : { 
      type : String , 
    },
  },
};
</script>

<style>
.textfield{
  width: 260px;
  position: relative;
}
.inputfield {
  width: 100%;
  height: 36px;
  padding: 8px 50px 8px 12px;
  color: var(--color-title);
  background: var(--white-color);
  outline: none;
  border: 1px solid var(--border);
  box-sizing: border-box;
  border-radius: var(--border-radius);
}
.inputfield:focus {
  border: 1px solid var(--color-blue5);
}
.inputfield:hover {
  border: 1px solid var(--color-blue5);
}
::placeholder{
  color : var(--color-grey5) ;
}

.input__prev {
  background: var(--url-image2) no-repeat -170px -2px;
}
</style>
