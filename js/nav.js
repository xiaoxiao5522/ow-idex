
 window.onscroll=function(){
	var topScroll =document.documentElement.scrollTop;
	//滚动的距离,距离顶部的距离
  	var bignav  = document.getElementById("nav");
  	//获取到导航栏id
	     if(topScroll >=60){ 
	      //当滚动距离大于60px时执行下面的东西
	      bignav.style.position = 'fixed';
	      bignav.style.top = '-60px';
	      bignav.style.width='100%';
	      bignav.style.left='-20px'
	      }else{
	      //当滚动距离小于60的时候执行下面的内容，也就是让导航栏恢复原状
	      bignav.style.position = 'fixed';
	      bignav.style.top = '0px';
	      bignav.style.width='98%';
	      bignav.style.left='0px'
	                }
	            }
