import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { UsersDataSourceService } from "./services/users-data-source.service";
import { Observable } from "rxjs";
import { User } from "./interfaces/user.interface";
import { IFilter } from "../filter/interfaces/filter.interface";
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: "app-users-grid",
  templateUrl: "./users-grid.component.html",
  styleUrls: ["./users-grid.component.css"]
})
export class UsersGridComponent implements OnInit {
  users$: Observable<User[]>;
  @ViewChildren(FilterComponent) filters: QueryList<FilterComponent>;
  showIp = true;
  constructor(private usersService: UsersDataSourceService) {}

  ngOnInit() {
    this.usersService.loadUsers();
    this.users$ = this.usersService.getUsers();
  }
  toggleIp() {
    if (this.showIp) {
      this.showIp = false;
    } else {
      this.showIp = true;
    }
  }
  filterCol(val: IFilter) {
    this.disableFilters(val);
    this.usersService.filterCol(val);
  }
  // if some filter has value , disable the rest of the filter, and if the filter has been cleaned enable all filters
  disableFilters(val: IFilter) {
    if (val.val.length > 0) {
      this.filters.forEach(filter => {
        if (val.colId !== filter.colId) {
          filter.isDisabled = true;
        }
      });
    } else {
      this.filters.forEach(filter => {
        filter.isDisabled = false;
      });
    }
  }
  trackByFn(index, item) {
    return item.id;
  }
}
