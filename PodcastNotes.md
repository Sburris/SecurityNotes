
The Secure Developer - Ep. #28, Developer Empathy with Jason Chan of Netflix 

[https://www.heavybit.com/library/podcasts/the-secure-developer/ep-28-developer-empathy-with-jason-chan-of-netflix/](https://www.heavybit.com/library/podcasts/the-secure-developer/ep-28-developer-empathy-with-jason-chan-of-netflix/)

> It's with that idea that you can't prevent everything from happening, but if you build a lot of muscle and a lot of skill around detection and response that will allow you to move pretty fast if you have higher confidence that you'll find issues quickly and be able to fix them in production quickly. - 27:59

I think this this is a key aspect for any organization that wants to move fast and adopt an ajile process.  How long does it take to identidy an issue and from there how long does it take to get into production?  The longer this time period is, the more review/gates/tests are going to be put in up front to ensure that issues are not put into production.

It is an interesting idea that they are abstracting the developers away from thinking about security and make it part of a background process.  Looking at it from the aspect of cognitive load is important.  I am curious what guardrales are put in place to help make sure developers are pointed/nugged in the right direction.

Secure framework, identification of dangerous fuctions, methodolgies, and patterns that are trainied or have automation around identifying them and raising them to the developers attention.

## Tools ##

### Chaos Engineering ###

[https://principlesofchaos.org/](https://principlesofchaos.org/)

A summary page about the Principles of Chaos Engineering.

> An empirical, systems-based approach addresses the chaos in distributed systems at scale and builds confidence in the ability of those systems to withstand realistic conditions.  We learn about the behavior of a distributed system by observing it during a controlled experiment.  We call this *Chaos Engineering*.

### Lemur ###

[https://github.com/Netflix/lemur](https://github.com/Netflix/lemur)

> Lemur manages TLS certificate creation. While not able to issue certificates itself, Lemur acts as a broker between CAs and environments providing a central portal for developers to issue TLS certificates with 'sane' defaults.

### Repokid ###

[https://github.com/Netflix/repokid](https://github.com/Netflix/repokid)

> Repokid uses Access Advisor provided by [Aardvark](https://github.com/Netflix-Skunkworks/aardvark) to remove permissions granting access to unused services from the inline policies of IAM roles in an AWS account.

### Secrets Management ###

Company HashiCorp
https://www.hashicorp.com/products/vault/secrets-management

Products

#### Secure Vault ####

[https://www.hashicorp.com/products/vault/](https://www.hashicorp.com/products/vault/)

> Centrally store, access, and distribute secrets like API keys, AWS IAM/STS credentials, SQL/NoSQL databases, X.509 certificates, SSH credentials, and more.

[Secure Vault (GitHub)](https://github.com/hashicorp/vault)

#### Provision Terraform ####

https://www.hashicorp.com/products/terraform/

> Use infrastructure as code to consistently provision any cloud, infrastructure, and service.

[Terraform (GitHub)](https://github.com/hashicorp/terraform)

#### Connect Consul ####

[https://www.hashicorp.com/products/consul/](https://www.hashicorp.com/products/consul/)

> A multi-cloud service networking platform to connect and secure services across any runtime platform and public or private cloud.

[consul (Github)](https://github.com/hashicorp/consul)

Consul is a distributed, highly available, and data center aware solution to connect and configure applications across dynamic, distributed infrastructure. [https://www.consul.io](https://www.consul.io)

#### Run Nomad ####

[https://www.hashicorp.com/products/nomad](https://www.hashicorp.com/products/nomad)

> Nomad is an easy-to-use and flexible cluster scheduler that enables an organization to automate the deployment of any application on any infrastructure at any scale.

### Security Monkey ###

[https://github.com/Netflix/security_monkey](https://github.com/Netflix/security_monkey)

> Security Monkey monitors AWS, GCP, OpenStack, and GitHub orgs for assets and their changes over time.
