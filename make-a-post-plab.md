## As person interested in programming I want to create a blogpost so I can share my ideas

#### What do we need

- X We need a token

- UI

  - Page to make a blogpost
  - Route & Link
  - Form
  - Event Handlers & Listeners

- Send a request

  - Thunk (async action -> we will make a post request)
  - Dispatch it (just to test)
  - Make a post request with our token in the Auth header

- Backend stuff (make a route, database logic etc .. already done)

- Handle our response

  - Response (ok) -> Our post that was created
  - Create an Action (synchronous, with type & payload)
  - Dispatch this action
  - Handle the action in the reducer
    - Make a reducer if it doesn't exists
    - Update the state

- Display the data

  - Page to display the post
  - Selector (display our new post)
  - Use the selector
  - Display our new post
