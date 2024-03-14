document.addEventListener('DOMContentLoaded', function() {
    const chartData = [
        { height: 15, color: "hsl(10, 79%, 65%)" },
        { height: 40, color: "hsl(10, 79%, 65%)" },
        { height: 70, color: "hsl(186, 34%, 60%)" },
        { height: 35, color: "hsl(10, 79%, 65%)" },
        { height: 25, color: "hsl(10, 79%, 65%)" },
        { height: 50, color: "hsl(10, 79%, 65%)" },
        { height: 29, color: "hsl(10, 79%, 65%)" }
    ];

    function createChart(price, day, height, color) {
        const chartDiv = document.createElement('div');
        chartDiv.classList.add('chart');
        chartDiv.style.height = height + '%';
        chartDiv.style.backgroundColor = color;

        chartDiv.addEventListener('mouseover', function() {
            let hsl = color.match(/\d+/g);
            hsl[2] = Math.min(100, parseInt(hsl[2]) + 10);
            chartDiv.style.backgroundColor = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
        });


        chartDiv.addEventListener('mouseout', function() {
            chartDiv.style.backgroundColor = color;
        });


        return chartDiv;
    }

    function generateCharts(data) {
        const container = document.querySelector('.container-2');
        data.forEach(item => {
            const chart = createChart(item.price, item.day, item.height, item.color); 
            container.appendChild(chart);
        });
    }

    generateCharts(chartData);
});
