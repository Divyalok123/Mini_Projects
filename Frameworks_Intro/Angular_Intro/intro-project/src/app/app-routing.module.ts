import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { NestedCompComponent } from './friends/nested-comp/nested-comp.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [ 
  {
    path: 'posts-list',
    component: PostsListComponent
  },

  {
    path: 'friends',
    component: FriendsComponent
  },

  {
    path: 'friends/nested',
    component: NestedCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
