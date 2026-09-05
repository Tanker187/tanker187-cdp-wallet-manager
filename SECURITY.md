# Security Policy

## Reporting a vulnerability

Please report suspected security vulnerabilities privately through GitHub rather than opening a public issue. Include the affected component, reproduction steps, impact, and relevant logs or screenshots. Do not include real credentials or other secrets in a report.

If GitHub private vulnerability reporting is enabled, use that channel. Otherwise, contact the repository owner privately through GitHub.

## Secrets

- Never commit API keys, private keys, passwords, database credentials, or production tokens.
- Store secrets in environment variables or the deployment platform's secret store.
- Rotate any credential that may have been exposed in Git history.
- Treat `NEXT_PUBLIC_*` and other client-exposed variables as public; never place sensitive secrets in them.
