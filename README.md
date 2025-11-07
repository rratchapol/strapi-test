# 🚀 Strapi CMS - TEDFund Project

โปรเจกต์ Strapi CMS สำหรับจัดการข้อมูล Product และ Category พร้อม Docker และ PostgreSQL

## 📋 สิ่งที่ต้องมีก่อนเริ่มใช้งาน

- Node.js (เวอร์ชัน 18.x - 22.x)
- npm หรือ yarn
- Docker และ Docker Compose (สำหรับรัน PostgreSQL)

## 🛠️ วิธีการติดตั้งและใช้งาน

### 1. Clone Repository

```bash
git clone <repository-url>
cd strapi-docker
```

### 2. ติดตั้ง Dependencies

```bash
npm install
# หรือ
yarn install
```

### 3. ตั้งค่า Environment Variables

สร้างไฟล์ `.env` จาก `.env.example`:

```bash
cp .env.example .env
```

แก้ไขค่าใน `.env` (⚠️ **สำคัญ**: เปลี่ยนค่าเหล่านี้ให้เป็นค่าที่ปลอดภัย):

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS="your-random-key-1,your-random-key-2"
API_TOKEN_SALT=your-random-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
ENCRYPTION_KEY=your-encryption-key
```

**วิธีสร้าง Secret Keys:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 4. เริ่มต้น PostgreSQL ด้วย Docker

```bash
docker-compose up -d
```

ตรวจสอบว่า PostgreSQL ทำงาน:
```bash
docker ps
```

**ข้อมูล Database:**
- Host: `localhost`
- Port: `5432`
- Database: `strapi`
- User: `ted`
- Password: `tedpassword`

### 5. เพิ่มการตั้งค่า Database ใน `.env`

เพิ่มบรรทัดเหล่านี้ใน `.env`:

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=ted
DATABASE_PASSWORD=tedpassword
```

### 6. เริ่มใช้งาน Strapi

**Development Mode (มี auto-reload):**
```bash
npm run develop
# หรือ
yarn develop
```

**Production Mode:**
```bash
npm run build
npm run start
# หรือ
yarn build
yarn start
```

### 7. เข้าใช้งาน Admin Panel

เปิดเบราว์เซอร์ไปที่: `http://localhost:1337/admin`

ครั้งแรกจะต้องสร้าง Admin Account

## 📦 โครงสร้างโปรเจกต์

```
strapi-docker/
├── config/              # ไฟล์ Configuration
│   ├── database.ts      # ตั้งค่า Database
│   ├── server.ts        # ตั้งค่า Server
│   ├── admin.ts         # ตั้งค่า Admin Panel
│   └── plugins.ts       # ตั้งค่า Plugins
├── src/
│   ├── api/
│   │   ├── product/     # Content Type: Product
│   │   └── category/    # Content Type: Category
│   ├── admin/           # Admin UI Customization
│   └── index.ts         # Entry Point
├── database/
│   └── migrations/      # Database Migrations
├── public/              # Static Files
├── docker-compose.yml   # Docker Configuration
├── .env.example         # ตัวอย่างค่า Environment
└── package.json
```

## 🗂️ Content Types ที่มีอยู่

### Product
- `name` (string) - ชื่อสินค้า
- `description` (richtext) - รายละเอียด
- `price` (decimal) - ราคา
- `available` (boolean) - สถานะพร้อมขาย
- `categories` (relation) - หมวดหมู่

### Category
- `name` (string) - ชื่อหมวดหมู่
- `products` (relation) - สินค้าในหมวดหมู่

## 🔧 คำสั่งที่ใช้บ่อย

```bash
# Development
npm run develop

# Build Admin Panel
npm run build

# Start Production Server
npm run start

# Open Strapi Console
npm run console

# Upgrade Strapi
npm run upgrade
```

## 🐳 Docker Commands

```bash
# เริ่ม PostgreSQL
docker-compose up -d

# หยุด PostgreSQL
docker-compose down

# ดูข้อมูล Logs
docker-compose logs -f

# ลบข้อมูลทั้งหมด (⚠️ ระวัง!)
docker-compose down -v
```

## 🔐 Security

⚠️ **สำคัญ:**
- เปลี่ยนค่า Secret Keys ทั้งหมดใน `.env` ก่อนใช้งาน Production
- อย่า commit ไฟล์ `.env` เข้า Git
- ใช้ Strong Password สำหรับ Admin Account

## 📚 เอกสารเพิ่มเติม

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi Tutorials](https://strapi.io/tutorials)
- [Plugin SEO](https://market.strapi.io/plugins/@strapi-plugin-seo)

## 🆘 แก้ปัญหาเบื้องต้น

### Database Connection Error
- ตรวจสอบว่า Docker PostgreSQL ทำงานอยู่: `docker ps`
- ตรวจสอบค่า Database ใน `.env` ให้ตรงกับ `docker-compose.yml`

### Port 1337 ถูกใช้งาน
เปลี่ยน PORT ในไฟล์ `.env`:
```env
PORT=3000
```

### Admin Panel ไม่ขึ้น
ลอง build ใหม่:
```bash
npm run build
npm run develop
```

## 📝 License

ดูรายละเอียดใน `license.txt`

---

💡 **Tips:** ใช้ `yarn develop` แทน `npm run develop` เพื่อความเร็วในการติดตั้ง packages