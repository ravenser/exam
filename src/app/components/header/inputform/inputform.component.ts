import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {dataclass} from '../../../class/dataclass'
@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss'],
})
export class InputformComponent implements OnInit {
  x:number;
  h:number;
  ch:number=0;
  arr = ["Error","sin(x)", "cos(x)","x^2"];
  @Output() onChanged = new EventEmitter <dataclass>();
    
  
  constructor() { }

  ngOnInit() {}
  setX(x:number)
  {
    if(x!=undefined&&x>0)
    {
      this.x = x;
      let t = new dataclass();
      t.ch=this.ch;
      t.x=this.x;
      t.h=this.h;
      this.change(t);
    }
    else {
      console.log("Don`t pass validation")
    }
  }
  setH(h:number)
  {
    if(h!=undefined&&h>0)

    {
      this.h = h;
      let t = new dataclass();
      t.ch=this.ch;
      t.x=this.x;
      t.h=this.h;
      this.change(t);
    }
    else {
      console.log("Don`t pass validation")
    }
  }
  testCh()
  {

    let t = new dataclass();
    t.ch=this.ch;
    t.x=this.x;
    t.h=this.h;
    this.change(t);
  }
  change(data:dataclass) {
    
    if(data.ch>0&&data.h!=undefined&&data.x!=undefined)
    {
      console.log(data);
      this.onChanged.emit(data);
    }
    else{
      console.log("error");
    }
  }
}
