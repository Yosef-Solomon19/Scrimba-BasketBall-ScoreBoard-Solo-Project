# Scrimba Mod 3 Solo Project - Basket Ball Scoreboard

<!-- [https://scrimba-solo-basketball-scoreboard-project.netlify.app/](https://scrimba-solo-basketball-scoreboard-project.netlify.app/) -->

- [Overview](#overview)

  - [Links](#links)
  - [Requirements](#requirements)
  - [Stretch Goals](#stretch-goals)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

For this project the challenge was to build a project from scratch which was a basketball scoreboard app.

### Requirements

- Build from "scratch" [x] - The module did provide a skeleton to start from.
- Follow the design based from Figma [x] - I followed the majority of the design with some changes with to the fonts.
- Make all six buttons work [x]

### Stretch Goals

At the time of working on this project in Mod 3, the module hasn't taught me the concepts I'd need to know to work on the strech goals. So this was extra credit.

- Add a "New Game" button [x]
- Highlight the leader [x]
- Add a few more counters (e.g period, foul, shotclock timer)[x]
- Change the design [x] - This is where the 10% went to regarding the figma design from the requirements.

### Links

- Live Site URL: [https://scrimba-solo-basketball-scoreboard-project.netlify.app/]

## My process

I initially started with looking for basketball scoreboards that had additional counters. And I found an image that I wanted to work off of for the rest of the project [https://thumbs.dreamstime.com/z/basketball-scoreboard-15216779.jpg]. Based on the basketball scoreboard image I wanted to to divide the scoreboard into three sections/columns. This would make it easier to work on one section at a time. This also helped with how to structure each column via flexbox. I tried to make utility classes since the home column and the guest column would be identical interms of positioning and styling. For the middle of the scoreboard I believe had similar positioning aswell. I used flexbox for the most part to establish the columns for each sections.

For javascript, I had to learn to create timers by following a video by Wes Bos to help with that. I liked how the video used modern Js syntax compared to what I've found when it comes to building timers.

For the bonus and possession indicators, I had the indicators be clickable. I could've written a function with a conditional statement based on the number of fouls. However, I was biting more than I can chew with the current stretch goals that I had. And it was taking up for time than I would've liked.

### Built with

- HTML 5
- CSS properties
- Flexbox
- Javascript

### What I learned

I think I'm getting more comfortable with flexbox and understanding its relationship with width, and how it affects other elements.
I haven an idea on how to build timers but I'd would have to revisit the Wes Bos video just to make sure.

I Figured out how to pause and resume timer
For the pause, I needed to use the method to cancel the repeated action set by setInterval.
I think this also means that I can't use the original value from the countdown variable.
To resume, I initally had a another variable that stores the original value inside the countdown interval variable/method.
From there the resumeTimer funciton calls the timer function but with an update value from where
the original value stopped when clear Interval was called after hiiting the pause button.

If I wanted to switch between two colors I can use what's called a class list.toggle

Terneray Operator but I should learn more about that.

Styling from javascript will make the change permanent. If the bonus circle indicator is clicked and I tried to revert it back to its default color
I for some reason wouldn't be able to get the lit color after clicking it.

And I've learned that I don't have to remember everything. I think I head this from a recent podcast, like a librarian if I know where and how to find something in-order to do something that's fine. It's important to know the fundamentals but I don't have to be a walking encyclopedia to get the job done so to speak.

### Continued development

There are probably lines of code in CSS and JS that I can impliement "DRY" practices but I've spent a good majority of my time working on this project. I might come back at much later date. I enjoyed the process alot and I want to do more solo projects and keep growing as a programmer.
