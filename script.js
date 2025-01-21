document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownParent = document.querySelector('nav ul li');

    dropdownParent.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
    });

    dropdownParent.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
    });
});
