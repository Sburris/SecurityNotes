## Other research

- https://r2c.dev/blog/2021/protect-your-github-actions-with-semgrep/
- https://github.com/rhysd/actionlint
- https://medium.com/tinder/exploiting-github-actions-on-open-source-projects-5d93936d189f
	
## General References

- https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps/
- https://docs.github.com/en/actions/guides
- https://github.com/orgs/community/discussions/
- https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions
- https://github.com/sdras/awesome-actions
- https://www.jetbrains.com/teamcity/ci-cd-guide/ci-cd-best-practices/
- https://levelup.gitconnected.com/do-github-action-like-a-pro-594bcb813b22
- https://securityboulevard.com/2021/10/top-10-github-actions-you-should-use-to-set-up-your-ci-cd-pipeline/
  - referneces some third-party actions
- https://www.infinyon.com/blog/2021/04/github-actions-best-practices/
- https://tech.gadventures.com/things-i-learned-making-my-first-github-action-84f528a97015
- https://fireship.io/lessons/five-useful-github-actions-examples/
- https://www.plainconcepts.com/what-is-github-actions/
- https://techbeacon.com/app-dev-testing/how-put-github-actions-work-your-software-team
- https://betterprogramming.pub/improve-your-workflow-with-these-4-github-actions-7b2fbd29f752

## Tool

- https://github.com/tindersec/gh-workflow-auditor
- https://github.blog/2019-10-01-new-workflow-editor-for-github-actions/

## GitHub Resources/References

- https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions

## Best Practices

- https://exercism.org/docs/building/github/gha-best-practices
- https://www.datree.io/resources/github-actions-best-practices
- https://blog.gitguardian.com/github-actions-security-cheat-sheet/
- https://cloud.netapp.com/blog/cvo-blg-5-github-actions-cicd-best-practices
- https://devopsjournal.io/blog/2021/02/06/GitHub-Actions
- https://humanwhocodes.com/blog/2020/07/safely-use-github-actions-in-organizations/
- https://securityboulevard.com/2021/10/top-10-github-actions-you-should-use-to-set-up-your-ci-cd-pipeline/
- https://engineering.salesforce.com/github-actions-security-best-practices-b8f9df5c75f5/
- 
- https://nathandavison.com/blog/github-actions-and-the-threat-of-malicious-pull-requests
	

## Videos

- GitHub Actions Security Best Practices with Reethi Kotti
  - Github Actions Security Best Practices with Reethi Kotti
- Keeping your GitHub Actions and workflows secure - GitHub Checkout
  - Keeping your GitHub Actions and workflows secure - GitHub Checkout

- Secrets should not be in workflows, they should be in secrets
- If a secret is used to generate another sensitive value within a workflow, that generated value should be formally registered as a secret
  - If the value is transformed in some way (Base64 or URL-encoded), that should be registered as well
- Use the CODEOWNERS feature to restrict changes to workflows.
  - https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners
- Context
  - Attacker controlled input in the `github` context.  Normally in: body, default_branch, email, head_ref, label, message, name, page_name, ref, and title
    - examples: github.event.issue.title, github.event.pull_request.body
- Injection attacks
  - the `run` command executes within a temporary shell script on the runner
  - Good practices for mitigating script injection attacks
    - Using an action instead of an inline script (recommended)
    - Using an intermediate environment variable
- Using OpenID Connect to access cloud resources
- Using third-party actions
  - Pin actions to a full length commit SHA
  - Audit the source code of the action
  - Pin actions to a tag only if you trust the creator
- Reusable workflows and starter workflows
  - https://docs.github.com/en/actions/using-workflows/reusing-workflows
- Preventing GitHub Actions from creating or approving pull requests
  - https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#preventing-github-actions-from-creating-or-approving-pull-requests
  - https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#preventing-github-actions-from-creating-or-approving-pull-requests
- Using OpenSSF Scorecard to secure workflows
  - https://github.com/ossf/scorecard
  - https://github.com/marketplace/actions/ossf-scorecard-action
  - https://github.com/actions/starter-workflows
		
## IMPORTANT IMPORTANT

### Robs blog - GitHub Actions & Security: Best practices

Source: https://devopsjournal.io/blog/2021/02/06/GitHub-Actions

- Setting up an intenral marketplace for GitHub Actions
- Forking action repositories
  - Verify the code the Action is executing
  - Pinning versions
  - Forking repositories
  - Keeping your forks up to date
- Secure your private runners
  - Limit the access to your private runner
  - Do not use a runner for more than one repository
  - Never use a private runner for your public repositories
- Do not reuse a runner, ever!
- Run your own action in a container
- Run your runners in a Kubernetes cluster
- Untrusted input
- Preventing pwn requests

### Exercism - GitHub Actions: Best Practices

Source: https://exercism.org/docs/building/github/gha-best-practices

Not security focused

- Set timeouts for workflows
  - https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes
- Consider if (third-party) actions are really needed
- Limit scope of workflow token
  - https://docs.github.com/en/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token
- Pin actions to SHAs
  - not to a branch or tag
- Consider setting up a concurrency strategy
  - https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency
  - It's often not necessary or useful to run CI on intermediate commits if a new commit has been pushed in the meantime.
        concurrency:
            group: ${{ github.workflow }}-${{ github.ref }}
            cancel-in-progress: ${{ startsWith(github.ref, 'refs/pull/') }}
			

