// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const nav = document.getElementById('globalNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    // 回到顶部按钮显示/隐藏
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// 回到顶部功能
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 复制功能
const copyButtons = document.querySelectorAll('.copy-btn');
const cmdCopyButtons = document.querySelectorAll('.cmd-copy-btn');
const copyToast = document.getElementById('copyToast');

// 通用复制函数
function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        // 显示成功提示
        copyToast.textContent = '';
        copyToast.innerHTML = '<i class="fas fa-check"></i> 复制成功！';
        copyToast.classList.remove('error');
        copyToast.classList.add('show');
        
        // 按钮状态变化
        if (btn) {
            btn.classList.add('copied');
            if (btn.classList.contains('cmd-copy-btn')) {
                btn.innerHTML = '<i class="fas fa-check"></i> 已复制';
            } else {
                btn.innerHTML = '<i class="fas fa-check"></i> 已复制';
            }
            setTimeout(() => {
                if (btn.classList.contains('cmd-copy-btn')) {
                    btn.innerHTML = '<i class="fas fa-copy"></i>复制指令';
                } else {
                    btn.innerHTML = '<i class="fas fa-copy"></i>复制';
                }
                btn.classList.remove('copied');
            }, 2000);
        }
        
        // 隐藏提示
        setTimeout(() => {
            copyToast.classList.remove('show');
        }, 2000);
    }).catch(err => {
        // 复制失败提示
        copyToast.textContent = '';
        copyToast.innerHTML = '<i class="fas fa-times"></i> 复制失败！';
        copyToast.classList.add('error');
        copyToast.classList.add('show');
        
        setTimeout(() => {
            copyToast.classList.remove('show');
        }, 2000);
        console.error('复制失败:', err);
    });
}

// 代码块复制
if (copyButtons.length > 0) {
    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const codeBlock = btn.parentElement.querySelector('pre');
            const text = codeBlock.textContent.trim();
            copyToClipboard(text, btn);
        });
    });
}

// 指令卡片复制
if (cmdCopyButtons.length > 0) {
    cmdCopyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const command = btn.getAttribute('data-command');
            copyToClipboard(command, btn);
        });
    });
}

// 初始化显示第一个模块（如果存在）
const modules = document.querySelectorAll('.module-container');
if (modules.length > 0) {
    modules[0].classList.add('active');
}

// 添加页面加载时的滚动修复
window.addEventListener('load', () => {
    // 确保页面加载后导航栏位置正确
    setTimeout(() => {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1);
            const element = document.getElementById(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, 100);
});