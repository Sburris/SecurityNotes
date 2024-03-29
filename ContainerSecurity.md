# Container Security #

## Overview ##

Tools

Best Practices

## References ##

- [Dockerfile best practices](https://github.com/hexops/dockerfile)

- Can I Haz non-privileged containers? (http://canihaznonprivilegedcontainers.info/)
  - Advocacy site for the uptake of using non-privileged containers
  - Looks into the reasons why containers think they need to run as root (atleast for a little bit)
    - A webserver needs root to bind to a low port (<1024), but if it binded to a higher one off the bat then it would need to be root in the first place.  And since container ports are mapped to host ports it does not matter if the container port is in the user space since no one will see it.
  - Conclusion - So unless your application needs to:
    - run with multiple UIDs
    - bind to a port lower than 1024, or
    - modify parts of the kernel

    - ... it should not run as root

- StackExchange - Information Security Post - If a container is compromised does that mean host also compromised?
  - https://security.stackexchange.com/questions/199905/if-a-container-is-compromised-does-that-mean-host-also-compromised
    - The premise from the top & accepted answer is that containers are often less secure than full virtual machines.
      > Ostensibly, a compromised container should not be able to harm the host. However, container security is not great, and there are usually many vulnerabilities that allow a privileged container user to compromise the host. In this way, containers are often less secure than full virtual machines. That does not mean that virtual machines can't be hacked. They are just not quite as bad.


## Podcasts ##

## 2019-003-Liz Rice, creating processes to shift security farther left in DevOps ##

Liz Rice (@lizrice on Twitter) https://www.lizrice.com/

https://brakeingsecurity.com/2019-003-liz-rice-creating-processes-to-shift-security-farther-left-in-devops

There was a lot of discussion about moving left.  One of the earliest things was to get a scanner of the image container early into the pipeline.  And to periodically rescan even if there was no changes, daily was mentioned.

- There was talk of "non-privileged containers"
  - https://medium.com/@lizrice/non-privileged-containers-based-on-the-scratch-image-a80105d6d341
- Since containers are normally built for specific functions it is very easy to create a profile of them (normally connect to these machines, this frequency of transmission of this size, etc.)
  - There is also the possibility of watching what is running inside of a container to make sure additional executables are not run if they are not expected too.

### Future research / reading ###

- https://opensource.com/business/14/7/docker-security-selinux
- https://www.cloudops.com/2018/10/takeaways-from-liz-rice-pop-up-meetup-on-container-security/
- https://thenewstack.io/cloud-native-security-patching-with-devops-best-practices/
- https://kubernetes-security.info
- https://techbeacon.com/9-practical-steps-secure-your-container-deployment
- https://testssl.sh 
- https://medium.com/@lizrice/the-mysterious-tale-of-0-0-0-0-tcp-172-20-244-217-8080-8c2b3fb09498
- https://docs.docker.com/engine/security/security/
- https://containerhardening.org/
- https://rootlesscontaine.rs/
- https://blog.aquasec.com/docker-security-best-practices
- Tool: https://coreos.com/quay-enterprise/docs/latest/security-scanning.html
- Tool: https://docs.docker.com/datacenter/dtr/2.5/guides/admin/configure/set-up-vulnerability-scans/
- Tool: http://target.github.io/infrastructure/k8guard-the-guardian-angel-for-kuberentes
- Tool: https://github.com/nicholasjackson/cnitch


- https://www.owasp.org/index.php/OWASP_Docker_Top_10
- https://www.owasp.org/index.php/OWASP_Container_Security_Verification_Standard_(CSVS)
- CIS Docker Benachmark (https://www.cisecurity.org/benchmark/docker/)
- NIST Application Container Security Guide (https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-190.pdf)


### Questions / Unknowns ###

- How to get logs out of containers and into Azure Log Analytics
