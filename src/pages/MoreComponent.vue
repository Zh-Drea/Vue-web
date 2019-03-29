<template>
  <div>
    <h4>vue-easytable使用实例,详情见官网:http://doc.huangsw.com/vue-easytable/app.html#/intro。支持响应式，支持行修改数据，支持分页，支持数据筛选等</h4>
    <v-table
        is-horizontal-resize
        :columns="columns" 
        style="width:100%"
        :table-data="tableData"
    ></v-table>
    <h4>npm安装:vue-easytable:npm install vue-easytable --save-dev</h4>
    <h4>代码示范:</h4>
    <!-- 示例 -->
    <textarea :value="tpl" style="resize:none;width:500px;height:400px;"></textarea>
    <script type="text/html" id="tpl">
      <template>
        <div>
          <v-table
              is-horizontal-resize
              :columns="columns"
              style="width:100%"
              :table-data="tableData"
          ></v-table>
        </div>
      </template>
      <script>
          export default{
              data() {
                  return {
                      tableData: [
                          {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                          {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                          {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
                          {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
                          {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
                       ],
                      columns: [
                          {field: 'name', title:'姓名', width: 100, titleAlign: 'center',columnAlign:'center',isResize:true},
                          {field: 'tel', title: '手机号码', width: 260, titleAlign: 'center',columnAlign:'center',isResize:true},
                          {field: 'hobby', title: '爱好', width: 330, titleAlign: 'center',columnAlign:'center',isResize:true},
                          {field: 'address', title: '地址', width: 308, titleAlign: 'center',columnAlign:'left',isResize:true}
                      ]
                  }
              }
          }
      </script>
    </script>
  </div>
</template>
<script>
    export default{
        data() {
            return {
                tpl:"",
                tableData: [
                    {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                    {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                    {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
                    {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
                    {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
                 ],
                columns: [
                    {field: 'name', title:'姓名', width: 100, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'tel', title: '手机号码', width: 260, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'hobby', title: '爱好', width: 330, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'address', title: '地址', width: 308, titleAlign: 'center',columnAlign:'left',isResize:true}
                ]
            }
        },
        mounted:function(){
          this.tpl = $("#tpl").text();
        }
    }
</script>