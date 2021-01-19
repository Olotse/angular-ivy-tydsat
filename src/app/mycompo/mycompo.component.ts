import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { YoutubersService } from "../youtubers.service";

@Component({
  selector: "app-mycompo",
  templateUrl: "./mycompo.component.html",
  styleUrls: ["./mycompo.component.css"]
})
export class MycompoComponent implements OnInit {
  youtubers;
  only100k: boolean;

  constructor(private youtubersService: YoutubersService) {
    this.youtubers = youtubersService.getList();
  }
  ngOnInit() {}

  show100kOnly(e): void {
    this.only100k = e.target.checked;
  }

  likeIt(arg): boolean {
    var e = arg.e;
    var name = arg.name;

    e.preventDefault();

    var currentVal = (e.target as HTMLInputElement).value;

    if (currentVal == "Like") (e.target as HTMLInputElement).value = "+1";
    else (e.target as HTMLInputElement).value = "Like";

    console.log("Like " + name);

    return false;
  }
}
