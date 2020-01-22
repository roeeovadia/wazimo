import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy
} from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { IFilter } from "./interfaces/filter.interface";
@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() colId: string;
  @Output() handleFilter = new EventEmitter<IFilter>();
  isDisabled = false;
  private subject: Subject<string> = new Subject();
  constructor() {}
  onKeyUp(text) {
    this.subject.next(text);
  }
  ngOnInit() {
    this.subject
      .pipe(debounceTime(0)) // to give the user time to type before making the filter
      .subscribe(text =>
        this.handleFilter.emit({ colId: this.colId, val: text })
      );
  }
  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }
}
