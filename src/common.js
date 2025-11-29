    // Simple HTML sanitizer
export  const sanitizeHTML = (html) => {
        const div = document.createElement('div');
        div.textContent = html; // This escapes HTML
        return div.innerHTML;
    };