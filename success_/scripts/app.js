$(document).ready(function(){

    // for portfolio

    $.getScript("/success_/scripts/template.js", function(){
        $("body").append(templateGTW);
    });

    // end
    
    $("[data-src]").lazy();

    $(".open-comments").click(function(){
        $(".popups-comment .comment").show();
        $(".popups-comment .comment-video").hide();
        let name = $(this).closest(".comment").attr("data-name");
        let link = $(this).closest(".comment").attr("data-link");
        let text = $(this).closest(".comment").attr("data-text");
        let social = $(this).closest(".comment").attr("data-social");

        $(".popups-comment").find(".name").html(name);
        if(social == "telegram"){
            $(".popups-comment").find(".link").text("Telegram");
        }else{
            $(".popups-comment").find(".link").text("Instagram");
        }
        $(".popups-comment").find(".link").attr("href",link);
        $(".popups-comment").find(".txt").html(text);
        $(".popups-comment").fadeIn(300);
    });
    $(".close_popup_FSQvideo").click(function(){
        $(".popups-comment").fadeOut(300);
        $(this).parent().children('iframe').attr("src" , "");
    });
    $(".close_popup_FSQs").click(function(){
        $(".popups-comment").fadeOut(300);
    });

    $("#comment_swiper").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:$('.sliderCommentsButtonPrev'),
        nextArrow:$('.sliderCommentsButtonNext'),
        dots:false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    prevArrow:false,
                    nextArrow:false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  arrows:false,
                  centerMode:false,
                  adaptiveHeight:true,
                }
            }
          ]
    });

    $(".faq__close").click(function(){
        let CONTAINER = $(this).closest(".faq_wrp");
        if(CONTAINER.find(".content").is(":hidden")){
            //open comment
            $(this).find(".dubble_btn").css("opacity", "0");
            $(this).css("transform", "rotate(360deg)");
            CONTAINER.find(".content").show(300);
        }else{
            //close comment
            $(this).find(".dubble_btn").css("opacity", "1");
            $(this).css("transform", "rotate(0deg)");
            CONTAINER.find(".content").hide(300);
        }
        
    });

    $("#toogle_list_module").click(function(){
        const CONTAINER = $("#list_module");
        if(CONTAINER.hasClass("open")){
            // close
            CONTAINER.children(".wrapper").each(function(i){
                if(i >= 3){
                    $(this).hide(300);
                }
            });
            
            $(this).text("Більше модулів");
            CONTAINER.removeClass("open");

            $('html, body').animate({
                scrollTop: $(CONTAINER).offset().top
            }, 100);

        }else{
            // open
            CONTAINER.children(".wrapper").show(300);
            
            $(this).text("Менше модулів");
            CONTAINER.addClass("open");
        }
    });

    $(".close-burger").click(function(){
        $(".burger-list").hide(300);
    });
    $("#open_burger_list").click(function(){
        $(".burger-list").show(300);
    });
    $("[data-scroll]").click(function(){
        const TARGET = $(this).data("scroll");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(TARGET).offset().top
        }, 100);

        $(".burger-list").fadeOut(300);
    });
    $(".close").click(function(){
        $(this).closest(".popup_buy").fadeOut(300);
    });

    $("[data-open]").click(function(){
        if($(this).data("open") == "basic"){
            // basic
            const CONTAINER = $(".popup_buy");
            let data_link = $(this).attr("data-link");
            CONTAINER.find("form").attr("data-type", "basik");
            CONTAINER.find("h2").html("Тариф <span>BASIC</span>");
            CONTAINER.find("button").attr("data-link", data_link);
            CONTAINER.find("form").find("button").html(`Купити навчання <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87099 1.79483L1.06885 10.5208L1.43779 10.9033L10.2399 2.17734L9.87099 1.79483ZM10.7884 10.8077L10.8265 1.22699L10.6574 1.22631V1.15458H1.16073V1.68594H10.2933L10.257 10.8056L10.7884 10.8077Z" fill="#090B08"></path>
                        <path d="M1.06885 10.5208L0.776211 10.8031L0.497793 10.5144L0.782605 10.2321L1.06885 10.5208ZM9.87099 1.79483L9.58475 1.50609L9.87748 1.2159L10.1636 1.51257L9.87099 1.79483ZM1.43779 10.9033L1.72403 11.1921L1.43131 11.4823L1.14516 11.1856L1.43779 10.9033ZM10.2399 2.17734L10.5326 1.89508L10.811 2.18373L10.5262 2.46608L10.2399 2.17734ZM10.8265 1.22699L10.8282 0.82041L11.2347 0.822029L11.2331 1.22861L10.8265 1.22699ZM10.7884 10.8077L11.1949 10.8093L11.1933 11.2159L10.7867 11.2143L10.7884 10.8077ZM10.6574 1.22631L10.6558 1.63289L10.2509 1.63128V1.22631H10.6574ZM10.6574 1.15458V0.748004H11.064V1.15458H10.6574ZM1.16073 1.15458H0.754148V0.748004H1.16073V1.15458ZM1.16073 1.68594V2.09252H0.754148V1.68594H1.16073ZM10.2933 1.68594V1.27936H10.7015L10.6999 1.68756L10.2933 1.68594ZM10.257 10.8056L10.2554 11.2122L9.8488 11.2105L9.85042 10.804L10.257 10.8056ZM0.782605 10.2321L9.58475 1.50609L10.1572 2.08357L1.35509 10.8096L0.782605 10.2321ZM1.14516 11.1856L0.776211 10.8031L1.36148 10.2386L1.73043 10.6211L1.14516 11.1856ZM10.5262 2.46608L1.72403 11.1921L1.15155 10.6146L9.9537 1.8886L10.5262 2.46608ZM10.1636 1.51257L10.5326 1.89508L9.9473 2.4596L9.57836 2.07709L10.1636 1.51257ZM11.2331 1.22861L11.1949 10.8093L10.3818 10.8061L10.42 1.22537L11.2331 1.22861ZM10.6591 0.819736L10.8282 0.82041L10.8249 1.63356L10.6558 1.63289L10.6591 0.819736ZM10.2509 1.22631V1.15458H11.064V1.22631H10.2509ZM10.6574 1.56116H1.16073V0.748004H10.6574V1.56116ZM1.56731 1.15458V1.68594H0.754148V1.15458H1.56731ZM1.16073 1.27936H10.2933V2.09252H1.16073V1.27936ZM9.85042 10.804L9.88676 1.68432L10.6999 1.68756L10.6636 10.8072L9.85042 10.804ZM10.7867 11.2143L10.2554 11.2122L10.2586 10.399L10.79 10.4011L10.7867 11.2143Z" fill="white"></path>
            </svg> `);
            CONTAINER.fadeIn(300);
        }else if($(this).data("open") == "standart"){
            const CONTAINER = $(".popup_buy");
            let data_link = $(this).attr("data-link");
            CONTAINER.find("form").attr("data-type", "standart");
            CONTAINER.find("h2").html("Тариф <span>standart</span>");
            CONTAINER.find("button").attr("data-link", data_link);
            CONTAINER.find("form").find("button").html(`Купити навчання <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87099 1.79483L1.06885 10.5208L1.43779 10.9033L10.2399 2.17734L9.87099 1.79483ZM10.7884 10.8077L10.8265 1.22699L10.6574 1.22631V1.15458H1.16073V1.68594H10.2933L10.257 10.8056L10.7884 10.8077Z" fill="#090B08"></path>
                        <path d="M1.06885 10.5208L0.776211 10.8031L0.497793 10.5144L0.782605 10.2321L1.06885 10.5208ZM9.87099 1.79483L9.58475 1.50609L9.87748 1.2159L10.1636 1.51257L9.87099 1.79483ZM1.43779 10.9033L1.72403 11.1921L1.43131 11.4823L1.14516 11.1856L1.43779 10.9033ZM10.2399 2.17734L10.5326 1.89508L10.811 2.18373L10.5262 2.46608L10.2399 2.17734ZM10.8265 1.22699L10.8282 0.82041L11.2347 0.822029L11.2331 1.22861L10.8265 1.22699ZM10.7884 10.8077L11.1949 10.8093L11.1933 11.2159L10.7867 11.2143L10.7884 10.8077ZM10.6574 1.22631L10.6558 1.63289L10.2509 1.63128V1.22631H10.6574ZM10.6574 1.15458V0.748004H11.064V1.15458H10.6574ZM1.16073 1.15458H0.754148V0.748004H1.16073V1.15458ZM1.16073 1.68594V2.09252H0.754148V1.68594H1.16073ZM10.2933 1.68594V1.27936H10.7015L10.6999 1.68756L10.2933 1.68594ZM10.257 10.8056L10.2554 11.2122L9.8488 11.2105L9.85042 10.804L10.257 10.8056ZM0.782605 10.2321L9.58475 1.50609L10.1572 2.08357L1.35509 10.8096L0.782605 10.2321ZM1.14516 11.1856L0.776211 10.8031L1.36148 10.2386L1.73043 10.6211L1.14516 11.1856ZM10.5262 2.46608L1.72403 11.1921L1.15155 10.6146L9.9537 1.8886L10.5262 2.46608ZM10.1636 1.51257L10.5326 1.89508L9.9473 2.4596L9.57836 2.07709L10.1636 1.51257ZM11.2331 1.22861L11.1949 10.8093L10.3818 10.8061L10.42 1.22537L11.2331 1.22861ZM10.6591 0.819736L10.8282 0.82041L10.8249 1.63356L10.6558 1.63289L10.6591 0.819736ZM10.2509 1.22631V1.15458H11.064V1.22631H10.2509ZM10.6574 1.56116H1.16073V0.748004H10.6574V1.56116ZM1.56731 1.15458V1.68594H0.754148V1.15458H1.56731ZM1.16073 1.27936H10.2933V2.09252H1.16073V1.27936ZM9.85042 10.804L9.88676 1.68432L10.6999 1.68756L10.6636 10.8072L9.85042 10.804ZM10.7867 11.2143L10.2554 11.2122L10.2586 10.399L10.79 10.4011L10.7867 11.2143Z" fill="white"></path>
            </svg> `);

            CONTAINER.fadeIn(300);
        }else if($(this).data("open") == "vip"){
            const CONTAINER = $(".popup_buy");
            let data_link = $(this).attr("data-link");
            CONTAINER.find("form").attr("data-type", "vip");
            CONTAINER.find("h2").html("Тариф <span>vip</span>");
            CONTAINER.find("button").attr("data-link", data_link);
            CONTAINER.find("form").find("button").html(`Купити навчання <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87099 1.79483L1.06885 10.5208L1.43779 10.9033L10.2399 2.17734L9.87099 1.79483ZM10.7884 10.8077L10.8265 1.22699L10.6574 1.22631V1.15458H1.16073V1.68594H10.2933L10.257 10.8056L10.7884 10.8077Z" fill="#090B08"></path>
                        <path d="M1.06885 10.5208L0.776211 10.8031L0.497793 10.5144L0.782605 10.2321L1.06885 10.5208ZM9.87099 1.79483L9.58475 1.50609L9.87748 1.2159L10.1636 1.51257L9.87099 1.79483ZM1.43779 10.9033L1.72403 11.1921L1.43131 11.4823L1.14516 11.1856L1.43779 10.9033ZM10.2399 2.17734L10.5326 1.89508L10.811 2.18373L10.5262 2.46608L10.2399 2.17734ZM10.8265 1.22699L10.8282 0.82041L11.2347 0.822029L11.2331 1.22861L10.8265 1.22699ZM10.7884 10.8077L11.1949 10.8093L11.1933 11.2159L10.7867 11.2143L10.7884 10.8077ZM10.6574 1.22631L10.6558 1.63289L10.2509 1.63128V1.22631H10.6574ZM10.6574 1.15458V0.748004H11.064V1.15458H10.6574ZM1.16073 1.15458H0.754148V0.748004H1.16073V1.15458ZM1.16073 1.68594V2.09252H0.754148V1.68594H1.16073ZM10.2933 1.68594V1.27936H10.7015L10.6999 1.68756L10.2933 1.68594ZM10.257 10.8056L10.2554 11.2122L9.8488 11.2105L9.85042 10.804L10.257 10.8056ZM0.782605 10.2321L9.58475 1.50609L10.1572 2.08357L1.35509 10.8096L0.782605 10.2321ZM1.14516 11.1856L0.776211 10.8031L1.36148 10.2386L1.73043 10.6211L1.14516 11.1856ZM10.5262 2.46608L1.72403 11.1921L1.15155 10.6146L9.9537 1.8886L10.5262 2.46608ZM10.1636 1.51257L10.5326 1.89508L9.9473 2.4596L9.57836 2.07709L10.1636 1.51257ZM11.2331 1.22861L11.1949 10.8093L10.3818 10.8061L10.42 1.22537L11.2331 1.22861ZM10.6591 0.819736L10.8282 0.82041L10.8249 1.63356L10.6558 1.63289L10.6591 0.819736ZM10.2509 1.22631V1.15458H11.064V1.22631H10.2509ZM10.6574 1.56116H1.16073V0.748004H10.6574V1.56116ZM1.56731 1.15458V1.68594H0.754148V1.15458H1.56731ZM1.16073 1.27936H10.2933V2.09252H1.16073V1.27936ZM9.85042 10.804L9.88676 1.68432L10.6999 1.68756L10.6636 10.8072L9.85042 10.804ZM10.7867 11.2143L10.2554 11.2122L10.2586 10.399L10.79 10.4011L10.7867 11.2143Z" fill="white"></path>
            </svg> `);

            CONTAINER.fadeIn(300);
        }else if($(this).data("open") == "order_basic"){
            const CONTAINER = $(".popup_buy");
            let data_link = $(this).attr("data-link");
            CONTAINER.find("form").attr("data-type", "order");
            CONTAINER.find("h2").html("забронювати <span>basic</span>");
            CONTAINER.find("button").attr("data-link", data_link);
            CONTAINER.find("form").find("button").html(`Забронювати місце <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87099 1.79483L1.06885 10.5208L1.43779 10.9033L10.2399 2.17734L9.87099 1.79483ZM10.7884 10.8077L10.8265 1.22699L10.6574 1.22631V1.15458H1.16073V1.68594H10.2933L10.257 10.8056L10.7884 10.8077Z" fill="#090B08"></path>
                        <path d="M1.06885 10.5208L0.776211 10.8031L0.497793 10.5144L0.782605 10.2321L1.06885 10.5208ZM9.87099 1.79483L9.58475 1.50609L9.87748 1.2159L10.1636 1.51257L9.87099 1.79483ZM1.43779 10.9033L1.72403 11.1921L1.43131 11.4823L1.14516 11.1856L1.43779 10.9033ZM10.2399 2.17734L10.5326 1.89508L10.811 2.18373L10.5262 2.46608L10.2399 2.17734ZM10.8265 1.22699L10.8282 0.82041L11.2347 0.822029L11.2331 1.22861L10.8265 1.22699ZM10.7884 10.8077L11.1949 10.8093L11.1933 11.2159L10.7867 11.2143L10.7884 10.8077ZM10.6574 1.22631L10.6558 1.63289L10.2509 1.63128V1.22631H10.6574ZM10.6574 1.15458V0.748004H11.064V1.15458H10.6574ZM1.16073 1.15458H0.754148V0.748004H1.16073V1.15458ZM1.16073 1.68594V2.09252H0.754148V1.68594H1.16073ZM10.2933 1.68594V1.27936H10.7015L10.6999 1.68756L10.2933 1.68594ZM10.257 10.8056L10.2554 11.2122L9.8488 11.2105L9.85042 10.804L10.257 10.8056ZM0.782605 10.2321L9.58475 1.50609L10.1572 2.08357L1.35509 10.8096L0.782605 10.2321ZM1.14516 11.1856L0.776211 10.8031L1.36148 10.2386L1.73043 10.6211L1.14516 11.1856ZM10.5262 2.46608L1.72403 11.1921L1.15155 10.6146L9.9537 1.8886L10.5262 2.46608ZM10.1636 1.51257L10.5326 1.89508L9.9473 2.4596L9.57836 2.07709L10.1636 1.51257ZM11.2331 1.22861L11.1949 10.8093L10.3818 10.8061L10.42 1.22537L11.2331 1.22861ZM10.6591 0.819736L10.8282 0.82041L10.8249 1.63356L10.6558 1.63289L10.6591 0.819736ZM10.2509 1.22631V1.15458H11.064V1.22631H10.2509ZM10.6574 1.56116H1.16073V0.748004H10.6574V1.56116ZM1.56731 1.15458V1.68594H0.754148V1.15458H1.56731ZM1.16073 1.27936H10.2933V2.09252H1.16073V1.27936ZM9.85042 10.804L9.88676 1.68432L10.6999 1.68756L10.6636 10.8072L9.85042 10.804ZM10.7867 11.2143L10.2554 11.2122L10.2586 10.399L10.79 10.4011L10.7867 11.2143Z" fill="white"></path>
            </svg> `);

            CONTAINER.fadeIn(300);
        }else if($(this).data("open") == "order_standart"){
            const CONTAINER = $(".popup_buy");
            let data_link = $(this).attr("data-link");
            CONTAINER.find("form").attr("data-type", "order");
            CONTAINER.find("h2").html("забронювати <span>standart</span>");
            CONTAINER.find("button").attr("data-link", data_link);
            CONTAINER.find("form").find("button").html(`Забронювати місце <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87099 1.79483L1.06885 10.5208L1.43779 10.9033L10.2399 2.17734L9.87099 1.79483ZM10.7884 10.8077L10.8265 1.22699L10.6574 1.22631V1.15458H1.16073V1.68594H10.2933L10.257 10.8056L10.7884 10.8077Z" fill="#090B08"></path>
                        <path d="M1.06885 10.5208L0.776211 10.8031L0.497793 10.5144L0.782605 10.2321L1.06885 10.5208ZM9.87099 1.79483L9.58475 1.50609L9.87748 1.2159L10.1636 1.51257L9.87099 1.79483ZM1.43779 10.9033L1.72403 11.1921L1.43131 11.4823L1.14516 11.1856L1.43779 10.9033ZM10.2399 2.17734L10.5326 1.89508L10.811 2.18373L10.5262 2.46608L10.2399 2.17734ZM10.8265 1.22699L10.8282 0.82041L11.2347 0.822029L11.2331 1.22861L10.8265 1.22699ZM10.7884 10.8077L11.1949 10.8093L11.1933 11.2159L10.7867 11.2143L10.7884 10.8077ZM10.6574 1.22631L10.6558 1.63289L10.2509 1.63128V1.22631H10.6574ZM10.6574 1.15458V0.748004H11.064V1.15458H10.6574ZM1.16073 1.15458H0.754148V0.748004H1.16073V1.15458ZM1.16073 1.68594V2.09252H0.754148V1.68594H1.16073ZM10.2933 1.68594V1.27936H10.7015L10.6999 1.68756L10.2933 1.68594ZM10.257 10.8056L10.2554 11.2122L9.8488 11.2105L9.85042 10.804L10.257 10.8056ZM0.782605 10.2321L9.58475 1.50609L10.1572 2.08357L1.35509 10.8096L0.782605 10.2321ZM1.14516 11.1856L0.776211 10.8031L1.36148 10.2386L1.73043 10.6211L1.14516 11.1856ZM10.5262 2.46608L1.72403 11.1921L1.15155 10.6146L9.9537 1.8886L10.5262 2.46608ZM10.1636 1.51257L10.5326 1.89508L9.9473 2.4596L9.57836 2.07709L10.1636 1.51257ZM11.2331 1.22861L11.1949 10.8093L10.3818 10.8061L10.42 1.22537L11.2331 1.22861ZM10.6591 0.819736L10.8282 0.82041L10.8249 1.63356L10.6558 1.63289L10.6591 0.819736ZM10.2509 1.22631V1.15458H11.064V1.22631H10.2509ZM10.6574 1.56116H1.16073V0.748004H10.6574V1.56116ZM1.56731 1.15458V1.68594H0.754148V1.15458H1.56731ZM1.16073 1.27936H10.2933V2.09252H1.16073V1.27936ZM9.85042 10.804L9.88676 1.68432L10.6999 1.68756L10.6636 10.8072L9.85042 10.804ZM10.7867 11.2143L10.2554 11.2122L10.2586 10.399L10.79 10.4011L10.7867 11.2143Z" fill="white"></path>
            </svg> `);

            CONTAINER.fadeIn(300);
        }else if($(this).data("open") == "order_vip"){
            const CONTAINER = $(".popup_buy");
            let data_link = $(this).attr("data-link");
            CONTAINER.find("form").attr("data-type", "order");
            CONTAINER.find("h2").html("забронювати <span>vip</span>");
            CONTAINER.find("button").attr("data-link", data_link);
            CONTAINER.find("form").find("button").html(`Забронювати місце <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87099 1.79483L1.06885 10.5208L1.43779 10.9033L10.2399 2.17734L9.87099 1.79483ZM10.7884 10.8077L10.8265 1.22699L10.6574 1.22631V1.15458H1.16073V1.68594H10.2933L10.257 10.8056L10.7884 10.8077Z" fill="#090B08"></path>
                        <path d="M1.06885 10.5208L0.776211 10.8031L0.497793 10.5144L0.782605 10.2321L1.06885 10.5208ZM9.87099 1.79483L9.58475 1.50609L9.87748 1.2159L10.1636 1.51257L9.87099 1.79483ZM1.43779 10.9033L1.72403 11.1921L1.43131 11.4823L1.14516 11.1856L1.43779 10.9033ZM10.2399 2.17734L10.5326 1.89508L10.811 2.18373L10.5262 2.46608L10.2399 2.17734ZM10.8265 1.22699L10.8282 0.82041L11.2347 0.822029L11.2331 1.22861L10.8265 1.22699ZM10.7884 10.8077L11.1949 10.8093L11.1933 11.2159L10.7867 11.2143L10.7884 10.8077ZM10.6574 1.22631L10.6558 1.63289L10.2509 1.63128V1.22631H10.6574ZM10.6574 1.15458V0.748004H11.064V1.15458H10.6574ZM1.16073 1.15458H0.754148V0.748004H1.16073V1.15458ZM1.16073 1.68594V2.09252H0.754148V1.68594H1.16073ZM10.2933 1.68594V1.27936H10.7015L10.6999 1.68756L10.2933 1.68594ZM10.257 10.8056L10.2554 11.2122L9.8488 11.2105L9.85042 10.804L10.257 10.8056ZM0.782605 10.2321L9.58475 1.50609L10.1572 2.08357L1.35509 10.8096L0.782605 10.2321ZM1.14516 11.1856L0.776211 10.8031L1.36148 10.2386L1.73043 10.6211L1.14516 11.1856ZM10.5262 2.46608L1.72403 11.1921L1.15155 10.6146L9.9537 1.8886L10.5262 2.46608ZM10.1636 1.51257L10.5326 1.89508L9.9473 2.4596L9.57836 2.07709L10.1636 1.51257ZM11.2331 1.22861L11.1949 10.8093L10.3818 10.8061L10.42 1.22537L11.2331 1.22861ZM10.6591 0.819736L10.8282 0.82041L10.8249 1.63356L10.6558 1.63289L10.6591 0.819736ZM10.2509 1.22631V1.15458H11.064V1.22631H10.2509ZM10.6574 1.56116H1.16073V0.748004H10.6574V1.56116ZM1.56731 1.15458V1.68594H0.754148V1.15458H1.56731ZM1.16073 1.27936H10.2933V2.09252H1.16073V1.27936ZM9.85042 10.804L9.88676 1.68432L10.6999 1.68756L10.6636 10.8072L9.85042 10.804ZM10.7867 11.2143L10.2554 11.2122L10.2586 10.399L10.79 10.4011L10.7867 11.2143Z" fill="white"></path>
            </svg> `);

            CONTAINER.fadeIn(300);
        }
    });

    $(".popup_buy form input").keyup(function(){
        const CONTAINER = $(this).parent();

        if(CONTAINER.find("#input_name_payment").val().length >= 3
            && CONTAINER.find("#input_phone_payment").val().length >= 3
        ){
            $("#button_payment_send").prop("disabled", false);
        }else{
            $("#button_payment_send").prop("disabled", true);
        }
    });

    $(".feedback__section form input").keyup(function(){
        const CONTAINER = $(this).parent();

        if(CONTAINER.find("#feedback_name").val().length >= 3
            && CONTAINER.find("#feedback_phone").val().length >= 3
        ){
            $("#submit_feedback").prop("disabled", false);
        }else{
            $("#submit_feedback").prop("disabled", true);
        }
    });

    $("#submit_feedback").click(function(){
        const CONTAINER = $(this).closest("form");
        let data = { 
            'status': "send_data_feedback" ,
            name: $(CONTAINER).find("#feedback_name").val(),
            phone: $(CONTAINER).find("#feedback_phone").val(),
            chat: 852193983
        }
        
        alert("Doesn't work for viewing");
    });

    $("form").submit(function(e){
        e.preventDefault();
    });

    $("#button_payment_send").click(function(){
        const CONTAINER = $(this).closest("form");
        let link = $(this).attr("data-link");
        let data = { 
            'status': "send_data" ,
            telegram: $(CONTAINER).find("#input_social_payment").val(),
            name: $(CONTAINER).find("#input_name_payment").val(),
            phone: $(CONTAINER).find("#input_phone_payment").val(),
            chat: 852193983
        }
        

        alert("Doesn't work for viewing");

    });

    if($(window).width() < 1100){
        const CONTAINER = $(".init--swiper__001");
        CONTAINER.addClass("swiper");
        CONTAINER.children().addClass("swiper-wrapper");
        CONTAINER.children().children().addClass("swiper-slide");
        CONTAINER.children().children().show();

        const swiper = new Swiper('.init--swiper__001', {
            slidesPerView: 1,
            spaceBetween: 30,
            autoHeight: true,
        });
    }
});