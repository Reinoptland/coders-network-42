## As a app owner I want people to be logged in before they start sharing their ideas, so I don't get spammed to death

## What do we need

- Route to SignUp page
- SignUp Form
- Event handlers -> onChange & onSubmit
- Dispatch an action (thunk, async action)
- Thunk ->

  - Post request to the backend
  - Email & Password

- Backend (already done)

- Thunk (continued)
  - Response (ok) we get a JWT -> we need to stor it
  - dispatch action (synchronous action, type & payload)
- Reducer
  - Write a case
  - store the token (update the state, we have a token)

Done!
