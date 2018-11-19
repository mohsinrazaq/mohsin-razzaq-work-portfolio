jQuery(function ($) {

    'use strict';

    (function () {
        $('#successmail').hide();
        $('#errormail').hide();
    }());

    $(function () {    
        $("#contactForm").submit(function (e) {
            e.preventDefault();
            $('#successmail').hide(500);
            $('#errormail').hide(500);
            var form_data = $(this).serialize(); 
            $.ajax({
                type: "POST", 
                url: "mail.php",
                dataType: "json", // Add datatype
                data: form_data
            }).done(function (data) {
                console.log(data);
                $('#errormail').hide();                
                $('#successmail').show(700);                
                $('#contactForm').trigger("reset");
            }).fail(function (data) {
                $('#successmail').hide();                
                $('#errormail').show(700);                                
                console.log(data);            
            });
        }); 
    });
});