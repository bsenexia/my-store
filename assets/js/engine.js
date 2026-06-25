const NexiaEngine = {
    render: (data) => {
        const grid = document.getElementById('tools');
        grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
        grid.innerHTML = data.map(app => `
            <div class="bg-white border border-gray-200 p-6 shadow-sm hover:border-green-600 transition-all cursor-pointer">
                <span class="text-[10px] font-bold text-gray-400 uppercase">${app.category}</span>
                <h3 class="text-xl font-bold my-2">${app.name}</h3>
                <p class="text-sm text-gray-500 mb-6">${app.description}</p>
                <code class="block bg-gray-900 text-green-400 p-3 rounded text-[11px] mb-4">${app.install_cmd}</code>
                <button onclick="navigator.clipboard.writeText('${app.install_cmd}')" class="w-full bg-black text-white py-2 text-xs font-bold">نسخ الأمر</button>
            </div>
        `).join('');
    }
};
