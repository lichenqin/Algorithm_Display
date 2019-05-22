Page({
  data:{
    name:"leec",
    array:[3,5,9,6,8,4,2,7,1,10]
  },


  onReady: function(){
    var draw_array = this.data.array;//利用draw_array
    var content = wx.createCanvasContext("bubble");
    content.setFontSize(10);

    function Elements(index, number){
      content.beginPath();
      content.rect(20+index*40, 260, 20, -number*20);
      content.setFillStyle('green');
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, 25+index*40, 275);
    }

    var length = draw_array.length;
    var value = 0;

    for( var index = 0; index < length; ++index){
        value = draw_array[index];
        Elements(index,value);
    }

    content.draw();
  },

  bubbleSort(){
    var length = this.data.array.length;
    var timeoutId;

    for(var index = 0; index < length-2; ++index){
      this.compare(index, index+1);
      this.delay(50000);
    }
  },


  compare(first_index, second_index){
    var raw_array = this.data.array;
    var length = raw_array.length;
    var content = wx.createCanvasContext('bubble', this);
    content.setFontSize(10);

    function Elements(index, number) {
      content.beginPath();
      content.setFillStyle('green');//设置颜色为绿色
      content.rect(20 + index * 40, 260, 20, -number * 20);//创建矩形并填充
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, 25 + index * 40, 275);
    };

    function select(index, number) {
      content.beginPath();
      content.setFillStyle('gray');
      content.rect(20 + index * 40, 260, 20, -number * 20);//创建矩形并填充
      content.fill();
      content.closePath();

      content.setFillStyle("black");
      content.fillText(number, 25 + index * 40, 275);
    };

    for(var index = 0; index < length; ++index){
      var number = raw_array[index];
      if(index == first_index || index == second_index)
        select(index,number);
      else  
        Elements(index,number);

    }

    content.draw();
  },

  delay(time){
    var limmit = time*10000;
    for(var index = 0; index < limmit; ++index );
  },

  Process(){
    var origin_array = this.data.array;     //origin_array 读取 数据
    var origin_length = origin_array.length;//获取origin_array的长度
    var outter;//冒泡外层循环
    var index;//内层循环
    var step;//动画每次一多少
    var temp_value;
    for (outter = 0; outter < origin_length; ++outter) {
      for (index = 0; index < origin_length - outter - 1; ++index) {
        this.compare(index, index + 1);//比较函数将比较的两个矩形绘图成灰色
        this.delay(10000);//50000*10000
        if (origin_array[index] > origin_array[index + 1]) { //二者相比较
          for (step = 2; step <= 40; step += 2) {
            this.move(index, index + 1, step);
            console.log(step);
            this.delay(1000);
          }
          temp_value = origin_array[index + 1];
          origin_array[index + 1] = origin_array[index];
          origin_array[index] = temp_value;
        }
      }
    };

    this.setData({
      array: origin_array
    })
  },
  


move(index_first, index_second, step) {//移动两个元素(就是上色功能)
  var arr = this.data.array;
  var length = arr.length;
  var i;
  var value = 0;

  var content = wx.createCanvasContext("bubble", this);
  content.setFontSize(10);

  function Elements(index, number) {
    content.beginPath();
    content.setFillStyle('green');//设置颜色为绿色
    content.rect(20 + index * 40, 260, 20, -number * 20);//创建矩形并填充
    content.fill();
    content.closePath();

    content.setFillStyle("black");
    content.fillText(number, 25 + index * 40, 275);
  };

  function move_forward(index, number) {
    content.beginPath();
    content.setFillStyle('red');
    content.rect(20 + index * 40 + step, 260, 20, -number * 20);//创建矩形并填充
    content.fill();
    content.closePath();

    content.setFillStyle("black");
    content.fillText(number, 25 + index * 40, 275);
  };

  function move_back(index, number) {
    content.beginPath();
    content.setFillStyle('red');
    content.rect(20 + index * 40 - step, 260, 20, -number * 20);//创建矩形并填充
    content.fill();
    content.closePath();

    content.setFillStyle("black");
    content.fillText(number, 25 + index * 40, 275);
  };

  for (i = 0; i < length; ++i) {
    value = arr[i];
    if (i == index_first) {
      move_forward(i, value);
    }
    else if (i == index_second) {
      move_back(i, value);
    }
    else {
      Elements(i, value);
    }
  }
  content.draw();
}

})