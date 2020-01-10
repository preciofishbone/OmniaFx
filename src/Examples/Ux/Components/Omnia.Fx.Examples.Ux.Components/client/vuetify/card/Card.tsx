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
                <v-card class={this.theming.content.bg.css}>
                    <v-card-title
                        class={[this.theming.header.bg.css, this.theming.header.text.css]}>
                        <div class={["headline mb-0 ml-1"]}>Card Header</div>
                    </v-card-title>
                    <v-card-text
                        light={!this.theming.content.bg.dark}
                        dark={this.theming.content.bg.dark}
                    >
                    </v-card-text>
                    <v-card-actions class="mb-3 mr-3 ml-3">
                        <v-btn
                            dark={this.theming.content.fg.dark}
                            color={this.theming.content.fg.color.base}
                            text
                            onClick={() => { }}>
                            <v-icon left>arrow_back</v-icon>
                            Back
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            dark={this.theming.content.fg.dark}
                            color={this.theming.content.fg.color.base}
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