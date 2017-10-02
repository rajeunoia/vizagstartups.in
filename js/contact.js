/*This file is to store the data which is submitted from "Got a question? Suggestion? Info? Drop us a line anytime!" */
$("#contact-submit").click(function () {
    firebase.database().ref('contactList1/').push({
        
           c_subjet: $('#c-sub').val(),
           c_name: $('#c-name').val(),
           c_phone: $('#c-mob').val(),
           c_email: $('#c-email').val(),
           c_message: $('#c-msg').val(),
           });
      }
    );
