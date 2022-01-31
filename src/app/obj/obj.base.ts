import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as Matter from 'matter-js';
import { EngineService } from 'src/app/engine/engine.service';

export abstract class ObjBase {

  /** the shape to render on the scebe */
  readonly abstract body: Matter.Body;

  // #region x
  public get x(): number {
    return this.body.position.x;
  }

  public set x(v: number) {
    this.body.position.x = v;
    this.xChange.emit(v);
  }

  public xChange: EventEmitter<number> = new EventEmitter<number>();
  // #endregion x

  // #region y
  public get y(): number {
    return this.body.position.y;
  }

  public set y(v: number) {
    this.body.position.y = v;
    this.yChange.emit(v);
  }

  public yChange: EventEmitter<number> = new EventEmitter<number>();
  // #endregion y

  //#region lifecycle

  constructor() {

    // delay so that the subclass is born
    Promise.resolve().then(() => { this.init() })
  }

  private init() {

    Matter.Composite.add(EngineService.instance.world, [this.body]);

    /** obj completed initialization */
    this.didInitialize();
  }

  /** runs when obj initialization is completed */
  public didInitialize(): void { };

  //#endregion lifecycle

}