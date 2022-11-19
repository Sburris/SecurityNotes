# Challenges

## Difficulty 1

- [x] Bonus Payloads
- [x] Bully Chatbot
- [x] Confidential Document
- [x] DOM XSS
- [x] Error Handling
- [x] Exposed Metrics
- [x] Missing Encoding
- [x] Outdated Allowlist
- [x] Privacy Policy
- [x] Repetitve Registration
- [x] Score Board
- [x] Zero Stars

## Difficulty 2

- [x] Admin Section
- [ ] Deprecated Interface
- [x] Five-Star Feedback
- [x] Login Admin
- [x] Login MC SafeSearch
- [x] Meta Geo Stalking
- [x] Password Strength
- [x] Security Policy
- [x] View Basket
- [x] Visual Geo Stalking
- [x] Weird Crypto

## Difficulty 3

- [x] Admin Registration
- [x] Bjoern's Favorite Pet
- [x] CAPTCHA Bypass
- [ ] CSRF
- [x] Database Schema
- [ ] Deluxe Fraud
- [x] Forged Feedback
- [ ] Forged Review
- [x] GDPR Data Erasure
- [ ] Login Amy
- [x] Login Bender
- [x] Login Jim
- [ ] Manipulate Basket
- [ ] Payback Time
- [ ] Privacy Policy Inspection
- [ ] Product Tampering
- [ ] Reset Jim's Password
- [ ] Upload Size
- [ ] Upload Type

## Difficulty 4

- [ ] Access Log
- [ ] Allowlist Bypass
- [ ] Christmas Special
- [x] Easter Egg
- [ ] Ephemeral Accountant
- [ ] Expired Coupon
- [x] Forgotten Developer Backup
- [x] Forgotten Sales Backput
- [ ] GDPR Data Theft
- [ ] Leaked Unsafe Product
- [ ] Legacy Typosquatting
- [ ] Login Bjoern
- [x] Misplaced Signature File
- [ ] Nested Easter Egg
- [ ] NoSQL Manipulation
- [x] Poison Null Byte
- [ ] Reset Bender's Password
- [ ] Reset Uvogin's Passwod
- [ ] Steganography
- [ ] User Credentials
- [ ] Vulnerable Library

## Difficulty 5

- [ ] Blockchain Hype
- [ ] Change Bender's Password
- [ ] Cross-Site Imaging
- [ ] Email Leak
- [ ] Extra Langauge
- [ ] Forntend Typeosquatting
- [ ] Kill Chatbot
- [ ] Leaked Access Logs
- [ ] Reset Bjoern's Password
- [ ] Reset Morty's Password
- [ ] Retrieve Blueprint
- [ ] Supply Chain Attack
- [ ] Two Factor Authentication
- [ ] Unsigned JWT

## Difficulty 6

- [ ] Forged Coupon
- [ ] Forged Signed JWT
- [ ] Imaginary Challenge
- [ ] Login Support Team
- [ ] Multiple Likes
- [ ] Premium Paywall
- [ ] SSRF

# Notes

## Difficulty 1 Notes

### Bonus Payloads

Put bonus payload into search box

``` html
 <iframe
    width="100%" 
    height="166"
    scrolling="no"
    frameborder="no"
    allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771984076&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
</iframe>
```

*Notes: The song is great*

### Bully Chatbot

Need to create an account and login to get access to "Support Chat" bot.

After telling it my name (which then sets the username on the account) I asked

> Can I have a coupon?

And it gave me one.

### Confidential Document

Found the ftp folder and downloaded some stuff.

### DOM XSS

Enter payload into search box

``` html
<iframe src="javascript:alert(`xss`)">
```

### Error Handling

Not sure what triggered this.

### Exposed Metrics

http://localhost:3000/metrics

### Missing Encoding

Original:

> http://localhost:3000/assets/public/images/uploads/😼-#zatschi-#whoneedsfourlegs-1572600969477.jpg

Fixed:

> http://localhost:3000/assets/public/images/uploads/%F0%9F%98%BC-%23zatschi-%23whoneedsfourlegs-1572600969477.jpg

### Outdated Allowlist

http://localhost:3000/redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm

### Privacy Policy

Menu: Account -> Privacy & Security -> Privacy Policy

### Repetitve Registration

Proxy intercept/resend another registation form and remove the "passwordRepeat" field.

### Score Board

http://localhost:3000/#/score-board

### Zero Stars

In Zap, set a breakpoint on "http://localhost:3000/api/Feedbacks/"

Then updated the rating value to a "0"

## Difficulty 2 Notes

### Admin Section

