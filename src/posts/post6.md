---
slug: "/netli-hi"
date: "2019-02-11"
title: "This might work"
---

## Finally
After a couple of nights of attempts at moving the hosting of the Gatsby-goodness to [Netlify](https://www.netlify.com/) instead of Github Pages, it finally works!

I spent only a little time on the site last night (sorting DNS and Domain issues - more info below), after having no more than 5 hours of sleep for the last 2 weeks (the thirst for learning is great), I needed to get some shuteye. A good excuse to cut last night short was the DNS needed around 24hours to update, so there wasn't much I could do.

### Why Netlify?
Having been used to Github Pages' for some time (and I might add, ease of use for basic sites IMO) that was the reason for Jekyll. After learning Gatsby also had Github Pages support (also, I was recomended some tutorials to look at), I went that route and was very impressed. Included in the tutorials were how-to's on pushing to Github then building on Netlify (there are also a plethora of Gatsby plugins for Netlify), that and Netlify supply HTTPS for free. Win!

For Github Pages, you can either build the Gatsby site then push the public folder to Github Pages (which is fairly easy), or you can use a Github Pages plugin which builds and deploys to the configured repo and branch. Neat.
Netlify has a similar setup. The source is still pushed to Github, but part of the setup process for Netlify is your account 'watches' for Git pushes. Netlify then pulls the changes, builds the site (you can specify the commands to run) and it's all done.

### What hurt the most?
DNS and Domain

Github Pages was easy for my (cheap) domain host. All that was needed was a file named CNAME in the root of the repo containing the domain name. Then add a CNAME record on the DNS to point to the Github Pages URL.
It appears that Netfliy works best with either ALIAS or ANAME records, both of which my host don'd support (for 2 years it's been 'coming').
After minutes (ish) of hunting for a solution, I found that Netlify themselves provide instructions for setting the DNS. After 5 different IP address' copied and pasted to my provider, and 24 hours later, we're good to go and with HTTPS!

#### Maybe this should be THE first post?