<!-- 弹窗 -->
<template>
<div>
	<section class="content">
        <div class="modal fade" id="modal-default">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{msgData.title}}</h4>
              </div>
              <div class="modal-body">
                <!-- <slot :adata="adata"></slot> -->
                <slot></slot>
                <p v-if="msgData.content">{{msgData.content}}</p>
              </div>
              <div class="modal-footer">
                <button type="button" v-if="msgData.leftBtnTitle" class="btn btn-default pull-left" 
                  data-dismiss="modal" @click="leftClick">{{msgData.leftBtnTitle}}
                </button>
                <button type="button" v-if="msgData.rightBtnTitle" class="btn btn-primary" @click="rightClick">{{msgData.rightBtnTitle}}</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->

        <div class="modal modal-primary fade" id="modal-primary">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{msgData.title}}</h4>
              </div>
              <div class="modal-body">
                <slot></slot>
                <p v-if="msgData.content">{{msgData.content}}</p>
              </div>
              <div class="modal-footer">
                <button type="button" v-if="msgData.leftBtnTitle" class="btn btn-outline pull-left" data-dismiss="modal"
                   @click="leftClick">{{msgData.leftBtnTitle}}
                 </button>
                <button type="button" v-if="msgData.rightBtnTitle" class="btn btn-primary" @click="rightClick">{{msgData.rightBtnTitle}}</button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->

        <div class="modal modal-info fade" id="modal-info">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{msgData.title}}</h4>
              </div>
              <div class="modal-body">
               <slot></slot>
                <p v-if="msgData.content">{{msgData.content}}</p>
              </div>
              <div class="modal-footer">
                <button type="button" v-if="msgData.leftBtnTitle" class="btn btn-outline pull-left" data-dismiss="modal" 
                  @click="leftClick">{{msgData.leftBtnTitle}}
                </button>
                <button type="button" v-if="msgData.rightBtnTitle"  class="btn btn-outline"
                 @click="rightClick">{{msgData.rightBtnTitle}}
                </button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->

        <div class="modal modal-warning fade" id="modal-warning">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{msgData.title}}</h4>
              </div>
              <div class="modal-body">
                <slot></slot>
                <p v-if="msgData.content">{{msgData.content}}</p>
              </div>
              <div class="modal-footer">
                <button type="button" v-if="msgData.leftBtnTitle" class="btn btn-outline pull-left" data-dismiss="modal"
                   @click="leftClick">{{msgData.leftBtnTitle}}</button>
                <button type="button" v-if="msgData.rightBtnTitle" class="btn btn-outline"
                   @click="rightClick">{{msgData.rightBtnTitle}}
                 </button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->

        <div class="modal modal-success fade" id="modal-success">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{msgData.title}}</h4>
              </div>
              <div class="modal-body">
                <slot></slot>
                <p v-if="msgData.content">{{msgData.content}}</p>
              </div>
              <div class="modal-footer">
                <button type="button" v-if="msgData.leftBtnTitle" class="btn btn-outline pull-left" data-dismiss="modal" 
                  @click="leftClick">{{msgData.leftBtnTitle}}
                </button>
                <button type="button" v-if="msgData.rightBtnTitle" class="btn btn-outline"
                  @click="rightClick">{{msgData.rightBtnTitle}}
                </button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->

        <div class="modal modal-danger fade" id="modal-danger">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{msgData.title}}</h4>
              </div>
              <div class="modal-body">
                <slot></slot>
                <p v-if="msgData.content">{{msgData.content}}</p>
              </div>
              <div class="modal-footer">
                <button type="button" v-if="msgData.leftBtnTitle" class="btn btn-outline pull-left" data-dismiss="modal" 
                  @click="leftClick">{{msgData.leftBtnTitle}}
                </button>
                <button type="button" v-if="msgData.rightBtnTitle" class="btn btn-outline"
                   @click="rightClick">{{msgData.rightBtnTitle}}
                 </button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
    </section>
</div>
</template>

<script>

export default {
  name: 'AlertMsg',
  props:['msgData',"cancel","confirm"],
  data () {
    return {
      adata:"hello"
    }
  },
  methods:{
    leftClick(){
      if (this.cancel) {
        this.cancel();
      }
    },
    rightClick(){
      if (this.confirm) {
        if(this.confirm()){
          $('.modal-footer').find("button").eq(1).attr('data-dismiss','modal');
        }
        else{
          alert('请求失败!')
        }
      }
    }
  },
  mounted:function(){
  	console.log("Dialog已mounted");
  },
}
</script>

<style scoped>

</style>
