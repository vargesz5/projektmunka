function comparePrices() {
    var product1 = document.getElementById('productList1').value;
    var product2 = document.getElementById('productList2').value;

    var prices = {
      'Intel B760M-AYW WIFI': 87400,
      'Intel PRIME B760M-R D4-CSM': 63935,
      'Intel ROG STRIX Z790-E GAMING WIFI II': 195390,
      'AMD PRIME B550M-K ARGB': 35430,
      'AMD EX-B650M-V7': 124655
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