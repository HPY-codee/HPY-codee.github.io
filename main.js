// ========== 1. 实时时钟 ==========
function updateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2,'0');
    const day = String(now.getDate()).padStart(2,'0');
    const weekdays = ['周日','周一','周二','周三','周四','周五','周六'];
    const weekday = weekdays[now.getDay()];
    const dateStr = `${year}.${month}.${day} ${weekday}`;
    const timeStr = now.toLocaleTimeString('zh-CN');
    
    const dateElem = document.getElementById('liveDate');
    const timeElem = document.getElementById('liveTime');
    if (dateElem) dateElem.innerText = dateStr;
    if (timeElem) timeElem.innerText = timeStr;
}
if (document.getElementById('liveDate')) {
    updateDateTime();
    setInterval(updateDateTime, 1000);
}

// ========== 2. 显示/隐藏奶龙小秘密 ==========
const toggleBtn = document.getElementById('toggleMottoBtn');
const mottoDiv = document.getElementById('mottoContent');
if (toggleBtn && mottoDiv) {
    let visible = true;
    toggleBtn.addEventListener('click', () => {
        if (visible) {
            mottoDiv.style.display = 'none';
            toggleBtn.textContent = '显示秘密';
            visible = false;
        } else {
            mottoDiv.style.display = 'block';
            toggleBtn.textContent = '隐藏';
            visible = true;
        }
    });
}

// ========== 3. 进度条提示（鼠标悬停显示百分比） ==========
const progressBars = document.querySelectorAll('.progress');
progressBars.forEach(bar => {
    const percent = bar.getAttribute('data-skill') || bar.style.width;
    bar.setAttribute('title', `奶龙能力值 ${percent}`);
});

// ========== 4. 表单验证（interact页面） ==========
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const errorDiv = document.getElementById('formError');
        
        if (name === '') {
            errorDiv.innerText = '?? 请填写你的昵称～';
            return;
        }
        if (email === '' || !email.includes('@') || !email.includes('.')) {
            errorDiv.innerText = '?? 邮箱地址好像不太对，再检查一下下？';
            return;
        }
        if (message === '') {
            errorDiv.innerText = '?? 悄悄话不能为空哦，奶龙很想听！';
            return;
        }
        errorDiv.innerText = '';
        alert(`? 咕噜噜～ 奶龙收到你的留言啦！ ?\n昵称：${name}\n邮箱：${email}\n留言：${message}\n（本网站为静态演示，奶龙会用心记住～）`);
        form.reset();
    });
}
