import { defineComponent } from 'vue';


export default defineComponent({
    setup(props) {

        return () => (
            <div>
                <section>
                    <div class="hero-container">
                        <div class="environment"></div>
                        <div class="hero glitch layers" data-text="近設計"><span class="glitch-text">OmniaFx</span></div>
                    </div>
                    <div class="center sub-hero">Supercharge your Omnia intranet with custom features</div>
                </section>

                <p class="center getting-started-section">
                    <a class="button-main" href="/guide/introduction.html">Getting Started</a>
                    <a class="button-secondary ml-8" href="/guide/introduction.html">Docs</a>
                    <a class="button-secondary ml-8" href="/guide/introduction.html">Omnia Cli</a>
                </p>

                <div class="center editors">
                    <hr></hr>
                    <div class="vsflaviour">OmniaFx loves your preferred Visual Studio editor</div>
                    <img src="/images/vs.png" />
                </div>
            </div >
        )
    }
})