## As a user I want to see a list of Posts, so I can find something interesting to read

- Setup React & Redux & Router

  - X CRA

  - Setup Redux

    - X Install deps
    - X Create a store
    - X A root Reducer (all the reducers together)
    - X A posts reducer
    - X Change index.js -> Provider
    - TEST: log something in the reducer, check redux devtools

  - Setup router

    - X Install deps
    - X Wrap our app in a Router

- Making the feed page

  - Local state

    - useState -> for posts
    - fetch data (axios, useEffect)
    - Display the posts (render)

  - Using Redux (what will change) -> Check yourself & Go with the Flow

    - [x] Setup
    - [x] Create reducer for the state we are going to use (if it doesn't exist yet)
    - [x] Hardcode some initialState in the reducer we are going to use
    - [x] Create a component for the data we want to display
      - Component / Route
      - Route
    - [x] Write a selector
      - Make a file for it
      - export it
      - write the selector logic
      - test it -> log in selector, then in component
    - [x] Display initialState from the store
      - JSX, map
      - test it -> use your eyes
    - [x] Fetch data
      - async function
      - useEffect
      - test it -> console.log response
    - [x] Create an action (using an action creator)
      - make file for it
      - write a function that creates an action
      - import
      - we call the function
      - test it (log -> object with type & payload)
    - [x] Dispatch the action
      - import useDispatch
      - dispatch the action
      - test if it is dispatched -> redux devtools
    - [x] Handle the action in the reducer
      - Add case
      - write some reducer logic
      - test it -> redux devtools (click action, look at diff)
    - [x] Verify that the whole system works
      - remove the fake initial state

* Using a thunk
  - Move our request logic & dispatching of action to another function (thunk)
  - We dispatch our thunk action, which:
    - Make the requests
    - Dispatches multiple actions
