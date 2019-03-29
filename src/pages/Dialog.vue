<template>
<div>
	<p>{{msg}}</p>
  <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
    弹窗1
  </button>
<!--   <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal-info">
   弹窗2
  </button>
  <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal-danger">
    弹窗3
  </button>
  <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal-warning">
    弹窗4
  </button>
  <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modal-success">
    弹窗5
  </button> -->
  <AlertMsg :msgData="msgData" :cancel="cancel" :confirm="confirm">
<!--     <template v-slot:default="res">
    <div>
            <span>{{res.adata}}</span>
       </div>
    </template> -->  
    <form role="form">
      <div class="form-group">
        <label>Text</label>
        <input type="text" class="form-control" placeholder="Enter ...">
      </div>
      <div class="form-group">
        <label>Text Disabled</label>
        <input type="text" class="form-control" placeholder="Enter ..." disabled>
      </div>

      <!-- textarea -->
      <div class="form-group">
        <label>Textarea</label>
        <textarea class="form-control" rows="3" placeholder="Enter ..."></textarea>
      </div>
      <div class="form-group">
        <label>Textarea Disabled</label>
        <textarea class="form-control" rows="3" placeholder="Enter ..." disabled></textarea>
      </div>

      <!-- input states -->
      <div class="form-group has-success">
        <label class="control-label" for="inputSuccess"><i class="fa fa-check"></i> Input with success</label>
        <input type="text" class="form-control" id="inputSuccess" placeholder="Enter ...">
        <span class="help-block">Help block with success</span>
      </div>
      <div class="form-group has-warning">
        <label class="control-label" for="inputWarning"><i class="fa fa-bell-o"></i> Input with
          warning</label>
        <input type="text" class="form-control" id="inputWarning" placeholder="Enter ...">
        <span class="help-block">Help block with warning</span>
      </div>
      <div class="form-group has-error">
        <label class="control-label" for="inputError"><i class="fa fa-times-circle-o"></i> Input with
          error</label>
        <input type="text" class="form-control" id="inputError" placeholder="Enter ...">
        <span class="help-block">Help block with error</span>
      </div>

      <!-- checkbox -->
      <div class="form-group">
        <div class="checkbox">
          <label>
            <input type="checkbox">
            Checkbox 1
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input type="checkbox">
            Checkbox 2
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input type="checkbox" disabled>
            Checkbox disabled
          </label>
        </div>
      </div>

      <!-- radio -->
      <div class="form-group">
        <div class="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
            Option one is this and that&mdash;be sure to include why it's great
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
            Option two can be something else and selecting it will deselect option one
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
            Option three is disabled
          </label>
        </div>
      </div>

      <!-- select -->
      <div class="form-group">
        <label>Select</label>
        <select class="form-control">
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
          <option>option 4</option>
          <option>option 5</option>
        </select>
      </div>
      <div class="form-group">
        <label>Select Disabled</label>
        <select class="form-control" disabled>
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
          <option>option 4</option>
          <option>option 5</option>
        </select>
      </div>

      <!-- Select multiple-->
      <div class="form-group">
        <label>Select Multiple</label>
        <select multiple class="form-control">
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
          <option>option 4</option>
          <option>option 5</option>
        </select>
      </div>
      <div class="form-group">
        <label>Select Multiple Disabled</label>
        <select multiple class="form-control" disabled>
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
          <option>option 4</option>
          <option>option 5</option>
        </select>
      </div>
    </form>
  </AlertMsg>
  <!-- 使用说明 -->
  <div>
    <h4>使用规范:</h4>
    <h5>{{demo}}</h5>
    <span>1.传递参数:
    </span>
    </br>
    <!-- paramsDemo -->
    <textarea :value="paramsDemo" style="resize:none;width:500px;height:400px;"></textarea>
    </br>
    <span>2.左、右按钮点击回调方法:返回true关闭弹窗,false请求失败。
    </span>
    </br>
    <!-- callbackDemo -->
    <textarea :value="callbackDemo" style="resize:none;width:500px;height:400px;"></textarea>  
    </br>
    <span>3.父组件获取子组件信息:</span></br>
      <!-- dialogDemo代码 -->
    <textarea :value="dialogDemo" style="resize:none;width:500px;height:400px;"></textarea>  
    </br>
    <span>4.在弹窗内插入表单:
    </span></br>
    <!-- formDemo -->
    <textarea :value="formDemo" style="resize:none;width:500px;height:400px;"></textarea>
  </div>

</div>
</template>

<script>

import AlertMsg from '../components/AlertMsg';
import Tools from '../lib/Tools';

var Ts = Tools.getInstance();

export default {
  name: 'Dialog',
  components:{AlertMsg},
  data () {
    return {
      msg: '我是Dialog',
      isShow:false,
      demo:'<AlertMsg :msgData="msgData" :cancel="cancel" :confirm="confirm"></AlertMsg>',
      paramsDemo:
        'data () {\n'+
          'return {\n'+
            'msgData :{\n'+
              'title:标题,\n'+
              'content:内容,\n'+
              'leftBtnTitle:取消,\n'+
              'rightBtnTitle:确定\n'+
            '}\n'+
          '}',
      callbackDemo:
            'methods:{\n'+
            'cancel(){\n'+
              'alert(father_cancel);\n'+
            '},\n'+
            'confirm(){\n'+
              'return false;\n'+
            '}\n'+
          '}\n'
        ,
      dialogDemo:
        '<AlertMsg :msgData="msgData" :cancel="cancel" :confirm="confirm">\n'+
           '<template v-slot:default="res">\n'+
             '<div>\n'+
                   '<span>{{res.adata}}</span>\n'+
              '</div>\n'+
           '</template>\n'+
           '<AlertMsg>',
      formDemo:
            '<AlertMsg :msgData="msgData" :cancel="cancel" :confirm="confirm">\n'+
             '<form>\n'+
             '<div class="form-group">\n'+
                '<label>Text</label>\n'+
                '<input type="text" class="form-control" placeholder="Enter ...">\n'+
              '</div>\n'+
              '<div class="form-group">\n'+
                '<label>Text Disabled</label>\n'+
                '<input type="text" class="form-control" placeholder="Enter ..." disabled>\n'+
              '</div>\n'+
              '</form>\n'+
            '<AlertMsg>',
      msgData :{
        title:'标题',
        content:'',
        leftBtnTitle:'取消',
        rightBtnTitle:'确定'
      },
      isShow:true
    }
  },
  methods:{
    cancel(){
      alert('father_cancel');
    },
    confirm(){
      return false;
    }
  }
}
</script>

<style scoped>

</style>