### datree - Top 7 GitHub Actions best practices guide

Source: https://www.datree.io/resources/github-actions-best-practices

- Keep your Actions minimal
- Don't install dependencies unnecessarily
  - publish the entire node_modules folder if publishing a standalone Action  (and working on a Node-based project)
  - GitHub's caching mechanism
    - https://github.com/actions/cache
- Never hardcode secrets
- Limit environment variables to the narrowest possible scope
- Ensure every repository contains a CI/CD workflow
- Store authors in Action metadata to promote code ownership
  - https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions
- Don't use self-hosted runners in a public repository
  - https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on
  - https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories

### GitGuardian - GitHub Actions Security Best Practices [cheat sheet included]
Source: https://blog.gitguardian.com/github-actions-security-cheat-sheet/

- Set minimum scope for credentials
- Use specific action version tags
- Don't use plain-text secrets
- Don't reference values that you don't control
- Use an action instead of an inline script
- Use an intermediate environment variable
- Only run workflows on trusted code
- Harden your Action runners (and don't use self-hosted runners for public repositories!)
- Be extra careful with the `pull_request_target` trigger
  - vulnerability: pwn requests
  - TL;DR: if you're using the `on:pull_request_target' even in GitHub Actions, never check out the pull requet's code.
- Prefer OpenID Connect to access cloud resources
	
### NetApp Cloud Central - 5 GitHub Actions CI/CD Best Practices

Source: https://cloud.netapp.com/blog/cvo-blg-5-github-actions-cicd-best-practices

- Using Self-Hosted Runners in GitHub Actions Workflows
- Leveraging GitHub Actions Marketplace
- Handling Uncertified Actions
  - marketplace badges
    - https://docs.github.com/en/developers/github-marketplace/github-marketplace-overview/about-marketplace-badges
    - Question: how to tell what action ahs it, is there a restriction that can be put on
- Managing GitHub Actions Secrets
- Self-Hosted Private Runner Reusability and Storage Challenges
	
### Human Who Codes - How to safely use GitHub Actions in organization

Source: https://humanwhocodes.com/blog/2020/07/safely-use-github-actions-in-organizations/

- Credential stealing risk
  - Showing secrets in the log
  - Remote credential stealing
- Protection strategies
  - Protect yourself
  - Protect your branches
    - Require pull requests before merging
    - Requred approval reviews
    - Dismiss stale pull request approvals when new commits are pushed
    - Require review from Code Owners
    - Require status checks to pass before merging
    - Include administrators
    - Allow force pushes
    - Allow deletions
  - Limit scopes
    - Favor repository-only secrets
    - Limit organization secret scope
    - Limit the number of admins
    - Minimize credentials
- Workflow best practices
  - Disabling Actions
  - Use only local Actions
  - Identify safe Actions
  - Provide secrets one command at a time

## IMPORTANT -- NEED TO FINISH

### salesforce - GitHub Actions Security Best Practices

Source: https://engineering.salesforce.com/github-actions-security-best-practices-b8f9df5c75f5/

- What can go wrong?
  - Third Party Actions
  - Secrets and other sensitive information
  - By-products of workflow runs
  - Forked repositories
  - Malicious docker images
  - Service Containers
  - Runner escape
  - Workflow commands
  - Improper configuration of self-hosted runners
  - Third party product vulnerabilitlies in Actions
- Best Practices
  - Recommended Third Party Actions to Use
    - GitHub provided standard actions
    - Actions whos creators have been verified by GitHub
    - Actions that have been released by trusted vendors of your organization
  - Writing Secure Workflows
    - Use sable version tags or SHA commit hash
    - Do NOT use @master tag while calling an Action
    - Use only official or docker certified images when running jobs on docker containers
    - When pulling docker images, use the version tag (preferabily with major version)
    - Do NOT use the add::mask command to prevent sensitive values from appearing as plaintext in workflow logs
      - If used with environment variables, plaintext values are printed as part of the execution envrionment into the logs
    - Do NOT overwrite GitHub default variables (GITHUB_*)
    - Do NOT store sensitive values in a file in the cache path
      - <home>/.docker/config.json
    - To create the unique key that identifies a cache, using context data is a common practice
      - However, do NOT use sensitive values like github.token or github.actor for key generation
      - Instead use a hash of a file like "requirements.txt" or "package-lock.json" in combination with system realted information like runner.os
    - Do NOT dump github context data into logs as I might contain sensitive information
    - Artifacts can be created for sharing information between jobs in the same workflow
      - Do NOT store sensitive information in artifacts as they are available to anyone with access to the repository
      - Artifacts are automatically deleted after 90 days. Safely upload them into an s3 bucket if needed beyond that time period
    - Be aware of job execution limits
      - https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration#usage-limits
    - Maintain caution when adding outside collaborators - users with read permissions can view logs for workflow failures, view workflow history, as well as search and download logs
      - External collaborators with write access to a repository can modify permissions associated with a GITHUB_TOKEN. This can lead to elevated privileges and possiblility for other attacks
                ® https://medium.com/cider-sec/bypassing-required-reviews-using-github-actions-6e1b29135cc7
      - If adding external collaborators is required, follow the principle of least privilege and assign only read permissions for minimal disclosure
  - Using GitHub Secrets the right way
  - Useful Settings
  - Recommendations for Custom Actions
  - Public Repositories
			
		
