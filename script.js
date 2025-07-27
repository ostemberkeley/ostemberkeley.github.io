document.addEventListener('DOMContentLoaded', function () {
  fetch('https://script.google.com/macros/s/AKfycbyQYhrYWdIaBHnfXbygHuWEETnBCwrR_TzRus_5GPwShG_24lKjHq_2ChyntHpOmQKZeg/exec')
    .then(response => response.json())
    .then(data => {
      $('#table-data').DataTable({
        data: data,
        columns: [
          { title: "Name" },
          { title: "Age" },
          { title: "Message" }
        ]
      });
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      alert('Failed to load data.');
    });
});
