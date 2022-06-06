let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");
  
  ctx.font = "15px Arial";
  ctx.fillText("印刷日時", 850, 40);
  let today = new Date();
  let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  ctx.fillText(date, 930, 40);
  ctx.fillText(time, 1010, 40);
  
  ctx.font = "25px Arial";
  ctx.fillText("訂正・取消 エビデンス", 400, 60);
  ctx.fillStyle = "#C0C0C0";
  ctx.fillRect(40,100,130,200);
  ctx.fillRect(300,100,130,200);
  ctx.fillRect(570,275,120,25);
  let m = ["于 - ㄙCD","得意先CD","倉庫","伝票区分","現場CD","納品日","仕入先","人力日" ];
  let n = [117, 142, 167, 192, 217, 242, 267, 292];
  for(let i = 0;i<m.length;i++){
    ctx.font = "14px Arial"
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.fillText(m[i], 105, n[i]);
  }
  let m1 = ["得意先 / 營業所","出庫形式","倉伝票番号","出荷内部番号","便コー下","客先注番","HAT注番","請求日" ];
  for(let i = 0;i<m.length;i++){
    ctx.font = "14px Arial"
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.fillText(m1[i], 365, n[i]);
  }
    ctx.textAlign = "center";ctx.fillText("伝票ステータス", 630,n[7]);
    // ke doc tang 1
    let m5 = [40,170,300,430];
    for(let i = 0;i<m5.length;i++){
      ctx.moveTo(m5[i], 100);
      ctx.lineTo(m5[i], 300);
    }
    ctx.moveTo(560, 125);ctx.lineTo(560, 225);
    ctx.moveTo(560, 250);ctx.lineTo(560, 300);
    ctx.moveTo(650, 100);ctx.lineTo(650, 125);
    ctx.moveTo(825, 100);ctx.lineTo(825, 125);
    ctx.moveTo(825, 225);ctx.lineTo(825, 250);
    // hang nho 
    ctx.moveTo(570, 275);ctx.lineTo(825, 275);
    ctx.moveTo(570, 300);ctx.lineTo(825, 300);       
    ctx.moveTo(570, 275);ctx.lineTo(570, 300);
    ctx.moveTo(690, 275);ctx.lineTo(690, 300);
    ctx.moveTo(825, 275);ctx.lineTo(825, 300);
    // ke ngang tang 1
    let m3 = [100,125,225,250];
    for(let i = 0;i<m3.length;i++){
      ctx.moveTo(40, m3[i]);
      ctx.lineTo(825, m3[i]);
    }
    let m4 = [150,175,200,275,300];
    for(let i = 0;i<m4.length;i++){
      ctx.moveTo(40, m4[i]);
      ctx.lineTo(560, m4[i]);
    }

