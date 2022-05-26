import{_ as n,g as a}from"./app.a39ec552.js";const s={},e=a(`<h1 id="wait-for-app-provisioning" tabindex="-1"><a class="header-anchor" href="#wait-for-app-provisioning" aria-hidden="true">#</a> Wait for App provisioning</h1><p>After creating an app instance, there may be some provisioning tasks that are still running in background. You might want to follow the sample code below to wait for app provisioning state:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>
<span class="token comment">//Inject IAppService from Omnia.Fx.Apps namespace</span>
<span class="token class-name">IAppService</span> AppService<span class="token punctuation">;</span>

<span class="token comment">//A newly created appInstance that need to wait for the provisioning</span>
<span class="token class-name">AppInstance</span> appInstance<span class="token punctuation">;</span>

<span class="token comment">//Wait</span>
<span class="token keyword">await</span> AppService<span class="token punctuation">.</span><span class="token function">WaitForProvisioningStateAsync</span><span class="token punctuation">(</span>appInstance<span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">successFunc</span><span class="token punctuation">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>appInstance<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//all provisioning tasks were completed successfully!</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">errorFunc</span><span class="token punctuation">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>appInstance<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//something was failed!</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">timeoutFunc</span><span class="token punctuation">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>appInstance<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//timeout was reached!</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">minutesTimeout</span><span class="token punctuation">:</span> <span class="token number">10</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h1 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h1><ul><li>If the associated app template requires approval then it will throw exception in <code>WaitForProvisioningStateAsync</code>.</li><li>There may be some special cases that take up to 30 minutes to wait for. (e.g. The system will try to handle SharePoint&#39;s temporary failures internally)</li></ul>`,5);function p(t,c){return e}var i=n(s,[["render",p],["__file","index.html.vue"]]);export{i as default};
