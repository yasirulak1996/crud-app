document.addEventListener('DOMContentLoaded', function () {
    fetch('')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
    
});

