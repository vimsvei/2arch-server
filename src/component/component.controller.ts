import {Controller} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger';
import {ComponentService} from './component.service';

@ApiUseTags('component')
@Controller('component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) {}

  async create(): Promise<>
}
