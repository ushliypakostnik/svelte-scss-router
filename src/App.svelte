<script>
  /*
   * More details about Tinro router:
   * https://github.com/AlexxNB/tinro
   */
  import { Route } from "tinro";
  import Home from "components/views/Home.svelte";
  import About from "components/views/About.svelte";
  import Contacts from "components/views/Contacts.svelte";
  import Page404 from "components/views/Page404.svelte";
</script>

<style lang="scss" global>
  /* Import global styles only in to the root component */
  @import "./styles/global";

  html,
  body {
    margin: 0;
    height: 100%;
  }

  main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav {
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #fff;
      font-size: 28px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      & + a {
        margin-left: 40px;
      }
    }
  }

  h1, h2 {
    margin-top: 0;
    font-family: sans-serif;
  }

  h1 {
    font-size: 48px;
  }
</style>

<main>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contacts">Contacts</a>
  </nav>
  <Route>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/contacts">
      <Contacts />
    </Route>
    <Route fallback>
      <Page404 />
    </Route>
  </Route>
</main>
