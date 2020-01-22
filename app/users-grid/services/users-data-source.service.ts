import { User } from "./../interfaces/user.interface";
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { IFilter } from "src/app/filter/interfaces/filter.interface";
@Injectable({
  providedIn: "root"
})
export class UsersDataSourceService {
  private users: User[] = [];
  private subject = new Subject<User[]>();
  constructor(private http: HttpClient) {}

  loadUsers(): void {
    this.http
      .get("https://storage.googleapis.com/static.aoni.io/demo/user.json")
      .subscribe((res: User[]) => {
        this.users = res;
        this.subject.next(this.users);
      });
  }
  getUsers(): Observable<User[]> {
    return this.subject;
  }
  filterCol(filterRule: IFilter) {
    this.subject.next(
      this.users.filter(user => {
        return String(user[filterRule.colId])
          .toLowerCase()
          .startsWith(filterRule.val);
      })
    );
  }
}
