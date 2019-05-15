Page({
  data:{
    name:"leec",
    array:[3,5,9,6,8,4]
  },
  onReady: function(){
    var content = wx.createCanvasContext("firstCanvas");
    var draw_array = this.data.array;

    function Elements(index, number){
      content.rect(20+index*40, 260, 20, -number*20);
      content.setFillStyle('green');
      content.fill();
    }

    var length = draw_array.length;
    var value = 0;

    for( var index = 0; index < length; ++index){
        value = draw_array[index];
        Elements(index,value);
    }

    content.draw();
  },

  GetData: function(event){
    //var input = event.detail.value;
     var input = event.detail.value;
    console.log(input[1]);
  },
  bubbleSort: function(){

    var arr = this.data.array;
    var length = arr.length;
    var index = 0;
    var temp = 0;
    for( index = 0; index < length; ++index)
      for( var inner = 0; inner < length-index-1; ++inner){
        if( arr[inner] > arr[inner+1]){
          temp = arr[inner+1];
          arr[inner+1] = arr[inner];
          arr[inner] = temp;
        }
      }
    
    console.log(arr);

    this.setData({
      array : arr 
    })
  }
})