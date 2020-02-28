window.addEventListener('DOMContentLoaded', function () {

    // loadData();

    attachEvent();

});

attachEvent = ()=>{
    $("#search-button").click(()=>{
        loadData();

        $("#city").val("");

    })

    $("#city").keypress((e)=>{

        if(e.keyCode ==13){
            loadData();

            $("#city").val("");

        }

    })
}


loadData = ()=>{
    // let city = "Astoria";

    let city = $("#city").val();


if(city != ""){
// $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=d9002518641a6a2a80f6ce7cb68a9ae4", 
// (data)=>{

//     console.log(data);

//     let temp = data.main.temp;
//     let description = data.weather[0].description;
//     let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
//     let name = data.name + ", " + data.sys.country;

//     //K * 9/5 -459.67
//     // $(".temp").append(temp.toFixed(2) * 9/5 - 459.67);


//     //$(".temp").html(Math.floor(temp * 9/5 - 459.67) + " " + "°F");

//     $(".weather").empty();

//     $(".weather").append(Math.floor(temp * 9/5 - 459.67) + " " + "°F");
//     $(".temp").html(description);
//     $(".icon").attr("src", icon);
//     $(".city-name").html(name);

    
// })

$.ajax({

    url: "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=d9002518641a6a2a80f6ce7cb68a9ae4",
    type: "GET",
    dataType: "json",
    success: function(data){
        console.log(data);


            let temp = data.main.temp;
    let description = data.weather[0].description;
    let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    let name = data.name + ", " + data.sys.country;

    //K * 9/5 -459.67
    // $(".temp").append(temp.toFixed(2) * 9/5 - 459.67);


    //$(".temp").html(Math.floor(temp * 9/5 - 459.67) + " " + "°F");

    $(".weather").empty();

    // $(".weather").append(Math.floor(temp * 9/5 - 459.67) + " " + "°F");

    $(".weather").append(Math.floor(temp - 273.15) + " " + "°C");
    $(".temp").html(description);
    $(".icon").attr("src", icon);
    $(".city-name").html(name);

    }

})

}else{
    $("#error").html("City can't be empty");
}


}

