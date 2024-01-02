let gep = {
  alaplap: undefined,
  processzor: undefined,
  memoria: undefined,
  grafikuskartya: undefined,
  hddssd: undefined,
  monitor: undefined,
  eger: undefined,
  billentyuzet: undefined,
}

let mipiros = {};

let alaplapok = [
  {
    pic: "alaplap0.jpg",
    info: "Intel B760M-AYW WIFI",
    price: 87400
  },
  {
    pic: "alaplap1.jpg",
    info: "Intel PRIME B760M-R D4-CSM",
    price: 63935
  },
  {
    pic: "alaplap2.jpg",
    info: "Intel ROG STRIX Z790-E GAMING WIFI II",
    price: 195390
  },
  {
    pic: "alaplap3.jpg",
    info: "AMD PRIME B550M-K ARGB",
    price: 35430
  },
  {
    pic: "alaplap4.jpg",
    info: "AMD EX-B650M-V7",
    price: 124655
  },
  {
    pic: "alaplap5.jpg",
    info: "AMD PRIME A620M-K-CSM",
    price: 44560
  }
]

let processzorok = [
  {
    pic: "processzor0.jpg",
    info: "AMD Ryzen 5 3600",
    price: 70630
  },
  {
    pic: "processzor1.jpg",
    info: "AMD Ryzen 7 7800X3D",
    price: 158870
  },
  {
    pic: "processzor2.jpg",
    info: "AMD Ryzen 9 5900X",
    price: 194200
  },
  {
    pic: "processzor3.jpg",
    info: "Intel Core i5-12400F",
    price: 61400
  },
  {
    pic: "processzor4.jpg",
    info: "Intel Core i7-14700K",
    price: 144300
  },
  {
    pic: "processzor5.jpg",
    info: "Intel Core i9-14900K",
    price: 208100
  }
]

let memoriak = [
  {
    pic: "memoria0.png",
    info: "Micron 16GB DDR5-4800 ECC SODIMM 1Rx8 CL40",
    price: 26800
  },
  {
    pic: "memoria1.png",
    info: "Micron 16GB DDR5-4800 RDIMM 1Rx8 CL40",
    price: 26500
  },
  {
    pic: "memoria2.png",
    info: "Micron 32GB DDR5-4800 RDIMM 2Rx8 CL40",
    price: 40250
  },
  {
    pic: "memoria3.png",
    info: "Micron 64GB DDR5-4800 RDIMM 2Rx4 CL40",
    price: 80450
  },
  {
    pic: "memoria4.png",
    info: "Micron 64GB DDR4-3200 RDIMM 2Rx4 CL22",
    price: 54000
  },
  {
    pic: "memoria5.png",
    info: "Micron 96GB DDR5-4800 RDIMM 2Rx4 CL40",
    price: 160900
  }
]

let gpuk = [
  {
    pic: "graf0.jpg",
    info: "NVIDIA GeForce GTX 1050 Ti",
    price: 49150
  },
  {
    pic: "graf1.jpg",
    info: "NVIDIA GeForce GTX 1650",
    price: 53000
  },
  {
    pic: "graf2.jpg",
    info: "NVIDIA GeForce RTX 2080 Ti",
    price: 353300
  },
  {
    pic: "graf3.jpg",
    info: "NVIDIA GeForce RTX 3060 Ti",
    price: 141000
  },
  {
    pic: "graf4.jpg",
    info: "NVIDIA GeForce RTX 4060 Ti",
    price: 140900
  },
  {
    pic: "graf5.jpg",
    info: "NVIDIA GeForce RTX 4070 Ti",
    price: 282500
  }
]
let hddssd = [
  {
    pic:"hddssd0.jpg",
    info:"WD20PURZ 2TB",
    price:22250
  },
  {
    pic:"hddssd1.jpg",
    info:"WD40PURZ 4TB",
    price:41500
  },
  {
    pic:"hddssd2.jpg",
    info:"WD63PURZ 6TB",
    price:52680
  },
  {
    pic:"hddssd3.jpg",
    info:"Samsung 870 EVO 500GB",
    price:18990
  },
  {
    pic:"hddssd4.jpg",
    info:"Kingston KC3000 1024GB",
    price:39990
  },
  {
    pic:"hddssd5.jpg",
    info:"Lexar NM790 512GB",
    price:18670
  },
]
let monitor = [
  {
    pic:"monitor0.jpg",
    info:"Acer ED270R M",
    price:67890
  },
  {
    pic:"monitor1.jpg",
    info:"Acer CP1241Y V",
    price:38990
  },
  {
    pic:"monitor2.jpg",
    info:"Acer ED240Q S3",
    price:48790
  },
  {
    pic:"monitor3.jpg",
    info:"Acer ED320QR S",
    price:65590
  },
  {
    pic:"monitor4.jpg",
    info:"Acer KG271 M3",
    price:67890
  },
  {
    pic:"monitor5.jpg",
    info:"Acer XB253Q GP",
    price:71990
  },
]
let eger = [
  {
    pic:"eger0.jpg",
    info:"Razer Viper V2 Pro",
    price:51390
  },
  {
    pic:"eger1.jpg",
    info:"Pwnage StormBreaker",
    price:61880
  },
  {
    pic:"eger2.jpg",
    info:"Logitech G Pro X Superlight",
    price:39990
  },
  {
    pic:"eger3.jpg",
    info:"Lamzu Atlantis Mini",
    price:32000
  },
  {
    pic:"eger4.jpg",
    info:"Finalmouse UltralightX M",
    price:65330
  },
  {
    pic:"eger5.jpg",
    info:"Hyperx Pulsefire Haste",
    price:27300
  },
]
let billentyuzet = [
  {
    pic:"billentyuzet0.jpg",
    info:"Asus ROG Strix Scope",
    price:45990
  },
  {
    pic:"billentyuzet1.jpg",
    info:"CM Storm Quick Fire XTi",
    price:32890
  },
  {
    pic:"billentyuzet2.jpg",
    info:"Corsair K65 RGB Mini",
    price:48990
  },
  {
    pic:"billentyuzet3.jpg",
    info:"HyperX Alloy Elite 2",
    price:58590
  },
  {
    pic:"billentyuzet4.jpg",
    info:"Logitech G413 SE",
    price:28990
  },
  {
    pic:"billentyuzet5.jpg",
    info:" Ducky ONE 2 Mini RGB LED",
    price:49690
  },
]

