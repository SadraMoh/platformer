import * as Matter from 'matter-js';
import { EngineService } from 'src/app/engine/engine.service';
import { ObjBase } from '../../obj.base';

export class BlockComponent extends ObjBase {

  body: Matter.Body = Matter.Bodies.circle(50, 50, 16, { isStatic: true });

  constructor() {
    super()
  }

}
