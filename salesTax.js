var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  var results = {}
  var salesTax = Object.values(salesTaxRates);
  var telusSalesBc = Object.values(companySalesData[0].sales)
  var bcTotal = 0
  for(var i = 0; i < telusSalesBc.length; i++){
    bcTotal += telusSalesBc[i];
  }
  var bcTax = bcTotal * salesTax[1]
  var bombardierSales = Object.values(companySalesData[1].sales)
  var bombTotal = 0
  for(var k = 0; k < bombardierSales.length; k++){
    bombTotal += bombardierSales[k];
  }
  var bombTax = bcTotal * salesTax[0]
  var telusSkSales = Object.values(companySalesData[2].sales)
  var saskTotal = 0;
  for(var j = 0; j < telusSkSales.length;j++){
    saskTotal += telusSkSales[j];
   var skTax = saskTotal * salesTax[2]
  }
  results.telus = {};
  results.Bombardier = {}
  results.telus.totalSales = (bcTotal + saskTotal);
  results.telus.totalTaxes = (bcTax + skTax);
  results.Bombardier.totalSales = bombTotal;
  results.Bombardier.totalTaxes = bombTax;

  console.log(results)
}



calculateSalesTax();
// var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/