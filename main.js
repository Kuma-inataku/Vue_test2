var app = new Vue({
  el: '#app',
  data() {
    return{
      text:"",
      flag:false
    }
  },

  // data: {
  //   message: 'Hello Vue!'
  // },

  computed:{
    value:{
     get () {
       return this.text
     },
     set (value){
       if(value === "" ){
         this.flag = true
       } else {
         this.flag = false
       }
     }
    }
  }
})