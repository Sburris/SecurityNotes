4 core questions of threat modeling
1. What are you building?
2. What can go wrong?
3. What are you going to do about it?
4. Did we do a good job?

## To Process

- [YouTube - AVCDL talk: Cybersecurity Requirements Taxonomy-based Threat Modeling (SAE WCX 2024)](https://www.youtube.com/watch?v=s9LTra_zptE)
  - Slack Thread: https://owasp.slack.com/archives/C1CS3C6AF/p1715782658729309
  - Sounds like this is very full featured looking for tracability through the whole process for safety-critical cyber-physical system.  So this looks like it is a very strict cases to look at.  And from the comments it looks like it might not be very user friendly.
- [MITRE - The MITRE EMB3D Threat Model](https://emb3d.mitre.org/)

## Threats

### Spoofing

When you make a fake or hoax of something.

- An attacker could take over the port or socket that the server normally uses
  - CWE-200 - Exposure of Sensitive Information on an Unauthorized Actor
  - CAPEC-616 - Establish Rogue Location
  - CAPEC-505 - Scheme Squatting
  - Mitigations
    - Use TLS
    - Ensure certificate is signed by a trusted CA
    - MFA
- Brute forcing a login form until the password matches
  - CWE-307 - Improper Restriction of Excessive Authentication Attempts
  - CAPEC-49 - Password Brute Forcing
  - CAPEC-16 - Dictionary Based Password Attack
  - CAPEC-565 - Password Spraying (trying common passwords)
  - CAPEC-600 - Credential Stuffing (using known username/passwords from previous breaches)
  - ASVS 2.2.1 - Ensure you have protections in place against automated attacks and that they are tested
  - Mitigations
    - Add increasingly large pauses between failed attempts (i.e. a back-off strategy)
    - Use Captchas
    - Add a temporary lockout after n failed attempts
    - Enable MFA
- Hitting a page directly
  - CWE-425 - Direct Request ('Force Browsing')
  - CAPEC-87 - Force Browsing
  - ASVS 4.2.1 - Ensure object level access control is implemented correctly and authorizations are performed on every request.
  - Mitigations
    - Ensure object-level access control
    - Always perform authorization checks
- Confusing client/server based on server identification
  - Examples
    - https://server1.mydomain.com
    - https://server1
    - https://192.168.1.10
    - https://0xC0.A8.1.A
    - https://030052000412
  - CWE-173 - Improper Handling of Alternate Encoding
  - CWE-647 - Use of Non-Canonical URL Paths for Authorization Decisions
  - CAPEC-4 - Using Alternative IP Address Encodings
  - Mitigations
    - Use standard naming conventions and fully qualify them
    - Use the canonical form
- Attacker could use/downgrade to an unencrypted version of a protocol
  - CWE-319 - Cleartext Transmission of Sensitive Information
  - CAPEC-94 - Adversary in the Middle (AiTM)
  - ASVS 9.2.1 - Ensure you're verifying TLS certificates and internal certificate authority certificates or self-signed certificates are also in your trust store.
  - Mitigatiosn
    - Host verification should always be active where possible
    - Alert if new IDs are discovered
- Missing Authentication and encryption
  - This would normally happen for "internal" only API/microservices.  The assumption is that only our trusted servers will be able to communicate so no need to check for authorization and/or encrypt the traffic on the wire.
  - CWE-306 - Missing Authentication for Critical Function
  - CAPEC-36 - Using Unpublished Interfaces for Functionailty
    - This could also be "hidden" pages for devs/dbs to perform high risk changes (configs, db, etc.)
  - ASVS 1.2.2 - Ensure all your APIs that expose sensitive data are authenticated
  - Mitigations
    - Always use encryption in transit where possible, and authenticate and authorize users
    - Adapt a zero-trust culture and encrypt local network traffic as well
    - Put your internal APIs behind the fireall
    - Segment your network and limit the incomign connections to only the host you expect
    - Make sure that any APIs that allow access to data are authenticated
    - Use an industry-standard proven authentication schema (method of authentication)
- Attacker could steal credentails stored on the server (or code)
  - CWE-257 - Storing Passwords in a Recoverable Format
  - CWE-256 Plaintext Storage of a Password
  - CWE-522 - INsufficiently Protected Credentials
  - CWE-798 - Use of Hard-coded Credentials
  - CAPEC-191 - Read Sensitive Constants Within an Executable (Hard coded credentails)
  - CAPEC-150 - Collect Data from Common Resource Locations
  - ASVS 2.10.4 - Ensure Keys and Secret material are stored securely and ensure that secrets aren't hardcoded in source code
  - Mitigations
    - Encrypt the key
    - Use strong ACLs
    - Use a PAM tool to manage keys
- Attacker can choose to use weaker or no authentication
  - An attacker can remove the signature algorithm from a JWT exploitting a "None Algorithm" vulnerability and allowing them to change a token and gain access to the system
  - CWE-757 - Selection of Less-Secure Algorithm During Negotiation ("Algorithm Downgrade")
  - CWE-345 - Insufficient Verification of Data Authencticity
  - ASVS 3.5.3 - Ensure Null Cipher Checks are implemented
  - Mitigations
    - Check the signature algorithm to make sure it is the one expected
- Attack could steal credentials stored ont he client and reuse them
  - Steal session cookie or have a key logger
  - CWE79 - Improper Neutralization of INput During Web Page Generation ("XSS")
  - CWE-539 - Use of Persistent Cookies Containing Sensitive Information
  - CAPEC-568 - Capture Credentials via Keylogger
  - CAPEC-31 - Accessing/Intercepting/Modifying HTTP Cookies
  - ASVS 3.4 & 3.5 - Ensure Cookies are secured properly and onlya ccessible from the source host
  - ASVS 2.2.6 - Ensure replay attack protections are in place and working correctly
  - ASVS 2.2.7 - Ensure user-in-the-loop with automation protection controls
  - ASVS 3.4.1, 3.4.2, 3.4.3, 3.4.4, 3.5.1 - Ensure Cookies are secured properly and only accessible from the source host
  - ASVS 2.2.6 - Ensure replay attack protections are in place and working correctly
  - ASVS 2.2.7 - Ensure user-in-the-loop with automation protection controls
  - Mitigations
    - Require MFA
    - Detect multiple instances of the same session and send notification
    - Fingerprint the user's machine and associate their characteristics with the session
    - Geo-fencing of users
    - Use malware endpoint protection to block any attempt to deploy the key logger
    - Add the `Secure`, `HttpOnly`, `SameSite`, `Domain`, and `Path` attributes to cookies
    - Perform necessary SAST and DAST scans to test the controls you have in place


## Notes

- For MFA, look at that Consumer something framework from Daniel Messiler (I think)

## References
