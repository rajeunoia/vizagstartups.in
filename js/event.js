$("#event-submit").click(function () {
    firebase.database().ref('eventList/').push({
           evnt_name: $('#event-name').val(),
           evnt_type: $('#event-type').val(),
           evnt_location: $('#event-location').val(),
           evnt_date: $('#event-date').val(),
           evnt_start: $('#event-start').val(),
           evnt_end: $('#event-end').val(),
           evnt_holder_email: $('#event-holder-adrs').val(),
           evnt_desc: $('#event-desc').val(),
           evnt_ticket: $('#event-ticket').val(),
           evnt_contact: $('#event-contact').val(),
           status: 'Requested'
           });
      }
    );
