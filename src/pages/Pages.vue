<template>
<div>
	<p>{{msg}}</p>
</div>
</template>

<script>
export default {
  name: 'Pages',
  data () {
    return {
      msg: '我是Pages'
    }
  },
  methods:{
    
  },
  mounted:function(){
  	console.log("Pages已mounted");
  },
}
</script>

<style scoped>

</style>
