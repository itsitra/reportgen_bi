import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/generate-modified-test')
  async generateModifiedTest(@Res() res: Response) {
    try {
      const modifiedTest = await this.appService.generateModifiedTest();
  
      res.set({
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename=modifiedtest.docx',
      });
  
      res.send(modifiedTest);
    } catch (error) {
      console.error('Error generating modified test:', error);

      res.status(500).send(`Error generating modified test: ${error.message}`);
    }
  }
}