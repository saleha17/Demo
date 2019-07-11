import { Component, OnInit,Input,Output,EventEmitter } from "@angular/core";

@Component({
  selector: "app-stone-details",
  templateUrl: "./stone-details.component.html",
  styleUrls: ["./stone-details.component.scss"]
})
export class StoneDetailsComponent
  implements OnInit {
  @Input() stoneDetails:any;
  

  public stoneData = [];
  title = 'app';

	columnDefs = [
		{headerName: 'Make', field: 'make' },
		{headerName: 'Model', field: 'model' },
		{headerName: 'Price', field: 'price'}
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
	];

  constructor() {}

  ngOnInit() {
    console.log("stoneDetails",this.stoneDetails);
    this.stoneData = [
      {
        DISP_LOTNO: "8286-07-3ZMB",
        LOTNO: 8286.0,
        PKTNO: 18.0,
        LVL_GRP_ID: 2.0,
        TRN_DATE: "09-JUL-2019 09:07",
        SC_LEVEL: "SC 2",
        SIGNER: "DHRUVAL JAYESHKUMAR PATEL",
        DEPT_NAME: "CLV FULL PROCESS-1",
        REMARKS: null,
        LVL_ID: 2.0
      },
      {
        DISP_LOTNO: "8287-07-ZMB",
        LOTNO: 8287.0,
        PKTNO: 36.0,
        LVL_GRP_ID: 1.0,
        TRN_DATE: "08-JUL-2019 04:07",
        SC_LEVEL: "SC 1",
        SIGNER: "DHRUVAL JAYESHKUMAR PATEL",
        DEPT_NAME: "CLV FULL PROCESS-1",
        REMARKS: null,
        LVL_ID: 1.0
      }
    ];
  }

}
