---
layout: page
title: Blog
permalink: /fr/blog/
path: /blog/
language: fr
---

<div class="page-col-wrapper">
  <div class="page-col page-col-1">
  {% assign posts = site.posts | where: "language", page.language %}
  {% for post in posts %}
    {% capture thisyear %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% capture nextyear %}{{ post.previous.date | date: "%Y" }}{% endcapture %}

    {% if forloop.first %}
    <h2 id="{{ thisyear }}-ref">{{thisyear}}</h2>
    <ul class="post-list">
    {% endif %}

      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h3>{{ post.title }}</h3>
        {{ post.excerpt }}
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
        [Continuer à lire...]</a>
      </li>

    {% if forloop.last %}
    </ul>
    {% else %}
    {% if thisyear != nextyear %}
    </ul>
      <h2 id="{{ nextyear }}-ref">{{nextyear}}</h2>
    <ul class="post-list">
    {% endif %}
    {% endif %}
  {% endfor %}
  </div>
  <div class="page-col page-col-2">
    <p><img src="/images/san-francisco.jpg" alt="San Francisco, CA, USA 2014."
    width="200" height="150" /><br />
    San Francisco, CA, USA 2014.</p>
    <h3>Navigation</h3>
    <ul class="navigation">
      <li><a href="#2020-ref">2020</a></li>
      <li><a href="#2019-ref">2019</a></li>
      <li><a href="#2018-ref">2018</a></li>
      <li><a href="#2017-ref">2017</a></li>
      <li><a href="#2016-ref">2016</a></li>
      <li><a href="#2015-ref">2015</a></li>
      <li><a href="#2014-ref">2014</a></li>
    </ul>
  </div>
</div>
