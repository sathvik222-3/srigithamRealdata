/**
 * Mock Analytics Script
 * This file is loaded across all pages to track impressions.
 * In production, replace the 'G-XXXXXXXXXX' ID with an actual Google Analytics Tracking ID.
 */

// Create the Google tag script element
const gtagScript = document.createElement('script');
gtagScript.async = true;
gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"; 

// Append to head
document.head.appendChild(gtagScript);

// Initialize data layer
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Config
gtag('config', 'G-XXXXXXXXXX');

// Log to console for development verification
console.log("Analytics Initialized. Pageview recorded for: " + window.location.pathname);
