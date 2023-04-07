import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Context } from 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

interface SpinSections {
  minDegree: number;
  maxDegree: number;
  value: string;
}

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements OnInit, AfterViewInit {

  @ViewChild('spinWheel')
  private spinWheel!: ElementRef

  @ViewChild('spinBtn')
  private spinBtn!: ElementRef

  @Input()
  public sections: string[] = [];

  public spinValues: SpinSections[] = [];
  public size: number[] = [];
  public disableSpinBtn: boolean = false;
  public text: string = 'Best Of Luck';

  public spinChart: any;

  private spinColors: string[] = [
    "#E74C3C",
    "#7D3C98",
    "#2E86C1",
    "#138D75",
    "#F1C40F",
    "#D35400",
    "#138D75",
    "#F1C40F",
    "#b163da",
    "#E74C3C",
    "#7D3C98",
    "#138D75",
  ];
  private count: number = 0;
  private resultValue: number = 101;

  public ngOnInit(): void {
    this.fillSpinValues();
    this.fillSize();
    Chart.register(...registerables)
  }

  public ngAfterViewInit(): void {
    this.generateSpinChart();
  }

  public fillSpinValues(): void {
    this.spinValues = this.sections.map((section: string) => ({
      minDegree: 61,
      maxDegree: 90,
      value: section
    }))
  }

  public fillSize(): void {
    this.size = this.sections.map(() => 10)
  }

  public generateSpinChart(): void {
    const element = this.spinWheel.nativeElement

    this.spinChart = new Chart(element, {
      plugins: [ChartDataLabels],
      type: 'pie',
      data: {
        labels: this.sections,
        datasets: [{ backgroundColor: this.spinColors, data: this.size }],
      },
      options: {
        responsive: true,
        animation: { duration: 0 },
        plugins: {
          // tooltip: false,
          legend: { display: false },
          datalabels: {
          rotation: 90,
          color: '#ffffff',
          formatter: (_, context) => context.chart.data.labels![context.dataIndex],
          font: { size: 24 },
          },
        },
      },
    });
  }

  public generateValue(angleValue: number): void {
    this.spinValues.forEach((value) => {
      console.log(angleValue);
      console.log(value.minDegree);
      console.log(value.maxDegree);
      if ((angleValue >= value.minDegree && angleValue <= value.maxDegree)) {    
        this.text = `Congratulations, You Have Won $${value.value} !`;
        this.disableSpinBtn = false;
      }
    });
  }

  public onSpinBtnClick(): void {
    this.disableSpinBtn = true;
    this.text = 'Best Of Luck!';
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
    let rotationInterval = window.setInterval(() => {
      this.spinChart.options.rotation = this.spinChart.options.rotation + this.resultValue;
      this.spinChart.update();
      if (this.spinChart.options.rotation >= 360) {
        this.count += 1;
        this.resultValue -= 5;
        this.spinChart.options.rotation = 0;
      } else if (this.count > 15 && this.spinChart.options.rotation == randomDegree) {
        this.generateValue(randomDegree);
        clearInterval(rotationInterval);
        this.count = 0;
        this.resultValue = 101;
      }
    }, 10);

  }

}
