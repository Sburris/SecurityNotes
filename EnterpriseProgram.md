# What makes a AppSec program an enterprise level

## Outline

- Developers can scan locally
- Developers can put it into their pipeline
  - settings can be different then corporate
- central security team can easily plug into all pipelines
- ability to run jobs on a timed basis (cron)
- ability to run on CI/CD events (pr/deploy)
- ability to customize rules for organization
  - adding and deleting/removing
  - handle exceptions and false positives
  - possibly filter for auto-reporting, false positives, manual review
- centralized logging/metrics per tool
- feed into a centralized issue tracker that supports multiple tool input

## Developers can scan locally

Depending on the temperament of the developers, the ability to scan locally can fall into one of two areas:

- Wanting to scan so they don't commit any new findings (showing their commit is clean)
- When fixing issues identified, the ability to check that their solution worked.

Anything we can do to reduce the time time between when code is written to when the developer is notified of the fix the better.

If possible having an IDE plugin that automatically scans for the vulnerabilities during development would be best.  But this is not always going to work, if the scan takes a long time or requires extensive resources (DAST scanners or and some static scanners that require fully compilable code to do any sort of scan).

One of the problems that could be run into is the configuration to be able to scan locally in the same manner that is scan in a CI/CD pipeline.  Reasons why things may different between two different scans:

- Scanning of data could be different
  - Dependencies may not be pulled down (ie. looking at package.json/package-lock.json vs the node_module to see what is actually on disk)
- Configuration differences
  - The centralized scanner may be using a different ruleset, custom filters, etc. that the developer may not have and/or not want to use.
  - The ruleset/settings could have recently been updated but the changes have not informally filtered down to all scanners.
  - Any pre-processing of source before it is sent to the scanner
  - Any post-processing that happens to help remove false positives

One of the advantages of scanning locally it allows the developer to determine the settings.  They may decided to use less restrictive settings to allow for increased speed at the expense of finding problems latter on.

Somethings that can be interesting is there needs to be customization done between the raw source code and what is presented to the scanner.  Making

## Developers can put it into their pipeline
## settings can be different then corporate
## central security team can easily plug into all pipelines
## ability to run jobs on a timed basis (cron)
## ability to run on CI/CD events (pr/deploy)
## ability to customize rules for organization
### adding and deleting/removing
### handle exceptions and false positives
### possibly filter for auto-reporting, false positives, manual review
## centralized logging/metrics per tool
## feed into a centralized issue tracker that supports multiple tool input

- decouple scan, from aggregating results, reporting, and ticketing system

## Problems

- Inconsistent results depending on how it was scanned
- new rules can produce new results in untouched code, this could be an issue if it breaks the build
- problem when aggregating from multiple different scan locations, inconsistent coverage would lead to a lot of thrashing in the reporting tool
- How does this methodology work with SaaS offerings?
- How to manage triage new rules
