$(document).ready(function(){

    //mobile menu
    $(document).on("click", ".showMenu", function(){
        $(this).toggleClass("opened");
        $(".toggleMenu").toggleClass("menu-open");
        $("body").toggleClass("active-menu");
        $("html").toggleClass("overflow");
    });

    //youtube script
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    onYouTubeIframeAPIReady = function () {
        player = new YT.Player('player', {
            height: '806',
            width: '875',
            videoId: 'ZXBMf7IE3N8',  // youtube video id
            playerVars: {
                'autoplay': 0,
                'rel': 0,
                'showinfo': 0
            },
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }

    var p = document.getElementById ("player");
    $(p).hide();

    var t = document.getElementById ("thumbnail");
    t.src = "assets/images/rpa.jpg";

    onPlayerStateChange = function (event) {
        if (event.data == YT.PlayerState.ENDED) {
            $('.start-video').fadeIn('normal');
        }
    }

    $(document).on('click', '.start-video', function () {
        $(this).hide();
        $("#player").show();
        $("#thumbnail_container").hide();
        player.playVideo();
    });

});

// about page
// $(document).on("click", ".tooltip-locations", function(){
//     $(".tooltip-wrap").removeClass("is-active");
//     $(this).find(".tooltip-wrap").toggleClass("is-active");
// });

// validation
(function($) {
    $(function() {
        //empty validation
        $(document).on('blur', '.field-input.required', function(e) {
            $(this).removeClass('error');
            $(this).closest('.control-group').find('.validation_text').remove();
            if($(this).val() == "") {
                $(this).addClass('error');
                $(this).closest('.control-group').append("<div class='validation_text'>This field is mandatory</div>");
            } else {
                $(this).removeClass('error');
                $(this).closest('.control-group').find('.validation_text').remove();
            }
        })

        // "Name" Text validation
        var namepattern = /^[A-Za-z ]{2,18}$/i;
        var name = $('.nameValid');
        $(document).on("blur", 'input.nameValid', function(){
            if($(this).val() != ''){
                if($(this).val().search(namepattern) == 0){
                    $(this).removeClass('error');
                    $(this).closest('.nameVilidBox').find('.validation_text').remove();
                }else{
                    $(this).addClass('error');
                    $(this).closest('.nameVilidBox').find('.validation_text').remove();
                    $(this).closest('.nameVilidBox').append("<div class='validation_text'>Incorrect name</div>");
                }
            }else{
                $(this).addClass('error');
                $(this).closest('.nameVilidBox').find('.validation_text').remove();
                $(this).closest('.nameVilidBox').append("<div class='validation_text'>This field is mandatory</div>");
            }
        });
        // "Phone" validation
        var phonepattern = /^[0-9 ]{2,18}$/i;
        var phone = $('.namePhone');
        $(document).on("blur", 'input.namePhone', function(){
            if($(this).val() != ''){
                if($(this).val().search(namepattern) == 0){
                    $(this).addClass('error');
                    $(this).closest('.phoneVilidBox').find('.validation_text').remove();
                    $(this).closest('.phoneVilidBox').append("<div class='validation_text'>Incorrect phone number</div>");
                }else{
                    $(this).removeClass('error');
                    $(this).closest('.phoneVilidBox').find('.validation_text').remove();
                }
            }else{
                $(this).addClass('error');
                $(this).closest('.phoneVilidBox').find('.validation_text').remove();
                $(this).closest('.phoneVilidBox').append("<div class='validation_text'>This field is mandatory</div>");
            }
        });
        //mail validation
        var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        $(document).on('blur', 'input[type="email"]', function(e) {
            var email = $(this);
            console.log(email.val())
            $(this).removeClass('error');
            if($(this).val() != ''){
                if($(this).val().search(pattern) == 0){
                    $(this).removeClass('error');
                    $(this).closest('.mailVilidBox').find('.validation_text').remove();
                }else{
                    $(this).addClass('error');
                    $(this).closest('.mailVilidBox').find('.validation_text').remove();
                    $(this).closest('.mailVilidBox').append("<div class='validation_text'>Incorrect email adress</div>");
                }
            }else{
                $(this).addClass('error');
                $(this).closest('.mailVilidBox').find('.validation_text').remove();
                $(this).closest('.mailVilidBox').append("<div class='validation_text'>This field is mandatory</div>");
            }
        });


        //submit button
        $(".jsFormEmail").each(function() {
            $(document).on('click', '.form-btn', function(e) {
                //empty validation
                $(this).closest('form').find('.field-input.required').each(function() {
                    $(this).removeClass('error');
                    $(this).closest('.control-group').find('.validation_text').remove();
                    if($(this).val() == "") {
                        $(this).addClass('error');
                        $(this).closest('.control-group').append("<div class='validation_text'>This field is mandatory</div>");
                    } else {
                        $(this).removeClass('error');
                        $(this).closest('.control-group').find('.validation_text').remove();
                    }
                });

                // "Name" Text validation
                $(this).closest('form').find('.nameValid').each(function(){
                    var name = $('.nameValid');
                    $(this).removeClass('error');
                    $(this).closest('.mailVilidBox').find('.validation_text').remove();
                    if($(this).val() != ''){
                        if($(this).val().search(namepattern) == 0){
                            $(this).removeClass('error');
                            $(this).closest('.nameVilidBox').find('.validation_text').remove();
                        }else{
                            $(this).addClass('error');
                            $(this).closest('.nameVilidBox').find('.validation_text').remove();
                            $(this).closest('.nameVilidBox').append("<div class='validation_text'>Incorrect name</div>");
                        }
                    }else{
                        $(this).addClass('error');
                        $(this).closest('.nameVilidBox').find('.validation_text').remove();
                        $(this).closest('.nameVilidBox').append("<div class='validation_text'>This field is mandatory</div>");
                    }

                });

                //email validation
                $(this).closest('form').find('input[type="email"]').each(function(){
                    var email = $(this);
                    $(this).removeClass('error');
                    $(this).closest('.mailVilidBox').find('.validation_text').remove();
                    if($(this).val() != ''){
                        if($(this).val().search(pattern) == 0){
                            $(this).removeClass('error');
                            $(this).closest('.mailVilidBox').find('.validation_text').remove();
                        }else{
                            $(this).addClass('error');
                            $(this).closest('.mailVilidBox').find('.validation_text').remove();
                            $(this).closest('.mailVilidBox').append("<div class='validation_text'>Incorrect email adress</div>");
                        }
                    }else{
                        $(this).addClass('error');
                        $(this).closest('.mailVilidBox').find('.validation_text').remove();
                        $(this).closest('.mailVilidBox').append("<div class='validation_text'>This field is mandatory</div>");
                    }
                });
                if( $(this).closest('form').find('input.error').length > 0 ){
                    e.preventDefault();
                } else {
                    //console.log('send form')
                }
            });
        });

    });
})(jQuery);

// map
var map, infoWindow;
function initMap() {
    Latlng = {lat: 37.758391, lng: -122.406329};
    var myOptions = {
        zoom: 15,
        center: Latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById('map'), myOptions);
    map.setCenter(Latlng);
    var marker = new google.maps.Marker({});

    window.geocoder = new google.maps.Geocoder;
    infoWindow = new google.maps.InfoWindow;
    geocodeLatLng(geocoder, map, infoWindow);

    function geocodeLatLng(geocoder, map, infoWindow) {
        window.geocoder.geocode({'location': Latlng}, function(results, status) {
            marker = new google.maps.Marker({
                position: Latlng,
                map: map,
                draggable: false,
                icon: 'assets/images/location-pin.svg',
                title: 'HEARTCORE-1',
                label: '<h6 class="label-title">HEARTCORE</h6>385 Noah Place Suite 878 877-255-7945 <a href="mailto:info@heartcore.com">info@heartcore.com</a>'
            });
        });
    }
    // add text on marker
    var point = {
        lat: 22.5667,
        lng: 88.3667
    };
    var markerSize = {
        x: 22,
        y: 40
    };
    google.maps.Marker.prototype.setLabel = function(label) {
        this.label = new MarkerLabel({
            map: this.map,
            marker: this,
            text: label
        });
        this.label.bindTo('position', this, 'position');
    };
    var MarkerLabel = function(options) {
        this.setValues(options);
        this.span = document.createElement('span');
        this.span.className = 'map-marker-label';
    };
    MarkerLabel.prototype = $.extend(new google.maps.OverlayView(), {
        onAdd: function() {
          this.getPanes().overlayImage.appendChild(this.span);
          var self = this;
          this.listeners = [
            google.maps.event.addListener(this, 'position_changed', function() {
              self.draw();
            })
          ];
        },
        draw: function() {
          var text = String(this.get('text'));
          var position = this.getProjection().fromLatLngToDivPixel(this.get('position'));
          this.span.innerHTML = text;
          this.span.style.left = (position.x - (markerSize.x / 2)) - (text.length) + 5 + 'px';
          this.span.style.top = (position.y - markerSize.y - 185) + 'px';
        }
    });
}

// Send form
jQuery(function($) {
    $('body').on('submit', '.jsFormEmail', function(e){
        var form      = $(this);
        var serialize = form.serialize()+"&current_page="+location.href;
        $.ajax({
            url: './assets/php/feedback.php',
            type: "POST",
            data: serialize,
            dataType:"json",
            success: function(data){
                if(typeof data.send_status != 'undefined'){
                    if(data.send_status == true){
                        // location.href = "";
                        $(".contact-wrap .jsFormEmail").addClass("is-disabled");
                        // $(this).next('.jsFormEmail').addClass("is-active");
                        // $(".alert-message").addClass("is-active");
                    }else{
                        if(typeof data.alert_message != 'undefined'){
                            // $(".alert-message").addClass("is-active");
                            // $(".alert-message .is-error").addClass("is-active");
                            // alert(data.alert_message);
                        }
                    }
                }
            },
            complete: function(){}
        });
        return false;
    });
});