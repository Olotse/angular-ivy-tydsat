import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-mycompo",
  templateUrl: "./mycompo.component.html",
  styleUrls: ["./mycompo.component.css"]
})
export class MycompoComponent implements OnInit {
  @Input() youtubers;

  @Output() likeIt = new EventEmitter();

  only100k: boolean;

  constructor() {}
  ngOnInit() {}

  show100kOnly(e): void {
    this.only100k = e.target.checked;
  }
}
