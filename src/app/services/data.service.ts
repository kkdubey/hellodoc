import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly repositoryDetailsURL: string =
    'https://api.github.com/repos/angular/angular';
  private readonly getIssueDetailsURL: string =
    'https://api.github.com/repos/angular/angular/issues/';
  private readonly issueSearchURL =
    'https://api.github.com/search/issues?q=repo:angular/angular/node+type:issue+';

  constructor(private http: HttpClient) {}

  get requestHeaders(): {
    headers: HttpHeaders | { [header: string]: string | string[] };
  } {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
    });

    return { headers };
  }

  getRepositoryDetails() {
    return this.http.get(this.repositoryDetailsURL, this.requestHeaders);
  }

  getIssueDetails(issueId) {
    const apiUrl = this.getIssueDetailsURL + issueId;
    return this.http.get(apiUrl, this.requestHeaders);
  }

  getIssueList(state: string = 'open', perPage: number = 10, page: number = 1) {
    const apiUrl =
      this.issueSearchURL +
      `state:${state}&per_page=${perPage}&page=${page}`;

    return this.http.get(apiUrl, this.requestHeaders);
  }
}
