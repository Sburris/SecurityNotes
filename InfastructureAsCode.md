# Infrastructure-As-Code

## Overview

This page contains notes, references, and tools dealing with Infrastructure-as-Code.

## Tools

- OPA/Conftest
- [checkov](https://www.checkov.io/)
  - [GitHub](https://github.com/bridgecrewio/checkov/)
  - A static code analysis tool for insrastructure as code (IaC) and also a software composition analysis (SCA) tool for images and open source packages.
  - License: Apache v2
  - [GitHub Action from maintainer](https://github.com/marketplace/actions/checkov-github-action)
  - Has a lot of checks, I don't see an apperent mapping from checks to any sort of standard (CIS, NIST, etc.)
    - From Docs:
      - In addition, Checkov scans for compliance with common industry standards such as the Center for Internet Security (CIS) and Amazon Web Services (AWS) Foundations Benchmark.
    - Need to find where this is at
  - Output formats: cli, cyclonedx, json, junitxml, github_failed_only, sarif
    - Can do multiple output formats at the same time.
  - Can do external checks? (flag: --external-check)
    - Can do Yaml or python checks (doesn't look like it uses OPA/Rego)
  - soft-fail flag option to always return exit code 0
  - Need to take a closer look at the documentation that comes with the results, to see how good it is

options
- --list - List checks
- --output - cli, cyclonedx,json,junitxml,github_failed_only,sarif


## References

## Notes

## TODO
