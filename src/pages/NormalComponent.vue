<template>
  <div>
    <!-- 级联组件示范 -->
    <div>
      <div class="block">
        <span class="demonstration">默认 click 触发子菜单</span>
        <!-- Cascader为级联组件 -->
        <Cascader :allDate="allDate"></Cascader>
      </div>

      <h4>代码示范:</h4>
      <!-- 示例 -->
      <textarea :value="tpl" style="resize:none;width:500px;height:400px;"></textarea>
      <script type="text/html" id="tpl">
        <template>
          <div>
            <div class="block">
              <span class="demonstration">默认 click 触发子菜单</span>
              <!-- Cascader为级联组件 -->
              <Cascader :allDate="allDate"></Cascader>
            </div>
          </div>
        </template>

        <script>

          import Cascader from '../components/Cascader';
          import Tools from '../lib/Tools';

          let ts = Tools.getInstance();

          export default {
            components:{Cascader},
            data() {
              return {
                allDate:{
                  options: [{
                  value: 'zhinan',
                  label: '指南',
                  children: [{
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [{
                      value: 'yizhi',
                      label: '一致'
                    }, {
                      value: 'fankui',
                      label: '反馈'
                    }, {
                      value: 'xiaolv',
                      label: '效率'
                    }, {
                      value: 'kekong',
                      label: '可控'
                    }]
                  }, {
                    value: 'daohang',
                    label: '导航',
                    children: [{
                      value: 'cexiangdaohang',
                      label: '侧向导航'
                    }, {
                      value: 'dingbudaohang',
                      label: '顶部导航'
                    }]
                  }]
                }, {
                  value: 'zujian',
                  label: '组件',
                  children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                      value: 'layout',
                      label: 'Layout 布局'
                    }, {
                      value: 'color',
                      label: 'Color 色彩'
                    }, {
                      value: 'typography',
                      label: 'Typography 字体'
                    }, {
                      value: 'icon',
                      label: 'Icon 图标'
                    }, {
                      value: 'button',
                      label: 'Button 按钮'
                    }]
                  }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                      value: 'radio',
                      label: 'Radio 单选框'
                    }, {
                      value: 'checkbox',
                      label: 'Checkbox 多选框'
                    }, {
                      value: 'input',
                      label: 'Input 输入框'
                    }, {
                      value: 'input-number',
                      label: 'InputNumber 计数器'
                    }, {
                      value: 'select',
                      label: 'Select 选择器'
                    }, {
                      value: 'cascader',
                      label: 'Cascader 级联选择器'
                    }, {
                      value: 'switch',
                      label: 'Switch 开关'
                    }, {
                      value: 'slider',
                      label: 'Slider 滑块'
                    }, {
                      value: 'time-picker',
                      label: 'TimePicker 时间选择器'
                    }, {
                      value: 'date-picker',
                      label: 'DatePicker 日期选择器'
                    }, {
                      value: 'datetime-picker',
                      label: 'DateTimePicker 日期时间选择器'
                    }, {
                      value: 'upload',
                      label: 'Upload 上传'
                    }, {
                      value: 'rate',
                      label: 'Rate 评分'
                    }, {
                      value: 'form',
                      label: 'Form 表单'
                    }]
                  }, {
                    value: 'data',
                    label: 'Data',
                    children: [{
                      value: 'table',
                      label: 'Table 表格'
                    }, {
                      value: 'tag',
                      label: 'Tag 标签'
                    }, {
                      value: 'progress',
                      label: 'Progress 进度条'
                    }, {
                      value: 'tree',
                      label: 'Tree 树形控件'
                    }, {
                      value: 'pagination',
                      label: 'Pagination 分页'
                    }, {
                      value: 'badge',
                      label: 'Badge 标记'
                    }]
                  }, {
                    value: 'notice',
                    label: 'Notice',
                    children: [{
                      value: 'alert',
                      label: 'Alert 警告'
                    }, {
                      value: 'loading',
                      label: 'Loading 加载'
                    }, {
                      value: 'message',
                      label: 'Message 消息提示'
                    }, {
                      value: 'message-box',
                      label: 'MessageBox 弹框'
                    }, {
                      value: 'notification',
                      label: 'Notification 通知'
                    }]
                  }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                      value: 'menu',
                      label: 'NavMenu 导航菜单'
                    }, {
                      value: 'tabs',
                      label: 'Tabs 标签页'
                    }, {
                      value: 'breadcrumb',
                      label: 'Breadcrumb 面包屑'
                    }, {
                      value: 'dropdown',
                      label: 'Dropdown 下拉菜单'
                    }, {
                      value: 'steps',
                      label: 'Steps 步骤条'
                    }]
                  }, {
                    value: 'others',
                    label: 'Others',
                    children: [{
                      value: 'dialog',
                      label: 'Dialog 对话框'
                    }, {
                      value: 'tooltip',
                      label: 'Tooltip 文字提示'
                    }, {
                      value: 'popover',
                      label: 'Popover 弹出框'
                    }, {
                      value: 'card',
                      label: 'Card 卡片'
                    }, {
                      value: 'carousel',
                      label: 'Carousel 走马灯'
                    }, {
                      value: 'collapse',
                      label: 'Collapse 折叠面板'
                    }]
                  }]
                }, {
                  value: 'ziyuan',
                  label: '资源',
                  children: [{
                    value: 'axure',
                    label: 'Axure Components'
                  }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                  }, {
                    value: 'jiaohu',
                    label: '组件交互文档'
                  }]
                }],
                selectedOptions: []
                } 
              };
            },
            methods: {
            },
            mounted:function(){
              ts.on("params",function(res){
                //...
              })
            }
          };
        </script>
      </script>
    </div>
    <!-- 多选组件示范 -->
    <div>
      <span>多选组件实例:</span>
      <Multiple-choice :multiChoiceDate="multiChoiceDate"></Multiple-choice>
    </div>  
  </div>
</template>

<script>

  import Cascader from '../components/Cascader';
  import MultipleChoice from '../components/MultipleChoice';
  import Tools from '../lib/Tools';

  let ts = Tools.getInstance();

  export default {
    components:{Cascader,MultipleChoice},
    data() {
      return {
        tpl:"",
        allDate:{
          options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: []
        },
        multiChoiceDate:{
          options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: []
        } 
      };
    },
    methods: {
    },
    mounted:function(){
      //监听级联选择选中的值
      ts.on("params",function(res){
        //...
      });
      // 监听多选select选中的值
      ts.on("slectParams",function(res){
        alert(1);
        // alert(JSON.stringify(res));
      });
      this.tpl = $("#tpl").text();
    }
  };
</script>