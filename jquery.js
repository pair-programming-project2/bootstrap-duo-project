$(document).ready(function(){
  
  
  var offer = [
   { location: "Manhatten", rooms:"3BR", price:"min 4500$ -  max 5500$",option:"Pool",image:"images/000.jpg"},
   { location: "Brooklyn", rooms:"1BR", price:"min 3000$ -  max 3500$",option:"Garage",image:"images/house1.jpg"},
   {location: "Bronx", rooms:"4BR", price:"min 6000$ -  max 6500$",option:"Security",image:"images/house2.jpg"},
   {location: "Central Park", rooms:"Studio", price:"min 4500$ -  max 5500$",option:"Security",image:"images/0.jpg"}   
    ]

     var pgh = document.getElementById('apptext');
     var btn = document.getElementById('btn'); //reference to our  the buttom
     var manhatten = document.getElementById('manhatten')
     // var img =  document.getElementById('imgapp');
     var brman = document.getElementById('brman')
     var manp = document.getElementById('manp')
     var manop = document.getElementById('manop')


//   $("#about").click(function() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// });
  
    
    
 $("#search").click(function(){
        var locations = [];
        $.each($(".location option:selected"), function(){            
            locations.push($(this).val());
        });
        var room = [];
        $.each($(".rooms option:selected"), function(){            
            room.push($(this).val());
        });
        var prices = [];
        $.each($(".price option:selected"), function(){            
            prices.push($(this).val());
        });
        var options = [];
        $.each($(".option option:selected"), function(){            
            options.push($(this).val());
        });
        for (var i = 0; i < offer.length ; i++){
          if (offer[i].location === locations.join(" ") && offer[i].rooms === room.join(" ")  && offer[i].option === options.join(" ")){
          // alert (locations.join(" ") + " " + room.join(" "));
          $("#appxt").append("House in " + offer[i].location );
          $("#img2").attr('src',offer[i].image);
          $("#car").append("Bedrooms: " + offer[i].rooms + " / " + "Extra: " + offer[i].option);
          $(".header").hide();
          $(".cont").toggleClass("cont1");
          // $(".cont1").show();

        }

      }
      


    });
    






});