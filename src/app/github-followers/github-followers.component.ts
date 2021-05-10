import { Observable, combineLatest  } from 'rxjs';
import { switchMap , map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(
    private service: GithubFollowersService,
    private route: ActivatedRoute
  ) { }

  followers: any[] = [];

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        const id = combined[0].get('id');
        const page = combined[1].get('page');
        return this.service.getAll();
    }))
    .subscribe(followers => this.followers = followers);
  }



}
