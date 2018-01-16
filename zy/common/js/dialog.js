var html = '<div class="dialog_box">'+
                '<transition name="custom-classes-transition"  enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">' +
                    '<div class="weui-mask weui-mask--visible" v-show="dialog"></div>'+
                '</transition>'+
                '<transition name="custom-classes-transition"  enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">'+
                    '<div class="weui-dialog weui-dialog--visible" v-show="dialog">'+
                        '<div class="weui-dialog__bd">下载逐鱼APP，对接广阔企业资源，<br>发现更多潜在商机。</div>'+
                        '<div class="weui-dialog__ft">'+
                            '<a href="javascript:;" class="weui-dialog__btn default" @click="showData()">取消</a>'+
                            '<a href="javascript:;" class="weui-dialog__btn primary">立刻下载</a>'+
                        '</div>'+
                    '</div>'+
                '</transition>'+
            '</div>';
             
        Vue.component('my-dialog', {
          props: ['dialog'],
          template: html,
           data: function () {
                return {
                    // myResult: this.dialog//data中新增字段
                };
            },
            // watch: {
            //     aaa(val) {
            //         this.myResult = val;//②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
            //     },
            //     myResult(val){
            //         this.$emit("on-result-change",val);//③组件内对myResult变更后向外部发送事件通知
            //     }
            // },
          methods: {
                showData: function(){
                    this.$emit('update:dialog',false)
                }
            }
        });