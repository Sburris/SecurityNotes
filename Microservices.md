# Microservices

JWT

https://www.iana.org/assignments/jwt/jwt.xhtml


OpenID Connect

- Identity Token
  - JWT format
  - Authentication claims: (required)
    - sub: (user must be unique)
    - iss: Issuer
    - aud: Audience (requested client, to protect against taking a token from one service and using it against another)
    - exp: Expires


API Gateway Options
- Kong
- Spring Cloud Gateway
- Netflix ZUUL
- NGINX

Identity Provider / Authorization Server
- Keycloak
- Cloud Foundry UAA
- Gluu
- NGINX

Identity as a Service (IDaaS)
- okta
- Auth0