import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import {dataclass} from './../class/dataclass'
describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit ("check service", ()=>{
    let t = new dataclass();
    t.ch=1;
    t.x=1;
    t.h=0.1;
    let test= service.calcF(t);
    let test2= (Math.sin(1+0.1)- Math.sin(1-0.1))/(0.1*2);
    expect(test.toFixed(2)).toBe(test2.toFixed(2));

  })

});
