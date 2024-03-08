console.log("exercise 8");

// GET https://api.openbrewerydb.org/v1/breweries?per_page=3

fetch('breweries.json')
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        for (let i = 0; i < data.breweries.length; i++) {
            $(".breweries").append(
                '<h2>' + data.breweries[i].name + '</h2>' +
                '<p>' + data.breweries[i].address_1 + '</p>' +
                '<p>' + data.breweries[i].phone + '</p>' +
                '<a href="' + data.breweries[i].website_url + '"id="button">' + data.breweries[i].website_url + '</a>'
            )

        }
    })
    .catch(function (error) {
        $('h1').html('Error!');
        console.log(error);
    })
