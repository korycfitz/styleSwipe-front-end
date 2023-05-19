# [StyleSwipe](https://style-swipe.netlify.app)

![Styleswipe Logo](../src/assets/landing_logo.png)

# Check out a user-based collection of the trendiest clothes on  StyleSwipe

<p>
  StyleSwipe is a MERN stack app using JWT Authentication. Upload, browse, and comment on outfits posted from other users across the web.
</p>
<br></br>

## Getting Started
1. Access our application [here](https://style-swipe.netlify.app)
2. Sign up or Login to StyleSwipe by clicking either icon on the top right corner.
3. Click the "+" button to upload a new outfit.
3. Click outfits to browse all user submitted outfits.

### Keep in mind that this folder only represents the front end of our decoupled application. To access and view the back end, please click [here](https://github.com/korycfitz/StyleSwipe-back-end)

<br></br>

## Highlight
<p>
  StyleSwipe takes into account the logged in user when displaying all outfits, and will use those passed parameters to create a personalized index of all the logged in user's outfits. This was a big stepping stone in understanding how information is passed from the back end to front by URI calls. 
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
<br></br>

## Contributors
- [Kory Fitzgerald](https://github.com/korycfitz/)
- [Rafi Talukder](https://github.com/RT527/)
- [Christian Musto](https://github.com/officialmusto/)
- [Matt A Ramirez](https://github.com/mars-1002/)

<br></br>

## Technologies Used

- JavaScript
- HTML
- CSS
- Docker
- [fly.io](https://fly.io/)
- Git
- [Postman](https://www.postman.com/)
- NodeJS
- Vite
- [Netlify](https://www.netlify.com/)
- Mongoose
- MongoDB
- Express
- [Cloudinary](https://cloudinary.com/)
- [Whimsicial](https://whimsical.com/)
- [Trello](https://trello.com/)


## Attributions
- [Looka](https://looka.com/onboarding) for creating a logo image using generative AI software.
- [Pngwing](https://www.pngwing.com/) for PNG assets used for our site.

<br></br>

## Icebox
* [x]
* [ ]
* [ ]
* [ ]
* [ ]