let j = 0,i=0;  
var t = 0; 
  class Column{
    constructor(x, y, w, h, data){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.data = data;
    }

    Render(x, y){
      // draw into vanvas
      ctx.font = "14px Arial";
      ctx.fillStyle = "#000000";
      ctx.fillText(this.data, x + this.x,  this.y+ this.h);
      
    }
  }

  class Record {
    constructor(x,y){
        this.x = x;
        this.y = y; 
    }
    
    cols = new Array();

    AddRow(data){
      // const r = [45,100,150,200,250,300,350];
      const ws = [7, 30, 90,350, 400, 420,500,600,650,700,750,800,880,925];   
      this.cols.push(new Column(ws[1], this.y+t,this.y, 18, data.dTemp[i].code5 == undefined ? "": data.dTemp[i].code5.slice(0,5)));
      this.cols.push(new Column(ws[1], this.y+t,this.y, 18+16, data.dTemp[i].code5 == undefined ? "": data.dTemp[i].code5.slice(5,10)));
      this.cols.push(new Column(ws[1], this.y+t,this.y, 18+32, data.dTemp[i].code5 == undefined ? "": data.dTemp[i].code5.slice(10,15)));        
      this.cols.push(new Column(ws[2], this.y+t, this.y, 18, data.dTemp[i].syohinName == undefined ? "": data.dTemp[i].syohinName));
      this.cols.push(new Column(ws[3], this.y+t,this.y, 18, data.dTemp[i].orderDenLineNo == undefined ? "": data.dTemp[i].orderDenLineNo.slice(0,24)));
      // this.cols.push(new Column(ws[4], this.y+t,this.y, 18+20, data.dTemp[i].orderNo == undefined ? "": data.dTemp[i].orderNo.slice(25,30)));
      this.cols.push(new Column(ws[5], this.y+t, this.y, 18, data.dTemp[i].tantoCd == undefined ? "": data.dTemp[i].tantoCd));
      this.cols.push(new Column(ws[6], this.y+t, this.y, 18, data.dTemp[i].orderState == undefined ? "": data.dTemp[i].orderState));
      this.cols.push(new Column(ws[7], this.y+t,this.y, 18, data.dTemp[i].uriKigou == undefined ? "": data.dTemp[i].uriKigou.slice(0,10)));
      // this.cols.push(new Column(ws[8], this.y+t,this.y, 18+20, data.dTemp[i].saveKey == undefined ? "": data.dTemp[i].saveKey));
      // this.cols.push(new Column(ws[8], this.y+t,this.y, 18+20, data.hTemp[i].saveKey == undefined ? "": data.hTemp[i].saveKey.slice(11,20)));
      // this.cols.push(new Column(ws[9], this.y+t,this.y, 18, data.dTemp[i].code5 == undefined ? "": data.dTemp[i].code5));       
      // this.cols.push(new Column(ws[10], this.y+t, this.y, 18, data.dTemp[i].syohinName == undefined ? "": data.dTemp[i].syohinName));
      this.cols.push(new Column(ws[11], this.y+t,this.y, 18, data.dTemp[i].jyu2 == undefined ? "": data.dTemp[i].jyu2.slice(0,24)));
      // this.cols.push(new Column(ws[12], this.y+t,this.y, 18+20, data.hTemp[i].orderNo == undefined ? "": data.dTemp[i].orderNo));
      // this.cols.push(new Column(ws[12], this.y+t,this.y, 18+20, data.hTemp[i].orderNo == undefined ? "": data.hTemp[i].orderNo.slice(25,30)));
      this.cols.push(new Column(ws[13], this.y+t, this.y, 18, data.dTemp[i].siiAnswTan == undefined ? "": data.dTemp[i].siiAnswTan));
      this.cols.push(new Column(ws[14], this.y+t, this.y, 18, data.dTemp[i].orderState == undefined ? "": data.dTemp[i].orderState));
      i++;
    }

    CheckData(data){
      const w = [25, 55, 235, 65, 85 , 90, 90 ,35, 40, 80, 85, 35, 35, 85];
        let m=ctx.measureText(data.dTemp[j].code5 == undefined ? "": data.dTemp[j].code5);
        let m1=ctx.measureText(data.dTemp[j].syohinName == undefined ? "": data.dTemp[j].syohinName);
        let m2=ctx.measureText(data.dTemp[j].orderDenLineNo == undefined ? "": data.dTemp[j].orderDenLineNo);
        let m3=ctx.measureText(data.dTemp[j].tantoCd == undefined ? "": data.dTemp[j].tantoCd);
        let m4=ctx.measureText(data.dTemp[j].orderState == undefined ? "": data.dTemp[j].orderState);
        let m5=ctx.measureText(data.dTemp[j].siiAnswTan == undefined ? "": data.dTemp[j].siiAnswTan);
        let x = Math.max((m.width)/w[1],(m1.width)/w[2], (m2.width)/w[3],(m3.width)/w[5],(m4.width)/w[6],(m5.width)/w[7]);
        j++;
        // console.log(w[1]);
        // console.log(m.width);
        if(x>0 && x<1){
          t = t + 0;
        }
        if(x>1 && x<2 ){
          t = t + 16;
        }
        if(x>2 ){
          t = t+ 32;
        }  
    }

    Render(data) {
      // Draw record boundary
      const w = [0, 25, 55, 235, 65, 85 , 90, 90 ,35, 40, 80, 85, 35, 35, 85, 0];
      let width = 0; 
      
      ctx.moveTo(this.x,this.y + t);
      ctx.lineTo(this.x + 1040,this.y + t);
      console.log(t);
      for(let i = 0; i < w.length; i++) {
      ctx.lineWidth = 0;
      ctx.textAlign = "left";
      ctx.moveTo(this.x+width ,this.y);
      ctx.lineTo(this.x+width ,525+t);
      ctx.stroke();
      width += w[i];
      }  
      for(let i = 0; i < this.cols.length; i++) {
        this.cols[i].Render(this.x, this.y);
        
      }
    }

    Header(){
      const wt = [ "行","分類","品名","数量","行売単価","売合計","定価単価","売記","壳率","仕単価","任合計","仕記","仕率","摘要"];
      const s = [52, 92.5, 235, 386, 462, 550, 640, 702, 740, 800, 882, 942, 978, 1035,];
      ctx.fillStyle = "#000000";
      ctx.font = "14px Arial"
      for(let i = 0;i<wt.length;i++){
        ctx.textAlign = "center";
        ctx.fillText(wt[i], s[i], this.y+18);
      }
    }
  }

  fetch("data.json")
  .then(response => response.json())
  .then(json => {
    let col = new Record(40, 350);
    col.Render(json.data);
    let col1 = new Record(40, 375);
    col1.AddRow(json.data);
    col1.Render(json.data);
    let col2 = new Record(40, 400);
    col2.CheckData(json.data);
    col2.AddRow(json.data);
    col2.Render(json.data)
    let col3 = new Record(40, 425);
    col3.CheckData(json.data);
    col3.AddRow(json.data);
    col3.Render(json.data);
    let col4 = new Record(40, 450);
    col4.CheckData(json.data);
    col4.AddRow(json.data);
    col4.Render(json.data);
    let col5 = new Record(40, 475);
    col5.CheckData(json.data);
    col5.AddRow(json.data);
    col5.Render(json.data);
    let col6 = new Record(40, 500);
    col6.CheckData(json.data);
    col6.AddRow(json.data);
    col6.Render(json.data);
    let col7 = new Record(40, 525);
    col7.CheckData(json.data);
    col7.Render(json.data);
    col.Header();
  })
  ctx.fillStyle = "#C0C0C0";
  ctx.fillRect(40,350,1040,25);
  

