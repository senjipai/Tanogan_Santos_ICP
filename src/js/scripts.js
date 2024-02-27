// -------------------- CHARTS ------------------

// AREA CHART

var ctx = document.getElementById("myChart").getContext('2d');
var ctx = document.getElementById("myChart2").getContext('2d');
var myChart;
var myChart2;

const areaChartOptions = {
    series: [
      {
        name: 'Pink Canteen',
        data: [12, 47],
      },
      {
        name: 'White Canteen',
        data: [36, 84],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 300,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ['#DEB1A8', '#CBAD5C'],
    labels: ['Recess', 'Lunch'],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: 'vertical',
      },
      type: 'gradient',
    },
    grid: {
      borderColor: '#95BF87',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: '#EFE8DB',
      },
      show: true,
      position: 'top',
    },
    markers: {
      size: 6,
      strokeColors: '#95BF87',
      strokeWidth: 3,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      axisBorder: {
        color: '#95BF87',
        show: true,
      },
      axisTicks: {
        color: '#95BF87',
        show: true,
      },
      labels: {
        offsetY: 5,
        style: {
          colors: '#EFE8DB',
        },
      },
    },
    yaxis: [
      {
        title: {
          text: 'Pink Canteen',
          style: {
            color: '#EFE8DB',
          },
        },
        labels: {
          style: {
            colors: ['#EFE8DB'],
          },
        },
      },
      {
        opposite: true,
        title: {
          text: 'White Canteen',
          style: {
            color: '#EFE8DB',
          },
        },
        labels: {
          style: {
            colors: ['#EFE8DB'],
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
  areaChart.render();
  areaChart.update();
  
  function display(a, b, c, d) {
    event.preventDefault();
    const areaChartOptions = {
      series: [
        {
          name: 'Pink Canteen',
          data: [a.value, b.value],
        },
        {
          name: 'White Canteen',
          data: [c.value, d.value],
        },
      ],
      chart: {
        type: 'area',
        background: 'transparent',
        height: 300,
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      colors: ['#DEB1A8', '#CBAD5C'],
      labels: ['Recess', 'Lunch'],
      dataLabels: {
        enabled: false,
      },
      fill: {
        gradient: {
          opacityFrom: 0.4,
          opacityTo: 0.1,
          shadeIntensity: 1,
          stops: [0, 100],
          type: 'vertical',
        },
        type: 'gradient',
      },
      grid: {
        borderColor: '#95BF87',
        yaxis: {
          lines: {
            show: true,
          },
        },
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      legend: {
        labels: {
          colors: '#EFE8DB',
        },
        show: true,
        position: 'top',
      },
      markers: {
        size: 6,
        strokeColors: '#95BF87',
        strokeWidth: 3,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        axisBorder: {
          color: '#95BF87',
          show: true,
        },
        axisTicks: {
          color: '#95BF87',
          show: true,
        },
        labels: {
          offsetY: 5,
          style: {
            colors: '#EFE8DB',
          },
        },
      },
      yaxis: [
        {
          title: {
            text: 'Pink Canteen',
            style: {
              color: '#EFE8DB',
            },
          },
          labels: {
            style: {
              colors: ['#EFE8DB'],
            },
          },
        },
        {
          opposite: true,
          title: {
            text: 'White Canteen',
            style: {
              color: '#EFE8DB',
            },
          },
          labels: {
            style: {
              colors: ['#EFE8DB'],
            },
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
        theme: 'dark',
      },
    };
    
    const areaChart = new ApexCharts(
      document.querySelector('#area-chart'),
      areaChartOptions
    );
    areaChart.render();
    areaChart.update();

    a.value = '';
    b.value = '';
    c.value = '';
    d.value = '';
    document.getElementById("form1").style.display="none";
  }

// RADIAL CHART
var radialChartOptions = {
    series: [30],
    chart: {
    height: 320,
    type: 'radialBar',
    foreColor: '#EFE8DB'
  },
  colors: ['#DEB1A8'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%',
      }
    },
  },
  
  labels: ['Pink Canteen'],
  };

  var chart = new ApexCharts(document.querySelector("#radial-chart"), radialChartOptions);
  chart.render();

  var radialChartOptions = {
    series: [67],
    chart: {
    height: 320,
    type: 'radialBar',
    foreColor: '#EFE8DB'
  },
  colors: ['#CBAD5C'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%',
      }
    },
  },
  
  labels: ['White Canteen'],
  };

  var chart = new ApexCharts(document.querySelector("#radial-chart2"), radialChartOptions);
  chart.render();

  function displayradial(e, f) {
    event.preventDefault();
    var radialChartOptions = {
      series: [e.value],
      chart: {
      height: 320,
      type: 'radialBar',
      foreColor: '#EFE8DB'
    },
    colors: ['#DEB1A8'],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '50%',
        }
      },
    },
    
    labels: ['Pink Canteen'],
    };
  
    var chart = new ApexCharts(document.querySelector("#radial-chart"), radialChartOptions);
    chart.render();
    chart.update();
  
    var radialChartOptions = {
      series: [f.value],
      chart: {
      height: 320,
      type: 'radialBar',
      foreColor: '#EFE8DB'
    },
    colors: ['#CBAD5C'],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '50%',
        }
      },
    },
    
    labels: ['White Canteen'],
    };
  
    var chart = new ApexCharts(document.querySelector("#radial-chart2"), radialChartOptions);
    chart.render();
    chart.update();

    e.value = '';
    f.value = '';
    document.getElementById("form2").style.display="none";
  }


  function update1()
{
  document.getElementById("form1").style.display="block";
}

function update2()
{
  document.getElementById("form2").style.display="block";
}