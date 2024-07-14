// Using functions to add and display tax

var sale1;
var sale2;
var sale3;
var sale;
var calculateTax;
var displaySale;

var sale1, sale2, sale3, sale4, sale5, sale, calculateTax, displaySale, processSale;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 200, taxRate: 18 };
sale5 = { price: 300, taxRate: 25 }; // Adding a fifth sale object as further adventures

calculateTax = function () {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
};

displaySale = function () {
    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("total cost = $" + sale.total);
    console.log("------------------------------");
};

processSale = function (saleObject) {
    sale = saleObject;
    calculateTax();
    displaySale();
};

processSale(sale1);
processSale(sale2);
processSale(sale3);
processSale(sale4);
processSale(sale5); // Processing the new sale object


/* Further Adventures
 *
 * 1) Add a fourth sale object.
 *
 * 2) Update the code so that tax is calculated
 *    and the new sale is displayed.
 *
 * Having two separate functions to calculate tax
 * and display sales is good, each has a specific purpose.
 * Having to call both functions
 * for each sale object is not so good.
 *
 * 3) Can you change the code so that you don't
 *    have to call both functions for every sale?
 *
 */