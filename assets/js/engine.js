const NexiaEngine = {
    render: (data) => {
        const grid = document.getElementById('tools');
        grid.innerHTML = data.map(app => `
            <div class="kali-card p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-2 text-white">${app.name}</h3>
                <p class="text-gray-400 text-sm mb-4">${app.description}</p>
                <button onclick="navigator.clipboard.writeText('${app.install_cmd}'); alert('تم النسخ')" 
                        class="w-full bg-cyber-green text-white py-2 font-bold text-sm hover:bg-green-600 transition">تثبيت</button>
            </div>
        `).join('');
    }
};
