import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-project-comprehend',
  templateUrl: './project-comprehend.component.html',
  styleUrls: ['./project-comprehend.component.css']
})
export class ProjectComprehendComponent implements OnInit {
  readonly hour: number = 36000;
  response: Observable<SongResponse>;
  jwt: Observable<string>;
  jwtGenDateTime: number

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getToken();
    this.getAnalysis();
  }

  getToken() {
    if (!this.jwtGenDateTime || (Date.now() - this.jwtGenDateTime) > this.hour) {
      this.jwtGenDateTime = Date.now();
      this.jwt = this.http.get<string>(environment.authTokenServiceUrl + environment.authTokenSecret, {
        responseType: 'text' as 'json'
      });
    }
  };

  getAnalysis() {
    this.jwt.subscribe(res => {
      this.response = this.http.get<SongResponse>(environment.textAnalysisServiceUrl, {
        headers: {
          "Authorization": "Bearer " + res
        }
      });
    });
  };
}

class SongResponse {
  title: string;
  song: string;
  sentiment: string;
  url: string;
}
