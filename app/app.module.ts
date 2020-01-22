import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UsersGridModule } from "./users-grid/users-grid.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, UsersGridModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
