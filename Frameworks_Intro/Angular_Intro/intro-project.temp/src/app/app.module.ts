import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { FriendsComponent } from './friends/friends.component';
import { NestedCompComponent } from './friends/nested-comp/nested-comp.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    FriendsComponent,
    NestedCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
