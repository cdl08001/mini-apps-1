// Create click event handler for element with id="addFieldSubmit" (GET to)
$('#convert').click((e) => {
  e.preventDefault();
  const requestData = JSON.parse($('#inputBox').val());

  $.ajax({
    url: 'http://localhost:3000/senddata',
    method: 'POST',
    dataType: 'json',
    data: requestData,
    complete: function(data) { 
      $('#results').text(data.responseText);
      console.log('Success! Data recieved: ', data.responseText);
    },
  });
});
