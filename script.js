document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var searchTerm = document.getElementById('search-input').value;
    searchPage(searchTerm);
  });
  
  function searchPage(term) {
    var pages = [
      { title: 'Main', url: 'index.html' },
      { title: 'About us', url: 'about.html' },
      { title: 'contacts', url: 'contact.html' },
      { title: 'Home', url: 'home.html' },
      { title: 'doctor', url: 'doctor.html' },
      { title: 'location', url: 'location.html' }
      
    ];
    
    var searchResults = [];
    
    
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].title.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
        searchResults.push(pages[i]);
      }
    }
    
    displayResults(searchResults);
  }
  
  function displayResults(results) {
    var searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = ''; 
    
    if (results.length === 0) {
      searchResultsContainer.innerHTML = '<p>Nothing was found.</p>';
    } else {
      for (var i = 0; i < results.length; i++) {
        var result = results[i];
        var link = document.createElement('a');
        link.href = result.url;
        link.textContent = result.title;
        searchResultsContainer.appendChild(link);
        searchResultsContainer.appendChild(document.createElement('br'));
      }
    }
  }







  