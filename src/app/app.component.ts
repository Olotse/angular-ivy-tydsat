import { Component, VERSION } from "@angular/core";
import { YoutubersService } from "./youtubers.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  youtubers;

  constructor(private youtubersService: YoutubersService) {
    this.youtubers = youtubersService.getList();
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
