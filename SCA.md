<<<<<<< HEAD
# SCA #

- [OWASP defines Component Analysis](https://owasp.org/www-community/Component_Analysis)

## Products to Try ##

- OWASP Dependency Check
- Github Dependabot
- Synk
- WhiteSource

## Vendors/Products ##

- Checkmarx - [Checkmarx Software Composition Analysis (CxSCA)](https://www.checkmarx.com/products/software-composition-analysis/)
  - Support for: Java, JavaScript, .Net (C#, F#), NodeJs, Type Script, Python, Angular, PHP, Scala, React, Groovy, Kotlin
- Contrast Security - [Contrast OSS](https://www.contrastsecurity.com/open-source-software-security)
- FOSSA - [FOSSA](https://fossa.com/)
  - Support for: JavaScript, Ruby, Clojure, Debian, Golang, Haskell, Java, RPM, Scala, PHP, iOS, Python, .NET, Rust, Perl, C, C++, and more.
- GitHub - [Dependabot](https://dependabot.com/)
  - Support for: Ruby, JavaScript, Python, PHP, Elixir, Rust, Java - Maven (BETA), Java - Gradle (BETA), .Net (BETA), Go (ALPHA), Elm (ALPHA), Submodules, Docker, Terraform (BETA), Actions (ALPHA)
  - Can create a pull request... interesting
  - Free
- GitLab - [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)
  - Support for: Ruby, PHP, C/C++, Go, Java, JavaScript, .Net, Python, Scala
  - GitLab contains additional security tooling: Container Scanning, Dependency List, Dependency Scanning, DAST, API Fuzzing, Secret Detection, Security Dashboard, SAST, Coverage fuzzing
- JFrog - [JFrog Xray](https://jfrog.com/xray/)
- MoreSec Technology - MoreSec SAST/SCA
  - Can't find too much information on this company, looks like it might be out of China (Hangzhou, Zhejiang, China)
- OWASP - [OWASP Dependency Check](https://owasp.org/www-project-dependency-check/)
- Revenera - [FlexNet Code Insight](https://www.revenera.com/protect/products/flexnet-code-insight.html)
- ReversingLabs - [Titanium Platform](https://www.reversinglabs.com/products/malware-analysis-platform)
  - Not sure if this can be bought independenly or is only part of a larger platform.
- Synk - [Synk Open Source Security](https://snyk.io/product/open-source-security-management/)
  - Support for: JavaScript, .Net, UNKNOWN, Java, Python, Ruby, UNKONWN, UNKNOWN, PHP, Docker, NPM, jQuery, UNKNOWN
- Sonatype - [Nexus Lifecycle](https://www.sonatype.com/products/lifecycle)
  - Provides a lot of integrations and languages
- Synopsys - [Black Duck Software Composition Analysis](https://www.synopsys.com/software-integrity/security-testing/software-composition-analysis.html)
- Tidelift - [Tidelift Subscription](https://tidelift.com/)
  - Looks like it is taking the "Paved Path" approach, has a list of "approved" dependencies.  Looks like there might be some customizable options: no vulnerabilities, approved licenses, actively maintained, etc.
- Veracode - [Veracode Software Composition Analysis](https://www.veracode.com/products/software-composition-analysis)
- WhiteHat Security - [WhiteHat Software Composition Analysis (SCA)](https://www.whitehatsec.com/platform/software-composition-analysis/)
- WhiteSource - [WhiteSource Bolt](https://www.whitesourcesoftware.com/free-developer-tools/bolt)
  - Support for: NodeJs, JavaScript, Docker, C#, Java, C++, PHP, .Net, Ruby, Python
  - Free?

## Evaluation Criteria ##

- Technology Coverage - the languages, frameworks, and open-source ecosystems to be evaluted.
- The depth and breadth of data provided by the tools
  - Vulnerabilities
  - Number and quanlity of sources for the data
  - Identification of license types and relative risks
  - Where does vulnerability information come from?
    - NVD/CVE
    - Internal Company Research (I think BlackDuck)
  - Health of Open Source Project
    - Number of maintainers
    - How often are commits done
    - Are there any CVEs (no CVEs is really a good sign, is anyone even looking?)
- Increasingly, information about the status and provenance of individual packages, along with the ability to prioritize that data
- The operational "fit" for the primary end users of the product - for example, developers will prefer vastly different
- Can it create a Bill of Materials (BOM), is it customizable?
- IDE Integration?
- How easy is it to get data out programmatically (API / pull data into an aggregate system/dashboard)

## Software Bill-of-Materials (SBOM) ##

Some SBOM standards include:

- [CycloneDX](https://cyclonedx.org/)
- [SPDX](https://spdx.org/)
- [SWID](https://www.iso.org/standard/65666.html)

### News ###

- [Biden may have put in an Executive Order to mandate this for the US Government](https://abcnews.go.com/Politics/biden-sign-executive-order-aimed-securing-critical-us/story?id=76077342)

### Tools ###

The OWASP Component Analysis lists many tools that can help out with SBOM, Freemium/Open Source ones are listed below:

- [GitHub SCA](https://docs.github.com/en/github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on/)
- [ClearlyDefined](https://clearlydefined.io/)
- [Debricked](https://debricked.com/) - Also contains commericial offering
- [Dependency-Check](https://owasp.org/www-project-dependency-check/) - OWASP
- [Dependency-Track](https://owasp.org/www-project-dependency-track/) - OWASP
- [Dependabot](https://dependabot.com/) - Also contains commercial offering
- [DepShield](https://depshield.github.io/)
- [DotNET Retire](https://github.com/RetireNet/dotnet-retire)
- [FOSSA](https://fossa.com/) - Also contains commercial offering
- [FOSSology](https://www.fossology.org/)
- [Grafeas](https://grafeas.io/)
- [Greenkeeper](https://greenkeeper.io/)
- [OSS Review Toolkit](https://github.com/heremaps/oss-review-toolkit)
- [Librries.io](https://libraries.io/)
- [NPM Audit](https://www.npmjs.com/)
- [OSS Index](https://ossindex.sonatype.org/)
- [PHP Security Checker](https://github.com/sensiolabs/security-checker)
- [Renovate](https://renovatebot.com/)
- [Snyk](https://snyk.io/)
- [Retire.js](https://retirejs.github.io/retire.js/)
- [Patton](https://owasp.org/www-project-patton/) - OWASP
- [Vigiles](https://www.timesys.com/security/vigiles-vulnerability-management-patch-monitoring/) - Also contains commericial offering

## Questions ##

- Can Dependabot be used outside of Github?
- Does Veracode use another vendor under the hood (WhiteSource)?
- Does Checkmarx use another vendor under the hood?
- Additional tools to look at:
  - SCR:CLR
  - Defensics
- On slack, someone talked about not trusting vendors if they are not in programs like:
  - OneTrust
  - Security ScoreCard
  - Whistic

## Testing ##

### OWASP Dependency Check ###

#### Command ####

dependency-check.bat --project AFBulletSafe --log log.txt --scan F:\Projects\AFBulletSafe --format ALL
dependency-check.bat --project AFBulletSafe --log log.txt --scan .\AFBulletSafe --format ALL

#### Notes ####

Log file is relative to location command is called from, it is not automatically placed in the output directory.

From my direct dev directory:

- Dependency-Check Version: 6.1.6
- Identified 5380 (844 unique) dependencies
- Vulnerable Dependencies: 77
- Vulnerabilities Found: 174
- Vulnerabiltites Suppressed: 0

When scanning just a pure git clone of master:

- Dependency-Check Version: 6.1.6
- Identified 317 (248 unique) dependencies
- Vulnerable Dependencies: 19
- Vulnerabilities Found: 45
- Vulnerabiltites Suppressed: 0

Looking at the first one, it looks like it is scanning everything (this includes a JetBrains Resharper dependence which is not deployed).  Need to see if this is expected only to run on the production output and not the source code directly.  Not sure what would happen if there was a bundling/minification as part of the pipeline.

## TODO ##

- Bills of Mateirals (BOMs)
- [OWASP Software Component Verification Standard](https://owasp-scvs.gitbook.io/scvs)

## Referneces ##

- Market Guide for Software Cmposition Analysis - Gartner
  - Source:
  - Recommendations
    - Identify and mitigate risks associated with OSS by including SCA tooling as a element of an application security testing tool harness and respond to findings.
    - Harden the software supply chain to prevent the introduction of vulnerable, malicious or inappropriately licenses software.
    - Simply decision making by working with the stackeholders (application development and testing, legal and compliance, and risk management) to establish policies articulating acceptable levels of risk, which can then be automatically enforced throughout the development process.
    - Position SCA in the existing workflow for developers and test teams, as automatically as possible.
  - Functions offerred by various vendors
    - Recognition and Identification of OSS
    - Software License Identifivation and Risk Assessment
    - Software Vulnerabilities
    - Goverance and Control
    - Reporting and Analysis
  - Evaluation criteria
    - Technology COverage - the languages, frameworks, and open-source ecosystems to be evaluted.
    - The depth and breadth of data provided by the tools
      - Vulnerabilities
      - Number and quanlity of sources for the data
      - Identification of license types and relative risks
    - Increasingly, information about the status and provenance of individual packages, along with the ability to prioritize that data
    - The operational "fit" for the primary aend users of the product - for example, developers will prefer vastly different interfaces and feature sets than legal team
    - The ability to aid in the identification of potential remediation or mitigation steps
    - Integration into the SDLC and other relevant systems
    - Reporting and administration
  - Concerns
    - Most SCA tools focus exclusively on OSS, but some buyers express concerns reguarding commericial off-the-shelf (COTS) packages.
