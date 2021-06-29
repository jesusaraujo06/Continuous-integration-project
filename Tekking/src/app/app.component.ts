import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Tekking';

  API = 'http://localhost:3000';

  people: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllPeople();
  }

  // Add one person to the API
  addPerson(name, age) {
    this.http
      .post(`${this.API}/users`, { name, age })
      .pipe(map((res) => res))
      .subscribe(() => {
        this.getAllPeople();
      });
  }

  // Get all users from the API
  getAllPeople() {
    this.http
      .get(`${this.API}/users`)
      .pipe(map((res) => res))
      .subscribe((people) => {
        console.log(people);
        this.people = people;
      });
  }
}
