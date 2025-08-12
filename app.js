  const THEME_KEY='ng_theme_v1';
  const SCHEMA_KEY='ng_schema_v1';

  // Embedded default master (fallback)
  const DEFAULT_MASTER = {"generators": [{"id": "campaign", "title": "Campaign Name", "order": ["Channel", "User stage", "Platform", "Publisher", "CampaignType", "Region", "Language"], "delimiter": "_", "case": "lower", "optional": ["Language"], "fields": {"Channel": [{"label": "Display", "code": "dspl"}, {"label": "Paid Video", "code": "pv"}, {"label": "Paid Social", "code": "pdsc"}, {"label": "Paid Search NonBrand", "code": "srch"}, {"label": "Paid Search Brand", "code": "srch_semrush"}], "User stage": [{"label": "Engage", "code": "engage"}, {"label": "Convert", "code": "convert"}, {"label": "Attract", "code": "attract"}, {"label": "Branding", "code": "branding"}], "Platform": [{"label": "GDN", "code": "gdn"}, {"label": "DV360", "code": "dv"}, {"label": "Yahoo", "code": "yahoodsp"}, {"label": "Youtube", "code": "yt"}, {"label": "Meta", "code": "meta"}, {"label": "LinkedIn", "code": "linkedin"}, {"label": "Twitch", "code": "twitch"}, {"label": "Reddit", "code": "reddit"}, {"label": "Google Ads", "code": "googleads"}, {"label": "bing", "code": "bing"}, {"label": "tiktok", "code": "tiktok"}], "Publisher": [{"label": "Adroll", "code": "adroll"}, {"label": "Linkedin", "code": "linkedin"}, {"label": "Reddit", "code": "reddit"}, {"label": "Criteo", "code": "criteo"}, {"label": "Moloco", "code": "moloco"}, {"label": "Bing", "code": "bing"}], "CampaignType": [{"label": "dynamic ads", "code": "dyn"}, {"label": "Discovery Ads", "code": "dsc"}, {"label": "Performance Max", "code": "pmax"}, {"label": "Connected TV", "code": "ctv"}, {"label": "Audio", "code": "audio"}, {"label": "VideoView", "code": "videoview"}, {"label": "VideoReach", "code": "videoreach"}, {"label": "CPV", "code": "cpv"}, {"label": "VAC", "code": "vac"}, {"label": "DemandGen", "code": "demandgen"}, {"label": "Podcast", "code": "podcast"}], "Region": [{"label": "Core", "code": "Core"}, {"label": "Core1", "code": "Core1"}, {"label": "Core2", "code": "Core2"}, {"label": "ROW", "code": "ROW"}, {"label": "ROWT1", "code": "ROWT1"}, {"label": "ROWT2", "code": "ROWT2"}, {"label": "Asia", "code": "Asia"}, {"label": "Nordics", "code": "Nordics"}, {"label": "DE", "code": "DE"}, {"label": "ES", "code": "ES"}, {"label": "FR", "code": "FR"}, {"label": "IT", "code": "IT"}, {"label": "US", "code": "US"}, {"label": "IN", "code": "IN"}, {"label": "PT", "code": "PT"}, {"label": "LATAM", "code": "LATAM"}, {"label": "BR", "code": "BR"}, {"label": "UY", "code": "UY"}, {"label": "AR", "code": "AR"}, {"label": "PE", "code": "PE"}, {"label": "ANZ", "code": "ANZ"}, {"label": "DACH", "code": "DACH"}], "Language": [{"label": "English", "code": "EN"}, {"label": "Spanish", "code": "ES"}, {"label": "Portuguese", "code": "PT"}, {"label": "Italian", "code": "IT"}, {"label": "German", "code": "DE"}, {"label": "French", "code": "FR"}, {"label": "Japanese", "code": "JA"}, {"label": "Spanish Latam", "code": "ES_Latam"}]}}, {"id": "adgroup", "title": "Ad Group Name", "order": ["Campaign Category", "Campaign Name", "Campaign Objective", "Company Size", "Audience", "Persona", "Campaign Content"], "delimiter": "_", "case": "lower", "fields": {"Campaign Category": [{"label": "Brand", "code": "brand"}, {"label": "Main Funnel", "code": "main"}, {"label": "Product", "code": "product"}], "Campaign Name": [{"label": "Make It", "code": "makeit"}, {"label": "Gaby", "code": "gaby"}, {"label": "SMB", "code": "smb"}, {"label": "Rapid AI", "code": "rapidai"}, {"label": "PFC", "code": "pfc"}, {"label": "PFC Edgy", "code": "pfcedgy"}, {"label": "Toolkits", "code": "toolkits"}], "Campaign Objective": [{"label": "Engagement", "code": "engagement"}, {"label": "Lead", "code": "lead"}, {"label": "Traffic", "code": "traffic"}, {"label": "Conversions", "code": "conversions"}], "Company Size": [{"label": "SMB", "code": "smb-size"}, {"label": "Mid-market", "code": "mid-size"}, {"label": "Enterprise", "code": "enterprise-size"}], "Audience": [{"label": "Interest", "code": "interest"}, {"label": "Keywords", "code": "kws"}, {"label": "Inmarket", "code": "inmarket"}, {"label": "Custom Interest", "code": "custom-interest"}, {"label": "Combined", "code": "combined"}, {"label": "Lookalike", "code": "lookalike"}, {"label": "Visitors / Engaged", "code": "visitors"}, {"label": "Registered / Convert", "code": "reg"}, {"label": "High Intent", "code": "high-intent"}, {"label": "Projects+Trials", "code": "project-trials"}], "Persona": [{"label": "Full-Stack Marketer", "code": "fsm"}, {"label": "SEO Professional", "code": "seo"}, {"label": "Full-stack marketer + SEO professional", "code": "fsm-seo"}, {"label": "SMBOwner+Fullstack marketer", "code": "smb-fsm"}, {"label": "SMBOwner", "code": "smb-owner"}, {"label": "AllPersona", "code": "all-psn"}], "Campaign Content": [{"label": "SEO Toolkit", "code": "SeoToolkit"}, {"label": "Advertiser Toolkit", "code": "AdvertisingToolkit"}, {"label": "Traffic Toolkit", "code": "TrafficToolkit"}, {"label": "Content Toolkit", "code": "ContentToolkit"}, {"label": "Social Toolkit", "code": "SocialToolkit"}, {"label": "Local Toolkit", "code": "LocalToolkit"}, {"label": "AI Toolkit", "code": "AIToolkit"}, {"label": "PR Toolkit", "code": "PRToolkit"}, {"label": "All in One Toolkit", "code": "Allinonetoolkit"}, {"label": "Enterprise", "code": "Enterprise"}]}}, {"id": "asset", "title": "Asset Name", "order": ["Campaign Category", "Campaign Name", "Persona", "Landing Page Type", "LP Content Name", "Creative Name", "Campaign Content", "Asset Format", "Asset SubType", "Language"], "delimiter": "_", "case": "lower", "fields": {"Campaign Category": [{"label": "Brand", "code": "brand"}, {"label": "Main", "code": "main"}, {"label": "Product", "code": "product"}], "Campaign Name": [{"label": "Make It", "code": "makeit"}, {"label": "Gaby", "code": "gaby"}, {"label": "SMB", "code": "smb"}, {"label": "Rapid AI", "code": "rapidai"}, {"label": "PFC", "code": "pfc"}, {"label": "PFC edgy", "code": "pfcedgy"}, {"label": "Toolkits", "code": "toolkits"}], "Persona": [{"label": "Full-Stack Marketer", "code": "fsm"}, {"label": "SEO", "code": "seo"}, {"label": "Full-Stack Marketer - SEO", "code": "fsm-seo"}, {"label": "SMB - Full Stack Marketer", "code": "smb-fsm"}, {"label": "SMB", "code": "smb"}, {"label": "All-PSN", "code": "all-psn"}], "Landing Page Type": [{"label": "Blogpost", "code": "bp"}, {"label": "LP", "code": "lp"}, {"label": "SS", "code": "ss"}, {"label": "Webinar", "code": "web"}, {"label": "Event", "code": "evt"}, {"label": "WP", "code": "wp"}, {"label": "Academy", "code": "acd"}, {"label": "Ebook", "code": "ebook"}, {"label": "Case Study", "code": "cs"}], "LP Content Name": [{"label": "solution-all-in-one", "code": "solution-all-in-one"}, {"label": "product-seo-challenges", "code": "product-seo-challenges"}, {"label": "traffic-analytics-7-new", "code": "traffic-analytics-7-new"}, {"label": "product-content-marketing", "code": "product-content-marketing"}, {"label": "product-free-trial", "code": "product-free-trial"}, {"label": "product-instant-market-insights-1", "code": "product-instant-market-insights-1"}, {"label": "product-all-in-one-local-marketing-solution-new", "code": "product-all-in-one-local-marketing-solution-new"}, {"label": "product-keyword-magic-tool-7", "code": "product-keyword-magic-tool-7"}, {"label": "product-semrush-plans-comparison", "code": "product-semrush-plans-comparison"}, {"label": "creating-reports-with-semrush-report-builder", "code": "creating-reports-with-semrush-report-builder"}, {"label": "advanced-google-ads-tips-skyrocket-your-profit", "code": "advanced-google-ads-tips-skyrocket-your-profit"}], "Creative Name": [{"label": "competitorresearch", "code": "competitorresearch"}, {"label": "fixsiteseo", "code": "fixsiteseo"}, {"label": "jtbddiscoverwinningkeywords", "code": "jtbddiscoverwinningkeywords"}, {"label": "allseoonetab", "code": "allseoonetab"}, {"label": "wanttoknow", "code": "wanttoknow"}, {"label": "seochecklist", "code": "seochecklist"}, {"label": "discoverexactkeywords", "code": "discoverexactkeywords"}, {"label": "fixtechnicalseo", "code": "fixtechnicalseo"}, {"label": "algorithmchanged", "code": "algorithmchanged"}, {"label": "competitorsknowyourstrategy", "code": "competitorsknowyourstrategy"}, {"label": "12tabsopen", "code": "12tabsopen"}, {"label": "searchmoves", "code": "searchmoves"}, {"label": "404problems", "code": "404problems"}, {"label": "herocornershop", "code": "herocornershop"}, {"label": "sssmileworks", "code": "sssmileworks"}, {"label": "herofancylimousines", "code": "herofancylimousines"}, {"label": "sssmokies", "code": "sssmokies"}, {"label": "jtbdfreetrial", "code": "jtbdfreetrial"}, {"label": "jtbdrankinyear", "code": "jtbdrankinyear"}, {"label": "nottocry", "code": "nottocry"}, {"label": "toomanythings", "code": "toomanythings"}, {"label": "createcontentforpeople", "code": "createcontentforpeople"}, {"label": "jtbdfreetrialrecolored", "code": "jtbdfreetrialrecolored"}, {"label": "youragency", "code": "youragency"}, {"label": "explorer", "code": "explorer"}, {"label": "herocorporateladder", "code": "herocorporateladder"}, {"label": "newtoseo", "code": "newtoseo"}, {"label": "improveseoperformance", "code": "improveseoperformance"}, {"label": "startingseojourney", "code": "startingseojourney"}, {"label": "makebusinessnr1", "code": "makebusinessnr1"}, {"label": "succeedonline", "code": "succeedonline"}, {"label": "comicsilentrating", "code": "comicsilentrating"}, {"label": "betterseo", "code": "betterseo"}, {"label": "HJTBDImproveblogpost", "code": "hjtbdimproveblogpost"}, {"label": "rankhighercontent", "code": "rankhighercontent"}, {"label": "contentinone", "code": "contentinone"}, {"label": "createseofriendlycontentinoneplace", "code": "createseofriendlycontentinoneplace"}, {"label": "simlpifysocialmedia", "code": "simlpifysocialmedia"}, {"label": "checklist", "code": "checklist"}, {"label": "fixissuesnew", "code": "fixissuesnew"}, {"label": "UGCrankhigh", "code": "ugcrankhigh"}, {"label": "growbusiness", "code": "growbusiness"}, {"label": "investigatecompetitors", "code": "investigatecompetitors"}, {"label": "HJTBDfindpopularproducts", "code": "hjtbdfindpopularproducts"}, {"label": "alltoolsinone", "code": "alltoolsinone"}, {"label": "UGCdrivetraffic", "code": "ugcdrivetraffic"}, {"label": "comicdontdothis", "code": "comicdontdothis"}, {"label": "reportresults", "code": "reportresults"}, {"label": "quotehighintent", "code": "quotehighintent"}, {"label": "404highintent", "code": "404highintent"}, {"label": "stuckhighintent", "code": "stuckhighintent"}, {"label": "everythingyouneed", "code": "everythingyouneed"}, {"label": "SEOChallengesYTComponent", "code": "seochallengesytcomponent"}, {"label": "SEOChallengesOptimizedCreatives", "code": "seochallengesoptimizedcreatives"}, {"label": "competitorsspikedhighintent", "code": "competitorsspikedhighintent"}, {"label": "competitorsoutpacinghighintent", "code": "competitorsoutpacinghighintent"}, {"label": "analyzerival", "code": "analyzerival"}, {"label": "analyzecompetitor", "code": "analyzecompetitor"}, {"label": "CompetitiveResearchYTComponent", "code": "competitiveresearchytcomponent"}, {"label": "grabaudiencesattention", "code": "grabaudiencesattention"}, {"label": "SEOWritingAssistant5YTComponent", "code": "seowritingassistant5ytcomponent"}, {"label": "Swamped", "code": "swamped"}, {"label": "whichtask", "code": "whichtask"}, {"label": "EasySolutionsOptimizedCreatives", "code": "easysolutionsoptimizedcreatives"}, {"label": "digitalinsighttrends", "code": "digitalinsighttrends"}, {"label": "trafficinsights", "code": "trafficinsights"}, {"label": "sslibereatnew", "code": "sslibereatnew"}, {"label": "revampmarketingstrategynew", "code": "revampmarketingstrategynew"}, {"label": "ssmorningside", "code": "ssmorningside"}, {"label": "jtbdAImagic", "code": "jtbdaimagic"}, {"label": "findkeywords", "code": "findkeywords"}, {"label": "ugc3reasons", "code": "ugc3reasons"}, {"label": "UGCgrowagency", "code": "ugcgrowagency"}, {"label": "sslibereatagency", "code": "sslibereatagency"}, {"label": "pitchprospects", "code": "pitchprospects"}, {"label": "ssuhs", "code": "ssuhs"}, {"label": "whitelabelandautomatedreporting", "code": "whitelabelandautomatedreporting"}, {"label": "driveROIwiththerightkeywords", "code": "driveroiwiththerightkeywords"}, {"label": "tbc", "code": "tbc"}, {"label": "ugcdailydatajen", "code": "ugcdailydatajen"}, {"label": "rankhigh", "code": "rankhigh"}, {"label": "getlocalcustomers", "code": "getlocalcustomers"}, {"label": "keywordresearch", "code": "keywordresearch"}, {"label": "dissect", "code": "dissect"}, {"label": "boostproductivity", "code": "boostproductivity"}, {"label": "jusrregistered", "code": "jusrregistered"}, {"label": "inc", "code": "inc"}], "Campaign Content": [{"label": "Seo Toolkit", "code": "seotoolkit"}, {"label": "Advertising Toolkit", "code": "advertisingtoolkit"}, {"label": "Traffic Toolkit", "code": "traffictoolkit"}, {"label": "Content Toolkit", "code": "contenttoolkit"}, {"label": "Social Toolkit", "code": "socialtoolkit"}, {"label": "Local Toolkit", "code": "localtoolkit"}, {"label": "AI Toolkit", "code": "aitoolkit"}, {"label": "PR Toolkit", "code": "prtoolkit"}, {"label": "All-in-One Toolkit", "code": "allinonetoolkit"}, {"label": "Enterprise", "code": "enterprise"}], "Asset Format": [{"label": "HTML5 Banner", "code": "bnr-html5"}, {"label": "Animated Banner", "code": "bnr-anim"}, {"label": "Carousel", "code": "carousel"}, {"label": "Dynamic Remarketing", "code": "dynrem"}, {"label": "Inmail", "code": "inmail"}, {"label": "Image", "code": "image"}, {"label": "Video 10s", "code": "video10s"}, {"label": "Video 15s", "code": "video15s"}, {"label": "Video 30s", "code": "video30s"}, {"label": "Video over 30s", "code": "videoover30s"}], "Asset SubType": [{"label": "AIJTBD", "code": "aijtbd"}, {"label": "AnimatedJTBD", "code": "animatedjtbd"}, {"label": "ShootJTBD", "code": "shootjtbd"}, {"label": "AIUGC", "code": "aiugc"}, {"label": "ShootVSC", "code": "shootvsc"}, {"label": "Human", "code": "human"}, {"label": "Human+UI", "code": "humanui"}, {"label": "UI", "code": "ui"}, {"label": "Quote", "code": "quote"}, {"label": "ShootSS", "code": "shootss"}, {"label": "Checklist", "code": "checklist"}, {"label": "ProductWalkthrough", "code": "productwalkthrough"}], "Language": [{"label": "English", "code": "en"}, {"label": "Spanish", "code": "es"}, {"label": "French", "code": "fr"}, {"label": "German", "code": "de"}]}}]};

  const themeBtn=document.getElementById('themeBtn');
  function loadTheme(){
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    try{
      const t = localStorage.getItem(THEME_KEY);
      if(t){
        document.documentElement.setAttribute('data-theme', t);
      }else{
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      }
    }catch(e){
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  }
  function setTheme(t){
    document.documentElement.setAttribute('data-theme', t);
    try{localStorage.setItem(THEME_KEY, t);}catch(e){}
  }
  themeBtn.addEventListener('click',()=>{
    const cur=document.documentElement.getAttribute('data-theme')||'light';
    setTheme(cur==='dark'?'light':'dark');
  });
  loadTheme();

  let MASTER = DEFAULT_MASTER; // show something immediately
  let SCHEMA_MODE = 'Embedded JSON';

  function toast(msg){
    const t=document.createElement('div');
    t.className='toast'; t.setAttribute('role','status'); t.setAttribute('aria-live','polite');
    t.textContent=msg; document.body.appendChild(t);
    setTimeout(()=>t.remove(), 1200);
  }

  function byCase(str, c){
    if(c==='lower') return (str||'').toLowerCase();
    if(c==='upper') return (str||'').toUpperCase();
    return str||'';
  }

  function renderConvention(panelRight, gen){
    panelRight.innerHTML = '';
    const main = document.createElement('main');

    const groups = Object.entries(gen.fields || {});

    groups.forEach(([group, arr])=>{
      const d = document.createElement('details');
      const s = document.createElement('summary'); s.textContent = group; d.appendChild(s);
      const wrap = document.createElement('div'); wrap.className = 'kvs'; d.appendChild(wrap);

      (arr || []).forEach(({label, code})=>{
        const row = document.createElement('div'); row.className='kv';
        const k = document.createElement('code'); k.textContent = label ?? 'label';
        const v = document.createElement('code'); v.textContent = code ?? '';
        row.appendChild(k); row.appendChild(v);
        wrap.appendChild(row);
      });

      main.appendChild(d);
    });

    // Raw schema intentionally removed from UI per request.

    panelRight.appendChild(main);
  }

  function renderPair(container, gen){
    const pair = document.createElement('section'); pair.className='pair grid';

    // LEFT: generator panel
    const left = document.createElement('section'); left.className='panel';
    const lh = document.createElement('header');
    const h2 = document.createElement('h2'); 
    if(gen.id === 'campaign'){h2.textContent = 'Campaign Name Generator';}
    else if(gen.id === 'adgroup'){h2.textContent = 'Ad Group Name Generator';}
    else if(gen.id === 'asset'){h2.textContent = 'Asset Name Generator';}
    else {h2.textContent = 'Generator';} lh.appendChild(h2);
    const leftControls = document.createElement('div'); leftControls.style.display='flex'; leftControls.style.gap='8px'; leftControls.style.alignItems='center';
    const allReq = !(gen.optional && gen.optional.length);
    const reqChip = document.createElement('span');
    reqChip.className = 'badge';
    reqChip.textContent = allReq ? 'All fields required' : `${gen.optional.length} optional`;
    leftControls.appendChild(reqChip);
    const clearBtnHead = document.createElement('button'); clearBtnHead.textContent='Clear'; clearBtnHead.className='btn clear'; leftControls.appendChild(clearBtnHead);
    lh.appendChild(leftControls);
    lh.style.justifyContent='space-between';
    left.appendChild(lh);

    const lm = document.createElement('main');

    // controls
    const controls = document.createElement('div'); controls.className='controls'; lm.appendChild(controls);

    // state per generator
    const state = {};  // field -> code
    const required = new Set((gen.order||[]).filter(f=>!(gen.optional||[]).includes(f)));

    (gen.order||[]).forEach(field=>{
      const row = document.createElement('div'); row.className='row';

      const label = document.createElement('div'); label.className='label';
      const lab = document.createElement('label'); lab.textContent = field; lab.setAttribute('for', `${gen.id}_${field}`);
      const hint = document.createElement('small'); if(!required.has(field)){ hint.textContent = 'Optional'; }
      label.appendChild(lab); label.appendChild(hint);

      const selWrap = document.createElement('div'); selWrap.className='select';
      const sel = document.createElement('select'); sel.id = `${gen.id}_${field}`; sel.setAttribute('data-field', field);
      const placeholder = document.createElement('option'); placeholder.value=''; placeholder.textContent='— choose —'; placeholder.disabled=true; placeholder.selected=true;
      sel.appendChild(placeholder);
      (gen.fields[field]||[]).forEach(o=>{
        const opt = document.createElement('option'); opt.value=o.code; opt.textContent=o.label ?? o.code; sel.appendChild(opt);
      });
      selWrap.appendChild(sel);

      row.appendChild(label); row.appendChild(selWrap);
      controls.appendChild(row);

      sel.addEventListener('change', e=>{
        state[field] = e.target.value;
        sel.classList.remove('missing');
        compose();
      });
    });

    // output
    const outWrap = document.createElement('div'); outWrap.className='out';
    const outPre = document.createElement('pre'); outPre.id = `${gen.id}_out`; outWrap.appendChild(outPre);

    const copybar = document.createElement('div'); copybar.className='copybar';
    const copyBtn = document.createElement('button'); copyBtn.textContent='Copy'; copyBtn.className='btn primary'; copybar.appendChild(copyBtn);
    const statusPill = document.createElement('span'); statusPill.className='pill warn'; statusPill.innerHTML='<b>Select all fields</b>'; copybar.appendChild(statusPill);

    outWrap.appendChild(copybar);
    lm.appendChild(outWrap);

    // recents
    const recentWrap = document.createElement('div'); recentWrap.className='recent';
    const h3 = document.createElement('h3'); h3.textContent='Recent outputs'; recentWrap.appendChild(h3);
    const recentList = document.createElement('div'); recentList.className='recent-list'; recentList.id = `${gen.id}_recent`; recentWrap.appendChild(recentList);
    lm.appendChild(recentWrap);

    left.appendChild(lm);

    // RIGHT: convention panel
    const right = document.createElement('section'); right.className='panel';
    const rh = document.createElement('header');
    const rht = document.createElement('h2'); rht.textContent='Naming Convention'; rh.appendChild(rht);
    const mode = document.createElement('span'); mode.className='badge'; mode.textContent = (SCHEMA_MODE==='Loaded'?'Remote JSON':SCHEMA_MODE); rh.appendChild(mode);
    rh.style.justifyContent='space-between'; right.appendChild(rh);
    
// NEW: create a content container inside the right panel
const rightContent = document.createElement('main');
right.appendChild(rightContent);

// UPDATED: only render into the content container (leaves header + badge intact)
renderConvention(rightContent, gen);

    // mount
    pair.appendChild(left);
    pair.appendChild(right);
    container.appendChild(pair);

    const RECENTS_KEY = `ng_recent_${gen.id}`;

    function renderRecents(){
      recentList.innerHTML='';
      try{
        const raw = localStorage.getItem(RECENTS_KEY);
        const arr = raw? JSON.parse(raw): [];
        arr.forEach(v=>{
          const pill=document.createElement('div'); pill.className='recent-pill';
          const code=document.createElement('code'); code.textContent=v; pill.appendChild(code);
          const btn=document.createElement('button'); btn.type='button'; btn.textContent='×'; btn.setAttribute('aria-label','remove');
          btn.addEventListener('click',()=>{
            const raw=localStorage.getItem(RECENTS_KEY);
            const arr=raw? JSON.parse(raw): [];
            const next=arr.filter(x=>x!==v);
            localStorage.setItem(RECENTS_KEY, JSON.stringify(next));
            renderRecents();
          });
          pill.appendChild(btn);
          recentList.appendChild(pill);
        });
      }catch(e){}
    }

    function addRecent(val){
      try{
        const raw=localStorage.getItem(RECENTS_KEY);
        const arr=raw? JSON.parse(raw): [];
        const filtered = arr.filter(x=>x!==val);
        filtered.unshift(val);
        const limited = filtered.slice(0, 12);
        localStorage.setItem(RECENTS_KEY, JSON.stringify(limited));
        renderRecents();
      }catch(e){}
    }

    function allSelected(){
      return (gen.order||[]).every(f => {
        if(!required.has(f)) return true; // optional allowed
        return !!state[f];
      });
    }

    function highlightMissing(){
      (gen.order||[]).forEach(f=>{
        if(required.has(f) && !state[f]){
          const el = document.getElementById(`${gen.id}_${f}`);
          el && el.classList.add('missing');
        }
      });
    }

    function resetAll(){
      (gen.order||[]).forEach(f=>{
        const el=document.getElementById(`${gen.id}_${f}`);
        if(el){ el.selectedIndex=0; el.classList.remove('missing'); }
        state[f]='';
      });
      compose();
    }

    function compose(){
      const delimiter = gen.delimiter || '_';
      const parts = (gen.order||[]).map(f => state[f] || '');
      const cased = parts.map(p => byCase(p, gen.case||'lower'));
      const joined = cased.filter(Boolean).join(delimiter);
      const ok = allSelected();
      statusPill.className = ok ? 'pill ok' : 'pill warn';
      statusPill.innerHTML = ok ? '<b>Ready to copy</b>' : '<b>Select all fields</b>';
      outPre.textContent = joined || 'Select values to generate…';
    }

    async function copyOut(){
      if(!allSelected()){
        highlightMissing();
        toast('Please select all required fields');
        return;
      }
      const delimiter = gen.delimiter || '_';
      const parts = (gen.order||[]).map(f => state[f] || '');
      const cased = parts.map(p => byCase(p, gen.case||'lower'));
      const out = cased.filter(Boolean).join(delimiter);
      try{
        await navigator.clipboard.writeText(out);
        toast('Copied to clipboard');
        addRecent(out);
        resetAll();
      }catch(e){
        const ta=document.createElement('textarea'); ta.value=out; document.body.appendChild(ta); ta.select();
        const ok=document.execCommand('copy'); document.body.removeChild(ta);
        if(ok){ toast('Copied'); addRecent(out); resetAll(); }
        else { toast('Copy failed'); }
      }
    }

    copyBtn.addEventListener('click', copyOut);
    clearBtnHead.addEventListener('click', resetAll);

    renderRecents();
    compose();
  }

  function renderAll(){
    const pairs = document.getElementById('pairs');
    pairs.innerHTML = '';
    // Render ALL generators by default
    (MASTER.generators || []).forEach(gen => renderPair(pairs, gen));
  }

  async function loadCSV(file){
    try{
      const text = await new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsText(file);
      });
      const lines = (text || '').split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
      if(!lines.length) throw new Error('Empty file');
      if(/^generator\s*,/i.test(lines[0])) lines.shift();
      const gens = {};
      lines.forEach((line, idx)=>{
        const parts = line.split(',');
        if(parts.length < 8) throw new Error(`Invalid row ${idx+1}`);
        const [gid, order, field, optional, label, code, delimiter, caseRule] = parts.map(p=>p.trim());
        if(!gid || !field || !code) throw new Error(`Missing values on row ${idx+1}`);
        const pos = Number(order);
        const opt = /^true$/i.test(optional);
        if(!gens[gid]){
          gens[gid] = {id:gid, order:[], fields:{}, optional:[], delimiter:delimiter||'_', case:caseRule||'lower'};
        }
        const g = gens[gid];
        g.order[pos] = field;
        if(opt) g.optional.push(field);
        if(!g.fields[field]) g.fields[field] = [];
        g.fields[field].push({label, code});
      });
      Object.values(gens).forEach(g=>{ g.order = g.order.filter(Boolean); });
      MASTER = {generators:Object.values(gens)};
      SCHEMA_MODE = 'CSV Upload';
      renderAll();
      toast('CSV schema loaded');
    }catch(e){
      console.error(e);
      toast(e.message || 'Failed to load CSV');
    }
  }

  async function loadSchema(url){
    try{
      const res = await fetch(url, {cache:'no-store'});
      if(!res.ok) throw new Error('Load failed');
      const json = await res.json();
      if(!json || !Array.isArray(json.generators)) throw new Error('Invalid schema shape');
      MASTER = json;
      SCHEMA_MODE = 'Loaded';
      try{ localStorage.setItem(SCHEMA_KEY, JSON.stringify(MASTER)); }catch(_){}
      renderAll();
    }catch(e){
      try{
        const raw = localStorage.getItem(SCHEMA_KEY);
        if(raw){ MASTER = JSON.parse(raw); SCHEMA_MODE = 'Local copy'; renderAll(); return; }
      }catch(_e){}
      MASTER = DEFAULT_MASTER;
      SCHEMA_MODE = 'Embedded JSON';
      renderAll();
    }
  }

  const csvUpload = document.getElementById('csvUpload');
  const csvDropZone = document.getElementById('csvDropZone');
  if(csvUpload){
    csvUpload.addEventListener('change', e=>{
      const f = e.target.files && e.target.files[0];
      if(f) loadCSV(f);
    });
  }
  if(csvDropZone){
    csvDropZone.addEventListener('dragover', e=>{ e.preventDefault(); csvDropZone.classList.add('over'); });
    csvDropZone.addEventListener('dragleave', e=>{ e.preventDefault(); csvDropZone.classList.remove('over'); });
    csvDropZone.addEventListener('drop', e=>{
      e.preventDefault();
      csvDropZone.classList.remove('over');
      const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if(f) loadCSV(f);
    });
  }

  // Boot: render embedded first, then try to fetch external schema from known names
  renderAll();
  loadSchema('schema.master.json').catch(()=>loadSchema('schema.json'));
