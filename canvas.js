window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
       
        

    var context = canvas.getContext('2d');
   

context.beginPath();
context.moveTo(20,100);
context.lineTo(6,260);
context.lineTo(250,300);
context.lineTo(320,200);
context.lineTo(200,50);
context.lineTo(20,100)
context.closePath(); 
context.strokeStyle = "red";
context.stroke();



context.beginPath();
context.moveTo(25,85);
context.lineTo(3,250);
context.lineTo(240,310);
context.lineTo(320,210);
context.lineTo(210,50);
context.lineTo(25,85)
context.closePath(); 
context.strokeStyle = "yellow";
context.stroke();

context.beginPath();
context.font="50px arial";
context.fillText('SIMPL',20,170);



context.beginPath();
context.font="50px sans serif";
context.fillText('N',220,170);

context.beginPath();
  context.lineWidth="5";
  context.arc(195, 153, 20, 0, 2 * Math.PI);
  context.strokeStyle = "red"
  context.stroke();

context.font="38px sans serif";
context.fillStyle="red";
context.fillText('Occitanie',100,210);

context.beginPath()
  context.fillStyle="yellow";
  context.fillRect(190,145,8,8);

context.fillStyle="ff6600";  
context.fillRect(190,155,8,8);

}
