/**
 * Created by Geekzs on 2018/1/21.
 */

$(function(){

  var url = Route.url;


  //店铺导航渲染
  $.ajax({
    type:'get',
    url:url+'api/getgsshop',
    success:function(info){
      console.log(info);
      $('.mall ul').html(template('mallTpl',info));
      $('.mall_title').text(info.result[0].shopName)
    }
  })

  //地区导航渲染
  $.ajax({
    type:'get',
    url:url+'api/getgsshoparea',
    success:function(info){
      console.log(info);
      $('.zone ul').html(template('zoneTpl',info));
      $('.zone_title').text(info.result[0].areaName.slice(0,2))
    }
  })

  //点击切换展示店铺导航
  $('.nav li').eq(0).on('click',function(){
    $('.mall').toggle();
    $('.zone').hide();
  })

  //点击切换展示地区导航
  $('.nav li').eq(1).on('click',function(){
    $('.zone').toggle();
    $('.mall').hide();
  })


  //注册点击事件

  $('.mall').on('click','li',function(){
    //var titleName =  $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    $('.mall_title').text($(this).text());
    $('.mall').hide();
    shopid = $(this).data('shopid');
    render();
  })

  $('.zone').on('click','li',function(){
    //var titleName =  $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    $('.zone_title').text($(this).text());
    $('.zone').hide();
    areaid = $(this).data('shopid');
    render();
  })











  var shopid = 0;
  var areaid = 0;

  render();

  //渲染单品列表
  function render(){

    $.ajax({
      type:'get',
      url:url+'api/getgsproduct',
      data:{
        shopid:shopid,
        areaid:areaid
      },
      success:function(info){
        console.log(info);
        $('.prolist ul').html(template('listTpl',info));
      }
    })

  }








})
