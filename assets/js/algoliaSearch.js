document.addEventListener("DOMContentLoaded", function() {
            (function() {
              var client = algoliasearch('CLO2E2RKP1', 'bf4587ef5d150368765803e8c74440d0');
              var index = client.initIndex('tours');
              var destinationIndex = client.initIndex('destinations');

              // create the first autocomplete.js dataset: vacation rentals
              var toursDataset = {
                source: autocomplete.sources.hits(index, {hitsPerPage: 2}),
                displayKey: 'name',
                name: 'tours',
                templates: {
                  header: '<div class="ad-example-header">Tours</div>',
                  suggestion: function(suggestion) {
                        console.log(suggestion);
                    return '<a href="/tour/' + suggestion.slug + '"><div class="ad-example-suggestion">' +
                      '<img src="' + suggestion.fields.images[0].url + '" />' +
                      '<div>' +
                        suggestion._highlightResult.name.value + '<br />' +
                        '<small>' + suggestion._highlightResult.name.value + '</small>' +
                      '</div>' +
                      '</div></a>';
                  }
                }
              };

              var destinationsDataset = {
                source: autocomplete.sources.hits(destinationIndex, {hitsPerPage: 2}),
                displayKey: 'city',
                name: 'destinations',
                templates: {
                  header: '<div class="ad-example-header">Destinations</div>',
                  suggestion: function(destinations) {
                        console.log(destinations.city);
                    return '<a href=""><div class="ad-example-suggestion">' +
                      '<img src="' + destinations.image.url + '" />' +
                      '<div>' +
                        destinations._highlightResult.city.value + '<br />' +
                        '<small>' + destinations._highlightResult.city.value + '</small>' +
                      '</div>' +
                      '</div></a>';
                  }
                }
              };

              // create the second dataset: places
              // we automatically inject the default CSS
              // all the places.js options are available
              var placesDataset = placesAutocompleteDataset({
                algoliasearch: algoliasearch,
               // type: 'city',
                countries: ['pa', 'mx', 'co', 'pe'],
                aroundLatLngViaIP: false,
                templates: {
                  header: '<div class="ad-example-header">Estoy viajando a: </div>'
                },
                hitsPerPage: 3
              });

              // init
              var autocompleteInstance = autocomplete(document.querySelector('#searchBox'), {
                hint: false,
                debug: true,
                cssClasses: {prefix: 'ad-example'}
              }, [
                destinationsDataset,
                toursDataset,
                placesDataset,
              ]);


              var autocompleteChangeEvents = ['selected', 'autocompleted'];
              

              autocompleteChangeEvents.forEach(function(eventName) {
                autocompleteInstance.on('autocomplete:'+ eventName, function(event, suggestion, datasetName) {
                  console.log(datasetName, suggestion);
                });
              });
            })();
        });