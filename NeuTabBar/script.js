// Aktif sekme ve içeriklerini kontrol etmek için event listener'lar ekleyelim
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.neumorphic-tab');
    const tabContents = document.querySelectorAll('.neumorphic-tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', e => {
        e.preventDefault();
        const tabId = tab.getAttribute('data-tab');
  
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
  
        tabContents.forEach(content => {
          if (content.getAttribute('id') === tabId) {
            content.classList.remove('hidden');
          } else {
            content.classList.add('hidden');
          }
        });
      });
    });
  });
  