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


### 3. เริ่มต้น PostgreSQL ด้วย Docker

```bash
docker-compose up -d
```

ตรวจสอบว่า PostgreSQL ทำงาน:
```bash
docker ps
```


### 4. เริ่มใช้งาน Strapi

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

### 5. เข้าใช้งาน Admin Panel

เปิดเบราว์เซอร์ไปที่: `http://localhost:1337/admin`

ครั้งแรกจะต้องสร้าง Admin Account
