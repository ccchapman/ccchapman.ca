<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono&family=Playfair+Display:wght@400;500;700&display=swap');

  :global(body) {
    background-color: hsl(177, 59%, 13%);
    color: hsl(180, 25%, 98%);
    font-family: 'Fira Mono';
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
</style>

<script>
  import Headline from "./components/Headline.svelte";
  import Shape from "./components/Shape.svelte";
</script>

<div>
  <Shape />

  <Headline>
    Chris Chapman
  </Headline>

  <p>
    Web Developer in Vancouver, BC
  </p>
</div>
