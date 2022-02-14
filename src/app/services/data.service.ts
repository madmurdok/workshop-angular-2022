import { Injectable } from '@angular/core';
import { Dictionary } from '../_shared/interfaces/app-types.interface';
import { RequestOptionsModel } from '../_shared/models/request-options.model';
import { AppHttpClientService } from '../_shared/services/app-http-client.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private appHttpClientService: AppHttpClientService) { }

  public getDataFromUSA(){
    const url = environment.dataUsaUrl;
    const requestOptions = new RequestOptionsModel({params: new HttpParams({fromObject: {'drilldowns': 'Nation', 'measures':'Population'}})});
    return this.appHttpClientService.Get<any>(url,requestOptions);
  }
}
