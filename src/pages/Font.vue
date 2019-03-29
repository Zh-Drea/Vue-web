<template>
<div>
	<p>{{msg}}</p>
</div>
</template>

<script>
export default {
  name: 'Font',
  data () {
    return {
      msg: '我是Font'
    }
  },
  methods:{
    
  },
  mounted:function(){
  	console.log("Font已mounted");
  },
}
</script>

<style scoped>

</style>
