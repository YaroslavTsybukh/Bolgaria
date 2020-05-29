$(function(){
    $('.slider').slick({
        speed:500,
        dots:true,
        waitForAnimate:false,
        infinite:true,
        autoplay:true,
        draggable:false,
    });
    $('.phone__colo').click(function(){
        $('#exampleModal').arcticmodal();
    })
    $(".down__angle").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
    );
    $('.consultation__button').click(function(){
        $('#exampleModal1').arcticmodal();
    })
    function sendAjaxForm(result_form, ajax_form, url) {
        $.ajax({
            url:    "action_ajax_form.php",
            type:     "POST", 
            dataType: "html", 
            data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
            success: function(response) { //Данные отправлены успешно
                result = $.parseJSON(response);
                $('#result_form').html('Имя: '+result.name+' <br>Email: '+result.email+' <br>Телефон: '+result.phonenumber);
            },
            error: function(response) { // Данные не отправлены
                $('#result_form').html('Ошибка. Данные не отправлены.');
            }
        })
    }
})

   

