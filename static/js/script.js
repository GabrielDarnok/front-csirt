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


// Config para iniciar os pop ups
$(document).ready(function(){
    $('#meuModal').modal('show');
});
$(document).ready(function(){
    $('.close').click(function(){
      $('#meuModal').modal('hide');
    });
});

// Config para iniciar a tabela
$(document).ready(function () {
    $(".data-table").each(function (_, table) {
        $(table).DataTable({
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.25/i18n/Portuguese-Brasil.json"
            }
        });
    });
});


//
$(document).ready(function() {
    // Verifica se há um botão previamente selecionado no armazenamento local
    var selectedButton = localStorage.getItem('selectedButton');
    if (selectedButton) {
        // Adiciona a classe 'active' ao botão previamente selecionado
        $('.nav-link[href="' + selectedButton + '"]').addClass('active');
        // Caso o botão esteja dentro de um collapse, também adiciona a classe 'active' ao botão principal
        if ($('.collapse').find('.nav-link[href="' + selectedButton + '"]').length > 0) {
            $('.collapse').find('.nav-link[href="' + selectedButton + '"]').closest('.collapse').prev('.nav-link').addClass('active');
            // Mantém o estado do collapse
            $('#layouts').addClass('show'); // Exibe o collapse pai
        }
    }

    // Adiciona a classe 'active' ao clicar em um link de navegação
    $('.nav-link').click(function(e) {
        var $this = $(this);
        var link = $this.attr('href');

        // Remove a classe 'active' de todos os links de navegação
        $('.nav-link').removeClass('active');
        // Adiciona a classe 'active' ao link clicado
        $this.addClass('active');

        // Armazena o link clicado no armazenamento local
        localStorage.setItem('selectedButton', link);

        // Armazena o estado do collapse
        var isCollapsed = $this.hasClass('sidebar-link') && $this.attr('data-bs-toggle') === 'collapse';
        if (isCollapsed) {
            var isCollapsedNow = $this.attr('aria-expanded') === 'true'; // Verifica se o collapse está aberto ou fechado
            localStorage.setItem('isLayoutsOpen', isCollapsedNow ? 'true' : 'false');
        } else {
            // Segue o link apenas se não for um item com collapse
            window.location.href = link;
        }

        // Verifica se o link clicado é um subitem e remove a classe 'active' do item principal
        if ($this.hasClass('sub-item')) {
            $('.sidebar-link').removeClass('active');
        }

        e.preventDefault(); // Previne o comportamento padrão do link para itens com collapse
    });

    // Armazena o estado do elemento collapse quando ele é aberto ou fechado
    $('#layouts').on('show.bs.collapse', function() {
        localStorage.setItem('isLayoutsOpen', 'true');
    }).on('hide.bs.collapse', function() {
        localStorage.setItem('isLayoutsOpen', 'false');
    });

    // Verifica o estado do collapse ao carregar a página
    var isLayoutsOpen = localStorage.getItem('isLayoutsOpen');
    if (isLayoutsOpen === 'true') {
        $('#layouts').addClass('show');
    }
});





