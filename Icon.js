// 动态添加站点图标
function addFavicon() {
    const faviconUrl = 'https://cloudflare-imgbed.sooday.dpdns.org/file/%E5%9B%BE%E5%BA%93/%E5%9B%BE%E6%A0%87/WUjF1yC7.webp';
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = faviconUrl;
    link.type = 'image/webp';
    document.head.appendChild(link);
}

// 页面加载时添加站点图标
window.addEventListener('DOMContentLoaded', addFavicon);