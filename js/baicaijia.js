/**
 * Created by Geekzs on 2018/1/20.
 */
$(function(){

  var font = parseInt($('html').css('fontSize'));
  console.log(font);

  var url = Route.url;

  $.ajax({
    type:'get',
    url:url+'api/getbaicaijiatitle',
    success:function(info){
      console.log(info);
      $('.bc_nav ul').html(template('navTpl',info));

      ////获取ul的宽度（li的长度X数量）设死
      //var width = info.result.length*1.4;
      //
      //$('.bc_nav ul').css('width' , width + 'rem');

      var ulWidth = 0;
      $('.bc_nav li').each(function () {
        var liWidth = $(this).outerWidth(true);
        console.log(liWidth);
        ulWidth += liWidth;
      });

      var width = Math.ceil(ulWidth/font)+'rem'

      $('.bc_nav ul').width(width);




      //滚动插件初始化
      new IScroll(".bc_nav",{
        scrollX:true,
        scrollY:false
      });


      $('.bc_nav ul').on('click','a',function(){

        $(this).addClass('active').parent().siblings().children().removeClass('active');

        id = $(this).data('titleid');
        console.log(id);
        render();

      })


    }

  })

  var id = 0;

  render();

  function render(){

    $.ajax({
      type:'get',
      url:url+'api/getbaicaijiaproduct',
      data:{titleid:id},
      success:function(info){

        console.log(info);

        $('.bc_list').html(template('itemTpl',info));

      }



    })



  }


})