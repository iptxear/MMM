/**
 * Created by Geekzs on 2018/1/19.
 */


$(function(){
  //定义一个变量，方便修改ip
  var Route = {
    url : "http://192.168.46.45:9090/"
  }




  function getsearchObj(){
    var obj = {};
    var str = decodeURI(location.search).slice(1);
    var arr = str.split("&");
    for(var i = 0; i < arr.length; i++) {
      var k = arr[i].split("=")[0];
      var v = arr[i].split("=")[1];
      obj[k] = v;
    }
    return obj;
}

  function getsearchKey(key){
    return getsearchObj()[key];
  }



  //回到顶部
  $('.backTop').on('click',function(){
    //console.log($('body').scrollTop());
    //$(window).scrollTop(0);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })








  window.Route = Route;

  window.Getkey = getsearchKey;

})

