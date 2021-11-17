import { Prop, Emit } from 'vue-property-decorator';
import Component from 'vue-class-component';
import { WebComponentBootstrapper, Inject, vueCustomElement, Localize, Utils } from '@omnia/fx';
import { IntroductionStepStyles } from './IntroductionStep.css';
import { OmniaTheming, OmniaUxLocalization, VueComponentBase, FormValidator, FieldValueValidation } from "@omnia/fx/ux";
import { IIntroductionStep } from './IIntroductionStep';
import { AppProvisioningStepContext } from '@omnia/fx/models';
import { MultilingualStore } from '@omnia/fx/stores';

@Component
export class IntroductionStep extends VueComponentBase<IIntroductionStep> {
    @Prop() context: AppProvisioningStepContext;
    @Prop() registerOnGoToNext: (onGoToNext: () => Promise<boolean>) => void;
    @Prop() registerOnGoToPrev: (onGoToPrev: () => Promise<boolean>) => void;

    @Inject(OmniaTheming) omniaTheming: OmniaTheming;
    @Inject(MultilingualStore) multilingualTextsStore: MultilingualStore

    isSaving: boolean = false;
    isThisGood: boolean = false;
    formValidator: FormValidator = null;
    isLoading: boolean = false;

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
        this.formValidator = new FormValidator(this);
        this.registerOnGoToNext(() => {
            return this.canGoNext(this.formValidator);
        });
    }

    protected canGoNext = (formValidator: FormValidator): Promise<boolean> => {
        return new Promise<boolean>((resolve, reject) => {
            resolve(formValidator.validateAll());
        })
    }
  
    render(h) {
        return (
            <div>
                <v-layout row wrap>
                    <v-flex xs12 class='text-xs-center'>
                       This is a demostep showing off the provisioning steps extensibility.                  
                    </v-flex>
                    <v-flex xs12>
                        <v-checkbox           
                            rules={
                                new FieldValueValidation()
                                    .CustomFunction(() => {return (this.isThisGood == true)}, "Yep")
                                    .getRules()
                            }
                            color={this.omniaTheming.promoted.body.primary.base}
                            label="Do you agree that Omnia Fx is awesome?"
                            input-value={this.isThisGood}
                            onChange={() => { this.isThisGood = !this.isThisGood }}>
                        </v-checkbox>                            
                    </v-flex>
                </v-layout>
            </div>
        );
    }
}
 
WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, IntroductionStep);
});
