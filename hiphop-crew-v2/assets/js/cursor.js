document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;
    
    // 초기 커서 위치 설정
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // 커서가 보이지 않았다면 보이게 설정
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    });
    
    // 부드러운 커서 움직임을 위한 애니메이션
    function animate() {
        // 메인 커서
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // 팔로워 커서
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animate);
    }
    animate();
    
    // 링크에 호버 효과 추가
    const links = document.querySelectorAll('a, .menu-toggle');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.border = '1px solid #fff';
            cursorFollower.style.width = '60px';
            cursorFollower.style.height = '60px';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.border = '2px solid #fff';
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
        });
    });
    
    // 마우스가 창을 벗어날 때 커서 숨기기
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    });
    
    // 마우스가 창에 들어올 때 커서 보이기
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    });
}); 
