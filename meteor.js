document.addEventListener('contextmenu', function(event) {
    event.preventDefault();

    const meteor = document.createElement('div');
    meteor.className = 'meteor';

    const dx = Math.random() * 400 - 200;
    const dy = Math.random() * 400 - 200;
    const duration = Math.random() * 1 + 1;

    meteor.style.left = event.clientX + 'px';
    meteor.style.top = event.clientY + 'px';

    const keyframes = `
        @keyframes meteor-${Date.now()} {
            0% { transform: translate(0, 0) rotate(45deg); opacity: 1; }
            100% { transform: translate(${dx}px, ${dy}px) rotate(45deg); opacity: 0; }
        }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = keyframes;
    document.head.appendChild(styleSheet);

    meteor.style.animation = `meteor-${Date.now()} ${duration}s linear forwards`;

    document.body.appendChild(meteor);

    meteor.addEventListener('animationend', function() {
        meteor.remove();
        styleSheet.remove();
    });
});