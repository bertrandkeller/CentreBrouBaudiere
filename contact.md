---
layout: page
title: "Contactez nous"
permalink: /contact/
---

<style>

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 100%;
  width: 100%;
}

.form-row > * {
  flex: 1;
}

button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.form-control {
    display: block;
    max-width: 100%;
    width: calc(100% - 1.65rem);
    height: calc(2.25rem + 2px);
    margin-bottom: 1.5em;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

textarea.form-control {
    overflow: auto;
    resize: vertical;
    padding: .375rem .75rem;
    height: 8rem;
}

button {
    display: block;
    width: 100%;
    margin-bottom: 1.5em;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

</style>

<div class="container">
  <form target="_blank" action="https://formsubmit.co/bertrand.keller@gmail.com" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Votre nom" required>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Votre adresse de courriel" required>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Votre message" class="form-control" name="message" rows="20" required></textarea>
    </div>
    <button type="submit">Envoyer votre message</button>
    <input type="hidden" name="_url" value="{{ site.url }}{{ '/contact/' | prepend: site.baseurl }}">
    <input type="hidden" name="_next" value="{{ site.url }}{{ '/confirmation/' | prepend: site.baseurl }}">
    <input type="hidden" name="_subject" value="Conseil citoyens - Message provenant du site">
    <input type="text" name="_honey" style="display:none">
    <input type="hidden" name="_captcha" value="false">
  </form>
</div>

