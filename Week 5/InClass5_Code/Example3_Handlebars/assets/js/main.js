window.addEventListener('DOMContentLoaded', function () {
 loadData();

});




function loadData(){
   

$.getJSON("../../data.json" , (data)=>{
    console.log(data)

    generateTemplate(data);
})


}

generateTemplate = (data)=>{
    let source = $('#websites-template').html();
    let template = Handlebars.compile(source);
    let result = template(data);
    let list = $('.websites-list');
    list.append(result);
}





