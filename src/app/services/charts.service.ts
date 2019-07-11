import { Injectable } from '@angular/core';

@Injectable()
export class ChartsService 
{
    xAxisData = [];
    data1 = [];
    //data2 = [];
    constructor() 
    {
        for (var i = 68; i < 78; i++) 
        {
            this.xAxisData.push(String.fromCharCode(i));
            var line1 = ((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            var ans = 0;
            if(line1 >= 5 && line1 < 15) { ans = 10; }
            else if(line1 >= 15 && line1 < 25) { ans = 20; }
            else if(line1 >= 25 && line1 < 35) { ans = 30; }
            else if(line1 >= 35 && line1 < 45) { ans = 40; }
            else if(line1 >= 45 && line1 < 55) { ans = 50; }
            else if(line1 >= 55 && line1 < 65) { ans = 60; }
            else if(line1 >= 65 && line1 < 75) { ans = 70; }
            else if(line1 >= 75 && line1 < 85) { ans = 80; }
            else if(line1 >= 85 && line1 < 95) { ans = 80; }
            else if(line1 >= 95 && line1 < 100) { ans = 90; }
            else if(line1 >= 100) { ans = 100; }
            this.data1.push(ans);
            ans = 0;
            // var line2 = ((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
            // if(line2 >= 5 && line1 < 15) { ans = 10; }
            // else if(line2 >= 15 && line2 < 25) { ans = 20; }
            // else if(line2 >= 25 && line2 < 35) { ans = 30; }
            // else if(line2 >= 35 && line2 < 45) { ans = 40; }
            // else if(line2 >= 45 && line2 < 55) { ans = 50; }
            // else if(line2 >= 55 && line2 < 65) { ans = 60; }
            // else if(line2 >= 65 && line2 < 75) { ans = 70; }
            // else if(line2 >= 75 && line2 < 85) { ans = 80; }
            // else if(line2 >= 85 && line2 < 95) { ans = 80; }
            // else if(line2 >= 95 && line2 < 100) { ans = 90; }
            // else if(line2 >= 100) { ans = 100; }            
            //this.data2.push(ans);
        }
    }

    PieOption = 
    {
        tooltip: 
        {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: 
        {
            orient: 'vertical',
            x: 'right',
            data: ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
            data1: ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
        },
        roseType: 'angle',
        series: [
            {
                name: 'Diamond Color',
                type: 'pie',
                radius: [0, '85%'],
                data: [
                    { value: 350, name: 'D' },
                    { value: 426, name: 'E' },
                    { value: 425, name: 'F' },
                    { value: 820, name: 'G' },
                    { value: 623, name: 'H' },
                    { value: 150, name: 'I' },
                    { value: 210, name: 'J' },
                    { value: 89, name: 'K' },
                    { value: 75, name: 'L' },
                    { value: 30, name: 'M' }
                ]
            }
        ]
    }

    LineOption = 
    {
        tooltip: 
        {
            trigger: 'item',
            formatter: '{b} : {c}'
        },
        xAxis: 
        {
            type: 'category',
            data: ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'SI3', 'I1', 'I2', 'I3']            
        },
        yAxis: 
        {
            type: 'value'
        },
        series: 
        [{
            data: [12, 120, 201, 252, 200, 310, 820, 430, 320, 100, 85, 0],
            type: 'line',
            smooth: true
        }]
    };

    BarOption = 
    {        
        tooltip: 
        {
            trigger: 'axis',            
            axisPointer: 
            {            
                type: 'shadow'        //'line' || 'shadow'
            }
        },
        grid: 
        {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'SI3', 'I1', 'I2', 'I3'],            
                axisTick: 
                {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [ { type: 'value' } ],
        series: 
        [
            {
                formatter: '{b} : {c}',
                //name: 'Clarity ',
                type: 'bar',
                barWidth: '80%',                
                data: [12, 120, 201, 252, 200, 310, 820, 430, 320, 100, 85, 0]
            }
        ]
    };

    AnimationBarOption = 
    {
        legend: {
            data: ['Example data1', 'Example data2'],
            align: 'left'
        },
        /* toolbox: {
            // y: 'bottom',
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        }, */
        tooltip: {},
        xAxis: {
            data: this.xAxisData,
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {
        },
        series: 
        [
        {
            name: 'Diamond Colors',
            type: 'bar',
            data: this.data1,
            animationDelay: function (idx) 
            {
                return idx * 10;
            }
        }, 
        // {
        //     name: 'Example data2',
        //     type: 'bar',
        //     data: this.data2,
        //     animationDelay: function (idx) 
        //     {
        //         return idx * 10 + 100;
        //     }
        // }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };

    getBarOption() { return this.BarOption; }
    getLineOption() { return this.LineOption; }
    getPieOption() { return this.PieOption; }
    getAnimationBarOption() { return this.AnimationBarOption; }
}
