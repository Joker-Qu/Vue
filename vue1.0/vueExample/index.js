/**
 * Created by qujingkun on 16/8/16.
 */
new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: [
            { text: 'Add some todos' }
        ],
        aurl:"http://www.baidu.com"
    },
    methods: {
        addTodo: function () {
            var text = this.newTodo.trim()
            if (text) {
                this.todos.push({ text: text })
                this.newTodo = ''
            }
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1)
        },
        doSomething:function () {
            console.log(this);
        }
    }
});
var vm = new Vue({
    el:'#example',
    data:{
        a:1,
    },
    //a发生改变时,b也会发生改变
    computed:{
        b:function () {
            return this.a+1;
        }
    }
});

var msgvm = new Vue({
    el:'#msgul',
    data:{
        items:[
            {msg:1111},
            {msg:2222},
            {msg:2223},
            {msg:222},
            {msg:222},
            {msg:2224},
        ]
    }
})
function  refresh() {
    msgvm.items=msgvm.items.filter(function (item) {
        return item.msg>1000;
    })
}
var namevm = new Vue({
    el:'#name',
    data:{
        firstname:"jack",
        lastname:"smith"
    },
    computed:{
        fullname:function () {
            return this.firstname+' '+this.lastname;
        }
    }
})
var exampleData = {
    name:'Vue.js',
    person:false
}
var exampleVM=new Vue({
    el:'#example-1',
    data:exampleData
})