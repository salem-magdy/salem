# Creative Portfolio Website

A modern, interactive, and responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript.

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive Elements**: Animations, hover effects, and interactive components
- **Dashboard**: Analytics and skill visualizations with interactive charts
- **Smooth Animations**: Scroll animations, reveal effects, and transitions
- **Project Filtering**: Filter projects by category
- **Contact Form**: Simple contact form with validation

## File Structure

```
portfolio/
├── css/
│   ├── style.css         # Main stylesheet
│   └── dashboard.css     # Dashboard specific styles
├── js/
│   ├── main.js           # Main JavaScript file
│   └── dashboard.js      # Dashboard specific scripts
├── images/               # Place your images here
├── index.html            # Main portfolio page
├── dashboard.html        # Dashboard page
└── README.md             # This file
```

## Getting Started

1. Clone or download this repository
2. Add your own images to the `images/` directory
3. Customize the content in `index.html` and `dashboard.html`
4. Modify styles in `css/style.css` and `css/dashboard.css` as needed
5. Update the JavaScript files to match your content

## Customization

### Personal Information

Edit the following sections in `index.html`:

- Update your name, title, and description in the hero section
- Modify the about section with your personal information
- Update your skills, projects, and resume information
- Add your contact details

### Dashboard Data

Edit the following in `js/dashboard.js`:

- Update chart data to reflect your actual skills and projects
- Modify the skills network with your own skills and connections

### Colors and Styling

The color scheme can be customized in `css/style.css`:

```css
:root {
    /* Light Mode Colors */
    --primary-color: #4f46e5;
    --secondary-color: #818cf8;
    /* ... other variables ... */
}

.dark-mode {
    --primary-color: #818cf8;
    --secondary-color: #6366f1;
    /* ... other variables ... */
}
```

## Adding Projects

To add a new project, copy and paste the following HTML in the projects section of `index.html`:

```html
<div class="project-card" data-category="your-category">
    <div class="project-img">
        <img src="images/your-project-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="#" target="_blank"><i class="fas fa-link"></i></a>
                <a href="#" target="_blank"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
    <div class="project-info">
        <h4>Project Name</h4>
        <p>Project Category</p>
    </div>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Credits

- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Poppins font
- [Chart.js](https://www.chartjs.org/) - Interactive charts for dashboard

## License

This project is licensed under the MIT License - see the LICENSE file for details. 