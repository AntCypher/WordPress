
	jQuery(document).scroll(function() {
		var scrollheight = ( ( jQuery(".et-l--header").outerHeight() ) + ( jQuery("#banner_section").outerHeight() ) );
		var scrollheightA = jQuery("#banner_section").outerHeight();
		$headerheight = ( ( jQuery('.et-l--header').outerHeight() ) + 0 );
		$headerheightB = ( ( jQuery('.et-l--header').outerHeight() ) + 50 );

		var scroll = jQuery(window).scrollTop();
		if (scroll >= scrollheightA) {
			//jQuery(".getactive_hero_sec .et_pb_button_module_wrapper").addClass("sticky").css({'top':($headerheight)});
			//jQuery("#filter_section").addClass("sticky").css({'top':($headerheightB)})
			jQuery(".getactive_hero_sec .et_pb_button_module_wrapper").addClass("sticky");
			jQuery("#filter_section").removeClass("sticky");

		} else {
			//jQuery(".getactive_hero_sec .et_pb_button_module_wrapper").removeClass("sticky").css({'top':'auto'});
			//jQuery("#filter_section").removeClass("sticky").css({'top':'100%'});
			jQuery(".getactive_hero_sec .et_pb_button_module_wrapper").removeClass("sticky");
			jQuery("#filter_section").removeClass("sticky");
		}
		
		if (jQuery(window).width() <= 980) {
			if (scroll >= scrollheightA) {
				jQuery(".getactive_hero_sec .et_pb_button_module_wrapper").css({'top':($headerheight)});
				jQuery("#filter_section").css({'top':($headerheightB)})

			} else {
				jQuery(".getactive_hero_sec .et_pb_button_module_wrapper").css({'top':'auto'});
				jQuery("#filter_section").css({'top':'100%'});
			}
		}
		
	});

	/* Sticky Header */
	jQuery(document).scroll(function() {
		if (jQuery(window).width() <= 980) {
			var scroll = jQuery(window).scrollTop();
			if (scroll >= 1) {
				jQuery("header.et-l--header").addClass("stickys_header");

			} else {
				jQuery("header.et-l--header").removeClass("stickys_header");				
			}
		}
	});
	
	jQuery(document).ready(function(){
		
		//if (jQuery(window).width() <= 980) {
			jQuery("body").each(function() {			
				function headheight(){
					$headerheight = (jQuery("header.et-l--header").outerHeight());
					console.log($headerheight);
					console.log(jQuery(window).width());
					if (jQuery(window).width() <= 980) {
						jQuery("#page-container").css({'margin-top':($headerheight)});
					} else {
						jQuery("#page-container").css({'margin-top':0});
					}
				}
				jQuery(window).on('load resize orientationchange', headheight);
			});
		//}
		
		jQuery('.years_box_row').each(function() {
			var $this = jQuery(this);
			function setHeight() {
				var max = 0;
				jQuery('.et_pb_column .et_pb_main_blurb_image', $this).each(function() {
					jQuery(this).height('');
					var h = jQuery(this).height();
					max = Math.max(max, h);
				}).height(max);
			}
			jQuery(window).on('load resize orientationchange', setHeight);
		});
		
		// 
		/* Mobile Search */
		jQuery(".mobile_search_btn").click(function(){
		  	jQuery(".mobile_search_form_row").slideToggle();
		  	jQuery("body").toggleClass('overlay_body');
		});
		jQuery(".mobile_search_close_btn").click(function(){
		  	jQuery(".mobile_search_form_row").slideToggle();
			jQuery("body").removeClass('overlay_body');
		});
		/* Mobile Menu */
		jQuery("#responsive-menu-pro-wrapper").each(function(){
			jQuery(this).find(".mobile-menu-social-subscribe").appendTo(this);
		});
		/* Post Title */
		jQuery(".postStyle1.et_pb_posts").each(function(){
			jQuery(".et_pb_post .entry-title a").wrapInner("<span></span>");
		});
		jQuery('.featured_post.et_pb_posts').each(function(){
			jQuery('.et_pb_post .entry-title, .et_pb_post .post-meta, .et_pb_post .post-content').wrapAll('<div class="featured_post_des"></div>');
		});
		/* Testimonial */
 		jQuery(".et_pb_testimonial_portrait").wrap("<div class='et_pb_testimonial_head_div'></div>");
		jQuery(".et_pb_testimonial").each(function(){
		jQuery(this).find('.et_pb_testimonial_description .et_pb_testimonial_author').appendTo(jQuery(this).find('.et_pb_testimonial_head_div'));
 		});
		/* Home Testimonial Slider */
		jQuery(".home_testimonial_slider").owlCarousel({
			items: 3,
			loop: false,
			autoplay: false,
			autoplaySpeed: 1200,
			nav: false,
			dots: false,
			margin: 0,
			mouseDrag: true,
			responsive: {
				0: {
					items: 1,
					loop: true,
					autoHeight:true,
					autoplay: true,
					autoplaySpeed: 1200,
				},
				981: {
					items: 2,
					loop: true,
					autoplay: true,
					autoplaySpeed: 1200,
				},
				1200: {
					items: 3,
					nav: false,
					dots: false,
				},
			}
		});

		/* participaction benefits Slider */

		jQuery(".benefits_slider").owlCarousel({
			items: 5,
			loop: true,
			autoplay: false,
			autoplaySpeed: 1200,
			nav: false,
			dots: false,
			mouseDrag: true,
			responsive: {
				0: {
					items: 1,
					dots: true,
				},
				767: {
					items: 2,
					dots: true,
					autoplaySpeed: 1200,
					autoplay: true,
				},
				981: {
					items: 3,
					loop: true,
					dots: true,
					autoplay: false,
					autoplaySpeed: 1200,
				},
				1200: {
					items: 5,
					nav: false,
					dots: false,
				},
			}
		});
		
		
		/* Home Testimonial Slider */
		jQuery(".cred_slider").owlCarousel({
			items: 3,
			loop: false,
			autoplay: false,
			autoplaySpeed: 1200,
			nav: false,
			autoHeight:true,
			autoHeightClass: 'owl-height',
			dots: false,
			margin: 30,
			mouseDrag: true,
			responsive: {
				0: {
					items: 1,
					loop: true,
					dots: true,
					autoHeight:true,
					autoplay: true,
					autoplaySpeed: 1200,
					margin: 15,
				},
				981: {
					items: 2,
					loop: true,
					dots: true,
					autoplay: true,
					autoplaySpeed: 1200,
				},
				1200: {
					items: 3,
					nav: false,
					dots: false,
				},
			}
		});
		
		
		//digital-toolkits-slide - community-better-challenge page
		jQuery(".digital-toolkits-slide").owlCarousel({
			items: 4,
			loop: false,
			autoplay: false,
			autoplaySpeed: 1200,
			nav: false,
			autoHeight:true,
			autoHeightClass: 'owl-height',
			dots: false,
			margin: 26,
			mouseDrag: true,
			responsive: {
				0: {
					items: 1,
					loop: true,
					dots: true,
					autoHeight:true,
					autoplay: true,
					autoplaySpeed: 1200,
					margin: 15,
				},
				768: {
					items: 2,
					loop: true,
					dots: true,
					autoplay: true,
					autoplaySpeed: 1200,
				},
				981: {
					items: 3,
					loop: true,
					dots: true,
					autoplay: true,
					autoplaySpeed: 1200,
				},
				1200: {
					items: 4,
					nav: false,
					dots: false,
				},
			}
		});

		/* App Testimonial Slider */
		jQuery(".app_testimonial_slider").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplaySpeed: 1200,
			nav: true,
			dots: true,
			margin: 0,
			mouseDrag: true,
			responsive: {
				0: {
					items: 1,
					autoplaySpeed: 1200,
// 					autoHeight:true,
// 					autoHeightClass: 'owl-height',
					nav: false,
				},
				981: {
					items: 1,
					nav: false,
					autoplaySpeed: 1200,
				},
				1200: {
					items: 1,
					nav: true,
				},
			}
		});
		
	 /*  Great Big Move Slider */
		jQuery(".great_move_slider").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplaySpeed: 1200,
			nav: true,
			dots: true,
			margin: 0,
			autoHeight:true,
			mouseDrag: true
		});

		jQuery('.et_pb_posts.postStyle1').each(function() {
			var $this = jQuery(this);
			function setHeight() {
				var max = 0;
				jQuery('.et_pb_post .entry-title a', $this).each(function() {
					jQuery(this).height('');
					var h = jQuery(this).height();
					max = Math.max(max, h);
				}).height(max);
			}
			jQuery(window).on('load resize orientationchange', setHeight);
		});
		jQuery('.more_participaction_sec').each(function() {
			var $this = jQuery(this);
			function setHeight() {
				var max = 0;
				jQuery('.et_pb_column .et_pb_module_header', $this).each(function() {
					jQuery(this).height('');
					var h = jQuery(this).height();
					max = Math.max(max, h);
				}).height(max);
			}
			jQuery(window).on('load resize orientationchange', setHeight);
		});
		jQuery('.home-intro-sec').each(function() {
			var $this = jQuery(this);
			function setHeight() {
				var max = 0;
				jQuery('.home-intro-row1 .et_pb_column', $this).each(function() {
					jQuery(this).outerHeight('');
					var h = jQuery(this).outerHeight();
					max = Math.max(max, h);
				}).outerHeight(max);
			}
			jQuery(window).on('load resize orientationchange', setHeight);
		});
		jQuery('.get_up_running_row').each(function() {
			var $this = jQuery(this);
			function setHeight() {
				var max = 0;
				jQuery('.et_pb_column .et_pb_blurb', $this).each(function() {
					jQuery(this).outerHeight('');
					var h = jQuery(this).outerHeight();
					max = Math.max(max, h);
				}).outerHeight(max);
			}
			jQuery(window).on('load resize orientationchange', setHeight);
		});
		jQuery('.rewarded_box_row').each(function() {
			var $this = jQuery(this);
			function setHeight() {
				var max = 0;
				jQuery('.et_pb_column', $this).each(function() {
					jQuery(this).outerHeight('');
					var h = jQuery(this).outerHeight();
					max = Math.max(max, h);
				}).outerHeight(max);
			}
			jQuery(window).on('load resize orientationchange', setHeight);
		});
		jQuery('.address_col').each(function() {
			var $this = jQuery(this);
			function setHeight() {
				var max = 0;
				jQuery('.et_pb_code', $this).each(function() {
					jQuery(this).outerHeight('');
					var h = jQuery(this).outerHeight();
					max = Math.max(max, h);
				}).outerHeight(max);
			}
			jQuery(window).on('load resize orientationchange', setHeight);
		});
		jQuery('.featured_post.et_pb_posts').each(function() {
			function setleft(){
				$size = ( ( jQuery(".featured_post.et_pb_posts .featured_post_des").outerHeight() ) /2 );
				jQuery(".featured_post.et_pb_posts .featured_post_des").css({'margin-top':-($size)});
			}

			jQuery(window).on('load resize orientationchange', setleft);
		});
		jQuery('.blog_details_heading_sec').each(function() {
			function setRight(){
				$size = ( ( jQuery('.blog_details_heading_sec .et_pb_row').outerHeight() ) / 2 );
				jQuery('.blog_details_heading_sec .et_pb_row').css({'margin-top':-($size)});
			}

			jQuery(window).on('load resize orientationchange', setRight);
		});
		jQuery('.et_pb_section').each(function() {
			function setRight(){
				$size = ( ( jQuery('.featured_post .featured_post_des').outerHeight() ) / 2 );
				jQuery('.featured_post .featured_post_des').css({'margin-top':-($size)});
			}

			jQuery(window).on('load resize orientationchange', setRight);
		});
		jQuery(".activity_slider").owlCarousel({
			items: 3,
			loop: false,
			autoplay: false,
			autoplaySpeed: 1200,
			nav: false,
			dots: false,
			margin: 20,
			mouseDrag: true,
			responsive: {
				0: {
					items: 1,
					dots: true,
					loop: false,
					autoHeight:true,
					autoplay: true,
					autoplaySpeed: 1200,
				},
				981: {
					items: 2,
					dots: true,
					loop: false,
					autoplay: true,
					autoplaySpeed: 1200,
				},
				1200: {
					items: 3,
					nav: false,
					dots: false,
				},
			}
		});
		
		
		jQuery('.press_accordion_panel .et_pb_text_inner').addClass('press_plus');
		jQuery('.press_accordion_panel .acodi_dfc_col_box').hide().addClass('flipInX');
		jQuery('.press_accordion_panel').on('click', '.press_accordion_header', function() {
			jQuery('.acodi_dfc_col_box').slideUp().removeClass('flipInX');
			jQuery('.et_pb_text_inner').removeClass('press_minus');
			if(jQuery(this).next().is(':hidden')) {
				jQuery(this).next().slideDown().addClass('flipInX');
				jQuery(this).find('.et_pb_text_inner').addClass('press_minus');
			} else {
				jQuery(this).next().slideUp();
				jQuery(this).find('.et_pb_text_inner').addClass('press_plus');
			}
		});
		
	});
