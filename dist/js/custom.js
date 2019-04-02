	$(document).ready(function(){
		$('#home-carousel').owlCarousel({
			//margin:10,
			loop:true,
			//autoWidth:true,
			items:1,
			autoplay:true,
			autoplayTimeout:4000,
			//autoplayHoverPause:true,
			animateOut: 'fadeOut',
			nav: true,
			//responsiveClass: true,
			responsive: {
				0: {
					//items: 1,
					//nav: false,
					dots: false,
				},
				600: {
					//items: 3,
					nav: true,
					//dots: false,
					navText: ["<div class='carousel-arrow-left'><i class='ion ion-ios-arrow-left'></i></div>","<div class='carousel-arrow-right'><i class='ion ion-ios-arrow-right'></i></div>"]
				},
				1000: {
					//items: 1,
					//dots: true,
				nav: true,
				//	loop: false
				navText: ["<div class='carousel-arrow-left'><i class='ion ion-ios-arrow-left'></i></div>","<div class='carousel-arrow-right'><i class='ion ion-ios-arrow-right'></i></div>"]
				}
			}
				
		});
		$('#Testimonial').owlCarousel({
			margin:0,
			loop:true,
			//autoWidth:true,
			items:1,
			autoplay:true,
			autoplayTimeout:3000,
			//autoplayHoverPause:true,
			//animateOut: 'fadeOut',
			//responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false,
					dots: false,
				},
				600: {
					items: 2,
					nav: true,
					dots: false,
					navText: ["<div class='carousel-arrow-left'><i class='ion ion-android-arrow-back'></i></div>","<div class='carousel-arrow-right'><i class='ion ion-android-arrow-forward'></i></div>"]
				},
				1000: {
					items: 2,
					dots: false,
					nav: true,
					navText: ["<div class='carousel-arrow-left'><i class='ion ion-android-arrow-back'></i></div>","<div class='carousel-arrow-right'><i class='ion ion-android-arrow-forward'></i></div>"],
					stagePadding: 50,
					center: true,
				}
			}
				
		});
		$('#testimonials').owlCarousel({
			margin:30,
			loop:true,
			//autoWidth:true,
			items:1,
			autoplay:true,
			autoplayTimeout:3000,
			//autoplayHoverPause:true,
			animateOut: 'fadeOut',
			//responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false,
					dots: false,
				},
				600: {
					items: 1,
					nav: true,
					dots: false,
					navText: ["<div class='carousel-arrow-left'><i class='ion ion-ios-arrow-left'></i></div>","<div class='carousel-arrow-right'><i class='ion ion-ios-arrow-right'></i></div>"]
				},
				1000: {
					items: 1,
					dots: true,
					nav: false,
					navText: ["<div class='carousel-arrow-left'><i class='ion ion-ios-arrow-left'></i></div>","<div class='carousel-arrow-right'><i class='ion ion-ios-arrow-right'></i></div>"]
				}
			}
				
		});
		$('#Partners').owlCarousel({
			margin:30,
			loop:true,
			//autoWidth:true,
			items:1,
			autoplay:true,
			autoplayTimeout:3000,
			//autoplayHoverPause:true,
			//animateOut: 'fadeOut',
			//responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false,
					dots: false,
				},
				600: {
					items: 3,
					nav: true,
					dots: false,
					navText: ["<div class='carousel-arrow-left'><i class='ion ion-ios-arrow-left'></i></div>","<div class='carousel-arrow-right'><i class='ion ion-ios-arrow-right'></i></div>"]
				},
				1000: {
					items: 5,
					dots: false,
					nav: true,
					navText: ["<div class='carousel-arrow-left'><i class='ion ion-ios-arrow-left'></i></div>","<div class='carousel-arrow-right'><i class='ion ion-ios-arrow-right'></i></div>"]
				}
			}
				
		});
		
	});
	$(function(){
		$(window).on("load",function() {
			$('.owl-default').owlCarousel({
				margin:30,
				loop:true,
				//autoWidth:true,
				//items:1,
				//autoplay:true,
				//autoplayTimeout:4000,
				//autoplayHoverPause:true,
				//animateOut: 'fadeOut',
				responsiveClass: true,
				responsive: {
					0: {
						items: 2,
						margin:5,
						nav: false,
						dots: false,
					},
					600: {
						items: 3,
						nav: true,
						//dots: false,
					},
					1000: {
						items: 4,
						nav: true,
						navText: ["<div class='carousel-arrow-left'><i class='ion ion-ios-arrow-back'></i></div>","<div class='carousel-arrow-right'><i class='ion ion-ios-arrow-forward'></i></div>"]
						//loop: false
					}
				}				
			});
			// $('.ProductWithList').owlCarousel({
				// margin:6,
				// loop:true,
				// responsiveClass: true,
				// responsive: {
					// 0: {
						// items: 2,
						// margin:5,
						// nav: false,
						// dots: false,
					// },
					// 600: {
						// items: 3,
						// nav: true,
						// //dots: false,
					// },
					// 1000: {
						// items: 4,
						// nav: true,
						// navText: ["<div class='carousel-arrow-left'><i class='ion ion-ios-arrow-back'></i></div>","<div class='carousel-arrow-right'><i class='ion ion-ios-arrow-forward'></i></div>"]
						// //loop: false
					// },
					// 1150: {
						// items: 5,
						// nav: true,
						// navText: ["<div class='carousel-arrow-left'><i class='ion ion-ios-arrow-back'></i></div>","<div class='carousel-arrow-right'><i class='ion ion-ios-arrow-forward'></i></div>"]
						// //loop: false
					// }
				// }
			// });
			// $('#ShopBrand').owlCarousel({
				// margin:0,
				// loop:true,
				// //autoWidth:true,
				// //items:1,
				// autoplay:true,
				// autoplayTimeout:2000,
				// //autoplayHoverPause:true,
				// //animateOut: 'fadeOut',
				// responsiveClass: true,
				// responsive: {
					// 0: {
						// items: 2,
						// nav: false,
						// dots: false,
					// },
					// 600: {
						// items: 5,
						// nav: true,
						// //dots: false,
					// },
					// 1000: {
						// items: 8,
						// nav: true,
						// navText: ["<div class='carousel-arrow-left'><i class='ion ion-ios-arrow-back'></i></div>","<div class='carousel-arrow-right'><i class='ion ion-ios-arrow-forward'></i></div>"]
						// //loop: false
					// }
				// }				
			// });
		}).trigger('load');
	});
	
	$(function(){
		$(window).on("load resize scroll",function() {
			$('.wrapper').css("margin-top", $(".navbar").height());
			//$("#home-carousel").height($(window).height() - 250).css('overflow-y','hidden');
			if ($(window).width() < 960) {
				$("#mobile-button").height($(window).height() - 55).css({'overflow':'hidden','overflow-y':'auto'});
			}else{
				$("#mobile-button").height($(window).height()).css({'height':'auto','overflow-y':'hidden'});
			};
			/*if( $('#mobile-button').hasClass('show-on-mobile')){
				$('body').css('overflow-y','hidden');
			}else{
				$('body').css('overflow-y','auto');
			}*/
			
			//$('.home-category.product-category > .img-container').css("height", $(".big.product-category > .img-container > .category-img").height());
			$('.equal-height-cat').css("height", $(".big.product-category > .img-container > .category-img").height() + 35);
		}).trigger("resize");
	});
	
	//parallax
	$(window).scroll(function(e){
		parallax();
	});
	function parallax(){
		var scrolled = $(window).scrollTop();
		//$('.analyst-report-bg').css('top',-(scrolled*0.15)+'px');
		$('.footer-bg').css('top',-(scrolled*0.05)+'px');
	}
	$(function(){
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			var height = $('.top-header').height() + 28;
			//var height = 28;
			if (scroll >= height){
				//$(".top-header").addClass("fixed-top");
				//$(".filter-section").css("margin-top","175px");
			} else {
				//$(".top-header").removeClass("fixed-top");
				//$(".filter-section").css("margin-top","0px");
			};
			if (($( window ).height()) <= 650){
				//$(".top-header").removeClass("fixed-top");
				//$(".filter-section").css("margin-top","0px");
			}else {
				//$(".top-header").addClass("fixed-top");
				//$(".filter-section").css("margin-top","175px");
			};
			
			//var top = $('.page-wrapper').scrollTop();
			// $('.header').css('left', -top);
			//console.log(top);
			//$('.top-header').css('top', top);
		});
		
		// $('.page-wrapper').on('scroll', function() {
			
		// });
	});
	
	// $(function(){
		// $(".megamenu > ul > li.megamenu-list").hover(function(){
			// $(".home-body").toggleClass("home-body-overlay");
		// });
		// $(window).on("load resize scroll",function() {
			// if ($(window).width() < 960) {
				// $(".home-body").removeClass("home-body-overlay");
			// }else{
				// //$(".home-body , .inner-body").removeClass("home-body-overlay");
				// //$(".home-body").removeClass("home-body-overlay");
			// };			 
		// }).trigger("load resize scroll");
	 // });
	 
	$(function(){
		$(window).on("load resize",function() {
			$(".filter-toggle").on("click", function(){
				$(".filter-section").toggleClass("filter-open");
				//$("body,html").addClass('overflowHidden');
			});
			$(".filter-toggle-close").on("click", function(){
				$(".filter-section").removeClass("filter-open");
				//$("body,html").removeClass('overflowHidden');
			});
			// if ($(window).width() < 960) {
				// $(".filter-section").removeClass("filter-open");
				// $(".filter-section").children("filter-toggle-close").hide();
			// }
		}).trigger("load resize");
		
	});
	
	$(function(){
		$('#menu-icon').on("click", function(e) {
			$("body,html").toggleClass('overflowHidden');
			// $(".megamenu").slideToggle();
			$(".top-short-links").slideToggle();
			$(this).toggleClass("active");
		});
		$('.megamenu-list > a').on('click', function(e){
			$(this).parent(".megamenu-list").toggleClass('active').siblings().removeClass('active');
			e.stopPropagation();
			e.preventDefault();
		});
		// $('.megamenu-list').on('click', function(){
			// $('.megamenu-list').addClass('active').siblings().removeClass('active');;
		// });
	});
	
	$(function(){
		$(window).on("resize load",function(e) {
			var $crumbs = $(".product-list-header > .body-breadcrumb > .breadcrumb > li");
			var overallWidth = $(".product-list-header").width();
			var crumbWidth = (100 / $crumbs.length) + '%';
			$crumbs.css('max-width', crumbWidth);

			var totalWidth = 0;
			$crumbs.each(function(elt) {
			var width = $(this).width();
			totalWidth += width;
			});

			var adjustment = overallWidth - totalWidth;

			var $lastCrumb = $(".product-list-header > .body-breadcrumb > .breadcrumb > li:last");
			var lastCrumbWidth = $lastCrumb.width();
			lastCrumbWidth = lastCrumbWidth + adjustment;
			$lastCrumb.css('max-width', lastCrumbWidth - 25);			
		}).trigger("load resize");
		//setInterval(update, 1000);
	});
	
	$(function(){
		$('[data-toggle=tooltip]').hover(function(){
			// on mouseenter
			$(this).tooltip('show');
		}, function(){
			// on mouseleave
			$(this).tooltip('hide');
		});
	});
	
