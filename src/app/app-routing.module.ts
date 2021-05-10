import { NotfoundComponent } from './notfound/notfound.component';
import { PostsComponent } from './posts/posts.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'followers/:id/:username',
    component: GithubprofileComponent
  },
  {
    path: 'followers',
    component: GithubFollowersComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
