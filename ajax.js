var produtos = '';
$.getJSON("https://server-node-example.herokuapp.com/promotios-hub", function(result){
  $.each(result, function(i, field){
    produtosx += `<div class="col-md-3">
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header"></div>
    <div class="card-body">
    <h5 class="card-title">${field.valor}</h5>
    <p class="card-text">${field.nome}</p>
    </div>
    </div>
    </div>`;
  });
  //$(".produtos").append(produtos);
});

  $.ajax({
  url: "https://server-node-example.herokuapp.com/promotios-hub",
  type:'GET',
  datatype:'JSON'
  }).done(function(data) {
   
    $.each(data, function(i, campo){
    produtos += `<div class="col-md-3">
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header"></div>
    <div class="card-body">
    <h5 class="card-title">${campo.valor}</h5>
    <p class="card-text">${campo.nome}</p>
    </div>
    </div>
    </div>`;
  });
  $(".produtos").append(produtos);
  });


  

