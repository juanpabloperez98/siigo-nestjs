import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('thirdclients')
export class ThirdclientsController {
    
    @Get()
    getTest() {
        return 'Testing'
    }

    @Post()
    createClient(@Body() body: any){
        return body
    }
}
