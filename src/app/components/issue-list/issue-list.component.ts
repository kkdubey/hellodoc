import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  public gridApi;
  public gridColumnApi;
  issueList: any[] = [];
  public rowSelection = 'single';
  public paginationPageSize = 10;
  columnDefs = [
    { headerName: 'id', field: 'id' },
    { headerName: 'number', field: 'number' },
    { headerName: 'title', field: 'title' },
    { headerName: 'state', field: 'state' },
  ];

  rowData = [];

  gridOptions: {
    pagination: true;
    paginationPageSize: 10;
  };

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.getIssueList('open', 10, 1).subscribe((res) => {
      this.rowData = res['items'] as [];
      this.issueList = res as [];
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged(params) {
    var selectedRows = this.gridApi.getSelectedRows()[0];
    this.router.navigateByUrl("issue-details/" + selectedRows.number);
  }
}
