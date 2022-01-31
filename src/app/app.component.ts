import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from './engine/engine.service';

@Component({
  selector: 'app-root',
  template: ``,
})
export class AppComponent implements OnInit {

  constructor(
    private engineService: EngineService
  ) { }

  ngOnInit(): void {
    
  }
  
}
