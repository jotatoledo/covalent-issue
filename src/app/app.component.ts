import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Observable, of } from "rxjs";

interface Breadcrumb {
  display: string;
  link: string | string[];
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly breadcrumbs$: Observable<Breadcrumb[]>;
  syncCrumbs: Breadcrumb[];

  constructor() {
    this.breadcrumbs$ = of(this.createCrumbs());
    this.syncCrumbs = this.createCrumbs();
  }

  private createCrumbs(): Breadcrumb[] {
    return [
      {
        display: "Test",
        link: "test"
      },
      {
        display: "Test 2",
        link: "test2"
      },
      { display: "Test 3", link: ["test", "test3"] }
    ];
  }
}
