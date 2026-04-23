// 动态添加站点图标
function addFavicon() {
    const faviconUrl = 'URL链接';
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = faviconUrl;
    link.type = 'image/webp';
    document.head.appendChild(link);
}

// 页面加载时添加站点图标
window.addEventListener('DOMContentLoaded', addFavicon);
