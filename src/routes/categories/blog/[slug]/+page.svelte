<script>
export let data;
import { urlFor } from '/src/client';

</script>

<section class="wrapper">

    <h1>{data.title}</h1>
    {#if data.image}
    <img src={urlFor(data.image).url()} alt="" class="full-bleed">
    {/if}
    <p>{data.bodyText}</p>
</section>

<style>
    @font-face{
        font-family: "Merriweather", sans-serif;
        src: url('/fonts/Merriweather-Regular.ttf');
    }
   .wrapper {
  display: grid;
  grid-template-columns:
    1fr
    min(100ch, 100%)
    1fr;

}
.wrapper h1{
    grid-column: 2;
    text-align: center;
    font-size: 3rem;
    padding-block: 5rem;
    font-family: "Merriweather", sans-serif;
}
.wrapper > * {
  grid-column: 2;
}
.full-bleed {
  width: 100%;
  grid-column: 1 / 4;
}

p{
    font-family: "Merriweather", sans-serif;
    padding-block: 5rem;
    font-size: 2rem;
}
</style>