---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - 
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<link rel="stylesheet" href="assets/css/homepage.css">
<div class="homepage-reading-progress" aria-hidden="true"><span data-reading-progress></span></div>

<span class='anchor' id='about-me'></span>

I am an undergraduate student majoring in Artificial Intelligence at the [School of Intelligence Science and Technology](https://is.nju.edu.cn/), [Nanjing University (NJU)](https://www.nju.edu.cn/).

My research interests lie in AI agents, large language models, multimodal representation learning, and reliable evaluation. I am particularly interested in building agentic systems that can perceive, reason, and generalize in open and changing environments.

At NJU, I am advised by [Prof. Lanzhe Guo](https://scholar.google.com/citations?user=dpunvqgAAAAJ&hl=en) in the LAMDA Lab and [Prof. Kai Zhang](https://scholar.google.com.hk/citations?user=0RycFIIAAAAJ) in the CVL Lab. I also work with [Prof. Tao Yu](https://taoyds.github.io/) in the [XLang Lab](https://xlang.ai/) at The University of Hong Kong on [OSWorld 2.0](https://osworld-v2.xlang.ai/), a benchmark for evaluating long horizon computer use agents.


👋 If you're interested in my research or just want to chat, feel free to reach out by [email](mailto:231880297@smail.nju.edu.cn) or <button type="button" class="inline-link-button" data-wechat-open>WeChat</button>.

<style>
.impact-stat,
.impact-number {
  color: #b22222 !important;
  font-weight: 700 !important;
}

.impact-stat:link,
.impact-stat:visited {
  color: #b22222 !important;
}

#wechat-modal[hidden] {
  display: none !important;
}

#wechat-modal {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, .52);
}

.wechat-modal__panel {
  position: relative;
  width: min(360px, 92vw);
  padding: 1rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 18px 60px rgba(0, 0, 0, .28);
  text-align: center;
}

.wechat-modal__close {
  position: absolute;
  top: .35rem;
  right: .45rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: #333;
  font-size: 1.6rem;
  line-height: 2rem;
  cursor: pointer;
}

.wechat-modal__image {
  display: block;
  width: 100%;
  max-height: 72vh;
  object-fit: contain;
}
</style>

<div class="wechat-modal" id="wechat-modal" hidden aria-hidden="true" style="display: none;">
  <div class="wechat-modal__panel" role="dialog" aria-modal="true" aria-label="WeChat contact">
    <button type="button" class="wechat-modal__close" data-wechat-close aria-label="Close WeChat contact">&times;</button>
    <img class="wechat-modal__image" src="images/wechat.jpg" alt="WeChat QR code">
    <p class="wechat-modal__fallback" hidden>Upload your WeChat QR/photo to images/wechat.jpg.</p>
  </div>
</div>


# 🔥 News
- *2026.10*: &nbsp;🎉🎉 Our paper KDASO is accepted by NeurIPS 2026!
- *2026.05*: &nbsp;🎉🎉 Our paper RideJudge is accepted by KDD 2026!
- *2026.05*: &nbsp;🎉🎉 Our paper OpenAgent is accepted by ICML 2026!

# 📝 Publications 

<div class="publication-controls" data-publication-controls hidden>
  <div class="publication-view-switch" role="group" aria-label="Publication view">
    <button type="button" class="publication-view-button" data-publication-view="selected" aria-pressed="true" aria-controls="publication-list">Select List</button>
    <button type="button" class="publication-view-button" data-publication-view="full" aria-pressed="false" aria-controls="publication-list">Full List</button>
  </div>
  <span class="publication-count" data-publication-count role="status" aria-live="polite" aria-atomic="true">4 selected papers</span>
</div>

<p class="pub-equal-note"><sup>*</sup> Equal contribution.</p>

<noscript><style>#publication-list > .paper-box[hidden] { display: flex !important; }</style></noscript>
<div id="publication-list" class="publication-list" data-view="selected" markdown="1">

<!-- OpenAgent -->
<div class='paper-box' data-publication="openagent" data-selected="true"><div class='paper-box-image'><div><div class="badge">ICML 2026 (CCF-A)</div><img src='images/papers/openagent.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Can Agents Generalize to the Open World? Unveiling the Fragility of Static Training in Tool Use](https://wuwm109.github.io/OpenAgent-Page/)

**Weiming Wu**<sup>*</sup>, Song-Lin Lv<sup>*</sup>, Rui Zhu, Zi-Jian Cheng, Lan-Zhe Guo

