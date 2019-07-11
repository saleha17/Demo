import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../../services/charts.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [ChartsService]
})
export class StoreComponent implements OnInit 
{

  showloading: boolean = false;
  BarOption;
  LineOption;
  PieOption;
  AnimationBarOption;

  constructor(private chartsService: ChartsService) 
  {
    this.BarOption = this.chartsService.getBarOption();
    this.LineOption = this.chartsService.getLineOption();
    this.PieOption = this.chartsService.getPieOption();
    this.AnimationBarOption = this.chartsService.getAnimationBarOption();
  }

  ngOnInit() 
  {
  }

}
