import { Component, OnInit, TypeDecorator } from '@angular/core';
import { EngineService } from 'src/app/engine/engine.service';
import { Obj } from '../obj.decorator';

@Obj()
@Component({
  selector: 'block',
  template: `<div name="block"></div>`
})
export class BlockComponent implements OnInit{

  constructor() {
    console.log('e');
    
  }  

  ngOnInit(): void {
    
  }

}
