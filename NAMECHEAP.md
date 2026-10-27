# Deploy on Namecheap shared hosting

This works on Namecheap's Stellar, Stellar Plus and Stellar Business plans. All three include cPanel's **Setup Node.js App**.

- **Time:** about 20 minutes, plus DNS propagation if the domain is new.
- **No building on the server:** the package `opencanvas-namecheap.zip` is already built. Shared hosting doesn't have enough memory to build a Next.js site, so you only upload and start it.

---

## Before you start

1. **Point the domain at your hosting.**
   - *Domain bought at Namecheap:*
     1. Go to **Domain List → Manage → Nameservers**.
     2. Choose **Namecheap Web Hosting DNS**.
   - *Domain bought elsewhere:*
     1. Set the nameservers to `dns1.namecheaphosting.com` and `dns2.namecheaphosting.com`.
     2. Add the domain in cPanel under **Domains** if it isn't your main domain.

   DNS changes can take a few hours to reach everyone.
2. **Switch on HTTPS.** In cPanel, open **SSL/TLS Status** and click **Run AutoSSL**. Wait until the domain and `www.` show a green padlock.
3. **Empty the web folder.** In **File Manager**, open `public_html` and delete or rename any `index.html`, `index.php` or `default.html`. Leave `.well-known` and `cgi-bin` alone. Apache serves those files before Node.js gets the request, so if they stay, visitors see the old page instead of your site.

---

## 1. Upload the site

1. In cPanel, open **File Manager** and go to your **home folder** (`/home/yourcpaneluser`), *not* `public_html`.
2. Click **Upload** and choose `opencanvas-namecheap.zip`.
3. Back in File Manager, right-click the zip → **Extract** → **Extract Files**. This creates the folder `/home/yourcpaneluser/opencanvas`.
4. Delete the zip.

The `opencanvas` folder should contain `app.js`, `package.json` and a folder called `site`. Don't rename `site`, and don't add a `node_modules` folder next to `app.js`. cPanel creates that link itself.

---

## 2. Create the Node.js app

cPanel → **Setup Node.js App** → **Create Application**:

| Field | Value |
|---|---|
| Node.js version | **22.x** (20.x also works; anything older won't run) |
| Application mode | **Production** |
| Application root | `opencanvas` |
| Application URL | your domain, path left **empty** |
| Application startup file | `app.js` |
| Passenger log file | `/home/yourcpaneluser/logs/opencanvas.log` (optional; useful if something goes wrong) |

Click **Create**.

**Don't run "Run NPM Install".** Everything the site needs is already inside `site/`. Clicking it does no harm, but it isn't necessary.

---

## 3. Add environment variables

On the same app page, click **Add Variable** for each of these, then click **Save**:

| Name | Value | Why |
|---|---|---|
| `CONTACT_TO_EMAIL` | `hello@yourdomain.com` | Where audit requests arrive |
| `SMTP_HOST` | see below | Lets the forms send email |
| `SMTP_PORT` | `465` | |
| `SMTP_SECURE` | `true` | |
| `SMTP_USER` | the full mailbox address | |
| `SMTP_PASS` | the mailbox password | |
| `SMTP_FROM` | `Open Canvas Marketing <hello@yourdomain.com>` | |
| `CANONICAL_REDIRECT` | `1` | Sends `yourdomain.com` to `www.yourdomain.com` (or the other way round) so Google sees one site |
| `FORMS_WEBHOOK_URL` | *(optional)* a Zapier, Make or n8n hook URL | Sends leads to your CRM, Google Sheets or Mailchimp |
| `CHECKLIST_URL` | *(optional)* the link to your checklist PDF | Emailed to people who sign up |

**Which `SMTP_HOST` to use:**
- *cPanel email:*
  1. Create a mailbox under **Email Accounts**.
  2. Click **Connect Devices** next to it. The "Outgoing server" shown there is your `SMTP_HOST` (usually `mail.yourdomain.com`).
- *Namecheap Private Email:* use `mail.privateemail.com`.

Then click **Restart** (the circular arrow), and open your domain.

> The domain is built into the package (canonical links, sitemap, share images). If you ever change domain, the package needs rebuilding. See "Updating the site".

---

## 4. Final switches

- **Force HTTPS:** cPanel → **Domains** → switch on **Force HTTPS Redirect** for your domain.
- **Check it:**
  - `https://www.yourdomain.com/sitemap.xml`
  - `https://www.yourdomain.com/robots.txt`
  - send yourself a test audit request from `/contact`
- **Go public in search:** follow "After launch" in `README.md`:
  - Google Search Console → submit the sitemap
  - Bing Webmaster Tools
  - Google Business Profile

---

## Updating the site

On your computer, inside the project folder:

```bash
npm install
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com bash scripts/package-namecheap.sh
```

This creates `deploy/opencanvas-namecheap.zip`. Then:

1. In File Manager, delete the old `/home/yourcpaneluser/opencanvas/site` folder.
2. Upload and extract the new zip over the `opencanvas` folder.
3. Click **Restart** in Setup Node.js App. Your environment variables are kept.

On Windows, run the command in Git Bash or WSL.

---

## If something goes wrong

| What you see | Fix |
|---|---|
| Your old page, or Namecheap's default page | Something is still in `public_html` (step "Empty the web folder"), or DNS hasn't updated yet |
| "We're sorry, but something went wrong" / 503 | Check the Node.js version is 20 or 22, then click Restart. Read the Passenger log file for the exact error |
| "Application should not contain node_modules" when creating the app | Delete any `node_modules` folder directly inside `opencanvas` (the one inside `site` must stay) |
| A redirect loop after adding `CANONICAL_REDIRECT` | Remove that variable and click Restart. Then set the www redirect in cPanel → **Domains** → **Redirects** instead |
| Forms say "not connected yet" | Add the SMTP variables or `FORMS_WEBHOOK_URL`, then click Restart |
| Forms say "could not send" | The SMTP details are wrong. Use the values from **Connect Devices**, port 465, `SMTP_SECURE=true` |
| Site is slow on the first visit after a quiet period | Normal on shared hosting: the app goes to sleep when idle and wakes on the next visit. Upgrading to a VPS or using Vercel avoids this |

**About images:** to stay compatible with shared hosting, photos are served as the compressed originals (50–170 KB each) instead of being resized on the fly. Everything else is unchanged.
