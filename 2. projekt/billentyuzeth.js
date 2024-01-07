function comparePrices() {
    var product1 = document.getElementById('productList1').value;
    var product2 = document.getElementById('productList2').value;

    var prices = {
      'Asus ROG Strix Scope': 45990,
      'CM Storm Quick Fire XTi': 32890,
      'Corsair K65 RGB Mini': 48990,
      'HyperX Alloy Elite 2': 58590,
      'Logitech G413 SE': 28990
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