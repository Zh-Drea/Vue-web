<template>
  <div>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      ref="upload"
      :multiple="true"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="successUpload"
      :auto-upload="false">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <el-button @click="handleConfirm">上传到服务器</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        console.log("数据"+file.url);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleConfirm(){
        this.$refs.upload.submit();
      },
      successUpload(response, file, fileList){
        console.log('1数据--------'+JSON.stringify(response));
        console.log('2数据--------'+JSON.stringify(file));
        console.log('3数据--------'+JSON.stringify(fileList));
      }
    },
    mounted:function(){
      $('.el-upload__input').css({'display':'none'})
    }
  }
</script>