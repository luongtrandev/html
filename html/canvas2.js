let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");
   
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
      ctx.font = "16px Arial";
      ctx.fillText(this.data, x + this.x, y + this.y + this.h);
      
    }

  }

  class Record {
    constructor(x,y){
        this.x = x;
        this.y = y;
        
    }
    
    cols = new Array();

    async AddRow(){
      // let res = await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
      // let record = await res.json();
      // const res = require('./res.json'); 
      // let record = await res.json();
      const response = await fetch("res.json");
      const json = await response.json();
      
      const ws = [50, 150, 100, 70, 100, 80, 90 ,50, 80, 70];
      let x = 0;
      for(let i = 0; i < ws.length; i++) {
        this.cols.push(new Column(x+5, 0, ws[i], 20, json.data.hTemp[i].nyu2));
        x += ws[i];

      }
    }
    AddCol(){
      let a = 50;
      const w = [0,50, 150, 100, 70, 100, 80, 90 ,50, 80, 70];
      for(let i = 0; i < w.length; i++) {
        ctx.moveTo(a + w[i],this.y);
        ctx.lineTo(a + w[i],600);
        ctx.stroke();
        a += w[i];
      }
    }
      

    Render() {
      // Draw record boundary
      let width = 0;
      for(let i = 0; i < this.cols.length; i++) {
        width += this.cols[i].w;
      }
      
      ctx.moveTo(this.x,this.y);
      ctx.lineTo(this.x + width,this.y);
      ctx.stroke();
      // Render each columns
      for(let i = 0; i < this.cols.length; i++) {
        this.cols[i].Render(this.x, this.y);
      }
    }
  }
   
    let col = new Record(50, 300);
    col.AddRow();
    col.Render();
    col.AddCol();
    // let col2 = new Record(50, 425);
    // col2.AddRow();
    // col2.Render();
    // let col3 = new Record(50, 450);
    // col3.AddRow();
    // col3.Render();
    
    

