const Count = {
  data(){
    //出力はreturn
    return {
      count: 0
    }
  }
}

Vue.createApp(Count).mount(".counter")