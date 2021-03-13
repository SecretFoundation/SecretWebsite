<template>
  <div class="card">
    <div class="card__header">
      <slot name="header"></slot>
    </div>
    <div class="card__icon" ref="icon" v-bind:class="{invertIconColor: isLightMode}">
      <slot name="icon"></slot>
    </div>
    <div class="card__description">
      <slot name="description"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
    //TODO
    //I'm thinking that isLightMode needs to be set as a prop with a value passed in from
    //data object darkLightModeStat from BaseLayout.vue but I'm really not sure...  -Austin
    isLightMode: false
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-rows: 58px 90px auto;
  width: 100%;
  max-width: rem(378px);
  height: 100%;
  border: 3px solid var(--theme-fg);
  border-radius: 22px;
  row-gap: 10px;

  &__header {
    padding: $gutter $gutter 0;
    margin-bottom:0;

    h4{
      font-size: 21px;
    }
  }
  &__icon{
      p{
          text-align: center;
          margin-bottom:0;
          img{
              height:90px;
              width:90px;    
            }
      height:90px;
    }  
  }
.invertColor{
  p{
    img{
      filter:invert(100%);
    }
  }
}

  &__description {
    height: 100%;
    padding: 0 $gutter $gutter $gutter;
    p {
      height: 100%;
      font-size: $secondary-font-size;
      margin-bottom:0px;
    }
  }

  @media (max-width:1199px){
    grid-template-rows: 80px 90px auto;
  }

 @media (max-width:1007px){
      grid-template-rows: 58px 90px auto;
  }

  }
</style>
