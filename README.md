# Clinical Team Technical Challenge

Thanks for agreeing to try out our technical challenge! We're excited to see what you come up with.

We would like for you to create an app that includes a frontend and a separate backend.

Build a simple full stack app that includes as many of the criteria below as you can get to, using frameworks of your choice.

Here are the features we would like to see:

- When a user visits your website, the page they see should have a grid of boxes in rows and columns.
- When the user hovers over a cell, the cell should be highlighted in a bright color, and the cells in the same row and column as the other cell should also be highlighted in the same color but at 50% opacity.
- When the user clicks on a cell, the cell's background color should be set to the highlight color.
- When the user clicks on the cell again, the cell's background color should be removed. i.e., clicking a cell should toggle the background color on and off.
- If a cell is toggled on, its background color should not change when the user hovers over another cell in its row or column.
- The cells' toggled states should be tracked in the database on the server.

Try to limit yourself to around 2 hours on this challenge. Don't worry if you can't complete all of the acceptance criteria within 2 hours - focus on completing what's interesting to you.

We use `Elixir`, `Ecto`, `Absinthe`, `GraphQL`, `Typescript/Javascript` and `React` at Vetspire. This repo has a very bare-bones app that has taken care of the annoying bits of setting up a new app - you are welcome to build off of what we've provided here, or you can use completely different frameworks if you prefer.

We encourage you to include a README with notes about your language and framework choices as well as your design decisions.

## Setting up your local environment

- We use [asdf](https://asdf-vm.com/) to manage Elixir and NodeJS versions. If installed, run `asdf install`; alternatively make sure you have a recent version of both Elixir and NodeJS.
- In the top folder, run `mix setup` to install and setup the server's dependencies.
- In the `assets/frontend` folder, run `yarn` to install the frontend dependencies.
- Start Phoenix endpoint with `mix phx.server` or inside IEx with `iex -S mix phx.server`.
- Start the frontend by running `yarn dev` from the `assets/frontend` folder.

Now you can visit [`localhost:5173`](http://localhost:5173) from your browser.

## Submitting your work

Submit your results as a pull request to this repo with instruction on how to build/run it.

Please let us know that you're finished!

---

---

## Roberto Silva's comments ✨

I have implemented the features requested in the challenge. Below are the details of the implementation:

[Demo link](https://drive.google.com/file/d/1Zqn2WtZAM_MoL5ORkjguOPDTRs0v9k3C/view?usp=sharing)

### Frontend:

- I have used React to build the frontend.
- I have used the `@apollo/client` library to interact with the GraphQL API.
- To generate the grid, I have used a 2D array.
- Run `yarn` to install the dependencies.
- Run `yarn dev` to start the project.
- (Optional) In case you want to change the backend URL, you can change the `target` property in the `assets/frontend/vite.config.ts` file.
- (Optional) In case you want to change the grid size, you can change the `rows` and `cols` variables in the `assets/frontend/src/constants/index.ts` file.

### Backend:

- I have used the `Absinthe` library to create a GraphQL API.
- I have created two functions to handle the toggling of the cells (listCells and toggleCell).
- Dependencies:
  - elixir 1.15.7-otp-26
  - erlang 26.1.1
  - nodejs 18.14.1
  - psql 12.20
- Run `mix deps.get` to install the dependencies.
- Run `mix ecto.setup` to create the database and run the migrations.
- Run `mix phx.server` to start the server.
- Go to `http://localhost:4000/graphiql` to test the queries and mutations.

  - To get the list of cells, run the following query:

    ```graphql
    query {
      listCells {
        id
        row
        col
        isActive
      }
    }
    ```

  - To toggle a cell, run the following mutation:
    ```graphql
    mutation {
      toggleCell(row: 1, col: 1) {
        id
        row
        col
        isActive
      }
    }
    ```

- Use `http://127.0.0.1:4000/graphql` as the endpoint for the frontend.
