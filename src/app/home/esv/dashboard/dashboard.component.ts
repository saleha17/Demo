import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent
  implements OnInit {
  public data = [];
  public showStoneData = false;
  public singleData=[];

  constructor() {}

  ngOnInit() {
    this.data = [
      [
        {
          count: 0,
          status: "PENDING CSV",
          disp_order: 101
        },
        {
          count: 2,
          status: "SIGNER PENDING",
          disp_order: 102
        },
        {
          count: 2,
          status: "CHECKER PENDING",
          disp_order: 103
        },
        {
          count: 13,
          status: "CHECKER OK",
          disp_order: 104
        },
        {
          count: 18,
          status: "CHECKER FINAL PD",
          disp_order: 105
        },
        {
          count: 26,
          status: "MAKABLE OK",
          disp_order: 106
        }
      ],
      [
        {
          count: 0,
          status: "SPECTRUM SEND",
          disp_order: 201
        },
        {
          count: 0,
          status: "SPECTRUM REPLY",
          disp_order: 202
        },
        {
          count: 0,
          status: "SPECTRUM OK",
          disp_order: 203
        }
      ],
      [
        {
          count: 0,
          status: "BOMBAY MAIL",
          disp_order: 301
        },
        {
          count: 0,
          status: "BOMBAY HOLD",
          disp_order: 302
        },
        {
          count: 0,
          status: "BOMBAY MAIL RECHECK",
          disp_order: 303
        },
        {
          count: 0,
          status: "BOMBAY OK",
          disp_order: 304
        },
        {
          count: 7,
          status: "STONE BANK",
          disp_order: 305
        }
      ]
    ];
    console.log("dashboard", this.data);
  }
  gotoStoneDetails(singleItem) {
    console.log("data",singleItem)
    this.showStoneData = true;
    this.singleData=singleItem;
  }
}
