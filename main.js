const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
  },
};

fetch('https://covid-193.p.rapidapi.com/history?country=indonesia&day=2020-06-02', options)
  .then((response) => response.json())
  .then((response) => {
    const { active, new: newCases, recovered, total } = response.response[0].cases;
    const { total: totalDeath } = response.response[0].deaths;
    const { total: totalTest } = response.response[0].tests;
    document.getElementById('activeCase').innerHTML = active;
    document.getElementById('newCases').innerHTML = newCases;
    document.getElementById('recorveredCases').innerHTML = recovered;
    document.getElementById('totalCases').innerHTML = total;
    document.getElementById('totalDeaths').innerHTML = totalDeath;
    document.getElementById('totalTests').innerHTML = totalTest;
    document.getElementById('loader').classList.toggle('hidden');
  })
  .catch((err) => console.error(err));

function cariData() {
  document.getElementById('loader').classList.toggle('hidden');

  let namaNegara = document.getElementById('searchCountry').value;
  let tgl = document.getElementById('searchTgl').value;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    },
  };

  fetch(`https://covid-193.p.rapidapi.com/history?country=${namaNegara}&day=${tgl}`, options)
    .then((response) => response.json())
    .then((response) => {
      if (response.response.length == 0) {
        alert('Hasil Tidak Ditemukan!!!');
      } else {
        const { active, new: newCases, recovered, total } = response.response[0].cases;
        const { total: totalDeath } = response.response[0].deaths;
        const { total: totalTest } = response.response[0].tests;
        document.getElementById('activeCase').innerHTML = active;
        document.getElementById('newCases').innerHTML = newCases;
        document.getElementById('recorveredCases').innerHTML = recovered;
        document.getElementById('totalCases').innerHTML = total;
        document.getElementById('totalDeaths').innerHTML = totalDeath;
        document.getElementById('totalTests').innerHTML = totalTest;
      }
      document.getElementById('loader').classList.toggle('hidden');
    })
    .catch((err) => console.error(err));
}
