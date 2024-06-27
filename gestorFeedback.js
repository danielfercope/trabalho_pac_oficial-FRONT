document.getElementById('bot-fed').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown-fed');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});
