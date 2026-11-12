# Safe Phase Electrical — concept completion checklist

This is an **unofficial speculative concept** and is not commissioned or endorsed by Safe Phase Electrical.

## Before a customer demonstration
- [ ] Build and run tests: `npm ci && npm run lint && npm test && npm run build`.
- [ ] Verify navigation, forms, keyboard focus, and mobile breakpoints (320, 375, 768, 1280px).
- [ ] Verify business identity, contact numbers, email, service coverage, accreditations, guarantees and all review sources.
- [ ] Google ratings and quotations must not be invented; confirm the exact business profile before embedding.
- [ ] Replace illustrative projects with approved real projects and licensed photographs.
- [ ] Confirm all imagery licensing and remove any unauthorised business branding.
- [ ] Keep demo-only form and unofficial concept banner visible until commissioning.
- [ ] Do not publicly deploy as the company's official website without permission.

## Production contact form
The current form only validates and confirms locally. A production form requires a server-side email provider, recipient verification, anti-spam protection, error handling, privacy notice, retention policy and consent wording. Never put email provider secrets in client-side code.

## Deployment
This is a TanStack Start SSR project with Nitro/Cloudflare configuration; validate its adapter and build output before choosing Cloudflare Pages vs Workers. Do not assume static-only hosting. Test a staging URL before domain changes.

## Customer choice A: Managed service
Offer agreed monthly hosting administration, uptime monitoring, security/dependency updates, backups where applicable, and a fixed allowance of content edits. State response times, exclusions, cancellation, data ownership, and handover terms in writing.

## Customer choice B: Full handover
Transfer the GitHub repository, deployment configuration, assets with licences, domain/DNS control, verified form provider account, analytics access, documentation and deployment instructions. Agree on any optional post-handover support.

## Commercial acceptance
Agree fixed scope, revision rounds, milestones, deposit, balance, ongoing service terms and ownership before implementing commissioned changes.
