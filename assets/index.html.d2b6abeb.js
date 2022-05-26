import{_ as e,g as a}from"./app.a39ec552.js";const n={},s=a(`<h1 id="activate-a-feature" tabindex="-1"><a class="header-anchor" href="#activate-a-feature" aria-hidden="true">#</a> Activate a Feature</h1><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//Inject IFeatureService (Omnia.Fx.Features.IFeatureService)</span>
IFeatureService FeatureService

<span class="token comment">//Then you can </span>
FeatureService<span class="token punctuation">.</span>ActivateFeatureAsync

<span class="token comment">//find more details in the service interface.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="ensure-proper-context-in-feature-action" tabindex="-1"><a class="header-anchor" href="#ensure-proper-context-in-feature-action" aria-hidden="true">#</a> Ensure proper context in feature action</h2><ul><li>Business Profile&#39;s feature - set <code>profileId</code> into <code>contextParams</code> parameter.</li><li>App&#39;s feature - set <code>appInstanceId</code> into <code>contextParams</code> parameter.</li></ul>`,4);function r(t,c){return s}var o=e(n,[["render",r],["__file","index.html.vue"]]);export{o as default};
