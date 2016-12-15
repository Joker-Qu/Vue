/**
 * Created by qujingkun on 16/12/15.
 */
var MyComponent = Vue.extend({
    props:['myMessage'],
    template:'#todoItemsTpl',
    data:function () {
        return {checked:false};
    },
    methods:{
        deleteItem:function () {
            this.$dispatch('deletemsg', this.myMessage);
        }
    }
});
Vue.component("my-component",MyComponent);
var vm = new Vue({
    el:"#app",
    data:{
        todos:[
            {text:'eat',checked:false,complicated:false},
            {text:'food',checked:false,complicated:false}
        ],
        message:''
    },
    methods:{
        submit:function () {
            if (this.message.trim()=='') return;
           var newItem = {text:this.message.trim(),checked:false,complicated:false};
            this.message='';
            this.todos.unshift(newItem);
        },
        deleteCheckedItem:function () {
            var self = this;
            this.todos=this.todos.filter(function (item) {
                return item.checked==false;
            })
        },
        complicatedItem:function () {
            
           this.todos.map(function (item) {
               if (item.checked==true)
              item.complicated=true;
           });

        }
    },
    events:{
        'deletemsg':function (item) {
            this.todos.$remove(item);
        }
    },
})