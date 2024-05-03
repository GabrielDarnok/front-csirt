fetch('/dadosbar')
    .then(response => response.json())
    .then(data => {
        const charts = document.querySelectorAll(".chart");

        charts.forEach(function (chart) {
            var ctx = chart.getContext("2d");
            var myChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: data.dados.labels,
                    datasets: [
                        {
                            label: "Vulnerabilidade",
                            data: data.dados.dados, // Use os dados recebidos aqui
                            backgroundColor: [
                                "rgba(127, 255, 212, 0.2)"
                            ],
                            borderColor: [
                                "rgba( 46, 139, 87, 1 )",
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        }
                    }
                }
            });
        });
    })
    .catch(error => {
        console.error('Erro ao obter os dados do servidor:', error);
    });

fetch('/dadosbar2')
    .then(response => response.json())
    .then(data => {
        const charts = document.querySelectorAll(".chart2");

        charts.forEach(function (chart) {
            var ctx = chart.getContext("2d");
            var myChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: data.dados2.labels,
                    datasets: [
                        {
                            label: "Ips",
                            data: data.dados2.dados,
                            backgroundColor: [
                                "rgba(127, 255, 212, 0.2)"
                            ],
                            borderColor: [
                                "rgba( 46, 139, 87, 1 )",
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                    plugins: {
                        legend: {
                            display: true,
                        }
                    }
                }
            });
        });
    })
    .catch(error => {
        console.error('Erro ao obter os dados do servidor:', error);
    });

fetch('/dados_circular')
    .then(response => response.json())
    .then(data => {
        const charts = document.querySelectorAll(".pizza-chart"); // Mudança na classe CSS

        charts.forEach(function (chart) {
            var ctx = chart.getContext("2d");
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: 'Vulnerabilidades detectadas',
                        data: data.dados,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    width: 400,
                    height: 200,
                    plugins: {
                        legend: {
                            position: 'left',
                        },
                    }
                },
            });
        });
    })
    .catch(error => {
        console.error('Erro ao obter os dados do servidor:', error);
    });

fetch('/dadosline')
    .then(response => response.json())
    .then(data => {
        const charts = document.querySelectorAll(".line-chart");

        charts.forEach(function (chart) {
            var ctx = chart.getContext("2d");
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: 'Vulnerabilidades detectadas',
                        data: data.dados,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)'
                        ],
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    width: 400,
                    height: 200,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                    }
                },
            });
        });
    })
    .catch(error => {
        console.error('Erro ao obter os dados do servidor:', error);
    });

$(document).ready(function(){
    $('#meuModal').modal('show');
});
$(document).ready(function(){
    $('.close').click(function(){
      $('#meuModal').modal('hide');
    });
});
$(document).ready(function () {
    $(".data-table").each(function (_, table) {
        $(table).DataTable({
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.25/i18n/Portuguese-Brasil.json"
            }
        });
    });
});
