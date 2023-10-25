
	- Secrets should not be in workflows
		○ and values dirivied from secrets
			§ registered as a secret
	- CODEOWNERS feature to restrict changes to workflows
	- Injection attacks
		○ github.*
		○ What about secondary injection (passing to actions)
	- Use OpenID Connect to access cloud resources
	- Third Party Actions
		○ use full length commit SHA
	- Don’t use private runners on public repos
	- Use minimum scope for permissions
	- Setting up an internal marketplace for GitHub Actions
		○ https://devopsjournal.io/blog/2021/02/06/GitHub-Actions
	- Use an action instead of an inline script
		○ Why: https://blog.gitguardian.com/github-actions-security-cheat-sheet/
	- Use intermediate environment variables


Non-Security Best Practices
	- Set timeouts for workflows
		○ https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes
	- Consider if (third-party) actions are really needed
	- Consider setting up a concurrency strategy
		○ https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency
		○ It's often not necessary or useful to run CI on intermediate commits if a new commit has been pushed in the meantime.
			concurrency:
			  group: ${{ github.workflow }}-${{ github.ref }}
			  cancel-in-progress: ${{ startsWith(github.ref, 'refs/pull/') }}
	- 
		
		
References:
	- https://engineering.salesforce.com/github-actions-security-best-practices-b8f9df5c75f5/
	- https://blog.gitguardian.com/github-actions-security-cheat-sheet/
	
Tools:
	- https://github.com/tindersec/gh-workflow-auditor
	- https://github.blog/2019-10-01-new-workflow-editor-for-github-actions/
	- SempGrep
	
Other Researchers:
	- https://r2c.dev/blog/2021/protect-your-github-actions-with-semgrep/
	- https://github.com/rhysd/actionlint
	- https://medium.com/tinder/exploiting-github-actions-on-open-source-projects-5d93936d189f
