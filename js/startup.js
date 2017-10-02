$("#register").click(function () {
    
    firebase.database().ref('startupList1/').push({
           startupname: $('#stname').val(),
           foundername: $('#fname').val(),
           teamsize: $('#size').val(),
           stemail: $('#stemail').val(),
           web: $('#web').val(),
           image:$('#logo').val(),       /*downloadUrl*/
           phone: $('#stmob').val(),
           epitch: $('#epitch').val(),
           stdesc: $('#stdesc').val(),
           cat: $('#stcat').val(),
           date:  $('#date').val(),
           fb: $('#fb').val(),
           twitter: $('#twitter').val(),
           linkedin: $('#linkedin').val(),
           extra: $('#extra').val()
           });
      }
    );

