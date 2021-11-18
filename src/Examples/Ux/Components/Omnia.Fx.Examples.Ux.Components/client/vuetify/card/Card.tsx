import Component from 'vue-class-component';
import { Console } from '@omnia/fx';
import { VueComponentBase } from '@omnia/fx/ux';

export interface CardProps {

}

@Component
export default class Card extends VueComponentBase<CardProps> {

    private value


    public mounted() { }

    public render(h) {

        return (
            <div>
                <v-card class={this.theming.body.bg.css}>
                    <v-card-title
                        class={[this.theming.chrome.bg.css, this.theming.chrome.text.css]}>
                        <div class={["headline mb-0 ml-1"]}>Card Header</div>
                    </v-card-title>
                    <v-card-text
                        light={!this.theming.body.bg.dark}
                        dark={this.theming.body.bg.dark}
                    >
                    </v-card-text>
                    <v-card-actions class="mb-3 mr-3 ml-3">
                        <v-btn
                            dark={this.theming.body.fg.dark}
                            color={this.theming.body.fg.color.base}
                            text
                            onClick={() => { }}>
                            <v-icon left>arrow_back</v-icon>
                            Back
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            dark={this.theming.body.fg.dark}
                            color={this.theming.body.fg.color.base}
                            text
                            onClick={() => { }}>
                            Close
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div >
        )
    }


}