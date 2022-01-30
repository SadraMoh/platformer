import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EngineModule } from './engine/engine.module';
import { ObjModule } from './obj/obj.module';
import { BlockComponent } from './obj/objs/block/block.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EngineModule,
    ObjModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
