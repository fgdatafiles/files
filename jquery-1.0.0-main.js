/*! JavaScript Menu/Sub-Menu */

    $(document).ready(function() {
    $(document).each(function() {
        $("ul#sub-menu").parent("li").addClass("hasSub");
    $(".nav-menu ul li").each(function() {
            $(this).hoverTimeout(0, function() {
                $(this).children("ul").slideDown("show")
            }, 0, function() {
                $(this).children("ul").slideUp("hide")
            })
        });
    });
    });


/*! JavaScript Indicator */

window.onscroll = function() {scrollindicator()};

function scrollindicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-progress-Indicator").style.width = scrolled + "%";}

/*! JavaScript Indicator */

!function(e){e.fn.preloader=function(t){function r(){c=e(i.selector)}function n(){switch(i.type){case"document":default:setTimeout(function(){o()},i.delay)}}function o(){switch(i.removeType){case"fade":a();break;case"remove":default:u()}}function u(){return c.remove()}function a(){return c.fadeOut(i.fadeDuration,f())}function f(){return function(){c.remove()}}var i=e.extend({selector:"#preloader",type:"document",removeType:"fade",fadeDuration:750,delay:0},t),c=null;return r(),this.ready(function(){e(this).trigger("preloader:before"),n(),e(this).trigger("preloader:after")})}}(jQuery);

$(window).preloader({delay:3000});

/*! ScrollToTop JavaScript */

var scrollToTop=function(){function o(o){function n(t){e+=Math.PI/(o/(t-l)),e>=Math.PI&&window.scrollTo(0,0),0!==window.scrollY&&(window.scrollTo(0,Math.round(s+s*Math.cos(e))),l=t,window.requestAnimationFrame(n))}var s=window.scrollY/2,e=0,l=performance.now();window.requestAnimationFrame(n)}var n=document.getElementById("scrollToTop");showButton=n.dataset.upshow||600,scrollSpeed=n.dataset.upspeed||1e3;var s=window.scrollY;window.addEventListener("scroll",function(){s=window.scrollY,showButton<s?n.classList.add("visible"):n.classList.remove("visible")}),n.onclick=function(){o(scrollSpeed)}}();

/*! Bootstrap Modal JavaScript */

$(document).ready(function(){$("#videoModal").on("show.bs.modal",function(event){let button=$(event.relatedTarget);let url=button.data("video");$(this).find("iframe").attr({src:url,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})});$("#videoModal").on("hidden.bs.modal",function(){$("#videoModal iframe").removeAttr("src allow")})});

/*! Simple Tabs JQuery JavaScript */

(function(a){a.fn.navtabs=function(b){b=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},b);return this.each(function(){var e=a(this),c=e.children("[data-tab]"),d=b.active-1;e.addClass("navtabs").prepend('<ul class="tabs-lists d-flex flex-row"></ul>');c.addClass("tab-content").each(function(){a(this).hide();e.find(".tabs-lists").append('<li><a href="#">'+a(this).data("tab")+"</a></li>")}).eq(d).show();e.find(".tabs-lists a").on("click",function(){var f=a(this).parent().index();a(this).closest(".tabs-lists").find(".activeTab").removeClass("activeTab");a(this).addClass("activeTab");if(b.fx=="slide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fade"){if(c.eq(f).is(":hidden")){c.hide().eq(f).fadeIn(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fancyslide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(c.eq(f).is(":hidden")){c.hide().eq(f).show()}}}}b.change.call(e);return false}).eq(d).addClass("activeTab")})}})(jQuery);

    // contacts form
(function(){var e=document.getElementsByTagName("pre"),t=e.length;for(var n=0;n<t;n++){e[n].innerHTML='<span class="line-number"></span>'+e[n].innerHTML+'<span class="cl"></span>';var r=e[n].innerHTML.split(/\n/).length;for(var i=0;i<r;i++){var s=e[n].getElementsByTagName("span")[0];s.innerHTML+="<span>"+(i+1)+"</span>"}}})();$(document).ready(function(){$("#contact").appendTo(".contact-form");$(".contact-form #contact").css("display","block");$(".tabs-wrap").navtabs({active:1,fx:"fade",showSpeed:400,hideSpeed:400})});

/*! Countdown Timer JQuery JavaScript */

(function ( $ ) {
	function pad(n) {
	    return (n < 10) ? ("0" + n) : n;
	}

	$.fn.showclock = function() {
	    
	    var currentDate=new Date();
	    var fieldDate=$(this).data('date').split('-');
	    var fieldTime=[0,0];
	    if($(this).data('time')!=undefined)
	    fieldTime=$(this).data('time').split(':');
	    var futureDate=new Date(fieldDate[0],fieldDate[1]-1,fieldDate[2],fieldTime[0],fieldTime[1]);
	    var seconds=futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	    if(seconds<=0 || isNaN(seconds)){
	    	this.hide();
	    	return this;
	    }

	    var days=Math.floor(seconds/86400);
	    seconds=seconds%86400;
	    
	    var hours=Math.floor(seconds/3600);
	    seconds=seconds%3600;

	    var minutes=Math.floor(seconds/60);
	    seconds=Math.floor(seconds%60);

        var html="";

	    if(days!=0){
		    html+="<div class='countdown-container days col-3 d-inline-block text-center'>"
		    	html+="<span class='countdown-value days-bottom d-block'>"+pad(days)+"</span>";
		    	html+="<span class='countdown-heading days-top d-block'>Days</span>";
		    html+="</div>";
		}

	    html+="<div class='countdown-container hours col-3 d-inline-block text-center'>"
	    	html+="<span class='countdown-value hours-bottom d-block'>"+pad(hours)+"</span>";
            html+="<span class='countdown-heading hours-top d-block'>Hours</span>";
	    html+="</div>";

	    html+="<div class='countdown-container minutes col-3 d-inline-block text-center'>"
	    	html+="<span class='countdown-value minutes-bottom d-block'>"+pad(minutes)+"</span>";
	    	html+="<span class='countdown-heading minutes-top d-block'>Mins</span>";
	    html+="</div>";

	    html+="<div class='countdown-container seconds col-3 d-inline-block text-center'>"
	    	html+="<span class='countdown-value seconds-bottom d-block'>"+pad(seconds)+"</span>";
	    	html+="<span class='countdown-heading seconds-top d-block'>Secs</span>";
	    html+="</div>";

	    this.html(html);
	};

	$.fn.countdown = function() {
		var el=$(this);
		el.showclock();
		setInterval(function(){
			el.showclock();	
		},1000);
		
	}

}(jQuery));

jQuery(document).ready(function(){
	if(jQuery(".countdown").length>0){
		jQuery(".countdown").each(function(){
			jQuery(this).countdown();	
		})
		
	}
})
