const select = (el, all = !1) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}
const on = (type, el, listener, all = !1) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}
let navbarlinks = select('#js-c-box-tabs .scrollto', !0)
const navbarlinksActive = () => {
    let position = window.scrollY + -1000
    navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('is-active')
        } else {
            navbarlink.classList.remove('is-active')
        }
    })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive);
$(".js-scroll-to-top-btn").on("click", function () {
    $("html,body").animate({scrollTop: 0}, 800)
})
var $hoverEffect = $('.js-nav-hover'), $headerLinks = $('#h-ui > li');
var moveHover = function (self) {
    var parent = self.parent().parent().parent();
    $hoverEffect.css('width', self.width()).css('right', parent.width() - (self.offset().left + self.width()) + parent.offset().left);
    $hoverEffect.css('transform', 'scaleX(1)')
};
var removeHover = function () {
    $hoverEffect.css('transform', 'scaleX(0)')
};
$headerLinks.hover(function () {
    moveHover.call(this, $(this))
}, function () {
    removeHover.call(this, $(this))
});
let navbar = document.getElementById("navbar");
let sticky = 120;

if (navbar){
    window.addEventListener("scroll", () => {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky")
        }
    })
}

on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
    select('.mobile-nav-toggle');
    select('.menu-parent').classList.toggle('active')
})
on('click', '.menu-parent', function (e) {
    select('#navbar').classList.remove('active');
    select('.menu-parent').classList.remove('active');
    document.body.classList.remove('overflow-hidden')
})
on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('active')) {
        e.preventDefault()
        this.classList.toggle('open')
        this.nextElementSibling.classList.toggle('dropdown-active')
    }
}, !0);



const breakpoints = {
    1700: {slidesPerView: 6,},
    1400: {slidesPerView: 5,},
    1200: {slidesPerView: 5,},
    992: {slidesPerView: 3,},
    768: {slidesPerView: 3, spaceBetween: 10,},
    576: {slidesPerView: 2.5, spaceBetween: 10,},
    480: {slidesPerView: 2,},
    350: {slidesPerView: 1.5,}
};

