const app = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        date:'2006-09',
        price:85.00,
        count:1
      },{
        id:2,
        name:'《UNIX编程艺术》',
        date:'2006-02',
        price:59.00,
        count:1
      },{
        id:3,
        name:'《编程珠玑》',
        date:'2008-10',
        price:39.00,
        count:1
      },{
        id:4,
        name:'《算法导论》',
        date:'2006-09',
        price:85.00,
        count:1
      },{
        id:5,
        name:'《代码大全》',
        date:'2006-03',
        price:128.00,
        count:1
      }
    ]
  },
  methods:{
    increment:function (index) {
      this.books[index].count++
    },
    decrement:function (index) {
      this.books[index].count--
    },
    removeHandle:function (index) {
      this.books.splice(index,1)
    }
  },
  computed:{
    total () {
      //1.普通for循环
      // let totalPrice = 0
      // for (var i=0;i<this.books.length;i++){
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice;

      //2.
      // let totalPrice = 0
      // for (let i in this.books){
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice;

      //3.
      let totalPrice = 0
      for (let book of this.books){
        totalPrice += book.price * book.count
      }
      return totalPrice;

      //4 reduce计算数组中某项的总和
      return this.books.reduce(function (preValue,n) {
        return preValue + n.price*n.count
      },0)

    }
  },
  filters:{//过滤器
    showPrice:function (price) {
      return '￥'+ price.toFixed(2)
    }
  }
})


//编程范式：命令式编程 / 声明式编程
//编程范式：面向对象编程（第一公民：对象） / 函数式编程（第一公民：函数）
const nums = [10,20,,40,50,110,80]

//-----以前的办法
// //1、取小于100的树
// let newNums = [];
// for(let n of nums){
//   if(n<100){
//     newNums.push(n)
//   }
// }
// //2、将小于100的数进行转化：全部*2
// let new2Nums = [];
// for(let n of newNums){
//   new2Nums.push(n*2)
// }
// //3、将所有new2Nums的数相加，得到最终的值
// let total = 0;
// for(let n of new2Nums){
//   total += n;
// }
// console.log(total);

//高阶函数
//filter函数有一个要求，必须返回boolean值
//true:返回true时，函数内部会自动将这次回调的n加到新的数组
//false：返回false时，函数内部会过滤掉这个值
// //第一个需求：取小于100的树
// let newNums = nums.filter(function(n){
//     return n <100
// })
// console.log(newNums)
//
// //map
// //第二个需求：将小于100的数进行转化：全部*2
// let new2Nums = newNums.map(function (n) {
//   return n*2
// })
// console.log(new2Nums)
//
// //reduce对数组中所有内容进行汇总
// //第三个需求：将所有new2Nums的数相加，得到最终的值
// let new3Nums = new2Nums.reduce(function (preValue,n) {
//   return preValue+n
// },0)
// console.log(new3Nums)


//总和三个需求--函数式编程
// let newNums = nums.filter(function(n){
//   return n <100
// }).map(function (n) {
//   return n*2
// }).reduce(function (preValue,n) {
//   return preValue+n
// },0)
// console.log(newNums)


//继续简洁--ES6的箭头函数
let total = nums.filter(n => n<100).map(n =>n*2).reduce((pre,n) => pre + n);
console.log(total)