function comparePrices() {
    var product1 = document.getElementById('productList1').value;
    var product2 = document.getElementById('productList2').value;

    var prices = {
      'Micron 16GB DDR5-4800 ECC SODIMM 1Rx8 CL40': 26800,
      'Micron 16GB DDR5-4800 RDIMM 1Rx8 CL40': 26500,
      'Micron 32GB DDR5-4800 RDIMM 2Rx8 CL40': 40250,
      'Micron 64GB DDR5-4800 RDIMM 2Rx4 CL40': 80450,
      'Micron 64GB DDR4-3200 RDIMM 2Rx4 CL22': 54000
    };

    var resultElement = document.getElementById('result');
    var product1Price = prices[product1];
    var product2Price = prices[product2];

    if (product1Price && product2Price) {
      if (product1Price < product2Price) {
        document.getElementById('result').innerHTML = '<p class="cheaper">' + product1 + ' olcsóbb!</p>';
      } else if (product1Price > product2Price) {
        document.getElementById('result').innerHTML = '<p class="expensive">' + product2 + ' olcsóbb!</p>';
      } else {
        document.getElementById('result').innerHTML = '<p>A két termék azonos áron van.</p>';
      }
    } else {
      document.getElementById('result').innerHTML = '<p>Válassz mindkét terméket!</p>';
    }
  }
  window.onload = comparePrices;

  function changePage() {
    var selectedPage = document.getElementById('pageSelector').value;
    window.location.href = selectedPage;
  }