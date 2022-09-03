import React from 'react'
import LandingVideo from '../components/LandingVideo'
import LandingImage from '../components/LandingImage'



const Landing = () => {
  return (
    <div className="">
        <section className="videosection" >
            <LandingVideo/>
        </section>
        <section>
          <LandingImage head={"Watch Videos"} content={"Make the most of every scroll! Watch videos in 8 different languages, with endless entertaining videos on fashion, cooking, fitness and lots more, curated just for you!"} src={"https://cdn.trell.co/w=1280/format=webp,quality=90/user-images/images/orig/TkgWdnLAwfV3COEIS5VhP8jxTxAZk2Bf.png"} />
        </section>
        <section>
          <LandingImage head={"Trell Cash"} content={"Let your virtual wallet go ka-ching! Earn 100 Trell Cash when you sign up. Watch videos everyday and enjoy entertainment that actually rewards you. Earn Trell Cash with every video you watch and redeem it at the Trell shop!"} src={"https://cdn.trell.co/w=1280/format=webp,quality=90/user-images/images/orig/TvsrJiXFHEIbkvD0nJPBQ4pvePGdwDbp.png"} />
        </section>
        <section>
          <LandingImage head={"Trell Shop"} content={"The future of content creation is now in your hands. Join Trell and pave your own way to stardom. Create, influence and make waves in an ever growing community."} src={"https://cdn.trell.co/w=1280/format=webp,quality=90/user-images/images/orig/WhUgKEZPPAmra5gOJsa6d8lAgo4Dtbn2.png"} />
        </section>
        <section>
          <LandingImage head={"Creator Corner"} content={"The future of content creation is now in your hands. Join Trell and pave your own way to stardom. Create, influence and make waves in an ever growing community."} src={"https://cdn.trell.co/w=1280/format=webp,quality=90/user-images/images/orig/QatVakrKoLZQtoofhlZ4kZ8E50b3YswJ.png"} />
        </section>
        <section>
          <LandingImage head={"Creator Space"} content={"Make that instant connection possible! Save the links to all your social media handles in this space and your followers will be able to find everything you do with one click!"} src={"https://cdn.trell.co/w=1280/format=webp,quality=95/user-images/images/orig/1CTvkkapb3LSe808zzoSk3r65Z3OZ7sT.png"} />
        </section>
    </div>
  )
}

export default Landing