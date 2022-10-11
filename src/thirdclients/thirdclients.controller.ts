import { Body, Controller, Get, Post } from '@nestjs/common';
import { ThirdclientsService } from './thirdclients.service';
import { map } from 'rxjs';


@Controller('thirdclients')
export class ThirdclientsController {

    constructor(
        private dataService: ThirdclientsService,
    ){}

    @Post('createToken')
    auth( @Body() body: any){
        this.dataService.generateToken(`https://private-anon-69c5e734ab-siigoapi.apiary-mock.com/auth`,body)
        .subscribe( (resp) => {
            var data = resp['data'];
            console.log(data);
        });
        return body
    }
}
