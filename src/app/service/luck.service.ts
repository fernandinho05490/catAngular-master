import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LuckService {
  private baseUrl =
    'https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_aoq61TVEbM1eZTDIcElIVwogCpoJJxujlk09XuEPFxJc71jqXSebshaRQitNSS3y';

    constructor(private http: HttpClient) {}

    getLuck(): Observable<any[]> {
      return this.http.get<any[]>(this.baseUrl);
    }
}