/*$('#toggle_more').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
	$('body,html').toggleClass('stop-scroll');
});*/

 //(function ($) {
    // $(document).ready(function() {
        // //Integration with "Magnific Popup" plugin
        // $(".xzoom, .xzoom-gallery").xzoom();

        // $('.xzoom:first').bind('click', function() {
            // var xzoom = $(this).data('xzoom');
            // xzoom.closezoom();
            // var gallery = xzoom.gallery().cgallery;
            // var i, images = new Array();
            // for (i in gallery) {
                // images[i] = {src: gallery[i]};
            // }
            // $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
            // event.preventDefault();
        // });
    // });
	
 //})(jQuery);
 
$(document).ready(function() {
	$(".cd-dropdown-wrapper").hover(function(){
		$(".cd-dropdown-trigger,.cd-dropdown").addClass("dropdown-is-active");
	},function () {
		$(".cd-dropdown-trigger,.cd-dropdown").removeClass("dropdown-is-active");
	});
	
	// $(".has-children > a").hover(function(){
		// $(".cd-dropdown-icons").addClass("is-active");
	// },function () {
		// $(".cd-dropdown-icons").removeClass("is-active");
	// });
	
	$(".mobile-dropdown").hover(function(){
		$(".dropdown-menu").removeClass("ng-hide");
	});
});

