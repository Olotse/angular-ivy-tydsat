import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { YoutubersService } from "../youtubers.service";

@Component({
  selector: "app-add-youtuber",
  templateUrl: "./add-youtuber.component.html",
  styleUrls: ["./add-youtuber.component.css"]
})
export class AddYoutuberComponent implements OnInit {
  addForm;

  constructor(
    private formBuilder: FormBuilder,
    private youtubersService: YoutubersService
  ) {
    this.addForm = this.formBuilder.group({
      name: "",
      followers: 0,
      description: ""
    });
  }

  ngOnInit() {}

  onSubmit(data): void {
    this.youtubersService.add(data.name, data.followers, data.description);
    this.addForm.reset();
  }
}
