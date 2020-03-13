import { Component } from '@angular/core';
import { PoChartGaugeSerie, PoChartType, PoDialogService, PoPieChartSeries } from '@portinari/portinari-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  brazilianCoffeeProduction: PoChartGaugeSerie = { value: 33, description: `of world's coffee beans were produced in Brazil` };

  brazilianCoffeeProductionChartType: PoChartType = PoChartType.Gauge;

  coffeConsumingChartType: PoChartType = PoChartType.Donut;

  coffeeConsumption: Array<PoPieChartSeries> = [
    { category: 'Finland', value: 9.6, tooltip: 'Finland (Europe)' },
    { category: 'Norway', value: 7.2, tooltip: 'Norway (Europe)' },
    { category: 'Netherlands', value: 6.7, tooltip: 'Netherlands (Europe)' },
    { category: 'Slovenia', value: 6.1, tooltip: 'Slovenia (Europe)' },
    { category: 'Austria', value: 5.5, tooltip: 'Austria (Europe)' }
  ];

  coffeeProduction: Array<PoPieChartSeries> = [
    { category: 'Brazil', value: 2796, tooltip: 'Brazil (South America)' },
    { category: 'Vietnam', value: 1076, tooltip: 'Vietnam (Asia)' },
    { category: 'Colombia', value: 688, tooltip: 'Colombia (South America)' },
    { category: 'Indonesia', value: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { category: 'Peru', value: 273, tooltip: 'Peru (South America)' }
  ];
  constructor(private poAlert: PoDialogService) { }

  searchMore(event: any) {
    window.open(`http://google.com/search?q=coffee+producing+${event.category}`, '_blank');
  }

  showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: `${event.category} consuming ${event.value}kg per capita!`,
      ok: () => {}
    });
  }
}