$(function(){
		// $(".cd-dropdown-trigger, .cd-dropdown").hover(function(){
			// $(".home-body").toggleClass("home-body-overlay");
		// });
		$(window).on("load resize scroll",function() {
			if ($(window).width() < 960) {
				$(".home-body").removeClass("home-body-overlay");
			}else{
				//$(".home-body , .inner-body").removeClass("home-body-overlay");
				//$(".home-body").removeClass("home-body-overlay");
			};			 
		}).trigger("load resize scroll");
	 });

$(document).ready(function() {
	$(".close-alert").on("click", function(){
		$(".head-offer-alert").hide();
	});
});
////////////////SPLIT LIST ITEMS/////////////////////
// $(function($) {
    // var num_cols = 3,
    // container = $('.catTree'),
    // listItem = 'div[data-tree-model].catTree ul > li > div > ul > li',
    // listClass = 'sub-list';
    // container.each(function() {
        // var items_per_col = new Array(),
        // items = $(this).find(listItem),
        // min_items_per_col = Math.floor(items.length / num_cols),
        // difference = items.length - (min_items_per_col * num_cols);
        // for (var i = 0; i < num_cols; i++) {
            // if (i < difference) {
                // items_per_col[i] = min_items_per_col + 1;
            // } else {
                // items_per_col[i] = min_items_per_col;
            // }
        // }
        // for (var i = 0; i < num_cols; i++) {
            // $(this).append($('<ul ></ul>').addClass(listClass));
            // for (var j = 0; j < items_per_col[i]; j++) {
                // var pointer = 0;
                // for (var k = 0; k < i; k++) {
                    // pointer += items_per_col[k];
                // }
                // $(this).find('.' + listClass).last().append(items[j + pointer]);
            // }
        // }
    // });
