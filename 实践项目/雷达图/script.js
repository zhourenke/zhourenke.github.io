const ctx = document.getElementById('radarChart').getContext('2d');

const data = {
    labels: ['协调', '读谱', '爆发', '糊功', '服务器', '运维', 'linux'],
    datasets: [{
        label: '新人类进度',
        data: [80, 60, 40, 20, 40, 60, 60],
        backgroundColor: 'rgba(0, 200, 200, 0.2)',
        borderColor: 'rgba(0, 200, 200, 1)',
        borderWidth: 2
    }]
};

const options = {
    maintainAspectRatio: false, // 禁用默认的宽高比保持
    scales: {
        r: {
            angleLines: {
                display: true
            },
            suggestedMin: 0,
            suggestedMax: 100,
            pointLabels: {
                display: true // 依然显示标签
            },
            ticks: {
                display: false // 隐藏刻度数字
            }
        }
    }
};

const radarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
});
