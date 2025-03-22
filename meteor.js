document.addEventListener('click', function(event) {
    // 创建流星（线条）
    const meteor = document.createElement('div');
    meteor.className = 'meteor';

    // 随机移动距离和动画时长
    const dx = Math.random() * 600 - 300; // 移动距离
    const dy = Math.random() * 600 - 300;
    const duration = Math.random() * 1.5 + 1.5; // 动画时长 1.5s 到 3s

    // 设置流星起始位置（点击位置）
    meteor.style.left = event.clientX + 'px';
    meteor.style.top = event.clientY + 'px';

    // 创建动态关键帧动画
    const keyframes = `
        @keyframes meteor-${Date.now()} {
            0% {
                transform: translate(0, 0) rotate(45deg);
                opacity: 1;
                filter: brightness(1);
            }
            50% {
                transform: translate(${dx * 0.5}px, ${dy * 0.5}px) rotate(45deg);
                opacity: 1;
                filter: brightness(1.5); /* 中间最亮 */
            }
            100% {
                transform: translate(${dx}px, ${dy}px) rotate(45deg);
                opacity: 0;
                filter: brightness(0.5); /* 末尾变暗 */
            }
        }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = keyframes;
    document.head.appendChild(styleSheet);

    // 应用动画
    meteor.style.animation = `meteor-${Date.now()} ${duration}s linear forwards`;

    // 将流星添加到页面
    document.body.appendChild(meteor);

    // 动画结束后清理
    meteor.addEventListener('animationend', function() {
        meteor.remove();
        styleSheet.remove();
    });
});
