/**
 * Created by Geekzs on 2018/1/19.
 */

$(function(){

  //获取后台请求地址
  var url = Route.url;



  //发送ajax请求渲染nav列表
  $.ajax({

    type:'get',
    url:url+"api/getindexmenu",
    success:function(info){
      //console.log(info);
      $('.m_nav ul').html( template('navTpl',info) )

      //将需要切换隐藏显示的nav项存入一个数组
      var hideArr = $('.m_nav li.hidden');

      //注册点击切换事件
      $('.m_nav li').eq(7).on("click",function(){
        hideArr.each(function(i,e){
          $(e).toggleClass("hidden");
        })

      })

    }

  });



  //发送ajax请求渲染item列表
  $.ajax({

    type:'get',
    url:url+'api/getmoneyctrl',
    success:function(info){
      console.log(info);
      $('.r_items').html(template('itemTpl',info));
    }

  })



})