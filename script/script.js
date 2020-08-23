let url = "https://davids-restaurant.herokuapp.com/menu_items.json";


document.querySelector("#menu3").addEventListener("change",showDetails);

let menu_items=null;

$('document').ready(function(){

    $.get(url, function(data, status){
        if (status == "success") {
            menu_items = data.menu_items;
            console.log(menu_items.length);
            for (const key in data.menu_items) {
                let opt = document.createElement("option");
                opt.textContent = key + ") " + data.menu_items[key].name;
                opt.value = key; 
                document.querySelector('#menu3').appendChild(opt);
                console.log(key, menu_items[key].name);
                
            }
        }
    });
});

function showDetails(e) {
    let index = e.target.value;
    if (menu_items != null) {
        let data = menu_items[index];
        console.log(data);
        document.querySelector("#idee").textContent = data.id;
        document.querySelector("#shortName").textContent = data.short_name;
        document.querySelector("#Name").textContent = data.name;
        document.querySelector("#description").textContent = data.description;
        
        if(data.price_small!=null){
           document.querySelector("#priceSmall").textContent = data.price_small;
        }
        else{
           document.querySelector("#priceSmall").textContent = "Not Available";
        }

        if(data.price_large!=null){
           document.querySelector("#priceLarge").textContent = data.price_large; 
        }
        else{
           document.querySelector("#priceLarge").textContent = "Not Available";
        }
        
    }
}
