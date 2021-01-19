import { HttpClient } from "@angular/common/http";
import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  jokes = [];

  constructor(private httpClient: HttpClient) {
    this.reloadJoke();
  }

  ngOnInit() {}

  showAnswer(e): boolean {
    e.preventDefault();

    if (e.target.value == "Show") {
      e.target.value = "Hide";
      e.target.classList.add("white");

      e.target.parentNode.parentNode.nextElementSibling.firstElementChild.classList.remove(
        "no-display"
      );
    } else {
      e.target.value = "Show";
      e.target.classList.remove("white");

      e.target.parentNode.parentNode.nextElementSibling.firstElementChild.classList.add(
        "no-display"
      );
    }

    return false;
  }

  reloadJoke() {
    this.httpClient
      .get("https://v2.jokeapi.dev/joke/Any")
      .subscribe(response => {
        this.jokes.push(response);
        console.log(response);
      });
  }
}
