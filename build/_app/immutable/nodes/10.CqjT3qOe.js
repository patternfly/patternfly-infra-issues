import"../chunks/Bg9kRutz.js";import"../chunks/69_IOA4Y.js";import{v as d,w as s,x as a,y as n,M as h}from"../chunks/ChzcytEk.js";import{t as w,b as y}from"../chunks/Bxzg7UnF.js";import{h as t}from"../chunks/zjc63Z6l.js";const x={title:"Migration Strategy"},{title:b}=x;var f=w('<h1></h1> <h1>Migration Project Documentation</h1> <h2>Overview</h2> <p><strong>Project Name:</strong> [Project Name] <strong>Migration Type:</strong> [Framework/Platform/Language] <strong>Start Date:</strong> [Date] <strong>Target Completion:</strong> [Date]</p> <h2>Executive Summary</h2> <p>Brief overview of the migration goals, scope, and expected outcomes.</p> <h2>Migration Process</h2> <pre class="language-mermaid"><!></pre> <h2>Migration Scope</h2> <h3>In Scope</h3> <ul><li>Component A</li> <li>Feature B</li> <li>Subsystem C</li></ul> <h3>Out of Scope</h3> <ul><li>Legacy System D</li> <li>External Integration E</li></ul> <h2>Technical Assessment</h2> <h3>Source System</h3> <ul><li>Framework/Platform: [Name & Version]</li> <li>Key Dependencies</li> <li>Architecture Pattern</li></ul> <h3>Target System</h3> <ul><li>Framework/Platform: [Name & Version]</li> <li>Key Dependencies</li> <li>Architecture Pattern</li></ul> <h2>Component Architecture</h2> <pre class="language-mermaid"><!></pre> <h2>Migration Strategy</h2> <h3>Phase 1: Analysis & Planning</h3> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Component inventory</li> <li class="task-list-item"><input type="checkbox" disabled> Dependency mapping</li> <li class="task-list-item"><input type="checkbox" disabled> Risk assessment</li> <li class="task-list-item"><input type="checkbox" disabled> Resource allocation</li></ul> <h3>Phase 2: Proof of Concept</h3> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Select representative components</li> <li class="task-list-item"><input type="checkbox" disabled> Develop migration patterns</li> <li class="task-list-item"><input type="checkbox" disabled> Validate approach</li> <li class="task-list-item"><input type="checkbox" disabled> Document learnings</li></ul> <h3>Phase 3: Implementation</h3> <ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled> Set up new environment</li> <li class="task-list-item"><input type="checkbox" disabled> Migrate core components</li> <li class="task-list-item"><input type="checkbox" disabled> Update dependencies</li> <li class="task-list-item"><input type="checkbox" disabled> Refactor as needed</li></ul> <h2>Testing Strategy</h2> <pre class="language-mermaid"><!></pre> <h3>Technical Patterns</h3> <pre class="language-javascript"><!></pre> <h3>State Management</h3> <ul><li>Previous approach</li> <li>New approach</li> <li>Migration path</li></ul>',1);function A(c){var r=f(),l=d(r);l.textContent=b;var e=s(l,14),k=a(e);t(k,()=>`<code class="language-mermaid"><span class="token keyword">graph</span> TD
    A<span class="token text string">[Analysis Phase]</span> <span class="token arrow operator">--></span> B<span class="token text string">[Proof of Concept]</span>
    B <span class="token arrow operator">--></span> C<span class="token text string">[Implementation]</span>
    C <span class="token arrow operator">--></span> D<span class="token text string">[Testing]</span>
    D <span class="token arrow operator">--></span> E<span class="token text string">[Rollout]</span>

    <span class="token keyword">subgraph</span> Analysis
    A1<span class="token text string">[Component Inventory]</span> <span class="token arrow operator">--></span> A2<span class="token text string">[Dependency Mapping]</span>
    A2 <span class="token arrow operator">--></span> A3<span class="token text string">[Risk Assessment]</span>
    <span class="token keyword">end</span>

    <span class="token keyword">subgraph</span> Implementation
    C1<span class="token text string">[Setup Environment]</span> <span class="token arrow operator">--></span> C2<span class="token text string">[Core Migration]</span>
    C2 <span class="token arrow operator">--></span> C3<span class="token text string">[Dependency Updates]</span>
    <span class="token keyword">end</span>

    <span class="token keyword">subgraph</span> Testing
    D1<span class="token text string">[Unit Tests]</span> <span class="token arrow operator">--></span> D2<span class="token text string">[Integration Tests]</span>
    D2 <span class="token arrow operator">--></span> D3<span class="token text string">[Performance Tests]</span>
    D3 <span class="token arrow operator">--></span> D4<span class="token text string">[User Acceptance Testing]</span>
    <span class="token keyword">end</span></code>`),n(e);var o=s(e,24),u=a(o);t(u,()=>`<code class="language-mermaid"><span class="token keyword">classDiagram</span>
    <span class="token keyword">class</span> OldComponent <span class="token punctuation">&#123;</span>
        +state<span class="token operator">:</span> any
        +lifecycle<span class="token punctuation">(</span><span class="token punctuation">)</span>
        +render<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">class</span> NewComponent <span class="token punctuation">&#123;</span>
        +props<span class="token operator">:</span> any
        +hooks<span class="token punctuation">(</span><span class="token punctuation">)</span>
        +render<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">class</span> Dependencies <span class="token punctuation">&#123;</span>
        +libraries
        +utilities
        +apis
    <span class="token punctuation">&#125;</span>

    OldComponent <span class="token arrow operator">--></span> Dependencies
    NewComponent <span class="token arrow operator">--></span> Dependencies

    <span class="token keyword">class</span> MigrationTransformer <span class="token punctuation">&#123;</span>
        +transform<span class="token punctuation">(</span><span class="token punctuation">)</span>
        +validate<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span>

    MigrationTransformer <span class="token arrow operator">--></span> OldComponent
    MigrationTransformer <span class="token arrow operator">--></span> NewComponent</code>`),n(o);var p=s(o,18),m=a(p);t(m,()=>`<code class="language-mermaid"><span class="token keyword">graph</span> LR
    A<span class="token text string">[Unit Tests]</span> <span class="token arrow operator">--></span> B<span class="token text string">[Integration Tests]</span>
    B <span class="token arrow operator">--></span> C<span class="token text string">[E2E Tests]</span>
    C <span class="token arrow operator">--></span> D<span class="token text string">[Performance Tests]</span>

    <span class="token keyword">subgraph</span> <span class="token string">"Test Coverage"</span>
    E<span class="token text string">[Components]</span> <span class="token arrow operator">--></span> F<span class="token text string">[Business Logic]</span>
    F <span class="token arrow operator">--></span> G<span class="token text string">[Data Flow]</span>
    G <span class="token arrow operator">--></span> H<span class="token text string">[User Flows]</span>
    <span class="token keyword">end</span>

    <span class="token keyword">subgraph</span> <span class="token string">"Validation Gates"</span>
    I<span class="token text string">[Code Review]</span> <span class="token arrow operator">--></span> J<span class="token text string">[Automated Tests]</span>
    J <span class="token arrow operator">--></span> K<span class="token text string">[Manual Testing]</span>
    K <span class="token arrow operator">--></span> L<span class="token text string">[Sign-off]</span>
    <span class="token keyword">end</span></code>`),n(p);var i=s(p,4),g=a(i);t(g,()=>`<code class="language-javascript"><span class="token comment">// Before</span>
<span class="token keyword">class</span> <span class="token class-name">OldComponent</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// Old implementation</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// After</span>
<span class="token keyword">const</span> <span class="token function-variable function">NewComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// New implementation</span>
<span class="token punctuation">&#125;</span></code>`),n(i),h(4),y(c,r)}export{A as component};
