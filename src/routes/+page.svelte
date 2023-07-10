<script>

</script>
<body>
    
    <section class="header">
        <img src="/lesa_logo.jpg" alt="Lesa_logo">
        <div class="navigation">
            <nav>
                <a href="/">Poems</a>
                <img src="" alt="">
                <a href="/">Stories</a>
    
            </nav>
            <div class="heading" style="color: rgb(94,48,35); ">
                Empowerment
            </div>
        </div>
    </section>

    <section class="cta">
        <img src="" alt="">
        <h3 class="heading" style="color:black;">Fashion Fueled Power</h3>
        <p>Uncover the rich history of women rocking the fashion world and embracing their inner strength.Let's explore the untold truths</p>
        <button>Dive In</button>
    </section>

    <section class="chronicles">
        <h2 class="heading" style="color: rgb(94,48,35); padding-bottom:2rem" >Fashion Chronicles</h2>
        <div>
            <p>From the elegance of Coco Chanel to the revolutionary impact of Diane von Fürstenberg, learn the stories of women who’ve shaped fashion history.</p>
            <p>Embrace the art of storytelling through powerful poems and captivating short stories that unveil the essence of women empowerment and style.</p>
        </div>
    </section>
    <section class="fashion_icons">
        <div>
            <h2 class="heading" style="color: black; padding-bottom:2rem">Trailblazing Fashion Icons</h2>
            <p>Discover the women who've revolutionized the world of fashion, leaving a lasting impact on society and inspiring others.</p>
        </div>
        <div>
            <img src="/black-fashion.jpg" alt="fashion-woman">
        </div>
    </section>
</body>

<style>
    @font-face{
        font-family: 'Fascinate Inline';
        src: url('/fonts/FascinateInline-Regular.ttf');
    }

    @font-face{
        font-family: "Playfair Display";
        src: url("/fonts/Playfair_9pt-Regular.ttf");
    }

    p{
        font-family: "Playfair Display";
    }

    a{
        text-decoration: none;
        color: rgb(94,48,35);
        font-size: 1.5rem;
        font-family: 'Fascinate Inline';
    }
    .heading{
        font-family: 'Fascinate Inline';
        color: white;
        font-size: 5rem;
    }
    
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(143,110,95);
        margin-bottom: 5rem;
    }
    .navigation{
        background-color: rgb(249,190,199);
        width: 100%;
        text-align: center;
        padding-block: 5rem;
    }

    nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .cta{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-block: 2rem;
        gap: 2rem;
        padding-inline: 2rem;
        text-align: center;
        
    }
 

    button{
        background-color:  rgb(143,110,95);
        border: none;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        cursor: pointer;
    }
    .chronicles{
        color: rgb(94,48,35);
        padding: 5rem;    }

    .chronicles div{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .fashion_icons{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 5rem;
        align-items: center;
        text-align: center;
    }

    @media screen and (max-width: 600px){
        .cta{
            padding-inline: 1;
        }
        a{
            font-size: 1rem;
        }
        .heading{
            font-size: 200%;
        }
        .chronicles{
            padding: 2rem;
            text-align: center;
        }
        
    .chronicles div{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        gap: 2rem;
        text-align: center;
    }
    .fashion_icons{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        gap: 2rem;
        padding: 2rem;
        align-items: center;
        text-align: center;
    }

    button {
        width: 100%;
    }
    }
</style>