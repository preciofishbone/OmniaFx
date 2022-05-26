import{_ as n,g as s}from"./app.a39ec552.js";const a={},e=s(`<h1 id="apps" tabindex="-1"><a class="header-anchor" href="#apps" aria-hidden="true">#</a> Apps</h1><h2 id="officenamingpolicyvalidationresult" tabindex="-1"><a class="header-anchor" href="#officenamingpolicyvalidationresult" aria-hidden="true">#</a> OfficeNamingPolicyValidationResult</h2><p>Remove <strong>OfficeNamingPolicyValidationResult</strong>, <strong>AliasValidationResult</strong> and <strong>SiteNameValidationResult</strong> models from <strong>&quot;@omnia/workplace/models&quot;</strong> module</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">OfficeNamingPolicyValidationResult</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> AliasValidationResult<span class="token punctuation">;</span>
    siteName<span class="token operator">:</span> SiteNameValidationResult<span class="token punctuation">;</span>
    isValid<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AliasValidationResult</span> <span class="token punctuation">{</span>
    blockedWord<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    isExist<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    isInvalid<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    suggestedAlias<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    prefix<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    suffix<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SiteNameValidationResult</span> <span class="token punctuation">{</span>
    blockedWord<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    isInvalid<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    prefix<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    suffix<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="teamcollaborationapptemplate" tabindex="-1"><a class="header-anchor" href="#teamcollaborationapptemplate" aria-hidden="true">#</a> TeamCollaborationAppTemplate</h2><p>Remove <strong>ProvisionEnterpriseProperties</strong> model from <strong>&quot;@omnia/workplace/models&quot;</strong> module. Property <strong>permissionIdentities</strong> in <strong>TeamCollaborationAppTemplate</strong> model is removed also.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ProvisionEnterpriseProperties</span> <span class="token punctuation">{</span>
    team<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    yammer<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    facebook<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TeamCollaborationAppTemplate</span> <span class="token keyword">extends</span> <span class="token class-name">AppTemplate</span> <span class="token punctuation">{</span>
    permissionIdentities<span class="token operator">:</span> PermissionIdentities <span class="token operator">||</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token comment">// Removed from 7.0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="app-route-prefix" tabindex="-1"><a class="header-anchor" href="#app-route-prefix" aria-hidden="true">#</a> App route prefix</h2><p>Remove <strong>appRoutePrefix</strong> constant variable in <strong>WorkspaceApp</strong> namespace from <strong>&quot;@omnia/workplace/models&quot;</strong> module. Replace it by <strong>WorkplaceAppRoutePrefix</strong> const variable with <strong>workspace</strong> property.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> WorkspaceApp <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> appRoutePrefix <span class="token operator">=</span> <span class="token string">&quot;_wp&quot;</span><span class="token punctuation">;</span> <span class="token comment">// Removed from 7.0</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> WorkplaceAppRoutePrefix <span class="token operator">=</span> <span class="token punctuation">{</span>
    teamwork<span class="token operator">:</span> <span class="token string">&quot;_t&quot;</span><span class="token punctuation">,</span>
    workspace<span class="token operator">:</span> <span class="token string">&quot;_wp&quot;</span> <span class="token comment">// Use this instead</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,11);function p(t,o){return e}var r=n(a,[["render",p],["__file","apps.html.vue"]]);export{r as default};
