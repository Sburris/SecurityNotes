
Checklist
- Credentials
  - Are they static?
  - What is the lifetime of them?
  - How/when are they rotated?
  - Any checks looking for compromise?
- OIDC
  - Is this used? Is it available?

Using long lived static secrets is dangerous.  Should migrate to OpenID Connect (OIDC), CI/CD venders are supporting it more now.

1. Configure OIDC provider trust
1. CI System generates JWT
1. CI Pipeline sends JWT to Cloud Provider
1. Cloud Provider sends short-lived access token to CI Pipeline
1. CI Pipeline authenticates to Cloud Provider using token

Vender Support 
- Supported: GitHub Actions, CircleCI
- Upcoming: Jenkins (released plugin in April, waiting for widespread adoption)
- Alpha: GitLab CI/CD

TODO:

- [Top 10 CI/CD Security Risks](https://www.cidersecurity.io/top-10-cicd-security-risks/)

Reference:

- [Optimizing CI/CD Credential Hygiene - A Comparison of CI/CD Solutions](https://www.cidersecurity.io/blog/research/optimizing-ci-cd-credential-hygiene-a-comparison-of-ci-cd-solutions/)