let itemTemplate = document.getElementById("alkatresz-sablon");

function buildList(alkatresz_tipus, list) {
  let container = document.getElementById(alkatresz_tipus);    // kikeressük az alkatrész listát tartalmazó div-et
  document.getElementById("nem" + alkatresz_tipus).addEventListener("click", function (evt) {
    if (container.style.display == "none") {
      container.style.display = "flex"
    }
    else {
      container.style.display = "none"
    }
  })
  for (let i = 0; i < list.length; i++) { // végigmegyünk az alkatrész listán
    let data = list[i]; // kiveszünk egy alkatrészt data-ba
    let item = itemTemplate.cloneNode(true); // a sablont klónozzuk
    item.style.display = 'block'; // láthatóvá tesszük mert a sablon láthatatlan
    item.querySelector('img').src = "kepek/" + data.pic; // kép beállítás
    item.querySelector('.card-text').innerHTML = data.info; // terméknév
    item.querySelector('.card-title span').innerHTML = data.price; // ár
    item.addEventListener('click', function () { // ha kattintanak erre, ez a fv fusson le
      document.getElementById("osszerak_" + alkatresz_tipus).replaceChildren(item.children[0].cloneNode(true)); // az alsó összerkóban kicseréljük erre amit választottak (csak a beljesjét tesszük át)
      if (mipiros[alkatresz_tipus] !== undefined) {
        mipiros[alkatresz_tipus].style.border = '4px solid white'; // a régi div ne legyen piros
      }
      item.children[0].style.border = '4px solid red';
      mipiros[alkatresz_tipus] = item.children[0];
      gep[alkatresz_tipus] = data; // nyilvántartjuk mit választott a vevő alkatrész fajtánként

      let osszesen = 0;
      for (const [alk_tip, alk] of Object.entries(gep)) {
        if (alk !== undefined) osszesen += alk.price;
      }
      document.getElementById('osszeg').innerHTML = osszesen; // megjelenítjük az összesent
    });
    container.appendChild(item);
  }
}

buildList("alaplap", alaplapok);
buildList("processzor", processzorok);
buildList("memoria", memoriak);
buildList("grafikuskartya", gpuk);
buildList("hddssd",hddssd);
buildList("monitor",monitor);
buildList("eger",eger);
buildList("billentyuzet",billentyuzet)

document.getElementById('vasarlas').addEventListener("click", function () {
  let hianyzo_alkatreszek = [];
  for (const [alk_tip, alkatresz] of Object.entries(gep)) { // végigmegyünk egy objektumon (gep) és kivesszük a kulcsot (alk_tip) és a hozzá tartozó értéket (alkatresz-t)
    if (alkatresz == undefined && document.getElementById(alk_tip).style.display !== "none") { // ha nem választottak alkatrészt és látható a div
      hianyzo_alkatreszek.push(alk_tip); // akkor az az alketrész tipus menjen a listára
    }
  }
  if (hianyzo_alkatreszek.length > 0) {
    alert("Még nem választottál:" + hianyzo_alkatreszek.join(','));
  }
  else {
    alert("Sikeres vásárlás!")
  }
})
let velemenyTemplate= document.getElementById("velemeny")
document.getElementById("ertekelgomb").addEventListener("click", function(){
  let velemenyek= document.getElementById("velemenyek")
  let neve=document.getElementById("nev").value
  let velemenye=document.getElementById("szoveg").value;
  let csillagok= 5-document.getElementById("valaszt").selectedIndex
  let ujvelemeny=velemenyTemplate.cloneNode(true)
  ujvelemeny.style.display="block"
  ujvelemeny.querySelector(".nev").innerHTML="Név: "+neve
  ujvelemeny.querySelector(".velemeny").innerHTML="Vélemény: "+velemenye
  ujvelemeny.querySelector(".csillag").innerHTML="★★★★★".substring(0,csillagok)
  velemenyek.appendChild(ujvelemeny)
})