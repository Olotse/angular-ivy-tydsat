import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-mycompo",
  templateUrl: "./mycompo.component.html",
  styleUrls: ["./mycompo.component.css"]
})
export class MycompoComponent implements OnInit {
  @Input() youtubers;

  only100k: boolean;

  constructor() {}
  ngOnInit() {}

  show100kOnly(e): void {
    //e.preventDefault();
    this.only100k = e.target.checked;
    //return false;
  }

  likeIt(e, name): boolean {
    e.preventDefault();
    console.log("Like" + name);
    return false;
  }
}
