import {Component, OnInit} from '@angular/core';
import {RepositoryServiceService } from '../repository-service.service';
import {Repository} from '../repository';

@Component({
  selector: 'app-users-repositories',
  templateUrl: './users-repositories.component.html',
  styleUrls: ['./users-repositories.component.css']
})
export class UsersRepositoriesComponent implements OnInit {
  myRepo: Repository[];

  constructor(public reposerv: RepositoryServiceService) {
  }

  getRepo(searchTerm: string) {
    this.reposerv.getRepo(searchTerm).subscribe(data => {
      this.myRepo = data;
      console.log(this.myRepo);
    });
  }
  

  ngOnInit() {
    this.getRepo('Marah-uwase');
  }
}