new Swiper('#js-swiper-horizontal-general', {
    spaceBetween: 10,
    breakpoints: {
        1700: {slidesPerView: 6,},
        1400: {slidesPerView: 6,},
        1200: {slidesPerView: 5,},
        992: {slidesPerView: 4,},
        768: {slidesPerView: 3.5, spaceBetween: 10,},
        576: {slidesPerView: 2.5, spaceBetween: 10,},
        480: {slidesPerView: 1.8,},
        380: {slidesPerView: 1.5,},
        360: {slidesPerView: 1.5,},
        320: {slidesPerView: 1.5,}
    },
    navigation: {nextEl: '#js-swiper-horizontal-general-next', prevEl: '#js-swiper-horizontal-general-prev',}
});
new Swiper('.swiper-ui__brands', {
    spaceBetween: 10,
    autoplay: !1,
    breakpoints: {
        1700: {slidesPerView: 7,},
        1400: {slidesPerView: 6,},
        1200: {slidesPerView: 6,},
        992: {slidesPerView: 4,},
        768: {slidesPerView: 3.5, spaceBetween: 10,},
        576: {slidesPerView: 2.5, spaceBetween: 10,},
        480: {slidesPerView: 2,}
    }
});
new Swiper('#js-swiper-products-7', {
    spaceBetween: 10,
    breakpoints: {
        1700: {slidesPerView: 6,},
        1400: {slidesPerView: 5},
        1200: {slidesPerView: 4,},
        992: {slidesPerView: 3,},
        768: {slidesPerView: 2, spaceBetween: 10,},
        576: {slidesPerView: 2.5, spaceBetween: 10,},
        480: {slidesPerView: 1.5,},
        380: {slidesPerView: 1.5,},
        350: {slidesPerView: 1.5},
    },
    navigation: {nextEl: '#js-swiper-products-button-next-7', prevEl: '#js-swiper-products-button-prev-7',}
});
new Swiper('#js-swiper-products-6', {
    spaceBetween: 10,
    breakpoints: {
        1700: {slidesPerView: 5,},
        1400: {slidesPerView: 5},
        1200: {slidesPerView: 4,},
        992: {slidesPerView: 3,},
        768: {slidesPerView: 2, spaceBetween: 10,},
        576: {slidesPerView: 2.5, spaceBetween: 10,},
        480: {slidesPerView: 1.8,},
        380: {slidesPerView: 1.5,},
        350: {slidesPerView: 1.5},
    },
    navigation: {nextEl: '#js-swiper-products-button-next-6', prevEl: '#js-swiper-products-button-prev-6',}
});
new Swiper('#js-swiper-products-5', {
    spaceBetween: 10,
    breakpoints,
    navigation: {nextEl: '#js-swiper-products-button-next-5', prevEl: '#js-swiper-products-button-prev-5',}
});
new Swiper('#js-swiper-products-4', {
    spaceBetween: 10,
    breakpoints,
    navigation: {nextEl: '#js-swiper-products-button-next-4', prevEl: '#js-swiper-products-button-prev-4',}
});
new Swiper('#js-swiper-products-3', {
    spaceBetween: 10,
    breakpoints,
    navigation: {nextEl: '#js-swiper-products-button-next-3', prevEl: '#js-swiper-products-button-prev-3',}
});
new Swiper('#js-swiper-products-2', {
    spaceBetween: 10,
    breakpoints,
    navigation: {nextEl: '#js-swiper-products-button-next-2', prevEl: '#js-swiper-products-button-prev-2',}
});
new Swiper('#js-swiper-products-1', {
    spaceBetween: 10,
    breakpoints,
    navigation: {nextEl: '#js-swiper-products-button-next-1', prevEl: '#js-swiper-products-button-prev-1',}
});
new Swiper('#js-swiper-services', {
    spaceBetween: 10,
    breakpoints: {
        1700: {slidesPerView: 6,},
        1400: {slidesPerView: 6,},
        1200: {slidesPerView: 4,},
        992: {slidesPerView: 3,},
        768: {slidesPerView: 3, spaceBetween: 10,},
        576: {slidesPerView: 2.5, spaceBetween: 10,},
        480: {slidesPerView: 1.7,},
        380: {slidesPerView: 1.5,},
        360: {slidesPerView: 1.5,},
    }
});
const ProductGalleryThumbs = new Swiper('#js-swiper-products-gallery-thumbs', {
    spaceBetween: 10,
    allowTouchMove: !1,
    slidesPerView: 1,
});
new Swiper('#js-swiper-products-gallery', {
    dynamicBullets: !0,
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {swiper: ProductGalleryThumbs},
    pagination: {el: '.swiper-pagination',}
});
new Swiper('#js-swiper-hero', {
    autoplay: !0,
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {el: '.swiper-pagination',},
    navigation: {nextEl: '.hero-swiper-button-next', prevEl: '.hero-swiper-button-prev',}
})
const countDownTimer = el => {
    let self = $(el);
    let countDownDate = new Date(self.data('countdown')).getTime();
    let timer = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = `<span class="col-time-ui">${Math.floor(distance / (1000 * 60 * 60 * 24))}</span>`;
        let hours = `<span class="col-time-ui">${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</span>`;
        let minutes = `<span class="col-time-ui">${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}</span>`;
        let seconds = `<span class="col-time-ui">${Math.floor((distance % (1000 * 60)) / 1000)}</span>`;
        self.html(days + ":" + hours + ":" + minutes + ":" + seconds);
        if (distance <= 0) {
            clearInterval(timer);
            $('.campaign').css('display', 'none')
        }
    }, 0)
}
countDownTimer('.count-down-timer');
countDownTimer('.js-product__count-timer');
let chart = c3.generate({
    bindto: '#product-module-chart-area',
    data: {
        columns: [['data1', 12000000, 12400000, 18800000, 12100000, 13400000, 11200000], ['data2', 12000000, 11200000, 13400000, 12100000, 12000000, 10800000],],
        type: 'area-spline',
        groups: [['data1', 'data2']],
        colors: {'data1': '#1746EB', 'data2': '#00ff80',},
        names: {'data1': 'کمترین قیمت', 'data2': 'میانگین قیمت',}
    },
    axis: {x: {type: 'category', categories: ['فرودین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور']},},
    legend: {show: !1, categories: !1},
    padding: {top: 0, left: 30, right: 30,},
})

