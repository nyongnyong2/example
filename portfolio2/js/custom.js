
$(function(){
  //index2 상단화면 사진 이미지 변환
  var top_showImg, top_nextImg;
  function fadeInOut1(){
    top_showImg = $(".conan > img:eq(0)");//첫번째 이미지를 showImg에 할당(현재 보이는 이미지)
    top_nextImg = $(".conan > img:eq(1)");//두번째 이미지를 nextImg에 할당(다음에 보여져야할 이미지)

    top_nextImg.addClass("active").css("opacity",0);
    top_nextImg.animate({"opacity":1},1000.,function(){
      $(".conan").append(top_showImg);
      top_showImg.removeClass("active");
    })
  }
  setInterval(fadeInOut1,3000);


  //about 왼쪽 화살표 버튼
  $(".left").click(function(){
    if($(".contain >.wrap").is(":animated")) return false;
    //애니메이션 기능이 적용중일때 함수에 있는 코드를 실행하지 않음.
    var last = $(".contain >.wrap > .box").last();
   $(".contain>.wrap").animate({"left":0},500,function(){
    $(this).prepend(last).css("left","-304px")
   })
  });
  //about오른쪽 화살표 버튼
  $(".right").click(function(){
    if($(".contain>.wrap").is(":animated")) return false;
    leftSlide();
  });

  function leftSlide(){
    var first = $(".contain>.wrap >.box").first();
    $(".contain>.wrap").animate({"left":"-608px"},500,function(){
      $(this).append(first).css("left","-304px");
    });
  }

  var timer = setInterval(leftSlide,3000);
  $("#contents1>.contain").hover(
    function(){
      clearInterval(timer);
    },
    function(){
      timer = setInterval(leftSlide,3000);
    })

    //hot album1
    var hot_showImg, hot_nextImg;//현재보이는 이미지와 다음에 보이는 이미지를 할당한 변수선언
    function fadeInOut2(){//fadeInOut함수 선언
      hot_showImg = $(".akmu > img:eq(0)");//첫번째 이미지를 showImg에 할당(현재 보이는 이미지)
      hot_nextImg = $(".akmu > img:eq(1)");//두번째 이미지를 nextImg에 할당(다음에 보여져야할 이미지)

      hot_nextImg.addClass("active").css("opacity",0);//다음에 보여져야하는 이미지에 active클래스를 적용하여 z-index를 1로 설정하고 opacity를 0으로 안보이게 합니다.
     
      //nextImg요소의 opacity를 1로 1초동안 변경하여 화면에 표시
      hot_nextImg.animate({"opacity":1},1000.,function(){
        //애니메이션기능이 모두 종료된 후 첫번째 이미지를 마지막 위치로 변경하고 active클래스를 제거하여 z-index:1이 적용되지 않도록 한다.
        $(".akmu").append(hot_showImg);
        hot_showImg.removeClass("active");
      })
    }
    setInterval(fadeInOut2,3000);//fadeInOut함수를 3초에 한번씩 반복 실행

  //hot album2
  var showImg, nextImg;//현재보이는 이미지와 다음에 보이는 이미지를 할당한 변수선언
  function fadeInOut3(){//fadeInOut함수 선언
    showImg = $(".hyo > img:eq(0)");//첫번째 이미지를 showImg에 할당(현재 보이는 이미지)
    nextImg = $(".hyo > img:eq(1)");//두번째 이미지를 nextImg에 할당(다음에 보여져야할 이미지)

    nextImg.addClass("motion").css("opacity",0);//다음에 보여져야하는 이미지에 active클래스를 적용하여 z-index를 1로 설정하고 opacity를 0으로 안보이게 합니다.
   
    //nextImg요소의 opacity를 1로 1초동안 변경하여 화면에 표시
    nextImg.animate({"opacity":1},1000.,function(){
      //애니메이션기능이 모두 종료된 후 첫번째 이미지를 마지막 위치로 변경하고 active클래스를 제거하여 z-index:1이 적용되지 않도록 한다.
      $(".hyo").append(showImg);
      showImg.removeClass("motion");
    })
  }
  setInterval(fadeInOut3,3000);//fadeInOut함수를 3초에 한번씩 반복 실행
});







  

