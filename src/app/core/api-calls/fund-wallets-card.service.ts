import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class FundWalletsCardService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public initiatePayment(){
    this.apiEndpoint.createUrl("wallet/initiatePayment", true)
  }

  public validateNigerianCards(){
    this.apiEndpoint.createUrl("wallet/validate/NigerianCards", true)
  }

  public validateForeignCards(){
    this.apiEndpoint.createUrl("wallet/validate/ForeignCards", true)
  }

  public finalValidatePayment(){
    this.apiEndpoint.createUrl("wallet/payment/validate", true)
  }

  public verifyPayment(){
    this.apiEndpoint.createUrl("wallet/payment/verify", true)
  }
}
