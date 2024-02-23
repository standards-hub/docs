---
title: Standards-Hub documentation for extended features
description: 'This wiki provides all the neccessary information on how to use S-H Docs site or how to create a new one with similar functionality.'
position: 1
category: Setup
---

## Quick Start

For a quick start clone our repository 

```bash [Terminal]
git clone https://github.com/standards-hub/docs.git
```

Install all the dependencies after installing/cloning the app
<ShAlert type="warning"> Make sure you are using at least Node `v20.0.0` </ShAlert>

```bash [Terminal]
npm install
```

---

## Changing environment from default state

After installing or cloning Docs template, we want to tweak, remove or add certain things from template.

Here we are going to adress three main things:
1. Changing the landing page with its components
2. Changing the main page with its components
3. Using custom made components

### 1. Changing the landing page

In this section we adress three things:
- Header
- Body (changing color, text and cards)
- Footer (changing text and links to social media)

#### Header

---

Let\`s take things from left to right here. First thing we are going to do is to change the logo and the name of the site.
Suposing you already have your logo prepared and created, we need to allocate it somewhere. To do so, firstly create a new folder inside of `public` folder (located at the root of the app) called `images`. Now take your logo file (copy or cut) and paste it inside of the folder `public/images`.

Now we are going to open `Header.vue`.
We will take a look at the `<template>  </template>` section first and then we will take a turn to `<script>  </script>` section.

In `<template>  </template>` section we first encounter on a logo. So here we can change logo image to be desired one. To do so, simply
type in the name of your logo, exactly the same as the file is named, instead of `S-H logo.png`. After that, you can change the size of 
the logo by inputing manually `height` and `width` or adding to <b>class</b> a `size-x` where `x` is represented by a number. Also, you can add you <b>alt</b> text for the logo. After `<img>` tag, replace `Standards-Hub` with the name of your site.

Next up is adding a top-level menus. This part is done in `<script setup lang="ts"> </script>` section.

This is the code that is already provided in S-H Docs
```bash
const links = [{
  label: 'Home',
  to: '/'
}, {
  label: 'Markdown',
  to: '/markdown-guidelines/introduction/'
}, {
  label: 'GitHub',
  to: '/github-guidelines/github/'
}, {
  label: 'Processes',
  to: '/processes/introduction/'
},{
  label: 'Setup',
  to: '/setup/'
}]
```
If you want to start from scratch or add new menu, you need the following commands

```js
const links = [] //this creates a section where all the menus will be nested
```

```js
{
    label : 'nameOfMenu', //this will be the name of the menu
    to : '/pathLocationName' //this is path to desired content that will be shown when click on the name of menu
}
```

Here we need to nest a object in array called links, like so

```js
const links = [{
    label: '',
    to: ''
}]
```

<ShAlert>If you want to have multiple menus (objects) inside a constant, don\`t forget to divide them with coma</ShAlert>

### 2. Changing the main page

### 3. Using custom made components

So far, we have a few of our custom made components:
- ShAlert
- ShTweet
- ShLinkedin
- ShFacebook
- ShVideo

#### ShAlert

---

This is how an `Info Alert` is displayed:

<ShAlert> Check out an info alert with a `codeblock` and a [link](/getting-started/)! </ShAlert>

This is how an `Info Alert` is written:

```md
<ShAlert> Check out an info alert with a `codeblock` and a [link](/getting-started/)! </ShAlert>
```

This is how a `Success Alert` is displayed:

<ShAlert type='success'> Check out a success alert with a `codeblock` and a [link](/getting-started/)! </ShAlert>

This is how a `Success Alert` is written:

```md
<ShAlert type='success'> Check out a success alert with a `codeblock` and a [link](/getting-started/)! </ShAlert>
```

This is how a `Warning Alert` is displayed:

<ShAlert type='warning'> Check out a warning alert with a `codeblock` and a [link](/getting-started/)! </ShAlert>

This is how a `Warning Alert` is written:

```md
<ShAlert type='warning'> Check out a warning alert with a `codeblock` and a [link](/getting-started/)! </ShAlert>
```

This is how a `Danger Alert` is displayed:

<ShAlert type='danger'> Check out a danger alert with a `codeblock` and a [link](/getting-started/)! </ShAlert>

This is how a `Danger Alert` is written:

```md
<ShAlert type='danger'> Check out a danger alert with a `codeblock` and a [link](/getting-started/)! </ShAlert>
```

---

#### ShTweet

This is how a `ShTweet` is displayed

<ShTweet id="1757162766115176926"></ShTweet>

This is how `ShTweet` is written:

```md
<ShTweet id="1757162766115176926"></ShTweet>
```

#### ShLinkedin

This is how `ShLinkedin` is displayed

<ShLinkedin src="https://www.linkedin.com/embed/feed/update/urn:li:share:7161263277866422272"></ShLinkedin>

This is how `ShLinkedin` is written:

```md
<ShLinkedin src="https://www.linkedin.com/embed/feed/update/urn:li:share:7161263277866422272"></ShLinkedin>
```

#### ShFacebook

This is how `ShFacebook` is displayed

<ShFacebook src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNASA%2Fposts%2Fpfbid0KzFf9KDNS8zh4Cngx22ec2aeRHBYcQk4KkescRzoW2hUMpH6Yuc13smPmLww95qNl&show_text=true&width=500"></ShFacebook>

This is how `ShFacebook` is written:

```md
<ShFacebook src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNASA%2Fposts%2Fpfbid0KzFf9KDNS8zh4Cngx22ec2aeRHBYcQk4KkescRzoW2hUMpH6Yuc13smPmLww95qNl&show_text=true&width=500"></ShFacebook>
```

#### ShVideo

This is how `ShVideo` is displayed

<ShVideo src="/videos/Joaquin Prado - OMNA Objects and Resources Registry.mp4"></ShVideo>

<ShVideo src="https://www.youtube.com/watch?v=8A5AMiskxvQ"></ShVideo>

This is how `ShVideo` is written:

```md
<ShVideo src="/videos/Joaquin Prado - OMNA Objects and Resources Registry.mp4"></ShVideo>
<ShVideo src="https://www.youtube.com/watch?v=8A5AMiskxvQ"></ShVideo>
```