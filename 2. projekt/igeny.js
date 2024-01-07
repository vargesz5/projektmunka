function submitDemand() {
    var productName = document.getElementById('productName').value;
    var demandDetails = document.getElementById('demandDetails').value;
  
    if (productName && demandDetails) {
      var demandsContainer = document.getElementById('demandsContainer');
  
      var demandCard = document.createElement('div');
      demandCard.className = 'demand-card';
      demandCard.innerHTML = '<h3>' + productName + '</h3><p>' + demandDetails + '</p>';
  
      demandsContainer.appendChild(demandCard);
  
      // Töröljük az űrlap tartalmát
      document.getElementById('productName').value = '';
      document.getElementById('demandDetails').value = '';
    } else {
      alert('Minden mezőt ki kell tölteni!');
    }
  }
  