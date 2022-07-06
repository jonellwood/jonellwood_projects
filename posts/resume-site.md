---
title: "Resume Site Word Clone"
date: "2022-06-22"
src: https://www.ryadel.com/wp-content/uploads/2016/05/Microsoft-Word-2013-Logo-Web1.jpg
# height: "50px"
width: "90%"
keyword: "HTML, CSS, JavaScript"
---

While realizing an online resume is critical for obtaining employment these days I decided I wanted to to have a webpage that would serve as a resume - but was also a challenge to build. I decided on trying to make a web page that looks like a Word Document.

My goals were simple:

- It should look as close to a Word Document as possible.
- The HTML should be semantically correct.
- It should meet all requirements for a11y.
- It should also have all the information a potential employer might need. i.e. it needs to be a current and functional resume.

I started by researching what hex values Office 365 Word used which was fairly easy to find. (Firefox dev tools color grab tool made this very easy) Then I started laying out the HTML and CSS to make the document look as close to a screenshot of Word in the web as I could.

The only JavaScript I added was a little date function to update the "Last Saved' bit in the very top. The downside to doing this is that there is a bit of a flash when moving between pages as it updates. Since I used only HTML (and not a component based framework - although I really wish I had) each page is a separate file with LOADS of repeated code.

I had a ton of fun creating the little AutoSave toggle, sourcing the icons, and even creating the Nav menu. I figured since Word has a "references" menu option I might as well make that a page.... and it just kind of grew from there.

I attempted to the make the ribbon that sits below the menu but man oh man was that tough! I think if subgrid was supported across all modern browsers it might be an easier task. I snagged a screenshot of the ribbon and loaded it in as an image but felt like that was cheating. I have not given up on the ribbon.... but we'll see.

Things left to do as of this writing:

- Make the document responsive. It look awful on mobile.
- Make the ribbon for below the menu.
- Consider refactoring into a React or Svelte app to take advantage of components

Please feel free to view my resume or even hire me. Details can be found [here](https://resume.jonellwood.dev).
