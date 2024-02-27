// -------------------- PINK CANTEEN ------------------

// BAR CHART

var barChartOptions = {
    series: [{
        name: 'Wasted Food',
        data: [44, 55, 41, 64, 89]
  }, {
        name: 'Saved Food',
        data: [53, 32, 33, 52, 69]
  }],
    chart: {
    type: 'bar',
    foreColor: '#EFE8DB',
    height: 350
  },
  colors: ['#DEB1A8','#EEEEEE'],
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: 'top',
      },
    }
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#012907']
    }
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#EFE8DB']
  },
  tooltip: {
    shared: true,
    intersect: false
  },
  xaxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  chart.render();
  chart.update();

  function display(a, b, c, d, e, f, g, h, i, j) {
    event.preventDefault();
    var barChartOptions = {
      series: [{
          name: 'Wasted Food',
          data: [a.value, c.value, e.value, g.value, i.value]
    }, {
          name: 'Saved Food',
          data: [b.value, d.value, f.value, h.value, j.value]
    }],
      chart: {
      type: 'bar',
      foreColor: '#EFE8DB',
      height: 350
    },
    colors: ['#DEB1A8','#EEEEEE'],
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#012907']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#EFE8DB']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    };
  
    var chart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
    chart.render();
    chart.update();

    a.value = '';
    b.value = '';
    c.value = '';
    d.value = '';
    e.value = '';
    f.value = '';
    g.value = '';
    h.value = '';
    i.value = '';
    j.value = '';
    document.getElementById("form1").style.display="none";
  }

  // -------------------- WHITE CANTEEN ------------------

// BAR CHART

var barChartOptions = {
    series: [{
        name: 'Wasted Food',
        data: [68, 55, 67, 89, 97]
  }, {
        name: 'Saved Food',
        data: [53, 32, 54, 67, 50]
  }],
    chart: {
    type: 'bar',
    foreColor: '#EFE8DB',
    height: 350
  },
  colors: ['#CBAD5C','#EEEEEE'],
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: 'top',
      },
    }
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#012907']
    }
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#EFE8DB']
  },
  tooltip: {
    shared: true,
    intersect: false
  },
  xaxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart2"), barChartOptions);
  chart.render();
  chart.update();

  function display2(Aa, Bb, Cc, Dd, Ee, Ff, Gg, Hh, Ii, Jj) {
    event.preventDefault();
    var barChartOptions = {
      series: [{
          name: 'Wasted Food',
          data: [Aa.value, Cc.value, Ee.value, Gg.value, Ii.value]
    }, {
          name: 'Saved Food',
          data: [Bb.value, Dd.value, Ff.value, Hh.value, Jj.value]
    }],
      chart: {
      type: 'bar',
      foreColor: '#EFE8DB',
      height: 350
    },
    colors: ['#CBAD5C','#EEEEEE'],
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#012907']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#EFE8DB']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    };
  
    var chart = new ApexCharts(document.querySelector("#bar-chart2"), barChartOptions);
    chart.render();
    chart.update();

    Aa.value = '';
    Bb.value = '';
    Cc.value = '';
    Dd.value = '';
    Ee.value = '';
    Ff.value = '';
    Gg.value = '';
    Hh.value = '';
    Ii.value = '';
    Jj.value = '';
    document.getElementById("form2").style.display="none";
  }

// RADIAL CHART

var radialChartOptions = {
  series: [39],
  chart: {
  height: 270,
  type: 'radialBar',
  foreColor: '#EFE8DB'
},
colors: ['#3AAFCC'],
plotOptions: {
  radialBar: {
    hollow: {
      size: '50%',
    }
  },
},

labels: ['Food Wasted'],
};

var chart = new ApexCharts(document.querySelector("#radial-chart-report"), radialChartOptions);
chart.render();

var radialChartOptions = {
  series: [61],
  chart: {
  height: 270,
  type: 'radialBar',
  foreColor: '#EFE8DB'
},
colors: ['#3AAFCC'],
plotOptions: {
  radialBar: {
    hollow: {
      size: '50%',
    }
  },
},

labels: ['Food Saved'],
};

var chart = new ApexCharts(document.querySelector("#radial-chart2-report"), radialChartOptions);
chart.render();
chart.update();

function display3(asd, qwe) {
  event.preventDefault();
  var radialChartOptions = {
    series: [asd.value],
    chart: {
    height: 270,
    type: 'radialBar',
    foreColor: '#EFE8DB'
  },
  colors: ['#3AAFCC'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%',
      }
    },
  },
  
  labels: ['Food Wasted'],
  };
  
  var chart = new ApexCharts(document.querySelector("#radial-chart-report"), radialChartOptions);
  chart.render();
  chart.update();
  
  var radialChartOptions = {
    series: [qwe.value],
    chart: {
    height: 270,
    type: 'radialBar',
    foreColor: '#EFE8DB'
  },
  colors: ['#3AAFCC'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%',
      }
    },
  },
  
  labels: ['Food Saved'],
  };
  
  var chart = new ApexCharts(document.querySelector("#radial-chart2-report"), radialChartOptions);
  chart.render();
  chart.update();

    asd.value = '';
    qwe.value = '';
    document.getElementById("form3").style.display="none";
}

function update1()
{
  document.getElementById("form1").style.display="block";
}

function update2()
{
  document.getElementById("form2").style.display="block";
}

function update3()
{
  document.getElementById("form3").style.display="block";
}