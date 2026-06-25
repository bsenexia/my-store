# 1. إنشاء هيكل الملفات
mkdir -p assets
touch assets/style.css

# 2. إنشاء ملف البيانات الاحترافي
cat << JSON > apps.json
[
  {
    "id": 1,
    "name": "Nexia Scanner",
    "category": "Cybersecurity",
    "description": "أداة متقدمة لفحص الثغرات والشبكات.",
    "download_url": "#",
    "icon": "https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
  }
]
JSON

# 3. إنشاء واجهة المتجر الاحترافية (index.html)
cat << HTML > index.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexia | Global Cyber Store</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-white min-h-screen">
    <nav class="p-6 border-b border-slate-700 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-blue-500">Nexia Store</h1>
    </nav>
    <main class="container mx-auto p-4">
        <div id="tools" class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
    </main>
    <script>
        fetch('apps.json').then(r => r.json()).then(data => {
            document.getElementById('tools').innerHTML = data.map(app => \`
                <div class="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition">
                    <img src="\${app.icon}" class="w-16 h-16 mb-4">
                    <h2 class="text-2xl font-bold mb-2">\${app.name}</h2>
                    <p class="text-slate-400 mb-4">\${app.description}</p>
                    <a href="\${app.download_url}" class="block text-center bg-blue-600 py-2 rounded-lg font-bold">تحميل</a>
                </div>
            \`).join('');
        });
    </script>
</body>
</html>
HTML

# 4. تهيئة Git
git init
git branch -M main
git add .
git commit -m "إطلاق متجر Nexia العالمي"
echo "تم إنشاء متجر Nexia بنجاح!"
