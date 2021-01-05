canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
car1_width=100;
car1_height=90;
background_image="racing.jpg";
car1_image="car1.png";
car1_x=10;
car1_y=10;

car2_width=100;
car2_height=90;
car2_image="car2.png";
car2_x=10;
car2_y=100;
function add()
{
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    car1_imgtag=new Image();
    car1_imgtag.onload=uploadcar1;
    car1_imgtag.src=car1_image;
    car2_imgtag=new Image();
    car2_imgtag.onload=uploadcar2;
    car2_imgtag.src=car2_image;
}
function uploadBackground()
{
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1()
{
    ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2()
{
    ctx.drawImage(car2_imgtag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38')
{
    car1_up();
    console.log("up arrow key");
}
if(keyPressed == '40') 
{ 
    car1_down(); 
    console.log("down arrow key"); 
} 
if(keyPressed == '37') { 
    car1_left(); 
    console.log("left arrow key"); 
} 
if(keyPressed == '39') { 
    car1_right(); 
    console.log("right arrow key"); 
}
if(keyPressed=='87')
{
    car2_up();
    console.log("w key");
}
if(keyPressed=='65')
{
    car2_left();
    console.log("a key");
}
if(keyPressed=='83')
{
    car2_down();
    console.log("s key");
}
if(keyPressed=='68')
{
    car2_right();
    console.log("d key");
}
}
function car1_up() 
{ if(car1_y >=0) 
{ car1_y = car1_y - 10; 
console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
    uploadBackground(); 
    uploadcar1(); } } 
    
    function car1_down() 
    { if(car1_y <=500) { car1_y =car1_y+ 10; 
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
        uploadBackground(); uploadcar1(); 
    } 
} 
function car1_left() 
{ if(car1_x >= 0) 
    { car1_x =car1_x - 10; 
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
        uploadBackground(); 
        uploadcar1();
     }
     } 
        function car1_right() 
        { if(car1_x <= 700) 
            { car1_x =car1_x + 10; 
                console.log("When right arrow is pressed, x = " +car1_x + " | y = " +car1_y); 
                
                uploadBackground(); 
                uploadcar1();    
    } }

    function car2_up() 
{ if(car2_y >=0) 
{ car2_y = car2_y - 10; 
console.log("When w is pressed, x = " + car2_x + " | y = " +car2_y); 
    uploadBackground(); 
    uploadcar2(); } } 
    
    function car2_down() 
    {
 if(car2_y <=500) 
        { car2_y =car2_y+ 10; 
        console.log("When s is pressed, x = " + car2_x + " | y = " +car2_y); 
        uploadBackground(); uploadcar2(); 
    } 
    }
function car2_left() 
{ if(car2_x >= 0) 
    { car2_x =car2_x - 10; 
        console.log("When a is pressed, x = " + car2_x + " | y = " +car2_y); 
        uploadBackground(); 
        uploadcar2();
     }
}
function car2_right() 
{ if(car2_x <= 700) 
    { car2_x =car2_x + 10; 
        console.log("When d is pressed, x = " +car2_x + " | y = " +car2_y); 
                
                uploadBackground(); 
                uploadcar2();    
    } 
}
if(car1_x > 700)
{
    console.log("car1 Won")
    document.getElementById('game_status').innerHTML= "Car 1 Won!"
}
if(car2_x > 700)
{
    console.log("car2 Won")
    document.getElementById('game_status').innerHTML= "Car 2 Won!"
}