import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ThirdclientsService {
    
    constructor(private readonly httpService: HttpService) {}

    createClient(){
        return this.httpService.
    }

}
