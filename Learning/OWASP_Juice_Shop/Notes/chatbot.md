After I have my name, the response came back with a new token, and that has bene used as my auth token...

Question: Does a new token happen every time?
The JWT token now has the name I gave, 'test', as the username.  And it updated my profile

POST http://localhost:3000/rest/chatbot/respond

{
  "action": "setname",
  "query": "Bob"
}

It is interesting this sets the current users name

