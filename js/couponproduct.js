/**
 * Created by Geekzs on 2018/1/21.
 */
$(function(){

  var url = Route.url;

  var couponid = Getkey('couponid');

  var title = Getkey('couponname');


  $('.mm_header h1').text(title+'优惠卷');

  $.ajax({
    type:'get',
    url:url+'api/getcouponproduct',
    data:{couponid:couponid},
    success:function(info){
      console.log(info);
      $('.c_list').html(template('listTpl',info));
      $('.swiper').html(template('sliderTpl',info));

    }
  })


  //打开遮罩
  $('.c_list').on('click','a',function(e){

    $('.mask').show();

    var index = parseInt($(this).data('index'));

    //swiper初始化
    var mySwiper = new Swiper ('.swiper-container', {
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },


    })

    mySwiper.slideTo(index, 10, false);


  })


  //关闭遮罩
  $('.close span').on('click',function(){
    $('.mask').hide();
  })








})