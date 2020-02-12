import React from "react";
import { Card } from "./Card";
import Sud from './sound.mp3';
import Ti from './the ticket2.jpg';
import Frw2 from './frw2.JPG';
import Tsa from './the salad2.JPG';
import Foolish from './foolish.jpg';
import Ti3 from './ticket3.jpg';
import Her2 from './her3.jpg';

export class Home extends React.Component {
  render() {
    return (
      <div className="flex home">
        <audio src={Sud} autoPlay/>
        <div className="cards">
          <Card
            image={Ti}
            text='"This one always in my wallet"'
          /> 
          <Card
            image={Frw2}
            text='"Is that an Angle?"'
          />
          <Card
            image={Tsa}
            text='"Believe me, the taste is terrible!!!"'
          />
        </div>
        <div className="letter">
          <p style={{fontSize:'18px',}}>
            Hi there sis, How's it today. First of all, I do like to apologize for doing this.
            Hope your parents are not looking you with supspicious eyes. I heard you are in a 
            load of stress lately. I didn't pretend to make you busy. I just want you to be more 
            relax and walk more with this little puppy so that a bit of improvement for your health.
            <br></br>
            "Nout sone a nay nae taw, saw thwar loe lal taung pan par tal naw. Bar mha ma lote pay 
             Naing thay tae a chain mhar pyan sa mi loe lay" cos 
             Just in case, I can't afford to see you in the arms of the others when I am ready to do 
             that. And I still need times to build myself up to put someone in a worries free life. 
             The only thing I could promise you at the moment is I will never cheated on you.
          </p>
        </div>
        <div className="cards">
          <Card
            image={Ti3}
            text='"Even the sign looks lovely.Just like you"'
          />
          <Card
            image={Her2}
            text='"Yes. I do!"'
          />
          <Card
            image={Foolish}
            text='"How am I childish"'
          />
        </div>
      </div>
    );
  }
}
