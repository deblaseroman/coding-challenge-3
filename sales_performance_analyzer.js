//Implement calculateAverageSales function


function calculateAverageSales(sales) {
    const overallSum = sales.reduce((acc, curr) => acc + curr, 0);
    const len = sales.length;
    const avgSales = overallSum / len;
    return avgSales;
}



