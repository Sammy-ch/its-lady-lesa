<script></script>
<slot/>
<footer>
    <nav>
        <a href="https://twitter.com/MarinaSyvine?s=20"><img src="/icons8-twitter.svg" alt="twitter"></a>
        <a href="https://www.instagram.com/marina_syvine/"><img src="/icons8-instagram.svg" alt="Instagram"></a>
        <a href="https://www.linkedin.com/in/elsa-marina-syvine-92ba9b245/"><img src="/icons8-linkedin.svg" alt="linkedIn"></a>
    </nav>
    <span>© 2023 Empowering Women Through Fashion</span>
</footer>

<style>
    footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5rem;
        gap: 1rem;
        text-align: center;
    }

    nav{
        display: flex;
        gap: 1.2rem;
    }

    @media screen and (max-width: 300px){
        nav{
            gap: 0.5rem;
            display: flex;
            flex-direction: flex;
        }
    }
</style>