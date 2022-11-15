$(document).ready(function() {

    // sub 메뉴 중 detail 페이지의 footer 위치 재조정 (서브헤더가 가려짐에 따라)
    if($('footer').hasClass('sub')) {

        $(window).on('load resize', function() {
            
            const header_height = $('header').outerHeight(true);
            const main_height = $('main').outerHeight(true);
            const footer = main_height - header_height;
            const header = header_height * (-1);

            $('main, footer.sub').css({
                'position' : 'relative',
                'top' : `${header}px`
            });
        });
    }


    // 특정 a 링크만 blank 적용
    $('.mini-menu a, .reserve, footer a').attr('target', '_blank');


    // 모바일 메뉴
    $('.mobile-menu-popup').hide();
    $('.mobile-menu').click(function() {
        const sc_width = window.innerWidth - $(window).width();

        $(this).hide();
        $('.mobile-menu-popup').show();
        $('.window .close').css({ "right" : 20 + sc_width + "px" });
        $('body').css({ "overflow" : "hidden" });
    });
    $('.window .close').click(function() {
        $('.mobile-menu-popup').hide();
        $('.mobile-menu').show();
        $('body').css({ "overflow" : "visible" });
    });
    $('.wh-menu .group').click(function() {
        $(this).children('.dropdown').toggleClass('active');
        $(this).siblings().slideToggle();
    });


    // PC 메뉴 서브
    $('.pc-menu .group').mouseover(function() {
            $('.pc-menu .opt').addClass('hidden');
            $(this).next().removeClass('hidden');

            if($(this).hasClass('m1'))      { $(this).next().css({ "margin-left" : "-32px" }); }
            else if($(this).hasClass('m2')) { $(this).next().css({ "margin-left" : "-28px" }); }
            else if($(this).hasClass('m3')) { $(this).next().css({ "margin-left" : "-14px" }); }
            else if($(this).hasClass('m4')) { $(this).next().css({ "margin-left" : "-24px" }); }
            else if($(this).hasClass('m6')) { $(this).next().css({ "margin-left" : "-26px" }); }
    });
    $('.pc-menu .opt').mouseleave(function() {
        $(this).addClass('hidden');
    });


    // PC 검색 메뉴
    $('.icon-menu .search').click(function() {
        $(this).siblings().toggleClass('hidden');
        $(this).siblings().children('.searchbar').focus();
    });


    // 상단 메뉴 고정 (모바일 + PC)
    $(window).scroll(function() {
        const sc_top = $(this).scrollTop();
        
        if($(this).width() < 390) {
            if(sc_top > 220) { $('.logo-menu-wrap').addClass('menu-sc'); } 
            else             { $('.logo-menu-wrap').removeClass('menu-sc'); }
        } else if($(this).width() > 390 &&  $(this).width() < 1440) {
            if(sc_top > 240) { $('.logo-menu-wrap').addClass('menu-sc'); } 
            else             { $('.logo-menu-wrap').removeClass('menu-sc'); }
        } else {
            $('.logo-menu-wrap').removeClass('menu-sc');
            // if(sc_top > 380) { $('.logo-menu-wrap').addClass('menu-sc'); } 
            // else             { $('.logo-menu-wrap').removeClass('menu-sc'); }
        }
    });


    // 언어변경, 브레드크럼 드롭다운 목록
    $('.mini-menu .lang').click(function() {
            $(this).children('.dropdown').toggleClass('active');
            $('.lang-opt').slideToggle();
    });
    $('.breadcrumb .dropdown').click(function() {
        $(this).toggleClass('active');
        $(this).parent().siblings().slideToggle();
    });


    // 패밀리 사이트 이동
    $('select[name=family]').change(function() {
        window.open($(this).val());
    });

    // $('video').hover(function toggleControls() {
    //     if (this.hasAttribute("controls")) {
    //         this.removeAttribute("controls")
    //     } else {
    //         this.setAttribute("controls", "controls")
    //     }
    // })
    
    /* ----------------------------------------------------------*/


    // sub 필터 상세검색 열기 & 닫기
    $('.ds-btn').click(function() {
        const status = $(this).children('.status');

        if (status.text() == '열기') { status.text('닫기'); } 
        else                         { status.text('열기'); }
        $(this).children('img').toggleClass('active');
        $(this).next().slideToggle();
    });


    // 상세 검색 옵션 선택
    $('.detail-search .opt li').click(function() {
        $(this).toggleClass('on');
    });


    // 필터 초기화 버튼
    $('.detail-search button[type=reset]').click(function() {
        $('.detail-search .opt li').removeClass('on');
        $('.chk-box input[type=checkbox]').attr('checked', false);
    });

    // $('.more-btn').click(function() {
    //     $('.item-box').height($('.item-box').height() + 770);
    // });
})