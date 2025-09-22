// script.js - small utility JS for nav and form validation
document.addEventListener('DOMContentLoaded', () => {
    // Set footer years
    const y = new Date().getFullYear();
    ['year','year-2','year-3','year-4'].forEach(id => {
      const el = document.getElementById(id);
      if(el) el.textContent = y;
    });
  
    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('site-nav');
    if(navToggle && nav){
      navToggle.addEventListener('click', () => {
        const open = nav.getAttribute('data-open') === 'true';
        nav.setAttribute('data-open', String(!open));
        navToggle.setAttribute('aria-expanded', String(!open));
      });
    }
  
    // Simple client-side contact form validation + fake submit
    const form = document.getElementById('contact-form');
    if(form){
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const status = document.getElementById('form-status');
        status.textContent = '';
        const formData = new FormData(form);
        // Basic validation
        if(!formData.get('name') || formData.get('name').trim().length < 2){
          status.textContent = 'Please enter your name (min 2 characters).';
          return;
        }
        const email = formData.get('email') || '';
        if(!/^\S+@\S+\.\S+$/.test(email)){
          status.textContent = 'Please enter a valid email address.';
          return;
        }
        if(!formData.get('message') || formData.get('message').trim().length < 10){
          status.textContent = 'Please enter a message (min 10 characters).';
          return;
        }
        // Simulate send
        status.textContent = 'Sending…';
        setTimeout(() => {
          form.reset();
          status.textContent = 'Thanks — your message was sent!';
        }, 800);
      });
    }
  });
  