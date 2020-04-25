import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllPhysicians(): Observable<any>{
    return this.http.get(this.baseurl + '/physicians/', {headers: this.httpHeaders});
  }

  getOnePhysician(id): Observable<any>{
    return this.http.get(this.baseurl + '/physicians/' + id + '/',
      {headers: this.httpHeaders});
  }

  updatePhysician(physician): Observable<any>{
    const body = {firstName: physician.firstName, lastName: physician.lastName, maxShiftLoad: physician.maxShiftLoad,
      phoneNumber: physician.phoneNumber, specialty: physician.specialty};
    return this.http.put(this.baseurl + '/physicians/' + physician.id + '/', body,
      {headers: this.httpHeaders});
  }

  createPhysician(physician): Observable<any> {
    const body = {firstName: physician.firstName, lastName: physician.lastName, maxShiftLoad: physician.maxShiftLoad,
      phoneNumber: physician.phoneNumber, specialty: physician.specialty};
    return this.http.post(this.baseurl + '/physicians/', body,{headers: this.httpHeaders});
  }

  deletePhysician(id): Observable<any> {
    return this.http.delete(this.baseurl + '/physicians/' + id + '/',
      {headers: this.httpHeaders});
  }


}
