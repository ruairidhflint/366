# 366 Quotes

### Version 1.1.0

When I was a lot younger I was given a little box of cards, each with a date corresponding to a day of the year. Each card had an inspirational, motivational or curious quote on the back and you were encouraged to think about it sincerely. You weren't necessarily meant to agree or disagree with the message, but rather use it as an internal conversation starter. 

Fast forward to 2020, it's a big year in my life: buying my first home, getting married, retraining as a developer. Along the way there have been a few quotes that have inspired me and a few more than have led me down curious paths of thought. Out of the blue I remembered my old set of cards and decided to use the premise as the basis for a simple project.

I started to write in React, then I wanted to play with Vue, I wanted to use Django for some odd bits, Python for some automation, lots of different ideas presented themselves to me. 
Late one night I watched Jiro Dreams of Sushi (highly recommended). There is an excellent segment where Jiro, the master Sushi chef, talks about how he has experimented with everything; extravagance, expensive and extraordinary...but in the end he realised sometimes simplicity is key. Strip everything away and use what is pure. It's not always the right choice, but sometimes it is good to go back to your roots and make use of core elements to the best of your ability. 

The end result is a single page of HTML, a few lines of plain CSS and some simple Javascript. No frameworks, nothing unusual, and nothing complicated. 

A new day dawns, a new quote presents itself. Nothing more.

All 366 were handpicked by me; some are from the original set of cards, some are more recent. Some are well known, some are from more controversial figures and some will do nothing for you. But once in a while, a single quote can radically alter the course of your day. 



### Update (28/07/2020):
The nature of the free API hosting and the minimal API calls meant I was having very slow retrieval time from the backend. In essence, the database would go to sleep due to the lack of calls made and then take a while to grind into gear when the next day, and next batch of fresh requests, restarted. I have ported everything over to Firebase which should generally make things faster and simpler. The original code is available to view on a separate branch. The original API is still active for those that want to use it.