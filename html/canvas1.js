let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");
    ctx.lineWidth = 1;
    ctx.font = "15px Arial";
    ctx.fillText("印刷日時", 850, 40);
    let today = new Date();
    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    ctx.fillText(date, 930, 40);
    ctx.fillText(time, 1010, 40);
    ctx.font = "25px Arial";
    ctx.fillText("訂正・取消 エビデンス (複数伝票)", 400, 60);
    ctx.fillStyle = "#C0C0C0";
    ctx.fillRect(40,110,130,40);
    ctx.fillRect(300,130,130,20);
    // ctx.fillRect(40,175,1045,25);
    ctx.font = "14px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("于 - ㄙCD", 70, 125);
    ctx.fillText("得意先CD", 70, 145);
    ctx.fillText("得意先 / 營業所", 320, 145);
    // ngang tang 1
    ctx.moveTo(40, 110);ctx.lineTo(300, 110);       
    ctx.moveTo(40, 150);ctx.lineTo(835, 150);
    ctx.moveTo(40, 130);ctx.lineTo(835, 130);
    // doc tang 1
    let m = [40,170,300];
    for(let i = 0;i<m.length;i++){
      ctx.moveTo(m[i], 110);
      ctx.lineTo(m[i], 150);
    }
    let m1 = [430,635,835];
    for(let i = 0;i<m1.length;i++){
      ctx.moveTo(m1[i], 130);
      ctx.lineTo(m1[i], 150);
    }
    ctx.stroke();

  

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
      ctx.font = "12px Arial";
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
          let l = 1;
          // t = t + (2.5+(l*20)+(l-1)*2.5);
          t = t + 16;
        }
        if(x>2 ){
          let l = 2;
          t = t+ 32;
        }  
    }

    Render(data) {
      // Draw record boundary
      const w = [0, 35, 22, 36, 37, 48 , 37, 45 , 135, 25, 45, 45, 55, 35, 35, 45, 45, 35, 38, 92, 50, 40, 40, 20,0];
      let width = 0; 
      
      ctx.moveTo(this.x,this.y + t);
      ctx.lineTo(this.x + 1040,this.y + t);
      console.log(t);
      for(let i = 0; i < w.length; i++) {
      ctx.textAlign = "left";
      ctx.moveTo(this.x+width ,this.y);
      ctx.lineTo(this.x+width ,320+t);
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
      ctx.font = "12px Arial"
      for(let i = 0;i<wt.length;i++){
        ctx.textAlign = "center";
        ctx.fillText(wt[i], s[i], this.y+18);
      }
    }
  }

  fetch("data.json")
  .then(response => response.json())
  .then(json => {
    let col = new Record(40, 175);
    col.Render(json.data);
    let col1 = new Record(40, 200);
    // col1.AddRow(json.data);
    col1.Render(json.data);
    let col2 = new Record(40, 220);
    col2.CheckData(json.data);
    // col2.AddRow(json.data);
    col2.Render(json.data)
    let col3 = new Record(40, 240);
    // col3.CheckData(json.data);
    // col3.AddRow(json.data);
    col3.Render(json.data);
    let col4 = new Record(40, 260);
    // col4.CheckData(json.data);
    // col4.AddRow(json.data);
    col4.Render(json.data);
    let col5 = new Record(40, 280);
    // col5.CheckData(json.data);
    // col5.AddRow(json.data);
    col5.Render(json.data);
    let col6 = new Record(40, 300);
    // col6.CheckData(json.data);
    // col6.AddRow(json.data);
    col6.Render(json.data);
    let col7 = new Record(40, 320);
    // col7.CheckData(json.data);
    col7.Render(json.data);
    // col.Header();
    
  })
    ctx.fillStyle = "#C0C0C0";
    ctx.fillRect(40,175,1040,25); 
    