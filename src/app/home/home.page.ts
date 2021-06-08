import { Component } from '@angular/core';
import {HeaderComponent} from '../components/header/header/header.component'
import {InputformComponent} from '../components/header/inputform/inputform.component'
import { dataclass } from './../class/dataclass'
import {CalcService} from './../services/calc.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  znach:number=0;
  ans=-1;
  arr = ["Error","sin(x)", "cos(x)","x^2"];
  data= new dataclass;
  constructor(public calc:CalcService) {this.data.ch=0;}

  onChanged(data)
  {

    let t =data;

    console.log("wasdas");
    console.log(t);
    this.ans = this.calc.calcF(t);

  }

}
