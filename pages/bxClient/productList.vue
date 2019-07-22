<template>
    <div>
        <div class="top">
          <span class="t-more"></span>
          <ul class="fw t-tab">
            <li class="cur"><span>全部</span></li>
            <li class=""><span>全部全部</span></li>
            <li class=""><span>全部全部</span></li>
            <li class=""><span>全部全部</span></li>
            <li class=""><span>全部全部</span></li>
            <li class=""><span>全部全部</span></li>
          </ul>
        </div>
        <div v-for="item in items" :key="item.id" class="card">
          <p class="font-34 clearfix card-t1">{{item.title}}<span class="card-logo"></span></p>
          <p class="card-p1">
              {{item.context}}
          </p>
          <div class="clearfix card-b">
            <span class="c card-tag" v-for="tag in item.tagList" :key="tag.id">{{tag.text}}</span>
            <span class="c card-btn">
              查看详情
            </span>
          </div>
        </div>
        <div class="card">
          <p class="font-34 clearfix card-t1">标题标题标题标题标题标题标题标题<span class="card-logo"></span></p>
          <p class="card-p1 text-overflow-3">
              描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
          </p>
          <div class="clearfix card-b">
            <span class="c card-tag">最速度多少紧急</span>
            <span class="c card-tag">最速度多少</span>
            <span class="c card-tag">最速度多少</span>
            <span class="c card-btn">
              查看详情
            </span>
          </div>
        </div>
    </div>
</template>

<style scoped lang="css">
    @import '~/assets/css/index.css';
</style>
<script>

export default {
    data: ()=>{
      return {
        items:[]
      }
    },
    mounted(){
      this.$api.getBxList()
      .then(res=>{
        this.items = res.result;
      })
      .catch(err=>{
        alert(err);
      })
      
    }
}
</script>
