
$.ajax({
    url : "https://api.covid19api.com/summary",
    type : "GET",
      success : function(data){
    console.log(data.Countries[0]);

    console.log('new recovered: ',data.Global.NewRecovered);
  $.each(data.Countries,function(key,value){
              $("#global_wise").append("<tr>"+
                                    "<td>" + value.Country + "</td>"+
                                    "<td>" + value.NewConfirmed + "</td>"+
                                    "<td>" + value.TotalConfirmed + "</td>"+
                                    "<td>" + value.TotalDeaths + "</td>"+
                                    "<td>" + value.NewRecovered + "</td>"+
                                    "<td>" + value.TotalRecovered + "</td>"+
                                    "</tr>"
      )
  })
 
}
return data.Countries.length
})
