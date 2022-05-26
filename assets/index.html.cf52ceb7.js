import{_ as p,r as o,o as r,e as c,f as s,c as e,F as l,g as t,a as n}from"./app.a39ec552.js";const i={},u=t(`<h1 id="omnia-feature" tabindex="-1"><a class="header-anchor" href="#omnia-feature" aria-hidden="true">#</a> Omnia Feature</h1><h2 id="feature-scopes" tabindex="-1"><a class="header-anchor" href="#feature-scopes" aria-hidden="true">#</a> Feature scopes</h2><p>There are 3 main Feature scopes: Tenant, Business Profile and App Instance. You could find more information about it below.</p><h2 id="feature-with-server-side-handler" tabindex="-1"><a class="header-anchor" href="#feature-with-server-side-handler" aria-hidden="true">#</a> Feature with server-side handler</h2><p>This type of feature will interact with a <code>feature handler</code> (aka a queue job) in Worker. When you activate/upgrade/deactive the feature, it will send a queue message to <code>feature handler</code>. For example:</p><ul><li><p>TestFeature.manifest.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Composer
    <span class="token punctuation">.</span><span class="token function">registerManifest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Guid</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token constant">TEST</span><span class="token operator">-</span><span class="token constant">FEATURE</span><span class="token operator">-</span><span class="token constant">GUID</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">registerFeature</span>
    <span class="token punctuation">(</span><span class="token punctuation">{</span>
        version<span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
        category<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">//plain text or localization label</span>
        title<span class="token operator">:</span> <span class="token string">&quot;$Localize:NamespaceSomething.TestFeature.Title;&quot;</span><span class="token punctuation">,</span>
        description<span class="token operator">:</span> <span class="token string">&quot;$Localize:NamespaceSomething.TestFeature.Description;&quot;</span><span class="token punctuation">,</span>
        

        <span class="token comment">//1. Tenant scope feature</span>
        targetResolverType<span class="token operator">:</span> TargetResolverTypes<span class="token punctuation">.</span>Tenant<span class="token punctuation">,</span>
        permissionRole<span class="token operator">:</span> RoleDefinitions<span class="token punctuation">.</span>TenantAdmin<span class="token punctuation">,</span>
        
        <span class="token comment">//2. Business Profile scope feature</span>
        <span class="token comment">//targetResolverType: TargetResolverTypes.BusinessProfile,</span>
        <span class="token comment">//permissionRole: RoleDefinitions.BusinessProfileAdmin,        </span>

        <span class="token comment">//3. App Instance or SharePoint site scope feature</span>
        <span class="token comment">//targetResolverType: TargetResolverTypes.AppInstance,</span>
        <span class="token comment">//permissionRole: RoleDefinitions.AppInstanceAdmin,</span>



        icons<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">FontAwesomeIcon</span><span class="token punctuation">(</span><span class="token string">&quot;fas fa-cogs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">//This property is not used at the moment</span>
        parameters<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
        
        <span class="token comment">//Define that this feature has feature handler (C# queue job) </span>
        hasProviderHandling<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

        <span class="token comment">//Define that this feature is hidden from UI, it is still able to activate through Swagger/Postman. </span>
        hidden<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div></li><li><p>TestFeature.cs</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">namespace</span> <span class="token namespace">NamespaceSomething<span class="token punctuation">.</span>Features</span> <span class="token punctuation">{</span>
    
    <span class="token comment">//{TEST-FEATURE-GUID} is the same value as ManifestId in TestFeature.manifest.ts</span>
    <span class="token punctuation">[</span><span class="token function">OmniaFeature</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">id</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>TEST<span class="token operator">-</span>FEATURE<span class="token operator">-</span>GUID<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">internal</span> <span class="token keyword">class</span> <span class="token class-name">TestFeatureProvider</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseFeatureProvider</span></span>
    <span class="token punctuation">{</span>
        <span class="token comment">//Do not try-catch to swallow the exceptions without a purpose</span>
        <span class="token comment">//Omnia will handle feature failed status if there is any errors</span>
        <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">ActivateAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//Do not try-catch to swallow the exceptions without a purpose</span>
        <span class="token comment">//Omnia will handle feature failed status if there is any errors</span>
        <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name">Task</span> <span class="token function">UpgradeAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> fromVersion<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//Do not try-catch to swallow the exceptions without a purpose</span>
        <span class="token comment">//Omnia will handle feature failed status if there is any errors</span>
        <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name">Task</span> <span class="token function">DeactivateAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> fromVersion<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ul><li>If it is a Business Profile scope feature, you might want to get associated profile id:</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>
<span class="token comment">//inherit BaseBusinessProfileFeatureProvider...</span>
<span class="token keyword">internal</span> <span class="token keyword">class</span> <span class="token class-name">TestFeatureProvider</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseBusinessProfileFeatureProvider</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">ActivateAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//...then get the associated business profile id </span>
        <span class="token class-name"><span class="token keyword">var</span></span> profileId <span class="token operator">=</span> BusinessProfile<span class="token punctuation">.</span>Id<span class="token punctuation">;</span>

        <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li>If it is an App instance scope feature, you might want to get associated SharePoint site url:</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>
<span class="token comment">//inherit BaseAppFeatureProvider...</span>
<span class="token keyword">internal</span> <span class="token keyword">class</span> <span class="token class-name">TestFeatureProvider</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseAppFeatureProvider</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">ActivateAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//...then get the associated sp url</span>
        <span class="token class-name"><span class="token keyword">var</span></span> spUrl <span class="token operator">=</span> AppInstance<span class="token punctuation">.</span>Properties<span class="token punctuation">.</span>ContextParams<span class="token punctuation">.</span><span class="token function">EnsureContextParamStringValue</span><span class="token punctuation">(</span>Fx<span class="token punctuation">.</span>SharePoint<span class="token punctuation">.</span>Constants<span class="token punctuation">.</span>Parameters<span class="token punctuation">.</span>SPUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//...or app instance id</span>
        <span class="token class-name"><span class="token keyword">var</span></span> appInstanceId <span class="token operator">=</span> AppInstance<span class="token punctuation">.</span>Id

        <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li></ul><h2 id="feature-without-server-side-handler" tabindex="-1"><a class="header-anchor" href="#feature-without-server-side-handler" aria-hidden="true">#</a> Feature without server-side handler</h2>`,7),k=n("This type of feature is just an On/Off-switch and usually be used together with "),m={href:"https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/omnia-learn/manifest-load-rule#manifest-custom-load-rule",target:"_blank",rel:"noopener noreferrer"},b=n("manifest load rule"),d=n(". For example:"),h=t(`<ul><li><p>TestFeature.manifest.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Composer
    <span class="token punctuation">.</span><span class="token function">registerManifest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Guid</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token constant">TEST</span><span class="token operator">-</span><span class="token constant">FEATURE</span><span class="token operator">-</span><span class="token constant">GUID</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">registerFeature</span>
    <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token operator">...</span>

        <span class="token comment">//Define that this feature DOES NOT have feature handler (C# file) </span>
        hasProviderHandling<span class="token operator">:</span> <span class="token boolean">false</span>

        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li></ul><h2 id="where-to-create-a-feature-in-source-code" tabindex="-1"><a class="header-anchor" href="#where-to-create-a-feature-in-source-code" aria-hidden="true">#</a> Where to create a feature in source code</h2><ul><li><p>Feature with C#</p><p>It is recommended to put feature-with-C# in Worker project.</p></li><li><p>Feature without C#</p><p>It is recommended to put feature-without-C# in Web project. So that you can easily control the feature and manifest load rules in the same place.</p></li></ul><blockquote><p>Note: After deploying, features will be stuck with the orignal service (Web or Worker) that contains it. You should not move the features to other services or other extensions.</p></blockquote><h2 id="how-to-create-a-feature" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-feature" aria-hidden="true">#</a> How to create a feature</h2>`,5),f=n("You can visit the "),y={href:"https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/first-extension/create-feature#create-a-feature",target:"_blank",rel:"noopener noreferrer"},w=n("Create a Feature"),g=n(" part in "),v={href:"https://github.com/preciofishbone/OmniaFx/tree/master/docs/tutorials/first-extension#build-your-first-extension-like-a-boss",target:"_blank",rel:"noopener noreferrer"},T=n("Create Extension"),_=n(" tutorial to learn how to create a feature step by step.");function F(x,P){const a=o("ExternalLinkIcon");return r(),c(l,null,[u,s("p",null,[k,s("a",m,[b,e(a)]),d]),h,s("p",null,[f,s("a",y,[w,e(a)]),g,s("a",v,[T,e(a)]),_])],64)}var I=p(i,[["render",F],["__file","index.html.vue"]]);export{I as default};
