document.addEventListener('DOMContentLoaded', () => {
    // Image Zooming Functionality
    const zoomableImages = document.querySelectorAll('.zoomable-image');
  
    zoomableImages.forEach(image => {
      image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.2)';
      });
      image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
      });
      image.addEventListener('click', () => {
        const color = image.getAttribute('data-color');
        document.body.style.backgroundColor = color;
      });
    });
  
    // Scroll Animation for Learn More Button
    const learnMoreButton = document.querySelector('.learn-more-button');
  
    learnMoreButton.addEventListener('click', (event) => {
      event.preventDefault();
      const featuresSection = document.getElementById('features');
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    });
  
    // Toggle FAQ Answer Visibility
    const faqQuestions = document.querySelectorAll('.question');
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });
  
    // Animated Text in Welcome Section
    const animatedTextElements = document.querySelectorAll('.animated-text');
  
    animatedTextElements.forEach(element => {
      const text = element.textContent;
      const chars = text.split('');
  
      element.textContent = '';
  
      chars.forEach((char, index) => {
        const charElement = document.createElement('span');
        charElement.textContent = char;
        charElement.style.opacity = '0';
        charElement.style.animation = `fadeInUp 1s ease forwards ${index * 0.1}s`;
        element.appendChild(charElement);
      });
    });
  });

  



  document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('show-answer');

            const arrow = question.querySelector('.arrow');
            arrow.classList.toggle('rotate');
        });
    });
});





  