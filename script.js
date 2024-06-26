document.addEventListener('DOMContentLoaded', function() {
    // Sample project data
    const projects = [
        { title: 'Project 1', description: 'Description for project 1.' },
        { title: 'Project 2', description: 'Description for project 2.' },
        { title: 'Project 3', description: 'Description for project 3.' },
    ];

    // Populate projects
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectDiv);
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here you would typically send the form data to your server
    });
});