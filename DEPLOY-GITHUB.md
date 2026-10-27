# Auto-deploy: GitHub → Namecheap

Every push to the `main` branch:
1. builds the site on GitHub's servers (Namecheap shared hosting is too small to build it),
2. uploads only what changed to `~/opencanvas` on the Namecheap server over SSH,
3. restarts the Node.js app,
4. checks that https://www.opencmarketing.com answers.

Watch it under the repository's **Actions** tab. A run takes about 3 minutes.

## One-time setup
1. **Namecheap cPanel → Exclusive for Namecheap Customers → Manage Shell →** switch SSH on.
2. **cPanel → SSH Access → Manage SSH Keys:** the deploy key `github-deploy` is imported and **Authorized**.
3. **GitHub → repository → Settings → Secrets and variables → Actions → New repository secret:**
   name `SSH_PRIVATE_KEY`, value = the private deploy key (the whole text, including the BEGIN/END lines).
4. Optional **Variables** (same page, Variables tab): `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`.

Server settings that are not in the code (email/SMTP, `CANONICAL_REDIRECT`) stay in cPanel → Setup Node.js App → Environment variables. Deploys never touch them.

## Making a change
Edit files (on github.com with the pencil icon, or locally), commit to `main`, and the site updates itself.
To redeploy without changes: Actions → Deploy to Namecheap → Run workflow.

## If a deploy fails
- "Permission denied (publickey)": the secret is missing or the key isn't Authorized in cPanel.
- "Connection refused / timed out": SSH is switched off in Manage Shell.
- The check step fails: open cPanel → Setup Node.js App, click Restart, and look at the app's log.
