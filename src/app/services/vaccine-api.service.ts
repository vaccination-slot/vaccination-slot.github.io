import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Center, CenterResponse, DistrictResponse, StateResponse} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class VaccineApiService {

  constructor(private httpClient: HttpClient) { }

  getStates(): Observable<StateResponse> {
    return this.httpClient.get<StateResponse>('https://cdn-api.co-vin.in/api/v2/admin/location/states');
  }

  getStateDistricts(stateId: number): Observable<DistrictResponse> {
    return this.httpClient.get<DistrictResponse>(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`);
  }

  getDistrictDetails(districtId: number, date: string): Observable<CenterResponse> {
    return this.httpClient.get<CenterResponse>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${date}`);
  }
}
