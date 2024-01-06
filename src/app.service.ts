import * as fs from 'fs';
import { TemplateHandler } from 'easy-template-x';
import { Inject, Injectable } from '@nestjs/common';
import * as path from 'path';
import { PrismaService } from './datasource/prisma/prisma.service';


@Injectable()
export class AppService {
  private readonly templateFilePath: string;
  private readonly templateHandler: TemplateHandler;

  constructor(@Inject(PrismaService) private prisma:PrismaService) {
    this.templateFilePath = path.resolve(__dirname, 'test.docx');
    this.templateHandler = new TemplateHandler();
  }

  async generateModifiedTest(): Promise<Buffer> {
    try {
      console.log(await this.prisma.user.findMany())
      // 1. Read template file
      const templateFile = fs.readFileSync(this.templateFilePath);
  
      // 2. Process the template
      const data = {
        Introduction: 'Preliminary analysis has its focus on major energy supplies and demands of the industry...',
       check: [
        { "address1": "No: 3/159, Covai Main Road, Annur - 641653.","address2": "No: 3/159, Covai Main Road,  Annur - 641653.",  "phno": "9976616213", "email":"kpkparthasarathi@gmail.com", "type":"Textile Mill","year":"2002"},      
    ],

      spindles: [
        {"IS-1":"0", "MF-1":"1.0","ES-1":"0","IS-2":"10032", "MF-2":"1.1","ES-2":"11035","IS-3":"2", "MF-3":"118.0","ES-3":"236","IS-4":"0", "MF-4":"0.2","ES-4":"0","IS-5":"0", "MF-5":"2.0","ES-5":"0","IS-6":"0", "MF-6":"8.0","ES-6":"0","IS-7":"0", "MF-7":"14.0","ES-7":"0","TE":"11271"},
      ],

        // Additional data can be added here
      };
  
      const doc = await this.templateHandler.process(templateFile, data);
  
      // 3. Save output
      const buf = Buffer.from(doc);
  
      return buf;
    } catch (error) {
      throw new Error(`Error generating modified test: ${error.message}`);
    }
  }
}
