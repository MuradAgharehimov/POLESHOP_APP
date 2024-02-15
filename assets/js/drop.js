function toggleDropdown(dropdownId, show) {
    var dropdownMenu = document.getElementById(dropdownId);
    if (show) {
        dropdownMenu.classList.add('show');
    } else {
        dropdownMenu.classList.remove('show');
    }
}


document.getElementById('first').addEventListener('click', function() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'camera'; 
    input.click();

    input.addEventListener('change', function() {
        var file = input.files[0];
        if (file) {
            var formData = new FormData();
            formData.append('image', file);

            fetch('https://example.com/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); 
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
        }
    });
});