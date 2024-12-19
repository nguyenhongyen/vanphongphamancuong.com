var windowWidth = document.documentElement.clientWidth;
window.addEventListener("resize", () => {
	windowWidth = document.documentElement.clientWidth;
});

const handleTouchMoveNavigation = function (ev) {
	if (!$(ev.target).closest('#header-navigation').length) {
		ev.preventDefault();
	}
}
const renderFirstLi = (title) => {
	return `<li class="li-header"><button type="button" class="navigation-sub_back"><i class="far fa-arrow-left"></i></button>${title}</li>`;
}
const handleNavigationMobile = function () {
	const elmBody = $('body'), elmNavigation = $('#header-navigation'), elmOverlay = $('#header-overlay'),
		elmToggleNavigation = $('#js-toggle_navigation'), elmCloseNavigation = $('#js-close_navigation');

	elmNavigation.find('ul li').each(function (index, elm) {
		if ($(elm).children('.navigation-sub').length != 0) {
			$(elm).children('a').attr({'href': 'javascript:void(0)', 'data-event': 'call-sub'});
		}
	});

	$(document).on('click', '#header-navigation a[data-event="call-sub"]', function () {
		$(this).parent().addClass('navigation-sub_show');
		$(this).parent().children('.navigation-sub').children('ul').children('.li-header').remove();
		$(this).parent().children('.navigation-sub').children('ul').prepend(renderFirstLi($(this).attr('data-name')));
	});

	elmNavigation.on('click', '.navigation-sub_back', function () {
		$(this).closest('.navigation-sub_show').removeClass('navigation-sub_show');
	});

	elmToggleNavigation.click(function () {
		if (elmBody.hasClass('navigation-show')) {
			elmBody.attr({
				'class': '', 'style': ''
			});
			document.removeEventListener('touchmove', handleTouchMoveNavigation);
		} else {
			document.addEventListener('touchmove', handleTouchMoveNavigation, {passive: false});
			elmBody.attr({
				'class': 'navigation-show', 'style': 'overflow-y: hidden'
			});
		}
	});

	elmCloseNavigation.click(function () {
		elmToggleNavigation.trigger('click');
		elmNavigation.find('.navigation-sub_show').removeClass('navigation-sub_show');
	});

	elmOverlay.click(function () {
		elmToggleNavigation.trigger('click');
		elmNavigation.find('.navigation-sub_show').removeClass('navigation-sub_show');
	});
}


let handleCallMenu = function () {
	const $body = $('body');
	const handleBody = function ($toggle = false) {
		if ($body.hasClass('is-navigation')) {
			$body.removeClass('is-navigation');
			if ($body.hasClass('is-overflow')) {
				$body.removeClass('is-overflow');
			}

			$('#header-navigation ul').collapse('hide');
		} else {
			if ($toggle) {
				$body.addClass('is-navigation is-overflow')
			}
		}
	}

	if (windowWidth <= 1200) {
		const $hamburger = $('#hamburger-button');
		if ($hamburger.length) {
			$hamburger.click(function () {
				handleBody(true)
			});
		}

		const $overlay = $('#header-overlay');
		if ($overlay.length) {
			$overlay.click(function () {
				handleBody();
			});
		}

		const $closenav = $('#js-close_navigation');
		if ($closenav.length) {
			$closenav.click(function () {
				handleBody();
			});
		}

		const callSearch = $('#callSearch');
		if (callSearch.length) {
			callSearch.click(function () {
				$body.addClass('is-search')
			});
		}
	} else {
		handleBody();
	}

	const elmToggle = $('#js-toggle_search');
	elmToggle.click(function () {
		$body.removeClass('is-navigation is-overflow')
	});

	$(document).mouseup(function (e) {
		let elm = elmToggle.parent();
		elm.is(e.target) || 0 !== elm.has(e.target).length || (elm.removeClass('is-show'), elm.children('#js-toggle_search').html('<i class="fal fa-search"></i>'))
	});

	const navChild = $('.header-navigation li');
	if (navChild.length) {
		navChild.each(function () {
			let elm = $(this);
			let checkNavChild = $(this).find('.header-navigation__child');
			let navChildItem = $(this).find('a');
			if (checkNavChild.length) {
				navChildItem.click(function () {
					elm.addClass('show-navChild');
					$('body').css({
						overflow: "hidden"
					})
					return false;
				})

			}
			$('body').css({
				overflow: "unset"
			})

		})
	}

}

$(function () {
	handleCallMenu()
	$(window).resize(function () {
		handleCallMenu();
	});
	handleNavigationMobile()
});
