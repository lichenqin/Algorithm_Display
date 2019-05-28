Page({
  data:{
    name:"leec",
    array:[3,45,19,36,8,14,12,37,21,10,56],
    windowWidth: 0,
    windowHeight: 0,
    gaspWidth:30
  },


  onReady: function(){
    var draw_array = this.data.array;//利用draw_array
    var length = draw_array.length;
    var content = wx.createCanvasContext("bubble");

    var screenWidth = wx.getSystemInfoSync().windowWidth; //获取屏幕宽度
    var screenHeight = wx.getSystemInfoSync().windowHeight;//获取屏幕高度

    var width = this.data.gaspWidth;//获取一个元素的总宽度 包括：矩形以及空隙的宽度
    var e_width = width - 15;//元素宽度
    var start_x = (screenWidth - width*(length-1) - e_width) / 2;
    var start_y = 0.48 * screenHeight;

    console.log("X的位置：" + start_x);
    console.log("Y的位置：" + start_y);

    content.setFontSize(10);

    function Elements(index, number) {
      content.beginPath();
      content.rect(start_x + index * width, start_y, e_width, -number * 5);
      content.setFillStyle('green');
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
    }

    var length = draw_array.length;
    var value = 0;

    for (var index = 0; index < length; ++index) {
      value = draw_array[index];
      Elements(index, value);
    }

    content.draw();

    this.setData({
      windowWidth: screenWidth,
      windowHeight: screenHeight
    })
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
    
    var screenWidth = this.data.windowWidth; //获取屏幕宽度
    var screenHeight = this.data.windowHeight;//获取屏幕高度

    var width = this.data.gaspWidth;//获取一个元素的总宽度 包括：矩形以及空隙的宽度
    var e_width = width - 15;//元素宽度
    var start_x = (screenWidth - width * (length - 1) - e_width) / 2;
    var start_y = 0.48 * screenHeight;
    
    content.setFontSize(10);

    function Elements(index, number) {
      content.beginPath();
      content.rect(start_x + index * width, start_y, e_width, -number * 5);
      content.setFillStyle('green');//设置颜色为绿色
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
    };

    function select(index, number) {
      content.beginPath();
      content.rect(start_x + index * width, start_y, e_width, -number * 5);
      content.setFillStyle('gray');//设置颜色为灰色
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, start_x + index * width + 3, start_y + 10);
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
    var width = this.data.gaspWidth;
    var outter;//冒泡外层循环
    var index;//内层循环
    var step;//动画每次一多少
    var temp_value;
    for (outter = 0; outter < origin_length; ++outter) {
      for (index = 0; index < origin_length - outter - 1; ++index) {
        this.compare(index, index + 1);//比较函数将比较的两个矩形绘图成灰色
        this.delay(10000);//50000*10000
        if (origin_array[index] > origin_array[index + 1]) { //二者相比较
          for (step = 2; step <= width; step += 2) {
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
  
  var screenWidth = this.data.windowWidth; //获取屏幕宽度
  var screenHeight = this.data.windowHeight;//获取屏幕高度

  var width = this.data.gaspWidth;//获取一个元素的总宽度 包括：矩形以及空隙的宽度
  var e_width = width - 15;//元素宽度
  var start_x = (screenWidth - width * (length - 1) - e_width) / 2;
  var start_y = 0.48 * screenHeight;
  
  content.setFontSize(10);

  function Elements(index, number) {
    content.beginPath();
    content.rect(start_x + index * width, start_y, e_width, -number * 5);
    content.setFillStyle('green');//设置颜色为绿色
    content.fill();
    content.closePath();

    content.setFillStyle('black');
    content.fillText(number, start_x + index * width + 3, start_y + 10);
  };

  function move_forward(index, number) {
    content.beginPath();
    content.rect(start_x + index * width + step, start_y, e_width, -number * 5);
    content.setFillStyle('red');//设置颜色为绿色
    content.fill();
    content.closePath();

    content.setFillStyle('black');
    content.fillText(number, start_x + index * width + 3, start_y + 10);
  };

  function move_back(index, number) {
    content.beginPath();
    content.rect(start_x + index * width - step, start_y, e_width, -number * 5);
    content.setFillStyle('red');//设置颜色为绿色
    content.fill();
    content.closePath();

    content.setFillStyle('black');
    content.fillText(number, start_x + index * width + 3, start_y + 10);
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
},

reset() {
  var origin = this.data.array;
  var length = origin.length;

  for (var index = 0; index < length; ++index) {
    origin[index] = Math.round(Math.random() * 50 + 1);
    console.log(origin[index]);
  }

  this.onReady();
},
explain:function(){
  wx.navigateTo({
    url: '/pages/sort/bubble_explain/bubble_explain',
  })
  }, explains: function () {
    wx.navigateBack({
      
    })
  }

})