import { AfterViewChecked, AfterViewInit, Injectable } from '@angular/core';
import * as Matter from 'matter-js';
import { Engine, Runner, Render, World, Constraint, MouseConstraint, Bodies, Composite } from 'matter-js'

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  public scene: HTMLCanvasElement;

  public engine: Matter.Engine;

  public render: Matter.Render;

  public runner: Matter.Runner;

  get world(): Matter.World {
    return this.engine?.world;
  }

  public static instance: EngineService;

  constructor() {

    // expose the service outside of the injector
    EngineService.instance = this;

    // create the scene canvas element
    this.scene = document.createElement('canvas');
    this.scene.id = 'scene';
    document.body.appendChild(this.scene);

    // create an engine
    this.engine = Engine.create();

    // create a renderer
    this.render = Render.create({
      element: document.body,
      engine: this.engine,
      canvas: this.scene
    });

    // run the renderer
    Render.run(this.render);

    // create runner
    this.runner = Runner.create();

    // run the engine
    Runner.run(this.runner, this.engine);

    // -
    console.log('engine service was initialized');
    console.log('engine: ', this.engine);
    console.log('render: ', this.render);
    console.log('scene: ', this.scene);
    console.log('runner: ', this.runner);
    
  }

}

