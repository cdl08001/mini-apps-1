// <textarea id="inputBox" rows="20" cols="60"></textarea>
// <input type="submit" id="addFieldSubmit" value="Convert!">


// Create click event handler for element with id="addFieldSubmit" (GET to)
$('#convert').click((e) => {
  e.preventDefault();
  $.ajax({
    url: 'http://localhost:3000/senddata',
    method: 'GET',
  })
  .done((data) => console.log(data))
  .fail((err) => console.log('An Error Occurred: ', err))
  .always(() => console.log('Request Completed!'));
});
