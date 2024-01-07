function comparePrices() {
    var product1 = document.getElementById('productList1').value;
    var product2 = document.getElementById('productList2').value;

    var prices = {
      'NVIDIA GeForce GTX 1050 Ti': 49150,
      'NVIDIA GeForce GTX 1650': 53000,
      'NVIDIA GeForce RTX 2080 Ti': 353300,
      'NVIDIA GeForce RTX 3060 Ti': 141000,
      'NVIDIA GeForce RTX 4060 T': 140900
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