import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsReader, ThemeManager, MediaProviderComponentBase } from '@omnia/fx/ux';

import trianglify from 'trianglify';
import { TrianglifyProviderStyles } from './TrianglifyProvider.css';
import { Guid, ImageInformation, MediaPickerEnums, MediaPickerImageTransformationResult, MediaPickerVideo, VideoInformation } from '@omnia/fx-models';

@Component
export class TrianglifyProvider extends MediaProviderComponentBase implements IWebComponentInstance {


  private imageWidth = 1920;
  private imageHeight = 500;
  private cellSize = 75;
  private triangleVariance = 75;
  private patternIntensity = 75;
  private colors: string | Array<string> = "random";

  private pattern = null;
  private canvas = null;

  mounted() {
    WebComponentBootstrapper.registerElementInstance(this, this.$el);

    const defaultOptions = {
      width: 600,
      height: 400,
      cellSize: 75,
      variance: 0.75,
      seed: null,
      xColors: 'random',
      yColors: 'match',
      fill: true,
      palette: trianglify.colorbrewer,
      colorSpace: 'lab',
      colorFunction: trianglify.colorFunctions.interpolateLinear(0.5),
      strokeWidth: 0,
      points: null
    }
    this.reloadCanvas();

    // document.body.appendChild()
  }

  beforeSaved(resultToBeSaved: MediaPickerImageTransformationResult | VideoInformation): Promise<MediaPickerVideo | MediaPickerImageTransformationResult> {
    return new Promise<MediaPickerImageTransformationResult>((resolve) => {
      resolve(resultToBeSaved as MediaPickerImageTransformationResult);
    });
  }

  ensureCanvas(){
    const el = this.$refs.container as HTMLElement;
    if (!el || el.childNodes.length > 0) {
      return;
    }
    this.reloadCanvas();
  }

  reloadCanvas() {

    if (!this.$refs.container) {
      return;
    }
    const el = this.$refs.container as HTMLElement;
    if (el.childNodes.length > 0) {
      el.removeChild(el.lastElementChild)
    }


    const patternConfig = {
      width: this.imageWidth,
      height: this.imageHeight,
      cellSize: this.cellSize,
      variance: this.triangleVariance,
      xColors: this.colors,
    }

    this.pattern = trianglify(patternConfig)
    this.canvas = this.pattern.toCanvas();

    el.appendChild(this.canvas);

  }

  private save2() {

    const base64 = this.canvas.toDataURL("image/png");

    let selectedImageInfomation: ImageInformation = {
      mediaType: MediaPickerEnums.OmniaMediaTypes.Image,
      base64: base64,
      sizeInBytes: 10051,
      fileName: "trianglify-" + Guid.newGuid().toString() + ".png",
      altText: ""
    };
    let transformImageResolvablePromise = this.transformImage(selectedImageInfomation);
    transformImageResolvablePromise.promise.then((resultToBeSaved: MediaPickerImageTransformationResult) => {
      this.save(resultToBeSaved);
    });

  }


  private setColor(colors: Array<string>) {
    this.colors = colors;
    this.reloadCanvas();

  }

  getColorBrew(h, colors: Array<string>) {
    return (
      <div class={[TrianglifyProviderStyles.colorBrewer, "elevation-1 pb-2"]} onClick={() => this.setColor(colors)}>
        <div class={TrianglifyProviderStyles.colorTile} style={"background-color:" + colors[0]}></div>
        <div class={TrianglifyProviderStyles.colorTile} style={"background-color:" + colors[1]}></div>
        <div class={TrianglifyProviderStyles.colorTile} style={"background-color:" + colors[2]}></div>
        <div class={TrianglifyProviderStyles.colorTile} style={"background-color:" + colors[3]}></div>
        <div class={TrianglifyProviderStyles.colorTile} style={"background-color:" + colors[4]}></div>
        <div class={TrianglifyProviderStyles.colorTile} style={"background-color:" + colors[5]}></div>
        <div class={TrianglifyProviderStyles.colorTile} style={"background-color:" + colors[6]}></div>
        <div class={TrianglifyProviderStyles.colorTile} style={"background-color:" + colors[7]}></div>
        <div class={TrianglifyProviderStyles.colorTile} style={"background-color:" + colors[8]}></div>
      </div>
    )
  }

