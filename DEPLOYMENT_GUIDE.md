# Инструкция по размещению сайта на сервере

## Содержание
1. [Требования к серверу](#требования)
2. [Установка зависимостей](#установка)
3. [Настройка базы данных MySQL](#база-данных)
4. [Настройка окружения](#окружение)
5. [Сборка и запуск](#запуск)
6. [Настройка Nginx + SSL](#nginx)
7. [Системный сервис (systemd)](#systemd)
8. [Настройка домена](#домен)
9. [Обновление сайта](#обновление)

---

## 1. Требования к серверу {#требования}

| Компонент | Минимум | Рекомендуется |
|-----------|---------|---------------|
| CPU | 1 ядро | 2 ядра |
| RAM | 1 GB | 2 GB |
| Диск | 10 GB SSD | 20 GB SSD |
| OS | Ubuntu 20.04/22.04 | Ubuntu 22.04 LTS |

**Необходимое ПО:**
- Node.js 20+
- MySQL 8.0+
- Nginx
- PM2 (менеджер процессов)
- Git

---

## 2. Установка зависимостей {#установка}

### Установка Node.js 20
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Установка MySQL
```bash
sudo apt update
sudo apt install -y mysql-server
sudo mysql_secure_installation
```

### Установка Nginx и PM2
```bash
sudo apt install -y nginx
sudo npm install -g pm2
```

### Установка Git
```bash
sudo apt install -y git
```

---

## 3. Настройка базы данных MySQL {#база-данных}

### Создание базы данных
```bash
sudo mysql -u root -p
```

```sql
CREATE DATABASE lawyers_registry CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'registry_user'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON lawyers_registry.* TO 'registry_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### Тест подключения
```bash
mysql -u registry_user -p -e "SHOW DATABASES;"
```

---

## 4. Настройка окружения {#окружение}

### Клонирование проекта
```bash
cd /var/www
git clone <your-repo-url> registry
 cd registry
```

### Установка зависимостей
```bash
npm install
```

### Настройка переменных окружения
Создайте файл `.env` в корне проекта:

```bash
nano .env
```

Заполните следующие переменные:

```env
# Database
DATABASE_URL=mysql://registry_user:your_secure_password@localhost:3306/lawyers_registry

# OAuth (для авторизации через Kimi)
VITE_KIMI_AUTH_URL=https://your-auth-url
VITE_APP_ID=your-app-id
APP_SECRET=your-app-secret

# Session
SESSION_SECRET=your_random_session_secret_string
```

**Важно:** Замените `your_secure_password` на реальный пароль от БД, остальные значения — из портала Kimi.

### Применение миграций базы данных
```bash
npm run db:push
```

---

## 5. Сборка и запуск {#запуск}

### Сборка проекта
```bash
npm run build
```

### Запуск через PM2
```bash
pm2 start dist/boot.js --name "lawyers-registry"
pm2 save
pm2 startup
```

### Проверка статуса
```bash
pm2 status
pm2 logs lawyers-registry
```

Сайт будет доступен на порту 3000.

---

## 6. Настройка Nginx + SSL {#nginx}

### Создание конфигурации Nginx
```bash
sudo nano /etc/nginx/sites-available/registry
```

```nginx
server {
    listen 80;
    server_name ваш-домен.ru www.ваш-домен.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # API endpoint
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Активация конфигурации
```bash
sudo ln -s /etc/nginx/sites-available/registry /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Установка SSL (Let's Encrypt)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d ваш-домен.ru -d www.ваш-домен.ru
```

Certbot автоматически настроит HTTPS и обновление сертификатов.

---

## 7. Системный сервис (systemd) {#systemd}

Альтернативный вариант запуска через systemd (вместо PM2):

```bash
sudo nano /etc/systemd/system/lawyers-registry.service
```

```ini
[Unit]
Description=Lawyers Registry Website
After=network.target mysql.service

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/registry
ExecStart=/usr/bin/node dist/boot.js
Restart=on-failure
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable lawyers-registry
sudo systemctl start lawyers-registry
sudo systemctl status lawyers-registry
```

---

## 8. Настройка домена {#домен}

### Настройка DNS
В панели управления доменом добавьте A-записи:

| Тип | Имя | Значение |
|-----|-----|----------|
| A | @ | IP-адрес сервера |
| A | www | IP-адрес сервера |

### Проверка
```bash
nslookup ваш-домен.ru
```

---

## 9. Обновление сайта {#обновление}

Когда нужно обновить сайт:

```bash
cd /var/www/registry
git pull origin main
npm install
npm run build

# Если PM2:
pm2 restart lawyers-registry

# Если systemd:
sudo systemctl restart lawyers-registry
```

---

## Подключение Яндекс.Формы

1. Создайте форму в сервисе Яндекс.Формы: https://forms.yandex.ru
2. Получите ссылку на форму
3. Замените `https://forms.yandex.ru` в коде на вашу реальную ссылку:
   - Файлы: `src/pages/HomePage.tsx`, `src/pages/AboutPage.tsx`, `src/pages/CriteriaPage.tsx`, `src/pages/ContactsPage.tsx`, `src/sections/Navigation.tsx`
   - Найдите все вхождения `href="https://forms.yandex.ru"` и замените
4. Пересоберите проект: `npm run build`
5. Перезапустите сервис

---

## Полезные команды

```bash
# Логи приложения
pm2 logs lawyers-registry

# Перезапуск
pm2 restart lawyers-registry

# Мониторинг
pm2 monit

# Проверка Nginx
sudo nginx -t

# Перезапуск Nginx
sudo systemctl restart nginx

# Статус MySQL
sudo systemctl status mysql

# Подключение к БД
mysql -u registry_user -p lawyers_registry
```

---

## Возможные проблемы

### Порт 3000 занят
```bash
lsof -ti:3000 | xargs kill -9
```

### Ошибка подключения к MySQL
Проверьте `.env` и права пользователя БД:
```bash
mysql -u registry_user -p -e "SHOW DATABASES;"
```

### 502 Bad Gateway (Nginx)
1. Проверьте, что приложение запущено: `pm2 status`
2. Проверьте логи: `pm2 logs`
3. Проверьте firewall: `sudo ufw status`

### Права на файлы
```bash
sudo chown -R www-data:www-data /var/www/registry
sudo chmod -R 755 /var/www/registry
```
