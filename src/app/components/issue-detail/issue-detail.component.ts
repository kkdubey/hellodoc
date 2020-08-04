import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css'],
})
export class IssueDetailComponent implements OnInit {
  issueDetails: any = {};
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const issueId = params.get('id');
      if (issueId) {
        this.dataService.getIssueDetails(issueId).subscribe((response) => {
          this.issueDetails = response;
        });
      }
    });
  }
}
