
import { defineComponent } from 'vue';


export default defineComponent({
    setup(props) {

        return () => (
            <div>
                <h1 style={{ textAlign: "center" }}><b>Omnia G2</b> Development</h1>
                <p style={{ textAlign: "center" }}>We need a very cool welcome content here</p>
                <img src="/images/omniafx.png"/>
                <p style={{ textAlign: "center" }}>
                    <a className="get-started" href="/guide/introduction.html">Getting Started</a>
                </p>
            </div >
        )
    }
})