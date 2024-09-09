//Implement calculateAverageSales function


function calculateAverageSales(sales) {
    const overallSum = sales.reduce((acc, curr) => acc + curr, 0);
    const len = sales.length;
    const avgSales = overallSum / len;
    return avgSales;
}
//Create determinePerformanceRating function"
function determinePerformanceRating(avgSales) {
    if (avgSales > 10000) {
        return 'Excellent';
    } else if (avgSales >= 7000 && avgSales <= 10000) {
        return 'Good';
    } else if (avgSales >= 4000 && avgSales <= 7000) {
        return 'Satisfactory';
    } else if (avgSales < 4000) {
        return 'Needs Improvement';
    }
}