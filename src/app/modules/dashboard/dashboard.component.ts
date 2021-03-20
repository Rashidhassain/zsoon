import { Component, OnInit, NgZone, PLATFORM_ID, Inject } from '@angular/core';
// chart.js import start
import { Chart } from 'node_modules/chart.js'
// chart.js ends
import { NgxSpinnerService } from "ngx-spinner";
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // private chart: am4charts.XYChart;


  constructor( @Inject(PLATFORM_ID) private platformId, private zone: NgZone, private spinner: NgxSpinnerService) { }

  ngOnInit() {

    // chart.js start
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of bikes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


// pie 
var myChart = new Chart("myChart1", {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Bikes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


// line
var myChart = new Chart("myChart2", {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Bikes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
// chart.js ends


// spinner start
this.spinner.show();



setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
}, 1500);

// spinner ends


  }


// amchart start start

  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("chartdiv", am4maps.MapChart);

      // Set map definition
      chart.geodata = am4geodata_worldLow;
      
      // Set projection
      chart.projection = new am4maps.projections.Miller();
      
      // Create map polygon series
      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
      
      // Exclude Antartica
      polygonSeries.exclude = ["AQ"];
      
      // Make map load polygon (like country names) data from GeoJSON
      polygonSeries.useGeodata = true;
      
      // Configure series
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.polygon.fillOpacity = 0.6;
      
      
      // Create hover state and set alternative fill color
      let hs = polygonTemplate.states.create("hover");
      hs.properties.fill = chart.colors.getIndex(0);
      
      // Add image series
      let imageSeries = chart.series.push(new am4maps.MapImageSeries());
      imageSeries.mapImages.template.propertyFields.longitude = "longitude";
      imageSeries.mapImages.template.propertyFields.latitude = "latitude";
      imageSeries.mapImages.template.tooltipText = "{title}";
      imageSeries.mapImages.template.propertyFields.url = "url";
      
      let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
      circle.radius = 3;
      circle.propertyFields.fill = "color";
      
      let circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
      circle2.radius = 3;
      circle2.propertyFields.fill = "color";
      
      
      circle2.events.on("inited", function(event){
        animateBullet(event.target);
      })
      
      
      function animateBullet(circle) {
          let animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
          animation.events.on("animationended", function(event){
            animateBullet(event.target.object);
          })
      }
      
      let colorSet = new am4core.ColorSet();
      
      imageSeries.data = [ {
        "title": "Brussels",
        "latitude": 50.8371,
        "longitude": 4.3676,
        "color":colorSet.next()
      }, {
        "title": "Copenhagen",
        "latitude": 55.6763,
        "longitude": 12.5681,
        "color":colorSet.next()
      }, {
        "title": "Paris",
        "latitude": 48.8567,
        "longitude": 2.3510,
        "color":colorSet.next()
      }, {
        "title": "Reykjavik",
        "latitude": 64.1353,
        "longitude": -21.8952,
        "color":colorSet.next()
      }, {
        "title": "Moscow",
        "latitude": 55.7558,
        "longitude": 37.6176,
        "color":colorSet.next()
      }, {
        "title": "Madrid",
        "latitude": 40.4167,
        "longitude": -3.7033,
        "color":colorSet.next()
      }, {
        "title": "London",
        "latitude": 51.5002,
        "longitude": -0.1262,
        "url": "http://www.google.co.uk",
        "color":colorSet.next()
      }, {
        "title": "Peking",
        "latitude": 39.9056,
        "longitude": 116.3958,
        "color":colorSet.next()
      }, {
        "title": "New Delhi",
        "latitude": 28.6353,
        "longitude": 77.2250,
        "color":colorSet.next()
      }, {
        "title": "Tokyo",
        "latitude": 35.6785,
        "longitude": 139.6823,
        "url": "http://www.google.co.jp",
        "color":colorSet.next()
      }, {
        "title": "Ankara",
        "latitude": 39.9439,
        "longitude": 32.8560,
        "color":colorSet.next()
      }, {
        "title": "Buenos Aires",
        "latitude": -34.6118,
        "longitude": -58.4173,
        "color":colorSet.next()
      }, {
        "title": "Brasilia",
        "latitude": -15.7801,
        "longitude": -47.9292,
        "color":colorSet.next()
      }, {
        "title": "Ottawa",
        "latitude": 45.4235,
        "longitude": -75.6979,
        "color":colorSet.next()
      }, {
        "title": "Washington",
        "latitude": 38.8921,
        "longitude": -77.0241,
        "color":colorSet.next()
      }, {
        "title": "Kinshasa",
        "latitude": -4.3369,
        "longitude": 15.3271,
        "color":colorSet.next()
      }, {
        "title": "Cairo",
        "latitude": 30.0571,
        "longitude": 31.2272,
        "color":colorSet.next()
      }, {
        "title": "Pretoria",
        "latitude": -25.7463,
        "longitude": 28.1876,
        "color":colorSet.next()
      } ];

    });
  }

  // amchart.js ends
  
}

