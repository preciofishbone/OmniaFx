
import { defineComponent } from 'vue';


export default defineComponent({
    setup(props) {

        return () => (
            <div>
                <section>
                    <div className="hero-container">
                        <div className="environment"></div>
                        <div className="hero glitch layers" data-text="近設計"><span className="glitch-text">OmniaFx</span></div>
                    </div>
                    <div className="center sub-hero">Supercharge your Omnia intranet with custom features</div>
                </section>

                <p className="center getting-started-section">
                    <a className="button-main" href="/guide/introduction.html">Getting Started</a>
                </p>

                <div className="center editors">
                    <hr></hr>
                    <div className="vsflaviour">OmniaFx loves your preferred Visual Studio editor</div>
                    <img src="/images/vs.png" />
                </div>
            </div >
        )
    }
})