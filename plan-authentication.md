## As a app owner I want people to signup before they start sharing their ideas, so I don't get spammed to death

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

## As a app owner I want people to be able to login, so they don't have to create a new account each time

## What do we need

- X UI
  - X Login page
  - X Route
  - X Form
  - X Event handlers & Listeners
- Make request

  - X Action (thunk) -> responsible making a request
  - X Dispatch our thunk (to test)
  - X Make a post request

- Backend (login endpoint, database logic etc... (done))

- Handling the response
  - X Response (ok) -> JWT
  - X Create an action (synchronous)
  - X Dispatch the action
  - Reducer
    - Case statement
    - Return a new state

DONE!
