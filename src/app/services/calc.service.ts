import { Injectable } from '@angular/core';
import {dataclass} from './../class/dataclass'
@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }
  calcF(data:dataclass)
  {
    let t =0;
    if (data.ch == 1)
    {
      t = (Math.sin(data.x+data.h)-Math.sin(data.x-data.h))/(data.h*2);
    }
    else if(data.ch ==2)
    {
      t = (Math.cos(data.x+data.h)-Math.cos(data.x-data.h))/(data.h*2);
    }
    else if(data.ch==3)
    {
      t= ((data.x+data.h)*(data.x+data.h)-(data.x-data.h)*(data.x-data.h))/(data.h*2);
    }
    else if(data.ch==0)
    t= 0;
    return t;
  }
}
