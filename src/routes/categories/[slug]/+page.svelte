<script>
import { urlFor } from '$lib/Client.js';
export let data;
const postTitles = data.dataPosts;
const titles = data.titles;

</script>
        <header>
          <h1>{titles}</h1>
        </header>
          <section>
            
            {#each postTitles as post }
            <div class="card">
              {#if post.mainImage}
              <div class="image">
                <img src={urlFor(post.mainImage).width(200).url()} alt="Blog_image">
              </div>
              {/if}
              <div>
                <h2 class="title"><a href="blog/{post.slug}">{post.title}</a></h2>
                <span class="time">{post._createdAt}</span>
              </div>
            </div>
            {/each}
          </section>
      



<style>
  
   @font-face{
        font-family: 'Fascinate Inline';
        src: url('/fonts/FascinateInline-Regular.ttf');
    }

    @font-face{
        font-family: "Playfair Display";
        src: url("/fonts/Playfair_9pt-Regular.ttf");
    }
   
    header{
    font-family: "Fascinate Inline";
    text-align: center;
    padding-block: 2rem;
    font-size: 2rem;
    }
  section{
    font-family: sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding-block: 5rem;

  }
  a{
    text-decoration: none;
    color: rgb(94,48,35);
    font-size:2rem;
    font-family: 'Playfair display';
  }
  .card{
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 1rem;

  }

  .image{
    
    margin-right: 1rem;
  }
  .title {
  flex-shrink: 0;
  width: 100%;
  height: auto; /* 78px */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  position: relative;
  line-height: 1.2;
}
.time{
  font-family: "Playfair Display";
  color: brown;
}


@media screen and (max-width: 600px){
  .card{
    flex-direction: column;
    text-align: center;
  }
  .image{
    margin-right: 0;
  }
  .title{
    margin-top: 1rem;
  }
}
</style>