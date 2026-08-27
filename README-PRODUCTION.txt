RUMAH NARAYA — DASHBOARD PRODUKSI
Cloudflare Pages Direct Upload tidak mendukung Pages Functions. Untuk login server-side + database, deploy melalui Git integration atau Wrangler.

1. Buat repository GitHub dan upload seluruh isi paket.
2. Hubungkan repository ke Cloudflare Pages.
3. Buat D1 database: rumah-naraya-db.
4. Jalankan schema.sql.
5. Bind D1 ke Pages Functions dengan variable DB.
6. Tambahkan secrets: ADMIN_EMAIL, ADMIN_PASSWORD, SESSION_SECRET.
7. Redeploy.
8. Dashboard: /admin.html

D1 tersedia pada Workers Free dengan batas penggunaan harian/storage. Pages Functions juga memiliki kuota Free.
