// Dados predefinidos de cidades, suas datas de entrega, links, siglas de logística e entregas fixas
const deliveriesData = [
    {
        city: "Nioaque",
        deliveryDates: ["2024-10-03", "2024-11-07", "2024-12-12"],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG", // Campo Grande
        fixedDelivery: "" // Entrega toda terça
    },
    {
        city: "Guia Lopes da Laguna",
        deliveryDates: ["2024-10-03", "2024-11-07", "2024-12-12"],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: ""
    },
    {
        city: "Jardim",
        deliveryDates: ["2024-10-03", "2024-11-07", "2024-12-12"],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: ""
    },
    {
        city: "Jardim",
        deliveryDates: ["2024-10-04", "2024-11-08", "2024-12-06"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Nova Alvorada Do Sul",
        deliveryDates: ["2024-10-02", "2024-11-06", "2024-12-04"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS", // Dourados
        fixedDelivery: "" // Entrega toda quarta
    },
    {
        city: "Nova Alvorada Do Sul",
        deliveryDates: ["2024-10-24", "2024-11-28"],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG", // Campo Grande
        fixedDelivery: "" // Entrega toda quarta
    },
    {
        city: "Maracaju",
        deliveryDates: ["2024-10-24", "2024-11-28"],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: ""
    },
    {
        city: "Maracaju",
        deliveryDates: ["2024-10-04", "2024-10-11", "2024-10-25", "2024-11-08", "2024-11-15", 
            "2024-11-29", "2024-12-06", "2024-12-13", "2024-12-27"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Anhanduí",
        deliveryDates: ["2024-10-24", "2024-11-28"],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: ""
    },
    {
        city: "Camapuã",
        deliveryDates: ["2024-09-26", "2024-10-31", "2024-05-12"],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: "" // Sem entrega fixa
    },
    {
        city: "Ponta Porã",
        deliveryDates: ["2024-10-07", "2024-11-04", "2024-12-02"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: "" // Sem entrega fixa
    },
    {
        city: "Ithaum",
        deliveryDates: ["2024-10-07", "2024-11-04", "2024-12-02"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Antonio João",
        deliveryDates: ["2024-10-07", "2024-11-04"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Laguna Caarapa",
        deliveryDates: ["2024-09-30", "2024-10-14", "2024-10-28", "2024-11-11", "2024-11-25", "2024-12-09", "2024-12-23"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: "" // Sem entrega fixa
    },
    {
        city: "Indapolis",
        deliveryDates: ["2024-09-24", "2024-10-01", "2024-10-08", "2024-10-15", "2024-10-22", "2024-10-29", "2024-11-05", "2024-11-12", "2024-11-19", "2024-11-26", "2024-12-03", "2024-12-10", "2024-12-17", "2024-12-24", "2024-12-31"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: "" // Sem entrega fixa
    },
    {
        city: "Fat. do Sul",
        deliveryDates: ["2024-09-24", "2024-10-01", "2024-10-08", "2024-10-15", "2024-10-22", "2024-10-29", "2024-11-05", "2024-11-12", "2024-11-19", "2024-11-26", "2024-12-03", "2024-12-10", "2024-12-17", "2024-12-24", "2024-12-31"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Vicentina",
        deliveryDates: ["2024-09-24", "2024-10-01", "2024-10-08", "2024-10-15", "2024-10-22", "2024-10-29", "2024-11-05", "2024-11-12", "2024-11-19", "2024-11-26", "2024-12-03", "2024-12-10", "2024-12-17", "2024-12-24", "2024-12-31"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Jatei",
        deliveryDates: ["2024-09-24", "2024-10-01", "2024-10-08", "2024-10-15", "2024-10-22", "2024-10-29", "2024-11-05", "2024-11-12", "2024-11-19", "2024-11-26", "2024-12-03", "2024-12-10", "2024-12-17", "2024-12-24", "2024-12-31"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Gloria de Dos",
        deliveryDates: ["2024-09-24", "2024-10-01", "2024-10-08", "2024-10-15", "2024-10-22", "2024-10-29", "2024-11-05", "2024-11-12", "2024-11-19", "2024-11-26", "2024-12-03", "2024-12-10", "2024-12-17", "2024-12-24", "2024-12-31"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Culturama",
        deliveryDates: ["2024-09-24", "2024-10-01", "2024-10-08", "2024-10-15", "2024-10-22", "2024-10-29", "2024-11-05", "2024-11-12", "2024-11-19", "2024-11-26", "2024-12-03", "2024-12-10", "2024-12-17", "2024-12-24", "2024-12-31"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Deodapolis",
        deliveryDates: ["2024-09-24", "2024-10-01", "2024-10-08", "2024-10-15", "2024-10-22", "2024-10-29", "2024-11-05", "2024-11-12", "2024-11-19", "2024-11-26", "2024-12-03", "2024-12-10", "2024-12-17", "2024-12-24", "2024-12-31"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Ivinhema",
        deliveryDates: ["2024-09-24", "2024-10-01", "2024-10-08", "2024-10-15", "2024-10-22", "2024-10-29", "2024-11-05", "2024-11-12", "2024-11-19", "2024-11-26", "2024-12-03", "2024-12-10", "2024-12-17", "2024-12-24", "2024-12-31"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Barreirinhos",
        deliveryDates: ["2024-09-24", "2024-10-01", "2024-10-08", "2024-10-15", "2024-10-22", "2024-10-29", "2024-11-05", "2024-11-12", "2024-11-19", "2024-11-26", "2024-12-03", "2024-12-10", "2024-12-17", "2024-12-24", "2024-12-31"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Nova Andradina",
        deliveryDates: ["2024-09-30", "2024-10-01", "2024-11-05", "2024-12-03"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Rio Brilhante",
        deliveryDates: ["2024-09-25", "2024-10-02", "2024-10-09", "2024-10-16", "2024-10-23", "2024-10-30", "2024-11-06", "2024-11-13", "2024-11-20","2024-11-27","2024-12-04","2024-12-11","2024-12-08","2024-12-25"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Panambi",
        deliveryDates: ["2024-09-25", "2024-10-02", "2024-10-09", "2024-10-16", "2024-10-23", "2024-10-30", "2024-11-06", "2024-11-13", "2024-11-20","2024-11-27","2024-12-04","2024-12-11","2024-12-08","2024-12-25"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Vila Vargas",
        deliveryDates: ["2024-09-25", "2024-10-02", "2024-10-09", "2024-10-16", "2024-10-23", "2024-10-30", "2024-11-06", "2024-11-13", "2024-11-20","2024-11-27","2024-12-04","2024-12-11","2024-12-08","2024-12-25"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Douradina",
        deliveryDates: ["2024-09-25", "2024-10-02", "2024-10-09", "2024-10-16", "2024-10-23", "2024-10-30", "2024-11-06", "2024-11-13", "2024-11-20","2024-11-27","2024-12-04","2024-12-11","2024-12-08","2024-12-25"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Macauba",
        deliveryDates: ["2024-09-25", "2024-10-02", "2024-10-09", "2024-10-16", "2024-10-23", "2024-10-30", "2024-11-06", "2024-11-13", "2024-11-20","2024-11-27","2024-12-04","2024-12-11","2024-12-08","2024-12-25"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Guassu",
        deliveryDates: ["2024-09-25", "2024-10-02", "2024-10-09", "2024-10-16", "2024-10-23", "2024-10-30", "2024-11-06", "2024-11-13", "2024-11-20","2024-11-27","2024-12-04","2024-12-11","2024-12-08","2024-12-25"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Vila Formosa",
        deliveryDates: ["2024-09-25", "2024-10-02", "2024-10-09", "2024-10-16", "2024-10-23", "2024-10-30", "2024-11-06", "2024-11-13", "2024-11-20","2024-11-27","2024-12-04","2024-12-11","2024-12-08","2024-12-25"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Nova America",
        deliveryDates: ["2024-10-03", "2024-10-17", "2024-10-31", "2024-11-07","2024-11-14","2024-11-28","2024-12-05","2024-12-19"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Cristalina",
        deliveryDates: ["2024-10-03", "2024-10-17", "2024-10-31", "2024-11-07","2024-11-14","2024-11-28","2024-12-05","2024-12-19"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Caarapo",
        deliveryDates: ["2024-10-03", "2024-10-17", "2024-10-31", "2024-11-07","2024-11-14","2024-11-28","2024-12-05","2024-12-19"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Juti",
        deliveryDates: ["2024-10-17", "2024-11-14", "2024-12-19"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Navirai",
        deliveryDates: ["2024-10-17", "2024-11-14", "2024-12-19"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Itaporã",
        deliveryDates: ["2024-10-04", "2024-10-11", "2024-10-18", "2024-10-25", "2024-11-08", "2024-11-15"
            , "2024-11-22", "2024-11-19", "2024-12-06", "2024-12-13", "2024-12-20", "2024-12-27"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Bonito",
        deliveryDates: ["2024-10-04", "2024-11-08", "2024-12-06"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Vista Alegre",
        deliveryDates: ["2024-10-04", "2024-11-08", "2024-12-06"],
        link: "http://wa.me/556730338935",
        logisticsCode: "DOS",
        fixedDelivery: ""
    },
    {
        city: "Sidrolandia",
        deliveryDates: [],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: "TODA SEGUNDA-FEIRA"
    },
    {
        city: "Ribas do Rio Pardo",
        deliveryDates: [],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: "TODA TERÇA-FEIRA"
    },
    {
        city: "Terenos",
        deliveryDates: [],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: "TODA QUARTA-FEIRA"
    },
    {
        city: "Anastacio",
        deliveryDates: [],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: "TODA QUARTA-FEIRA"
    },
    {
        city: "Aquidauana",
        deliveryDates: [],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: "TODA QUARTA-FEIRA"
    },
    {
        city: "Jaraguari",
        deliveryDates: [],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: "TODA SEXTA-FEIRA"
    },
    {
        city: "Banderantes",
        deliveryDates: [],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: "TODA SEXTA-FEIRA"
    },
    {
        city: "São Gabriel do Oeste",
        deliveryDates: [],
        link: "http://wa.me/5567992654374",
        logisticsCode: "CG",
        fixedDelivery: "TODA SEXTA-FEIRA"
    },
    // Adicione mais cidades, datas, links, e entregas fixas conforme necessário
];

/**
 * Função para formatar a data no formato DD/MM/YYYY
 * @param {string} dateStr - Data no formato YYYY-MM-DD
 * @returns {string} Data no formato DD/MM/YYYY
 */
function formatDate(dateStr) {
    const date = parseDateLocal(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

/**
 * Função para obter o nome do mês com ano no formato "mês de ano"
 * @param {string} dateStr - Data no formato YYYY-MM-DD
 * @returns {string} Nome do mês e ano (ex: "outubro de 2024")
 */
function getMonthName(dateStr) {
    const date = parseDateLocal(dateStr);
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

/**
 * Função para parsear a data como data local
 * @param {string} dateStr - Data no formato YYYY-MM-DD
 * @returns {Date} Objeto Date tratado como local
 */
function parseDateLocal(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
}

/**
 * Função para verificar se a data é futura ou hoje
 * @param {string} dateStr - Data no formato YYYY-MM-DD
 * @returns {boolean} Verdadeiro se a data for hoje ou futura, falso caso contrário
 */
function isUpcoming(dateStr) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Zera as horas para comparar apenas a data
    const date = parseDateLocal(dateStr);
    date.setHours(0, 0, 0, 0);
    return date >= today;
}

/**
 * Função para agrupar as datas por mês
 * @param {Array} dates - Array de datas no formato YYYY-MM-DD
 * @returns {Object} Objeto com chaves sendo o nome do mês e valores sendo arrays de datas
 */
function groupDatesByMonth(dates) {
    const grouped = {};
    dates.forEach(dateStr => {
        const month = getMonthName(dateStr);
        if (!grouped[month]) {
            grouped[month] = [];
        }
        grouped[month].push(dateStr);
    });
    return grouped;
}

/**
 * Função para destacar o texto buscado
 * @param {string} text - Texto a ser destacado
 * @param {string} query - Termo de busca
 * @returns {string} Texto com os termos buscados destacados
 */
function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

/**
 * Função para criar a estrutura HTML para cada cidade
 * @param {Object} cityData - Dados da cidade
 * @param {string} query - Termo de busca para destacar
 * @returns {HTMLElement} Elemento DOM representando o cartão da cidade
 */
function createCityElement(cityData, query) {
    const cityDiv = document.createElement('div');
    cityDiv.classList.add('city');

    // Cabeçalho da cidade
    const cityHeader = document.createElement('div');
    cityHeader.classList.add('city-header');

    const cityName = document.createElement('span');
    cityName.classList.add('city-name');
    cityName.innerHTML = highlightText(cityData.city, query);

    // Container para Badges (Logística e Entrega Fixa)
    const badgesContainer = document.createElement('div');
    badgesContainer.classList.add('badges-container');

    // Badge para Sigla de Logística
    const logisticsBadge = document.createElement('span');
    logisticsBadge.classList.add('logistics-badge', cityData.logisticsCode);
    logisticsBadge.textContent = cityData.logisticsCode;

    badgesContainer.appendChild(logisticsBadge);

    // Badge para Entrega Fixa (se existir)
    if (cityData.fixedDelivery) {
        const fixedDeliveryBadge = document.createElement('span');
        fixedDeliveryBadge.classList.add('fixed-delivery-badge');
        fixedDeliveryBadge.textContent = `ENTREGA: ${cityData.fixedDelivery}`;
        badgesContainer.appendChild(fixedDeliveryBadge);
    }

    // Toggle Button
    const toggleButton = document.createElement('span');
    toggleButton.classList.add('toggle-button');
    toggleButton.innerHTML = '&#9654;'; // Seta para a direita

    cityHeader.appendChild(cityName);
    cityHeader.appendChild(badgesContainer);
    cityHeader.appendChild(toggleButton);
    cityDiv.appendChild(cityHeader);

    // Seção de datas de entrega
    const deliveryDatesDiv = document.createElement('div');
    deliveryDatesDiv.classList.add('delivery-dates');

    // Filtrar e ordenar as datas
    const filteredDates = cityData.deliveryDates
        .filter(isUpcoming)
        .sort((a, b) => parseDateLocal(a) - parseDateLocal(b));

    if (filteredDates.length > 0) {
        const groupedDates = groupDatesByMonth(filteredDates);
        for (const month in groupedDates) {
            const monthGroup = document.createElement('div');
            monthGroup.classList.add('month-group');

            const monthTitle = document.createElement('div');
            monthTitle.classList.add('month-title');
            monthTitle.innerHTML = highlightText(month, query);
            monthGroup.appendChild(monthTitle);

            const datesList = document.createElement('ul');

            groupedDates[month].forEach(date => {
                const listItem = document.createElement('li');
                listItem.classList.add('date-item');
                listItem.innerHTML = highlightText(formatDate(date), query);
                datesList.appendChild(listItem);
            });

            monthGroup.appendChild(datesList);
            deliveryDatesDiv.appendChild(monthGroup);
        }
    } else {
        const noDatesMessage = document.createElement('p');
        noDatesMessage.textContent = "Nenhuma entrega programada.";
        noDatesMessage.classList.add('no-dates-message');
        deliveryDatesDiv.appendChild(noDatesMessage);
    }

    // Botão de navegação
    const navButton = document.createElement('a');
    navButton.classList.add('navigation-button');
    navButton.textContent = "Fale com a Logística";
    navButton.href = cityData.link;
    navButton.target = "_blank"; // Abre em nova aba

    deliveryDatesDiv.appendChild(navButton);
    cityDiv.appendChild(deliveryDatesDiv);

    // Evento para alternar a exibição das datas
    cityHeader.addEventListener('click', () => {
        const isVisible = deliveryDatesDiv.style.display === 'block';
        deliveryDatesDiv.style.display = isVisible ? 'none' : 'block';
        toggleButton.classList.toggle('expanded', !isVisible);
        toggleButton.innerHTML = isVisible ? '&#9654;' : '&#9660;'; // Seta para a direita ou para baixo
    });

    return cityDiv;
}

/**
 * Função para inicializar a exibição das entregas
 * @param {Array} filteredData - Dados filtrados das cidades
 * @param {string} query - Termo de busca para destacar
 */
function initializeDeliveries(filteredData = deliveriesData, query = '') {
    const container = document.getElementById('deliveriesContainer');
    container.innerHTML = ''; // Limpa o conteúdo existente

    if (filteredData.length === 0) {
        const noDataMessage = document.createElement('p');
        noDataMessage.textContent = "Nenhuma cidade encontrada.";
        noDataMessage.classList.add('no-dates-message');
        container.appendChild(noDataMessage);
        return;
    }

    filteredData.forEach(cityData => {
        // Filtrar e ordenar as datas dentro da cidade
        const upcomingDates = cityData.deliveryDates
            .filter(isUpcoming)
            .sort((a, b) => parseDateLocal(a) - parseDateLocal(b));

        // Criar um novo objeto com as datas filtradas
        const cityDataFiltered = {
            city: cityData.city,
            deliveryDates: upcomingDates,
            link: cityData.link,
            logisticsCode: cityData.logisticsCode,
            fixedDelivery: cityData.fixedDelivery
        };

        const cityElement = createCityElement(cityDataFiltered, query);
        container.appendChild(cityElement);
    });
}

/**
 * Função para filtrar as cidades com base na busca
 */
function filterCities() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (query === '') {
        initializeDeliveries();
        return;
    }

    const filteredData = deliveriesData.filter(cityData =>
        cityData.city.toLowerCase().includes(query) ||
        cityData.logisticsCode.toLowerCase().includes(query) ||
        (cityData.fixedDelivery && cityData.fixedDelivery.toLowerCase().includes(query)) ||
        cityData.deliveryDates.some(dateStr => {
            const month = getMonthName(dateStr).toLowerCase();
            const formattedDate = formatDate(dateStr).toLowerCase();
            return month.includes(query) || formattedDate.includes(query);
        })
    );

    initializeDeliveries(filteredData, query);
}

// Evento para inicializar a exibição das entregas
document.addEventListener('DOMContentLoaded', () => {
    initializeDeliveries();

    // Evento para o campo de busca
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', filterCities);
});
