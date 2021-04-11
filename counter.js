const Count = {
  data(){
    //出力はreturn
    return {
      count: 0
    }
  },
  mounted(){
    setInterval(() =>{
      this.count++
    },1000)
  }
}

Vue.createApp(Count).mount(".counter")