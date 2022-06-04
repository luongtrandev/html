let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");

    ctx.font = "15px Arial";
    ctx.fillText("印刷日時", 850, 50);
    let today = new Date();
    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    ctx.fillText(date, 930, 50);
    ctx.fillText(time, 1010, 50);

    ctx.font = "25px Arial";
    ctx.fillText("訂正・取消 エビデンス (複数伝票)", 400, 70);


    ctx.fillStyle = "#C0C0C0";
    ctx.fillRect(40,110,130,40);
    ctx.fillRect(300,130,130,20);
    ctx.fillRect(40,175,1045,25);

    ctx.moveTo(40, 110);
    ctx.lineTo(300, 110);       // ngang tang 1
    ctx.moveTo(40, 150);
    ctx.lineTo(835, 150);
    ctx.moveTo(40, 130);
    ctx.lineTo(835, 130);
    
    ctx.moveTo(40, 110);
    ctx.lineTo(40, 150);
    ctx.moveTo(170, 110); // doc tang 1
    ctx.lineTo(170, 150);
    ctx.moveTo(300, 110);
    ctx.lineTo(300, 150);
    ctx.moveTo(430, 130);
    ctx.lineTo(430, 150);
    ctx.moveTo(635, 130);
    ctx.lineTo(635, 150);
    ctx.moveTo(835, 130);
    ctx.lineTo(835, 150);

    ctx.moveTo(40, 175);    // le tren ngang
    ctx.lineTo(1085, 175);
    // dong ngang
    for(let i = 0;i<579;i=i+18){
        ctx.moveTo(40, i+200);
        ctx.lineTo(1085,i+200);
    }
    ctx.moveTo(40, 175);    //doc le 2 ben
    ctx.lineTo(40, 780);
    ctx.moveTo(1085, 175);
    ctx.lineTo(1085, 780)

    ctx.moveTo(170, 175);
    ctx.lineTo(170, 780);
    ctx.moveTo(300, 175); // doc giua
    ctx.lineTo(300, 780);
    ctx.moveTo(435, 175);
    ctx.lineTo(435, 780);
    ctx.moveTo(838, 175);
    ctx.lineTo(838, 780);

    ctx.moveTo(75, 175);    //doc le o 1 
    ctx.lineTo(75, 780);
    ctx.moveTo(97, 175);     
    ctx.lineTo(97, 780);
    ctx.moveTo(133, 175);     
    ctx.lineTo(133, 780);

    ctx.moveTo(218, 175); // doc o 2
    ctx.lineTo(218, 780);
    ctx.moveTo(255, 175); 
    ctx.lineTo(255, 780);

    ctx.moveTo(460, 175);
    ctx.lineTo(460, 780);
    ctx.moveTo(505, 175);
    ctx.lineTo(505, 780);
    ctx.moveTo(550, 175);
    ctx.lineTo(550, 780);
    ctx.moveTo(605, 175);
    ctx.lineTo(605, 780);
    ctx.moveTo(640, 175); // doc o 4
    ctx.lineTo(640, 780);
    ctx.moveTo(675, 175);
    ctx.lineTo(675, 780);
    ctx.moveTo(720, 175);
    ctx.lineTo(720, 780);
    ctx.moveTo(765, 175);
    ctx.lineTo(765, 780);
    ctx.moveTo(800, 175);
    ctx.lineTo(800, 780);

    

    ctx.moveTo(1060, 175);
    ctx.lineTo(1060, 780); // doc le o cuoi
    ctx.moveTo(1020, 175);
    ctx.lineTo(1020, 780);
    ctx.moveTo(980, 175);
    ctx.lineTo(980, 780);
    ctx.moveTo(930, 175);
    ctx.lineTo(930, 780);
    
    ctx.font = "14px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("于 - ㄙCD", 70, 125);
    ctx.fillText("得意先CD", 70, 145);
    ctx.fillText("得意先 / 營業所", 320, 145);
    
    ctx.font = "9px Arial";
    ctx.fillStyle = "#000000"
    ctx.fillText("納入日", 43, 190);
    ctx.fillText("分区", 76, 190);
    ctx.fillText("任票备号", 98, 190);
    ctx.fillText("現場CD", 135, 190);
    ctx.fillText("仕入先CD", 175, 190);
    ctx.fillText("台南CD", 220, 190);
   
    ctx.stroke();
    