$(".js-sort-options li").on("click", (function () {
    $(this).find("a").addClass("is-active"), $(this).siblings("li").find("a").removeClass("is-active")
}))


const element = document.querySelector(".pagination ul");
let totalPages = 10;
let page = 1;


element ? element.innerHTML = createPagination(totalPages, page) : null;

function createPagination(totalPages, page) {
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;


    if (page > 1) {
        liTag += `<li class="btn-pg-ui prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="ri-arrow-right-s-line"></i></span></li>`;
    }

    if (page > 2) {
        liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
        if (page > 3) {
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }

    if (page === totalPages) {
        beforePage = beforePage - 2;
    } else if (page === totalPages - 1) {
        beforePage = beforePage - 1;
    }
    if (page === 1) {
        afterPage = afterPage + 2;
    } else if (page === 2) {
        afterPage = afterPage + 1;
    }

    for (var plength = beforePage; plength <= afterPage; plength++) {
        if (plength > totalPages) {
            continue;
        }
        if (plength === 0) {
            plength = plength + 1;
        }
        if (page === plength) {
            active = "active";
        } else {
            active = "";
        }
        liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
    }


    if (page < totalPages) {
        liTag += `<li class="btn-pg-ui next" onclick="createPagination(totalPages, ${page + 1})"><span> <i class="ri-arrow-left-s-line"></i></span></li>`;
    }
    element ? element.innerHTML = liTag : '';
    return liTag;
}


class rangeSlider {
    constructor(rangeElement, valueElement, options) {
        this.rangeElement = rangeElement;
        this.valueElement = valueElement;
        this.options = options;

        // Attach a listener to "change" event
        this.rangeElement.addEventListener(
            "input",
            this.updateSlider.bind(this)
        );
    }

    // Initialize the slider
    init() {
        this.rangeElement.setAttribute("min", options.min);
        this.rangeElement.setAttribute("max", options.max);
        this.rangeElement.value = options.cur;

        this.updateSlider();
    }

    // Format the money
    asMoney(value) {
        return (
            parseFloat(value).toLocaleString("en-US", {
                maximumFractionDigits: 2,
            })
        );
    }

    generateBackground(rangeElement) {
        if (this.rangeElement.value === this.options.min) {
            return;
        }

        let percentage =
            ((this.rangeElement.value - this.options.min) /
                (this.options.max - this.options.min)) *
            100;
        return (
            "background: linear-gradient(to left, #f0932b, #f9ca24 " +
            percentage +
            "%, #d3edff " +
            percentage +
            "%, #dee1e2 100%)"
        );
    }

    updateSlider(newValue) {
        this.valueElement.innerHTML = this.asMoney(this.rangeElement.value);
        this.rangeElement.style = this.generateBackground(
            this.rangeElement.value
        );
    }
}

let rangeElement = select('#price-range');


if (rangeElement) {

    var options = {
        min: rangeElement.getAttribute('data-min'),
        max: rangeElement.getAttribute('data-max'),
        cur: rangeElement.getAttribute('data-current'),
    };

    let slider = new rangeSlider(rangeElement, select(".range__value"), options);
    let mobileRange = new rangeSlider(select("#mb-price-range"),select(".mobile-range__value"), options);

    slider.init();
    mobileRange.init();
}

(function() {
    $('.number-spinner>.ns-btn>a').click(function() {
        var btn = $(this),
            oldValue = btn.closest('.number-spinner').find('input').val().trim(),
            newVal = 0;

        if (btn.attr('data-dir') === 'up') {
            newVal = parseInt(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        btn.closest('.number-spinner').find('input').val(newVal);
    });
    $('.number-spinner>input').keypress(function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    });
})();


on('click', '.listing-option-remove', function (e) {
    this.parentElement.parentElement.remove();
}, true);

on('click', '.js-listing-options-clear', function () {
    let all_listing_options = select('.c-listing-options__labels ul li', true);
    console.log(all_listing_options);
    all_listing_options.forEach(e => {
        e.parentElement.removeChild(e);
    })
}, true)