    renderColorBrewer(h){
        let palette = trianglify.defaultOptions.palette;        
        let palettes = Object.keys(palette).map((key) =>{
            return this.getColorBrew(h,palette[key])
        });
        return (
            <div>
                <div class={[TrianglifyProviderStyles.colorBrewer,"pb-2"]}>
                    <v-btn
                        block
                        class="elevation-0"
                        dark={this.theming.body.bg.dark}
                        color="rgba(255,255,255,0.10)"
                        onClick={()=>{
                            this.colors = "random";
                            this.reloadCanvas();
                        }
                        }                        
                    >
                        <v-icon left>fal fa-random</v-icon>    
                    </v-btn>        
                </div>
                <div class={[TrianglifyProviderStyles.colorBrewer,"pb-2"]}>
                    <omfx-color-picker
                        attachedToParent={true}
                        dark={this.theming.body.bg.dark}
                        label={"colors"}
                        model={{ color: this.theming.colors.primary.base }}
                        onChange={(newColor) => {
                            let colorsTemplate = ThemeManager.ParseColor(newColor.color);
                            let colorArray:Array<string> = [];
                            colorArray.push(colorsTemplate.lighten5);
                            colorArray.push(colorsTemplate.lighten3);
                            colorArray.push(colorsTemplate.lighten2);
                            colorArray.push(colorsTemplate.lighten1);                            
                            colorArray.push(colorsTemplate.base);                            
                            colorArray.push(colorsTemplate.darken1);                                                        
                            colorArray.push(colorsTemplate.darken2);
                            colorArray.push(colorsTemplate.darken3); 
                            colorArray.push(colorsTemplate.darken4);                                                                                                                                                                                                                                                                                                                   
                            this.colors = colorArray;
                            this.reloadCanvas();
                        }}>
                    </omfx-color-picker>
                </div>
                {palettes}
            </div>
        )
    }

    renderGeneralTab(h){    
        return(
            <div>
        <div>
          <span class={this.theming.body.text.css}>Pattern Intensity</span>
          <v-slider
            step="1"
            min="10"
            max="200"
            class="mt-10"
            ticks={true}
            thumb-label="always"
            onChange={(newVal) => { this.reloadCanvas(); }}
            color={this.theming.body.components.color.darken3}
            track-color={this.theming.body.components.color.lighten4}
            inverse-label
            v-model={this.patternIntensity}>
          </v-slider>
        </div>
        <div>
          <span class={this.theming.body.text.css}>Triangle Variance</span>
          <v-slider
            step="1"
            min="10"
            max="200"
            class="mt-10"
            ticks={true}
            thumb-label="always"
            onChange={(newVal) => { this.reloadCanvas(); }}
            color={this.theming.body.components.color.darken3}
            track-color={this.theming.body.components.color.lighten4}
            inverse-label
            v-model={this.triangleVariance}>
          </v-slider>
        </div>
        <div>
          <span class={this.theming.body.text.css}>Cell Size</span>
          <v-slider
            step="1"
            min="10"
            max="200"
            class="mt-10"
            ticks={true}
            thumb-label="always"
            onChange={(newVal) => { this.reloadCanvas(); }}
            color={this.theming.body.components.color.darken3}
            track-color={this.theming.body.components.color.lighten4}
            inverse-label
            v-model={this.cellSize}>
          </v-slider>
          <span class={this.theming.body.text.css}>Image Width</span>
          <v-text-field
            v-model={this.imageWidth}
            filled
            dark={this.theming.body.bg.dark}
            class="mt-2"
            type="number"
            suffix="px"
            onChange={() => this.reloadCanvas()}
          ></v-text-field>
          <span class={this.theming.body.text.css}>Image Height</span>
          <v-text-field
            v-model={this.imageHeight}
            filled
            dark={this.theming.body.bg.dark}
            class="mt-2"
            type="number"
            suffix="px"
            onChange={() => this.reloadCanvas()}
          ></v-text-field>

        </div>
    </div>)
    
    }
renderSettings(h){
    return(
        <v-tabs
        dark={this.theming.body.bg.dark}
        slider-color={this.theming.body.components.color.base}
        color={this.theming.body.components.color.base}
        background-color={this.theming.body.bg.color.base}
        class={this.theming.body.components.tabs.css}
        icons-and-text>
        <v-tab>
            Settings
            <v-icon dark={this.theming.body.bg.dark}>fal fa-sliders-v</v-icon>
        </v-tab>
        <v-tab>
            Colors
            <v-icon dark={this.theming.body.bg.dark}>brush</v-icon>
        </v-tab>
        <v-tab-item class="mt-5">
            {this.renderGeneralTab(h)}
        </v-tab-item>
        <v-tab-item class="mt-5">
            {this.renderColorBrewer(h)}
        </v-tab-item>
    </v-tabs>
    )
}


  render(h) {
    return this.renderBase(h, () => {
        /**To Ensure first loading and also loading on back button */
        this.$nextTick(()=>{
            //if(!this.hasBoundFirstTime){
                this.ensureCanvas();
            //}
        });

      let retElement = <div class={[TrianglifyProviderStyles.wrapper, "mx-2"]}>
        <div class={TrianglifyProviderStyles.settings}>
            {this.renderSettings(h)}
        </div>
        <div class={TrianglifyProviderStyles.canvas} onClick={this.save2}>
          <div class={TrianglifyProviderStyles.trianglify} ref="container"></div>
        </div>
        {
        // <v-btn
        //     class="elevation-0"
        //     dark={this.theming.body.bg.dark}
        //     color="rgba(255,255,255,0.10)"
        //     onClick={()=>{
        //         this.save2();
        //     }
        //     }>
        //      Save               
        // </v-btn>        
        }
      </div>
      return retElement;
    })
  }
}

WebComponentBootstrapper.registerElement((manifest) => {
  vueCustomElement(manifest.elementName, TrianglifyProvider);
});