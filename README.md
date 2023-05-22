<div style="text-align: center;">
  <a href="https://style-swipe.netlify.app" style="font-size: 30px;">StyleSwipe</a>
</div>
<br>

<div align="center">
 <img height=300px src="./public/style-swipe.png" alt="Project logo"></a>
</div>


<p style="font-size: 20px; text-align: center;"><br>
  Check out a user-based collection of the trendiest clothes on StyleSwipe
</p><br>

## 🧐 About

<p>
  StyleSwipe is a MERN stack app using JWT Authentication. Upload, browse, and comment on outfits posted by other users across the web.
</p>
<br>

## 🏁 Getting Started

1. Access our deployed front-end application [here](https://style-swipe.netlify.app).
2. Access our Trello planning materials [here](https://trello.com/b/PI1Ocv36/styleswipe).
3. Access our backend Github repository [here](https://github.com/korycfitz/StyleSwipe-back-end).
<br><br>
## Highlight
<p>
  StyleSwipe takes into account the logged-in user and can display all outfits of that particular user. We use passed parameters taken from the req.body to create a personalized index of all the logged-in user's outfits. This was a big stepping stone in understanding how information is passed from the back end to the front by URI calls.
</p>

```
async function outfitIndex(req, res) {
  try {
    const profile = await Profile.findById(req.user.profile)
    const outfits = await Outfit.find({ _id: profile.outfits })
      .populate('author')
      .sort({ createdAt: 'desc' })
    res.status(201).json(outfits)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}
```
<br>

## ✍️ Contributors
- [Kory Fitzgerald](https://github.com/korycfitz/)
- [Rafi Talukder](https://github.com/RT527/)
- [Christian Musto](https://github.com/officialmusto/)
- [Matt A. Ramirez](https://github.com/mars-1002/)

<br>

## ⛏️ Technologies Used

- JavaScript
- HTML
- CSS
- Docker
- [fly.io](https://fly.io/)
- Git
- JWT Auth
- [Postman](https://www.postman.com/)
- [Node.js](https://nodejs.org/en/)
- Vite
- [Netlify](https://www.netlify.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Cloudinary](https://cloudinary.com/)
- [Whimsical](https://whimsical.com/)
- [Trello](https://trello.com/)
- [Github](https://github.com/)
- [Visual Studio Code](https://code.visualstudio.com/) 
- [Mongoose](https://mongoosejs.com/)
<br>

## 🎈 Attributions

- [Looka](https://looka.com/onboarding) for creating a logo image using generative AI software.
- [Pngwing](https://www.pngwing.com/) for PNG assets used in our application.
- [Favicon](https://www.menshealth.com/) for viewing a favicon across all pages of our application.

<br>

## 🚀 Icebox

- Iterate on the current styling.
- AAU, I want to enter text into an input field, so that I can message another user using socket.io.
- AAU, I want to click a button to 'slay' or 'nay', so that I can view the outfits that I have 'slayed' or 'nayed'.
- AAU, I want to see a random outfit after I log in, so that I can 'slay' or 'nay' it.