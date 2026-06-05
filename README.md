# Deepak G - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. The project is structured with separate files for better organization and maintainability.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean and professional design
- **Smooth Animations**: Engaging scroll animations and hover effects
- **Interactive Elements**: Dynamic contact form and portfolio items
- **Modular Structure**: Separate files for each section and component
- **Performance Optimized**: Fast loading and smooth interactions

## 📁 Project Structure

```
Portfolioseperatefile/
├── index.html                 # Main HTML file
├── styles.css                 # Main CSS file
├── script.js                  # Main JavaScript file
├── sections/                  # Individual section components
│   ├── hero.html
│   ├── about.html
│   ├── education.html
│   ├── experience.html
│   ├── skills.html
│   ├── portfolio.html
│   ├── services.html
│   ├── contact.html
│   └── footer.html
├── css/                       # Individual CSS files for each section
│   ├── hero.css
│   ├── about.css
│   ├── education.css
│   ├── experience.css
│   ├── skills.css
│   ├── portfolio.css
│   ├── services.css
│   ├── contact.css
│   └── footer.css
├── js/                        # Individual JavaScript files for each section
│   ├── hero.js
│   ├── about.js
│   ├── education.js
│   ├── experience.js
│   ├── skills.js
│   ├── portfolio.js
│   ├── services.js
│   └── contact.js
└── README.md                  # This file
```

## 🎨 Sections Overview

### 1. Hero Section
- **File**: `sections/hero.html`
- **CSS**: `css/hero.css`
- **JS**: `js/hero.js`
- **Features**: Typing animation, parallax effect, social links

### 2. About Section
- **File**: `sections/about.html`
- **CSS**: `css/about.css`
- **JS**: `js/about.js`
- **Features**: Animated statistics, skill highlights

### 3. Education Section
- **File**: `sections/education.html`
- **CSS**: `css/education.css`
- **JS**: `js/education.js`
- **Features**: Timeline animation, interactive markers

### 4. Experience Section
- **File**: `sections/experience.html`
- **CSS**: `css/experience.css`
- **JS**: `js/experience.js`
- **Features**: Card animations, tag hover effects

### 5. Skills Section
- **File**: `sections/skills.html`
- **CSS**: `css/skills.css`
- **JS**: `js/skills.js`
- **Features**: Progressive loading, category animations

### 6. Portfolio Section
- **File**: `sections/portfolio.html`
- **CSS**: `css/portfolio.css`
- **JS**: `js/portfolio.js`
- **Features**: Project showcase, hover overlays, external links

### 7. Services Section
- **File**: `sections/services.html`
- **CSS**: `css/services.css`
- **JS**: `js/services.js`
- **Features**: Service cards, feature lists, icon animations

### 8. Contact Section
- **File**: `sections/contact.html`
- **CSS**: `css/contact.css`
- **JS**: `js/contact.js`
- **Features**: Contact form, validation, notification system

### 9. Footer
- **File**: `sections/footer.html`
- **CSS**: `css/footer.css`
- **Features**: Social links, copyright information

## 🛠️ How to Use

### Option 1: Use the Complete Website
Simply open `index.html` in your browser. All sections are included in the main file.

### Option 2: Use Individual Components
You can include individual sections in your own HTML files:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website</title>
    <link rel="stylesheet" href="css/hero.css">
    <link rel="stylesheet" href="css/about.css">
    <!-- Include other CSS files as needed -->
</head>
<body>
    <!-- Include sections as needed -->
    <div id="hero-section"></div>
    <script src="js/hero.js"></script>
    <script src="js/about.js"></script>
    <!-- Include other JS files as needed -->
</body>
</html>
```

### Option 3: Mix and Match
You can use any combination of sections by including their respective HTML, CSS, and JS files.

## 🎯 Customization

### Colors
The main color scheme uses:
- Primary: `#4f46e5` (Indigo)
- Secondary: `#f0f4ff` (Light Blue)
- Accent: `#fbbf24` (Yellow)
- Text: `#1a1a1a` (Dark Gray)

### Content
Update the following files to customize content:
- Personal information: `sections/hero.html`, `sections/about.html`
- Contact details: `sections/contact.html`, `sections/footer.html`
- Projects: `sections/portfolio.html`
- Experience: `sections/experience.html`
- Education: `sections/education.html`

### Images
Replace placeholder images with your actual photos:
- Profile picture: Update the `src` attribute in `sections/hero.html`
- Project images: Update the `src` attributes in `sections/portfolio.html`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Dependencies

- **Font Awesome**: For icons
- **Google Fonts**: Inter font family
- **No JavaScript frameworks**: Pure vanilla JavaScript

## 🚀 Performance Features

- Intersection Observer API for scroll animations
- Debounced scroll events
- Optimized CSS with hardware acceleration
- Lazy loading animations
- Minimal JavaScript footprint

## 📞 Contact Information

- **Name**: Deepak G
- **Email**: deepakgunasekaran07@gmail.com
- **Phone**: +91 7418592586
- **LinkedIn**: linkedin.com/in/deepak-g

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

**Note**: Remember to update the placeholder images and links with your actual content before deploying the website.