// });

////////////////SPLIT LIST ITEMS/////////////////////

if( !$(".cart-list-items").has("li").length ) {
	  $(".cart-list-items").html("No product selected");
}
////////////////SPLIT LIST ITEMS END/////////////////////
$(document).ready(function() {
	//$('.box-container').css("min-height", $(".order-history-details").height());	
	//$(".box-container").height($(".box-container").height() + $(".order-history-details").height());
	$('.page-footer').css("margin-top", $(".order-history-details").height());
	//$(".payingDataList .cart-total").height($(window).height() - 100);
});


////////////////STICKY SIDEBAR/////////////////////

setTimeout(function(){
	$(window).scroll(function(){
		// var sidebar = new StickySidebar('.filter-section', {
			// topSpacing: 20,
			// bottomSpacing: 20,
			// containerSelector: '.inner-container',
			// innerWrapperSelector: '.aside-filter',
		// });
		/////////////////////////////////////////////
		////////////Working Filter Site//////////////
		/////////////////////////////////////////////
		// $('.filter-section').stickySidebar({
			// topSpacing: 122,
			// bottomSpacing: 20,
			// containerSelector: '.inner-container',
			// innerWrapperSelector: '.aside-filter',
		// });
		/////////////////////////////////////////////
		////////////Working Filter Site//////////////
		/////////////////////////////////////////////
		
		// var ProductDetails  = new StickySidebar('.zoomimg', {
			// topSpacing: 20,
			// bottomSpacing: 20,
			// containerSelector: '.StickyDetails',
			// innerWrapperSelector: '.xzoom-container',
		// });
		// $('.zoomimg').stickySidebar({
			// topSpacing: 20,
			// bottomSpacing: 20,
			// containerSelector: '.StickyDetails',
			// innerWrapperSelector: '.xzoom-container',
		// });
	});
},1000);

//////////////////////////////////////
$(document).mouseup(function (e) {
	var clickOut = $(".mobile-dropdown .dropdown-menu");
	// if the target of the click isn't the container nor a descendant of the container
	if (!clickOut.is(e.target) && clickOut.has(e.target).length === 0) {
		clickOut.addClass('ng-hide');
	}
});

///////////////Scroll to Top///////////////
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
////////////////////////////////////////

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
////////////////////////////////////////

///////////////RESPONSIVE MENU START//////////////////
/*******************************
 * jQuery Multi Level CSS Menu
 *******************************/

