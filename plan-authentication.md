## As a app owner I want people to be logged in before they start sharing their ideas, so I don't get spammed to death

## What do we need

- X Route to SignUp page
- X SignUp Form
- X Event handlers -> onChange & onSubmit
- X Dispatch an action (thunk, async action)
- X Thunk ->

  - X Post request to the backend
  - X Email & Password

- Backend (already done)

- Thunk (continued)
  - X Response (ok) we get a JWT -> we need to stor it
  - X dispatch action (synchronous action, type & payload)
- Reducer
  - X make a new reducer (if it does not exist)
  - X import it in the rootreducer
  - X Write a case
  - X store the token (update the state, we have a token)

Done!
