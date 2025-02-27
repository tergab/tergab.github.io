document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('hamburger-menu');
    const pages = [
        { name: 'About', url: 'about.html' },
        { name: 'Experience', url: 'experience.html' },
        { name: 'Interests', url: 'interests.html' },
        { name: 'Contact', url: 'contact.html' }
    ];

    pages.forEach(page => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = page.name;
        a.href = page.url;
        li.appendChild(a);
        menu.appendChild(li);
    });
});
