- [Leaking Secrets From GitHub Actions: Reading Files and Envronment Varibles, Intercepting Network/Process COmmunication, Dumping Memory](https://karimrahal.com/2023/01/05/github-actions-leaking-secrets/)
  - If you have command injection in GitHub Action workflow, Karim Rahal walks through different ways to steal secrets.
- [Improve GitHub Actions OIDC security posture with custom issuer](https://awsteele.com/blog/2023/01/11/improve-github-actions-oidc-security-posture-with-custom-issuer.html)
  - If you use GitHub Enterprise Cloud, Aidan Steele describes how AWS org admins can lock down role creation to only your GitHub Enterprise, makigng use of GitHub Actions OIDC safer.
- [GHAT](https://github.com/JamesWoolfenden/ghat)
  - A tool for updating dependencies in your GitHub Actions to their latest versions, using immutable hashes instead of mutable tags.
- [Novel Pipeline Vulnerability Discovered; Rust Found Vulnerabile](https://www.legitsecurity.com/blog/artifact-poisoning-vulnerability-discovered-in-rust)
- [GitHub Actions imporovements ofr fork and pull requests workflows](https://github.blog/2020-08-03-github-actions-improvements-for-fork-and-pull-request-workflows/)

- [From OWASP Slack](https://owasp.slack.com/archives/C1KF6H39T/p1670360372835099)
  - talking about how orgs manage github actions, one person talks about how their org reviews actions before making them intenral (external actions are not allowed)
    - Yes, we have set up internal action which runs a few tasks.
      1. Perform SCA, SAST using semgrep,
      1. Reliability and maintenance, whether the repo owner is an org or individual and how often the security issues/packages updated
      1. Perform malware check
      1. Check all outgoing connection ( this is trivial via grep and also checks some packages)
      1. Check weather the use case includes access to sensitive information.
  - Some of the checks are manual however we created one GitHub action to perform executable tasks and then security engineer reviews all the information and approves or rejects (edited) 