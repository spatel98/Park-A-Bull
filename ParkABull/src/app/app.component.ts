import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
    constructor(){
        console.log("app component initiated")
    }
}
