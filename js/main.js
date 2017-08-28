$(document).ready(function(){
    
    // SEARCH
    
    function search() {
        var input_text = $('.search input[type=text]');
        var input_img = $('.search input[type=image]');
        var img_search = input_img.attr('src');
        input_text.focus(function(){
            input_img.attr('src', 'img/search-focus.png');
        }); // end focus
        input_text.focusout(function(){
            input_img.attr('src', img_search);
        }); // end focusout
        input_img.focus(function(){
            input_img.attr('src', 'img/search-active.png');
        }); // end focus
        input_img.click(function(){
            input_img.attr('src', 'img/search-active.png');
        }); // end click
    } // end search
    
    search();
    
    // NAVIGATION MOBILE
    
    function nav() {
        $('#toggle').click(function() {
            $(this).toggleClass('active fixed');
            $('#overlay').toggleClass('open');
            
        }); //end click
    } // end nav
    
    nav();
    
    // SLIDER SALE
    
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        nextArrow: '<button class="next"></button>',
        prevArrow: '<button class="prev"></button>',
        mobileFirst: true
    }); // end slick
    
    // ACCORDION CATEGORIES
    
    $('#categories').accordion({
        active: false,
        collapsible: true,
        icons: false
    }); // end accordion
    
    // CATALOG
    
    $('#catalog').dialog({
        autoOpen: false,
        modal: true,
        show: 'clip',
        hide: 'explode',
        draggable: false,
        resizable: false
    }); // end dialog
    
    $('.catalog button').click(function(event) {
        event.preventDefault();
        $('#catalog').dialog('open');
    }); // end click
    
    // WRITE US
    
    $('#write-us').dialog({
        autoOpen: false,
        modal: true,
        width: 420,
        show: 'scale',
        hide: 'puff'
    }); // end dialog
    
    $('#write-us button').button(); // end button
    
    $('.write-us').click(function(event) {
        event.preventDefault();
        $('#write-us').dialog('open');
    }); // end click
    
    $('#write-us .cancel').click(function(event) {
        event.preventDefault();
        $('#write-us').dialog('close');
    }); // end click
    
    $('.messages a').click(function(event) {
        event.preventDefault();
        $('#write-us').dialog('open');
    }); // end click
    
    // SIGN IN
    
    $('#sign-in').dialog({
        autoOpen: false,
        modal: true,
        show: 'blind',
        hide: 'fade'
    }); // end dialog
    
    $('#sign-in button').button(); // end button
    
    $('.sign-form').click(function(event) {
        event.preventDefault();
        $('#sign-in').dialog('open');
    }); // end click
    
}); // end ready