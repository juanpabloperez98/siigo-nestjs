import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from "axios";

@Injectable()
export class ThirdclientsService {

    private securityHeaders = {
        'Content-Type': 'application/json'
    }
    
    constructor(private readonly httpService: HttpService) {}

    generateToken(endpoint:string, body:Record<string,string>): Observable<AxiosResponse> {
        return this.httpService.post(endpoint, { data: params }, { headers: this.securityHeaders});
    }
}