[**Paper**](https://openreview.net/pdf?id=G3hX5Fkrg7)
|
[**Project**](https://wuwm109.github.io/OpenAgent-Page/)
|
[**Code**](https://github.com/LAMDA-NeSy/OpenAgent)

</div>
</div>

<!-- Ride-Hailing -->
<div class='paper-box' data-publication="ride-hailing" data-selected="true"><div class='paper-box-image'><div><div class="badge">KDD 2026 (CCF-A)</div><img src='images/papers/adjudication.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[A Progressive Visual-Logic-Aligned Framework for Ride-Hailing Adjudication](https://arxiv.org/abs/2603.17328)

**Weiming Wu**<sup>*</sup>, Zi-Jian Cheng<sup>*</sup>, Jie Meng, Peng Zhen, Shan Huang, Qun Li, Guobin Wu, Lan-Zhe Guo

[**Paper**](https://arxiv.org/abs/2603.17328)

</div>
</div>

<!-- KDASO -->
<div class='paper-box' data-publication="kdaso" data-selected="true"><div class='paper-box-image'><div><div class="badge">NeurIPS 2026 (CCF-A)</div><img src='images/kdaro.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[KDASO: Knowledge-Data Dual-Driven Automated Skill Optimization for Liability Adjudication Task](https://openreview.net/forum?id=5F54Ji2eW3)

Zi-Jian Cheng<sup>*</sup>, **Weiming Wu**<sup>*</sup>, Jie Meng, Zhen Peng, Shan Huang, Qun Li, Guobin Wu, Lan-Zhe Guo

[**Paper**](https://openreview.net/forum?id=5F54Ji2eW3)

</div>
</div>

<!-- OSWorld 2.0 -->
<div class='paper-box' data-publication="osworld" data-selected="true"><div class='paper-box-image'><div><div class="badge">ArXiv</div><img src='https://osworld-v2.xlang.ai/static/images/osworld2/osworldv2_figure_main_latest.png' alt="OSWorld 2.0 overview" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[OSWorld 2.0: Benchmarking Computer-Use Agents on Long-Horizon Real-World Tasks](https://arxiv.org/abs/2606.29537)

Mengqi Yuan<sup>*</sup>, Zilong Zhou<sup>*</sup>, Xinzhuang Xiong<sup>*</sup>, **Weiming Wu**, Jiayang Sun, Jiamin Song, Kaiqian Cui, Bowen Wang, Haoyuan Wu, Yitong Li, Dunjie Lu, Haikong Lu, Qi Zhen, Xinyuan Wang, Jiaqi Deng, Yuhao Yang, Cheng Chen, Boyuan Zheng, Alex Su, Xiao Yu, Hao Zou, Saaket Agashe, Xing Han Lu, Manpreet Kaur, Zhengyang Qi, Vincent Sunn Chen, Frederic Sala, Dayiheng Liu, Junyang Lin, Zhou Yu, Yu Su, Siva Reddy, Xin Eric Wang, Peng Qi, Tianbao Xie, Tao Yu

[**Paper**](https://arxiv.org/abs/2606.29537)
|
[**Project**](https://osworld-v2.xlang.ai/)
|
[**Code**](https://github.com/xlang-ai/OSWorld-V2)
<span class="pub-stat impact-stat" data-github-stars="xlang-ai/OSWorld-V2">| GitHub stars: loading...</span>

<p class="pub-note">
OSWorld 2.0 Hugging Face <a href="https://huggingface.co/datasets/xlangai/osworld_v2_assets">assets</a>, <a href="https://huggingface.co/datasets/xlangai/osworld_v2_file_cache">file cache</a>, and <a href="https://huggingface.co/datasets/xlangai/osworld2.0-trajectory">trajectories</a> have been downloaded <strong><span class="impact-number" data-hf-downloads="xlangai/osworld_v2_assets,xlangai/osworld_v2_file_cache,xlangai/osworld2.0-trajectory" data-hf-kind="datasets">over 300K</span></strong> times.
</p>

</div>
</div>

<!-- NeSyGeo -->
<div class='paper-box' data-publication="nesygeo" hidden><div class='paper-box-image'><div><div class="badge">AI4Math@ICML 2025</div><img src='images/papers/nesygeo.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[NeSyGeo: A Neuro-Symbolic Framework for Multimodal Geometric Reasoning Data Generation](https://arxiv.org/abs/2505.17121)

**Weiming Wu**, Jin Ye, Zi-Kang Wang, Zhi Zhou, Yu-Feng Li, Lan-Zhe Guo

[**Paper**](https://arxiv.org/abs/2505.17121)
</div>
</div>

<!-- MLLMs Benchmark -->
<div class='paper-box' data-publication="general-bench" hidden><div class='paper-box-image'><div><div class="badge">ICML 2025 Oral(CCF-A)</div><img src='images/papers/path.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[On Path to Multimodal Generalist: General-Level and General-Bench](https://arxiv.org/abs/2505.04620)

Hao Fei<sup>*</sup>, Yuan Zhou<sup>*</sup>, Juncheng Li<sup>*</sup>, Xiangtai Li<sup>*</sup>, Qingshan Xu<sup>*</sup>, Bobo Li<sup>*</sup>, Shengqiong Wu<sup>*</sup>, Yaoting Wang, Junbao Zhou, Jiahao Meng, Qingyu Shi, Zhiyuan Zhou, Liangtao Shi, Minghe Gao, Daoan Zhang, Zhiqi Ge, **Weiming Wu**, Siliang Tang, Kaihang Pan, Yaobo Ye, Haobo Yuan, Tao Zhang, Tianjie Ju, Zixiang Meng, Shilin Xu, Liyu Jia, Wentao Hu, Meng Luo, Jiebo Luo, Tat-Seng Chua, Shuicheng Yan, Hanwang Zhang

[**Paper**](https://arxiv.org/abs/2505.04620)
|
[**Project**](https://generalist.top/)
|
[**Benchmark**](https://huggingface.co/General-Level)
|
[**量子位**](https://mp.weixin.qq.com/s/SMh18jbBw7K32RsW8Yr6VA)
<a class="pub-stat impact-stat show_paper_citations" data="745nLoEAAAAJ:u5HHmVD_uO8C" href="https://scholar.google.com/scholar?oi=bibs&hl=en&cites=1362657957922559073">| Citations: 108</a>

<p class="pub-note">
General-Bench <a href="https://huggingface.co/datasets/General-Level/General-Bench-Openset">Open Set</a>, <a href="https://huggingface.co/datasets/General-Level/General-Bench-Closeset">Close Set</a>, and <a href="https://huggingface.co/datasets/General-Level/General-Bench-Closeset-Scoped">Scoped Close Set</a> have been downloaded <strong><span class="impact-number" data-hf-downloads="General-Level/General-Bench-Openset,General-Level/General-Bench-Closeset,General-Level/General-Bench-Closeset-Scoped" data-hf-kind="datasets">over 360K</span></strong> times on Hugging Face.
</p>

</div>
</div>

<!-- MapTab -->
<div class='paper-box' data-publication="maptab" hidden><div class='paper-box-image'><div><div class="badge">Arxiv</div><img src='images/maptab.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[MapTab: Are MLLMs Ready for Multi-Criteria Route Planning in Heterogeneous Graphs?](https://arxiv.org/abs/2602.18600)

Ziqiao Shang<sup>*</sup>, Lingyue Ge<sup>*</sup>, Zi-Jian Cheng, Shi-Yu Tian, Zhenyu Huang, Wenbo Fu, **Weiming Wu**, Yang Chen, Xiangwen Zhang, Yulan Hu, Bin Liu, Yu-Feng Li, Lan-Zhe Guo

[**Paper**](https://arxiv.org/abs/2602.18600)
|
[**Code**](https://github.com/Ziqiao-Shang/MapTab)

</div>
</div>

<!-- RLHarness -->
<div class='paper-box' data-publication="rlharness" hidden><div class='paper-box-image'><div><div class="badge">ArXiv</div><img src='images/papers/rlharness.png' alt="RLHarness skill-policy co-adaptation" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[RLHarness: Co-evolving Procedural Skills with Reinforcement Learning for Long-horizon Multimodal Reasoning](https://arxiv.org/abs/2609.32326)

Ziqiao Shang, Zian Xu, Ji-Chen Yan, **Weiming Wu**, Ziyi Jia, Jie Meng, Tao Huang, Shan Huang, Lan-Zhe Guo

[**Paper**](https://arxiv.org/abs/2609.32326)
|
[**Code**](https://github.com/Ziqiao-Shang/RLHarness)

</div>
</div>

</div>

# 🎖 Selected Honors and Awards
- *2025:*  National Scholarship (Top 0.2%, Highest Honor for undergraduates in China)
- *2024:* Nanjing University RuLi Scholarship

# 📖 Educations
- *2023.09 - now*, School of Intelligence Science and Technology, Nanjing University

# 💼 Experience
- *2026.02 - now*, Research Assistant, XLANG Lab, The University of Hong Kong
- *2025.07 - 2026.04*, Research Intern, MPT Department, Didiglobal, Beijing, China
- *2024.10 - 2026.07*, Research Assistant, Lamda-12 Lab, Nanjing University

  
# 💁‍♂️ Services
- Reviewer:  ECAI'25, IJCNN'26, ICML'25 Workshop@AI4Math, AAAI'27
- Teaching Assistant: 2025 fall Introduction to AI at NJU IS

# 🌍 Visitors

<div class="homepage-visitors">
  <div class="homepage-visitors__count">
    <!-- Both widgets share this homepage's dedicated Supercounters site ID. -->
    <script src="https://widget.supercounters.com/ssl/texthit.js"></script>
    <script>var sc_texthit_var = sc_texthit_var || [];sc_text_hit(1739339,"total visits","00369f");</script>
  </div>
  <div class="homepage-visitors__map">
    <script src="https://widget.supercounters.com/ssl/map.js"></script>
    <script>
      var sc_map_var = sc_map_var || [];
      var visitorMapWidth = Math.min(420, document.currentScript.parentElement.clientWidth);
      var visitorMapRate = Math.max(40, Math.floor(visitorMapWidth / 420 * 100));
      sc_map(1739339,"112288","ff0000",visitorMapRate === 100 ? 1 : visitorMapRate);
    </script>
  </div>
  <p class="homepage-visitors__note">Since Oct 2026 · <a href="https://www.supercounters.com/stats/1739339" target="_blank" rel="noopener noreferrer">Live visitor statistics</a></p>
  <noscript><p><a href="https://www.supercounters.com/stats/1739339">View visitor map and total visits</a></p></noscript>
</div>


<script>
(function () {
  function formatCount(value) {
    var number = Number(value);
    if (!Number.isFinite(number)) {
      return 'unavailable';
    }
    if (number >= 1000000) {
      return (number / 1000000).toFixed(number >= 10000000 ? 0 : 1).replace(/\.0$/, '') + 'M';
    }
    if (number >= 1000) {
      return (number / 1000).toFixed(number >= 100000 ? 0 : 1).replace(/\.0$/, '') + 'K';
    }
    return number.toLocaleString();
  }

  function formatOverCount(value) {
    var number = Number(value);
    if (!Number.isFinite(number)) {
      return 'unavailable';
    }
    if (number >= 1000000) {
      var millions = Math.floor(number / 100000) / 10;
      return 'over ' + String(millions).replace(/\.0$/, '') + 'M';
    }
    if (number >= 10000) {
      return 'over ' + Math.floor(number / 10000) * 10 + 'K';
    }
    if (number >= 1000) {
      return 'over ' + Math.floor(number / 1000) + 'K';
    }
    return number.toLocaleString();
  }

  function fetchJson(url) {
    return fetch(url, { headers: { 'Accept': 'application/json' } }).then(function (response) {
      if (!response.ok) {
        throw new Error('Request failed: ' + response.status);
      }
      return response.json();
    });
  }

  document.querySelectorAll('[data-github-stars]').forEach(function (element) {
    var repo = element.getAttribute('data-github-stars');
    fetchJson('https://api.github.com/repos/' + repo)
      .then(function (data) {
        element.textContent = '| GitHub stars: ' + formatCount(data.stargazers_count);
        element.title = 'Live GitHub star count';
      })
      .catch(function () {
        element.textContent = '| GitHub stars: unavailable';
      });
  });

  document.querySelectorAll('[data-hf-downloads]').forEach(function (element) {
    var repos = element.getAttribute('data-hf-downloads').split(',').map(function (repo) {
      return repo.trim();
    }).filter(Boolean);
    var hfKind = element.getAttribute('data-hf-kind') === 'models' ? 'models' : 'datasets';

    Promise.allSettled(repos.map(function (repo) {
      var repoPath = repo.split('/').map(encodeURIComponent).join('/');
      return fetchJson('https://huggingface.co/api/' + hfKind + '/' + repoPath + '?expand[]=downloadsAllTime&expand[]=downloads')
        .then(function (data) {
          return {
            repo: repo,
            downloads: Number(data.downloadsAllTime || data.downloads || 0)
          };
        });
    })).then(function (results) {
      var details = results
        .filter(function (result) { return result.status === 'fulfilled'; })
        .map(function (result) { return result.value; });
      var total = details.reduce(function (sum, item) { return sum + item.downloads; }, 0);
      if (total > 0) {
        element.textContent = formatOverCount(total);
        element.title = details.map(function (item) {
          return item.repo + ': ' + item.downloads.toLocaleString();
        }).join('; ');
      }
    });
  });

  var modal = document.getElementById('wechat-modal');
  var openButton = document.querySelector('[data-wechat-open]');
  var closeButtons = document.querySelectorAll('[data-wechat-close]');
  var wechatImage = modal ? modal.querySelector('.wechat-modal__image') : null;
  var fallback = modal ? modal.querySelector('.wechat-modal__fallback') : null;

  function openWechatModal() {
    if (!modal) {
      return;
    }
    modal.hidden = false;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeWechatModal() {
    if (!modal) {
      return;
    }
    modal.hidden = true;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }

  if (openButton) {
    openButton.addEventListener('click', openWechatModal);
  }
  closeButtons.forEach(function (button) {
    button.addEventListener('click', closeWechatModal);
  });
  if (modal) {
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeWechatModal();
      }
    });
  }
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeWechatModal();
    }
  });
  if (wechatImage && fallback) {
    wechatImage.addEventListener('error', function () {
      wechatImage.hidden = true;
      fallback.hidden = false;
    });
  }
})();
</script>

<script src="assets/js/homepage.js"></script>
