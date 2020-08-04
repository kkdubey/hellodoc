import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';


const routes: Routes = [{
  path: '',
  data: {
    title: 'Get Repo Details'
  },
  children: [
    {
      path: '',
      redirectTo: 'issue-list',
      pathMatch: 'full'
    },
    {
      path: 'issue-list',
      component: IssueListComponent,
      data: {
        title: 'Issue List'
      }
    }
    ,
    {
      path: 'issue-details/:id',
      component: IssueDetailComponent,
      data: {
        title: 'Issue Details'
      }
    },
    { path: '**', redirectTo: 'issue-list', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