jQuery(function($) {
  var animation = {up: 200, down: 300};
  var responsivewidth = 480;
  
  var selectedclass = 'selected';
  var arrowclass = 'downarrow';

	function setupMenu(menuid, buttonid) {
    var $mainmenu = $('#'+menuid+">ul");
    
		var $headers = $mainmenu.find("ul").parent();
    // Add dropdown arrows
		$headers.each(function(i)
		{
      var $curobj = $(this);
      $curobj.children('a:eq(0)').append('<span class="'+arrowclass+'"></span>');
    });
    
    // Menu button click event
		// Displays top-level menu items
		$('#'+buttonid).click(function(e) {
			e.preventDefault();
      
      var $open = $('#'+buttonid).hasClass(selectedclass);
      if ($open) {
        // Close menu
        collapseChildren('#'+menuid);
				$('#'+menuid).slideUp(animation.up, function() { 
          $('#'+menuid).removeAttr('style');
          $('#'+buttonid).removeClass(selectedclass);
        } );
			}
			else {
        // Open menu
        $('#'+buttonid).addClass(selectedclass);
				$('#'+menuid).slideDown(animation.down);
			}
		});
  }
  
  function resizeMenu(menuid, buttonid) {
    var $ww = document.body.clientWidth;
    var $mainmenu=$("#"+menuid+">ul");
    
    if ($ww > responsivewidth) {
      $mainmenu.addClass('full');
      $mainmenu.removeClass('compact');
    }
    else {
      $mainmenu.removeClass('full');
      $mainmenu.addClass('compact');
    }
    
		var $headers = $mainmenu.find("ul").parent();
    
		$headers.each(function(i)
		{
      var $curobj = $(this);
      var $link = $curobj.children("a:eq(0)");
      var $subul = $curobj.find('ul:eq(0)');
      
      // Unbind events
      $curobj.unbind('mouseenter mouseleave');
      $link.unbind('click');
      
      if ($ww > responsivewidth) {
        // Full menu
        $curobj.hover( function(e) {
          var $targetul = $(this).children('ul:eq(0)');
          
          var $dims = { w: this.offsetWidth, 
                        h: this.offsetHeight, 
                        subulw: $subul.outerWidth(),
                        subulh: $subul.outerHeight() };
          var $istopheader = $curobj.parents('ul').length == 1 ? true : false;
          $subul.css($istopheader ? {} : {top: 0});
          var $offsets = { left: $(this).offset().left, 
                           top: $(this).offset().top };
          var $menuleft = $istopheader ? 0 : $dims.w;
          $menuleft = ($offsets.left+$menuleft+$dims.subulw>$(window).width()) ? ($istopheader ? -$dims.subulw+$dims.w : -$dims.w) : $menuleft;
          $targetul.css({left:$menuleft+'px', width:$dims.subulw+'px'});
          
          $(this).addClass(selectedclass);
          $targetul.slideDown(animation.down);
        },
        function(e) {
          var $targetul = $(this).children('ul:eq(0)');
          $targetul.slideUp(animation.up, function() { 
            $targetul.removeAttr('style');
            $targetul.parent().removeClass(selectedclass);
          } );
          $(this).removeClass(selectedclass);
        });
      }
      else {
        // Compact menu
        $link.click(
					function(e){
            e.preventDefault();
						var $open = $curobj.hasClass(selectedclass);
						var $targetul = $curobj.children("ul:eq(0)");
            if ($open) {
              collapseChildren($targetul);
              $targetul.slideUp(animation.up, function() { 
                $targetul.removeAttr('style');
                $targetul.parent().removeClass(selectedclass);
              } );
            }
            else {
              $curobj.addClass(selectedclass);
              $targetul.slideDown(animation.down);
            }
          }
        );
      }
    });
    
    var $open = $('#'+buttonid).hasClass(selectedclass);
    if ($open) {
      collapseChildren('#'+menuid);
      $('#'+menuid).hide();
      $('#'+menuid).removeAttr('style');
      $('#'+buttonid).removeClass(selectedclass);
			/*$('#'+menuid).slideUp(animation.up, function() { 
        $('#'+menuid).removeAttr('style');
        $('#'+buttonid).removeClass(selectedclass);
      } );*/
		}
  }
  
  function collapseChildren(elementid) {
		// Closes all submenus of the specified element
		var $headers = $(elementid).find('ul');
		$headers.each(function(i)
		{
			var $open = $(this).parent().hasClass(selectedclass);
			if ($open) {
				$(this).slideUp(animation.up, function() { 
          $(this).removeAttr('style');
          $(this).parent().removeClass(selectedclass);
        } );
			}
		});
	}
  
  function collapseAll() {
		// Closes all submenus of the menu
		collapseChildren('#'+menuid);
	}

  function init(menuid, buttonid) {
    // Add a handler function for the resize and orientationchange event of window
    $(window).bind('resize orientationchange', function(){resizeMenu(menuid, buttonid);});
    resizeMenu(menuid, buttonid);
    setupMenu(menuid, buttonid);
  }
  
  // Initialize the menu and the button
  init('menu', 'menu-button');
});
///////////////RESPONSIVE MENU END//////////////////