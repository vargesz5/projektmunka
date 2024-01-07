function comparePrices() {
    var product1 = document.getElementById('productList1').value;
    var product2 = document.getElementById('productList2').value;

    var prices = {
      'LG 24GN60R-B Monitor': 55900,
      'Samsung S34C500GAU Monitor': 113590,
      'LG UltraGear 27GR75Q-B Monitor': 104900,
      'ASUS TUF Gaming VG249Q1A Monitor': 61890,
      'Samsung Odyssey G5 C27G55TQBU Monitor': 150760
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