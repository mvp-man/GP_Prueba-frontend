import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private http: HttpClient
  ) { }
  getinvoice():Observable<any>{
    return this.http.get('http://localhost:55101/Invoice')
  }
  getinvoicebyid(id:any):Observable<any>{
    let params=new HttpParams();
    params.append('id',id);
    return this.http.get('http://localhost:55101/Invoice',{params})

  }
}
