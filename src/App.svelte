<script>
  /*
   * More details about Tinro router:
   * https://github.com/AlexxNB/tinro
   */
  import { Route } from "tinro";
  import Home from "components/Home.svelte";
  import About from "components/About.svelte";
  import Contacts from "components/Contacts.svelte";
</script>

<style lang="scss" global>
  /* Import global styles only in to the root component */
  @import "./styles/global";

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contacts">Contacts</a>
</nav>

<main>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/contacts">
    <Contacts />
  </Route>
</main>
