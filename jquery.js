$(document).ready(function(){
  // var input = document.getElementById('input');// reference to our  input box for the tasks
  // var input2 = document.getElementById('input2');
  // var btn = document.getElementById('btn'); //reference to our  the buttom
  // var lists = {// lists containing our two list of done and incomplete todo 
  // 		todo: document.getElementById('todo'),
  // 		done: document.getElementById('done')
  // };
  
  var offer = [

   { location: "Manhatten", rooms:"3BR", price:"min 4500$ -  max 5500$",option:"Pool"},
   { location: "Brooklyn", rooms:"1BR", price:"min 3000$ -  max 3500$",option:"Garage"},
   {location: "Bronx", rooms:"4BR", price:"min 6000$ -  max 6500$",option:"Security"},
   {location: "Central Park", rooms:"Studio", price:"min 4500$ -  max 5500$",option:"Security"}   

    ]

     var pgh = document.getElementById('apptext');
     var btn = document.getElementById('btn'); //reference to our  the buttom

     var option = document.getElementById('')
     // var img =  document.getElementById('imgapp');



   var onInput = function(){
       for(var i = 0; i < offer.length; i++){
        if(option.value === offer[i].location && option.value === offer[i].rooms && option.value === offer[i].price && option.value === offer[i].option ){
         pgh.innerHTML = "City: " + offer[i].location + "/n" + "Number of rooms: " + offer[i].rooms + "/n" + " Rent price " + offer[i].price + "/n" +  " Extra " + offer[i].option;
         $(".header").fadeOut();
         $(".page1").fadeIn(1000);
       }
      }
    }

      btn.addEventListener('click', onInput);




        
//         var down = document.getElementById('GFG_DOWN');  
          
//         function GFG_Fun() { 
//             var img = document.createElement('img'); 
//             img.src =  
// 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
//             document.getElementById('body').appendChild(img); 
             
        

     var manhatten = document.getElementById('manhatten')
     // var img =  document.getElementById('imgapp');
     var brman = document.getElementById('brman')
     var manp = document.getElementById('manp')
     var manop = document.getElementById('manop')


   // var onInput = function(){
   //     for(var i = 0; i < offer.length; i++){
   //      if(manhatten.text === offer[i].location && brman.text === offer[i].rooms && manp.text === offer[i].price && manop.text === offer[i].option ){
   //       pgh.innerHTML = "City: " + offer[i].location + "/n" + "Number of rooms: " + offer[i].rooms + "/n" + " Rent price " + offer[i].price + "/n" +  " Extra " + offer[i].option;
   //       $(".header").css(display, none);
   //       $(".page1").css(display, block);
   //     }
   //    }
   //  }

   //    btn.addEventListener('click', onInput);





  // $('#btn').click(function(){
  //      for(var i = 0; i < offer.length; i++){
  //     if($('#manhatten').val() === offer[i].location && $('#brman').val() === offer[i].rooms && $('manp').val() === offer[i].price && $('manop').val() === offer[i].option ){
  //     $('#apptext').append("City: " + offer[i].location + "/n" + "Number of rooms: " + offer[i].rooms + "/n" + " Rent price " + offer[i].price + "/n" +  " Extra " + offer[i].option)
  //     $(".header").css(display, none);
  //     $(".page2").css(display, valblock);
  //     }
  //   }
  // })

  //   var onInput = function (){
  //   $("select.allop").change(function(){
  //     var selectedHouse = $(this).children("option:selected").val();
  //     for(var i = 0; i < offer.length; i++){
  //       if (selectedHouse === offer[i].location){
  //       alert("You have selected the house - " + selectedHouse);
  //     }
  //     }
  //   });
  // }

  // btn.addEventListener('click', onInput);
    $(".location").click(function(){
      $(".l1").fadeOut();
    })

    $("#btn").click(function(){
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
          alert (locations.join(" ") + " " + room.join(" "));
        }
      }
    });  







});