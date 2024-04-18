export const options = (xAxis) => {
    const option = {
        chart: {
            type: 'area',
            stacked: false,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom',
                tools: {
                    pan: false,
                    download: false,
                    reset: false
                },
                offsetX: -50,
                offsetY: 5,
            },
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            borderColor: '#828a9815'
        },
        xaxis: {
            categories: xAxis,
            labels: {
                style: {
                    colors: '#828a98'
                },

                rotate: 0
            },
            tickAmount: 5,
            max: xAxis.length,
            min: xAxis.length - 20,
            position: 'right'
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#828a98'
                }
            },
            opposite: true
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val) {
                    return val;
                }
            },
            theme: 'dark'
        },
        responsive: [
            {
                breakpoint: 950,
                options: {
                    chart: {
                        width: 850,
                        height: 530,
                        toolbar: {
                            offsetX: -390,
                        }
                    }
                }
            },
            {
                breakpoint: 820,
                options: {
                    chart: {
                        width: 800,
                        height: 530,
                        toolbar: {
                            offsetX: -360,
                        }
                    },
                    xaxis: {
                        tickAmount: 4,
                    },
                }
            },
            {
                breakpoint: 760,
                options: {
                    chart: {
                        width: 700,
                        height: 550,
                        toolbar: {
                            offsetX: -310,
                        },
                    },
                }
            },
            {
                breakpoint: 678,
                options: {
                    chart: {
                        width: 630,
                        height: 550,
                        toolbar: {
                            offsetX: -280,
                        },
                    },
                }
            },
            {
                breakpoint: 600,
                options: {
                    chart: {
                        width: 550,
                        height: 550,
                        toolbar: {
                            offsetX: -240,
                        },
                    },
                    xaxis: {
                        tickAmount: 3,
                    },
                }
            },
            {
                breakpoint: 500,
                options: {
                    chart: {
                        width: 380,
                        height: 550,
                        toolbar: {
                            offsetX: -360,
                        },
                    },
                    xaxis: {
                        tickAmount: 1,
                    },
                }
            }
        ]
    }
    return option;
};

export const series = (yAxis) => {
    const sery = [{
        name: "price",
        data: yAxis,
    }];
    return sery
} 