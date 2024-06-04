document.addEventListener('DOMContentLoaded', () => {
    const servicesList = document.getElementById('services-list');

    // Example dynamic content for services
    const services = [
        {
            title: 'AI Strategy Development',
            description: 'Helping you develop a comprehensive AI strategy tailored to your business needs.'
        },
        {
            title: 'Cloud Architecture Design',
            description: 'Designing scalable and robust cloud architectures to meet your technical requirements.'
        },
        {
            title: 'Data Analytics Solutions',
            description: 'Implementing advanced data analytics solutions to unlock insights and drive decision-making.'
        },
        {
            title: 'Machine Learning Implementation',
            description: 'Deploying machine learning models to automate processes and improve efficiency.'
        }
    ];

    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service';

        const serviceTitle = document.createElement('h3');
        serviceTitle.textContent = service.title;

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;

        serviceElement.appendChild(serviceTitle);
        serviceElement.appendChild(serviceDescription);

        servicesList.appendChild(serviceElement);
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Here you can add code to send form data to your server
        console.log('Form submitted:', data);
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
