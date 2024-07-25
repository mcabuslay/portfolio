const myDiv = document.getElementById('car');
var settings = {
    "url": "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json",
    "method": "GET",
    "timeout": 0
};

$.ajax(settings).done(function (response, status, xhr) {
    if (xhr.status === 200) {
        // Success: Display manufacturer names
        displayManufacturers(response.Results);
    } else {
        console.error('Error:', status);
    }
}).fail(function (xhr, status, error) {
    console.error('Error:', error);
});

function displayManufacturers(manufacturers) {
    myDiv.innerHTML = '';
    var ul = document.createElement('ul');

    manufacturers.forEach(function (manufacturer) {
        var li = document.createElement('li');
        li.textContent = manufacturer.Mfr_Name;
        ul.appendChild(li);
    });

    myDiv.appendChild(ul);
}

