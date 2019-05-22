Page({
  data: {
    name: "leec",
    array: [3, 5, 9, 6, 8, 4, 2, 7, 1]
  },

  onReady: function () {
    var draw_array = this.data.array;//利用draw_array
    var content = wx.createCanvasContext("quick");
    content.setFontSize(10);

    function Elements(index, number) {
      content.beginPath();
      content.rect(20 + index * 40, 260, 20, -number * 20);
      content.setFillStyle('green');
      content.fill();
      content.closePath();

      content.setFillStyle('black');
      content.fillText(number, 25 + index * 40, 275);
    }

    var length = draw_array.length;
    var value = 0;

    for (var index = 0; index < length; ++index) {
      value = draw_array[index];
      Elements(index, value);
    }

    content.draw();
  },
  
  Process() {

    var origin = this.data.array;

    origin = this.Qk_Sort(0, origin.length-1, origin);

    console.log(origin);

    this.setData({
      array: origin
    })
  },

  Qk_Sort(left, right, array){

    if(left >= right )
      return array;
    
    var head = left;
    var base_value = array[head];
    var tail = right;

    this.QuickDraw(head, left, right);

    while( true ){
      while( right > left && array[right] > base_value){
        --right;
        this.QuickDraw(head, left, right);
      }

      if( right == left)
        break;
      else{
        array[left] = array[right];
        this.QuickDraw(head, left, right);
      }

      while( left < right && array[left] < base_value){
        ++left;
        this.QuickDraw(head, left, right);
      }

      if( left == right)
        break;
      else{
        array[right] = array[left];
        this.QuickDraw(head,left,right);
      }
    }

    array[left] = base_value;
    this.QuickDraw(head, left, right);
    array = this.Qk_Sort(head,left-1, array);
    array = this.Qk_Sort(right+1,tail,array);

    return array;
  },

  QuickDraw(head, left, right){
    this.QuickDraw_Process(head, left, right);
    this.delay(10000);
  },

  QuickDraw_Process(head, left, right){
    var draw_array = this.data.array;
    var length = draw_array.length;
    var content = wx.createCanvasContext('quick', this);
    var number = 0;
    content.setFontSize(10);

    for(var index = 0; index < length; ++index){
      number = draw_array[index];
      if( index == head ){
        content.beginPath();
        content.setFillStyle('orange');//设置颜色为绿色
        content.rect(20 + index * 40, 260, 20, -number * 20);//创建矩形并填充
        content.fill();
        content.closePath();

        content.setFillStyle('black');
        content.fillText(number, 25 + index * 40, 275);
      }
      else if( index == left ){
        content.beginPath();
        content.setFillStyle('blue');//设置颜色为绿色
        content.rect(20 + index * 40, 260, 20, -number * 20);//创建矩形并填充
        content.fill();
        content.closePath();

        content.setFillStyle('black');
        content.fillText(number, 25 + index * 40, 275);
      }
      else if( index == right ){
        content.beginPath();
        content.setFillStyle('red');//设置颜色为绿色
        content.rect(20 + index * 40, 260, 20, -number * 20);//创建矩形并填充
        content.fill();
        content.closePath();

        content.setFillStyle('black');
        content.fillText(number, 25 + index * 40, 275);
      }
      else{
        content.beginPath();
        content.setFillStyle('green');//设置颜色为绿色
        content.rect(20 + index * 40, 260, 20, -number * 20);//创建矩形并填充
        content.fill();
        content.closePath();

        content.setFillStyle('black');
        content.fillText(number, 25 + index * 40, 275);
      }
    }

    content.draw();
    console.log("success");
  },

  delay(time) {
    var limmit = time * 10000;
    for (var index = 0; index < limmit; ++index);
  }

})