First Logged in with the admin account (admin@juice-sh.op
Using the URL endpoints, found the administartion endpoint

> http://localhost:3000/#/administration

### Deprecated Interface

from suspicious_errors.yml

> 'B2B customer complaints via file upload have been deprecated for security reasons'

there is a ./file-upload endpoint but I can't seem to trigger it

### Five-Star Feedback

First Logged in as the admin and went to the admin page.

On the page, I deleted the five star review (only 1 in the system)

### Login Admin

Found the username from dumping the users table.

Then used the fact that sqli could happen in the "Login" form.

> admin@juice-sh.op'--
> any password

### Login MC SafeSearch

I found the password hash of the user from the SQLi dump.

The password has was unsalted MD5, so I just googled it and found the password

> Mr. N00dles

I google searched for the hash

### Meta Geo Stalking

Got Johns email from the SQLi Users dump

> john@juice-sh.op

Put this in the Forgot Password page to find the question.

> What is your favorite place to go hiking

Found the image on the photowall

Used the website: https://compress-or-die.com/analyze

- GPSVersionID - 2.2.0.0
- GPSLatitudeRef - North
- GPSLatitude - 36.958717
- GPSLongitudeRef - West
- GPSLongitude - 84.348217
- GPSMapDatum - WGS-84

(36.958717,-84.348217)

> Daniel Boone National Forest

### Password Strength

Using the SQLi Users table dump, I googled the admin's hashed passwords to see if it has already been "cracked"

> admin123

### Security Policy

> http://localhost:3000/security.txt

### View Basket

> GET http://localhost:3000/rest/basket/2

### Visual Geo Stalking

In the left window on the second floor there is a poster.  You can bearly make out "ITsec"

> ITsec

### Weird Crypto

> Your passwords are weak because they are using an unsalted MD5 hash for storage.

## Difficulty 3 Notes

### Admin Registration

Added "role", "admin" to the register json payload

### Bjoern's Favorite Pet

Found on @bkimminich twitter account

> Zaya

### CAPTCHA Bypass

You can just resubmit responses since the captchaid doesn't expire.

### CSRF

TBD

### Database Schema

Found SQL injection in the search parameter

Base:

> http://localhost:3000/rest/products/search?q=asfafaf')) UNION select '','','','','','','','','' FROM sqlite_schema--

Schema command:

> http://localhost:3000/rest/products/search?q=asfafaf')) UNION select sql,'','','','','','','','' FROM sqlite_schema--

### Deluxe Fraud

TBD

### Forged Feedback

Just change the 'UserId' on a feedback request

### Forged Review

TBD

### GDPR Data Erasure

Found chirs' email in the user table data dump

> chris.pike@juice-sh.op

Then used the SQLi to login with the account.

### Login Amy

TBD

### Login Bender

Found the email address from the SQLi dump of the users table

Then used the SQLi injection in the login from to bypass the password requirement

> bender@juice-sh.op'--

### Login Jim

Found the email address from the SQLi dump of the users table

Then used the SQLi injection in the login from to bypass the password requirement

> jim@juice-sh.op'--

### Manipulate Basket

TBD

### Payback Time

Changed a request to have a -1 quantity and checked out.

### Privacy Policy Inspection

TBD

### Product Tampering

TBD

### Reset Jim's Password

TBD

### Upload Size

TBD

### Upload Type

TBD


## Difficulty 4 Notes

### Access Log

TBD

### Allowlist Bypass

TBD

### Christmas Special

Found the Product Id with SQLi

> 10

Then resubmited a request to add a product to the basket list and changed the product id to 10.  Then checked out.

### Easter Egg

Downloaded file from ftp folder with the poison null vulnerability.

### Ephemeral Accountant

TBD

### Expired Coupon

TBD

### Forgotten Developer Backup

Downloaded file from ftp folder with the poison null vulnerability.

### Forgotten Sales Backput

Downloaded file from ftp folder with the poison null vulnerability.

### GDPR Data Theft

TBD

### Leaked Unsafe Product

TBD

### Legacy Typosquatting

TBD

### Login Bjoern

TBD

### Misplaced Signature File

Downloaded file from ftp folder with the poison null vulnerability.

### Nested Easter Egg

TBD

### NoSQL Manipulation

TBD

### Poison Null Byte

Downloaded file from ftp folder with the poison null vulnerability.

### Reset Bender's Password

TBD

### Reset Uvogin's Passwod

TBD

### Steganography

TBD

### User Credentials

TBD

### Vulnerable Library

TBD

## Difficulty 5 Notes

### Blockchain Hype

TBD

### Change Bender's Password

TBD

### Cross-Site Imaging

TBD

### Email Leak

TBD

### Extra Langauge

TBD

### Forntend Typeosquatting

TBD

### Kill Chatbot

TBD

### Leaked Access Logs

TBD

### Reset Bjoern's Password

TBD

### Reset Morty's Password

TBD

### Retrieve Blueprint

TBD

### Supply Chain Attack

TBD

### Two Factor Authentication

TBD

### Unsigned JWT

TBD

## Difficulty 6 Notes

### Forged Coupon

TBD

### Forged Signed JWT

TBD

### Imaginary Challenge

TBD

### Login Support Team

TBD

### Multiple Likes

TBD

### Premium Paywall

TBD

### SSRF

TBD
