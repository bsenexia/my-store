const KaliEngine = {
    renderCard: (app) => `
        <div class="card p-6 border border-gray-200 hover:border-green-600 transition-all">
            <h3 class="text-xl font-bold mb-2 text-gray-800">${app.name}</h3>
            <p class="text-sm text-gray-600 mb-4 h-12">${app.description}</p>
            <button onclick="navigator.clipboard.writeText('${app.install_cmd}'); alert('تم النسخ')" 
                    class="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 font-bold transition">
                تثبيت الآن
            </button>
        </div>
    `,
    init: function(data) {
        const container = document.getElementById('tools');
        container.innerHTML = data.map(app => this.renderCard(app)).join('');
    }
};
