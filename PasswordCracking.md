
# Password Cracking #



## Tools ##

- https://github.com/hashcat

## References ##
- https://twitter.com/brampatelski/status/1096139656511537160
  - hand-tuned hashcat 6.0.0 beta and 2080Ti (stock clocks) breaks NTLM cracking speed mark of 100GH/s on a single compute device
  - Btw: with an 8x GTX1080 Founders Edition, it already was just 3 hours for the full PW-space (MD5) and between 18 hours and 5 days for SHA1/256/512. All very feasible. Just use bcrypt, like @manicode and others tell us to.