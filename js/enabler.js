$("#e-submit").click(function () {
    firebase.database().ref('enablerList/').push({
           ename: $('#ename').val(),
           emob: $('#emob').val(),
           eorgname: $('#eorgname').val(),
           eabout: $('#eabout').val(),
           eemail: $('#e-email').val(),
           eactivities: $('#eactivities').val(),
           eadrs: $('#eadrs').val(),
           etype: $('#e-type').val(),
           });
      }
    );

