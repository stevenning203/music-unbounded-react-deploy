import React from 'react';
import TeamMember from '../components/TeamMember/TeamMember';
import Footer from '../components/Footer/Footer';

import './Home.css';
import './OurTeam.css';

import alex_cai from '../team-member-portraits/alex_cai.png';
import mark_maclure from '../team-member-portraits/mark_maclure.png';
import gabriel_liu from '../team-member-portraits/gabriel_liu.png';
import benul_jayasekara from '../team-member-portraits/binoo.png';
import savannah_seibel from '../team-member-portraits/savannah_seibel.png';
import christie_leung from '../team-member-portraits/christie_leung.png';
import jessica_chen from '../team-member-portraits/jessica_chen.png';
import eden_rutto from '../team-member-portraits/eden_rutto.png';
import andrew_zhang from '../team-member-portraits/andrew_zhang.png';
import ryan_li from '../team-member-portraits/ryan_li.png';
import hannah_kim from '../team-member-portraits/hannah_kim.png';
import hannah_liu from '../team-member-portraits/hannah_liu.png';
import darwin_trieu from '../team-member-portraits/darwin_trieu.png';
import chong_wang from '../team-member-portraits/chong_wang.png';
import kayla_thai from '../team-member-portraits/kayla_thai.png';
import lisa_wong from '../team-member-portraits/lisa_wong.png';
import landy_huang from '../team-member-portraits/landy_huang.png';
import jason_tao from '../team-member-portraits/jason_tao.png';
import marcus_wong from '../team-member-portraits/marcus_wong.png';

function OurTeam()
{
    return(
        <div id = "our-team-page-wrapper">
            <div id = "our-team-page-title">
                Hello From Our Team!
            </div>
            <div id = "our-team-page-catalog">
                <TeamMember image = {alex_cai} name = "Alex Cai" instrument = "Trombone" blurb = "Hi there, I'm Alex! I've been playing bass trombone in the Senior Edmonton Youth Orchestra for the past three years and I also have a Grade 10 RCM certificate in piano. I'm passionate about music from a variety of genres and excited to help on your musical journey!" />
                <TeamMember image = {mark_maclure} name = "Mark Maclure" instrument = "Guitar" blurb = "Hello! My name is Mark and I’m a guitar teacher in Edmonton. I have recently graduated from Macewan University with a double diploma in Performance and Recording. I’m excited to help you reach your musical goals, whatever they may be!" />
                <TeamMember image = {gabriel_liu} name = "Gabriel Liu" instrument = "Cello" blurb = "Hi there, I'm Gabe! I've been playing the cello for 12 years now, and have completed the STE/Suzuki program. I love to share my passion for music, whether that's through Edmonton Youth Orchestra, a cultural concert, or a volunteer performance at a charity gala. I can't wait to meet some of you and go on a musical journey together!" />
                <TeamMember image = {benul_jayasekara} name = "Benul Jayasekara" instrument = "Cello" blurb = "My name is Benul. I'm a grade 12 student at Lillian Osborne High School and I love to play the cello and bass clarinet and I am also a percusionnist. I've played in Singing Strings and Edmonton Youth Orchestra. Additionally, I've also attended foreign programs, and played professionally. I look forward to meeting you all!" />
                <TeamMember image = {savannah_seibel} name = "Savannah Seibel" instrument = "Viola" blurb = "Hi, I'm Savannah! I have been playing violin and viola for a total of 10 years. Playing my instrument is one of the best parts of my life, and I think that giving other young students a chance to experience that same love for music is extremely important. Therefore, I am excited to share my insight with kids who have a passion for music and creativity!" />
                <TeamMember image = {christie_leung} name = "Christie Leung" instrument = "Violin" blurb = "Hey! I'm Christie. I play the violin and piano and have obtained DipABRSM for both. I organized an Intergenerational Classic Music Event, partnered with the Edmonton Senior Center during the pandemic to promote music within the community. Hope to meet some of you soon!" />
                <TeamMember image = {jessica_chen} name = "Jessica Chen" instrument = "Violin" blurb = "I was introduced to the violin when I was six years old, and have never put it down since. It has been part of more than half of my life with no intention of stopping. I hope I can share this passion through teaching as everyone has a story they could tell through music." />
                <TeamMember image = {eden_rutto} name = "Eden Rutto" instrument = "Violin" blurb = "Hello! My name is Eden. I have been playing the violin for the past 12 years. I have completed the Suzuki program, and I’m currently working towards my grade 10 RCM exam. I am in the Senior EYO, and I also play in the Conservatory Orchestra as concertmaster. I believe everyone should get the chance to learn an instrument, which is why I’m excited to start teaching!" />
                <TeamMember image = {andrew_zhang} name = "Andrew Zhang" instrument = "Piano" blurb = "Hello! My name is Andrew and I am currently attending Lillian Osborne High School. I've been playing the piano since I was 6 years old and I have completed RCM 10. I hope I can share my passion and love for piano with others!" />
                <TeamMember image = {ryan_li} name = "Ryan Li" instrument = "Piano" blurb = "Hello, my name is Ryan. I am a senior student at Lillian Osborne high school. I started learning piano since elementary school and have completed grade 9 at the Royal Conservatory of Music. I look forward to meeting you all to share this musical journey together!" />
                <TeamMember image = {hannah_kim} name = "Hannah Kim" instrument = "Piano" blurb = "Hey hey! I'm Hannah, and I'm a Grade 11 student at Old Scona high school. I’ve been playing piano on and off for the past 10+ years--from classics composed by Chopin and Bach, to instrumental soundtracks from Studio Ghibli films, I’ve found a special love for music that I’d love to share with as many people as possible. :)" />
                <TeamMember image = {hannah_liu} name = "Hannah Liu" instrument = "Piano" blurb = "Hi! My name is Hannah. I’ve been playing piano for over 12 years, initially learning using the Suzuki method, and now working towards a Level 10 Royal Conservatory of Music degree. I enjoy sharing my passion for music with my students, and performing at virtual concerts. I would love to help your child gain a new love of music and accomplish their goals!" />
                <TeamMember image = {darwin_trieu} name = "Darwin Trieu" instrument = "Piano" blurb = "Hello, my name is Darwin. I am a grade 12 student currently attending Harry Ainlay High School. I have been learning piano for 11 years and just recently completed my ARCT diploma. I hope to guide others in finding their passions for music as both a teacher and a supporter." />
                <TeamMember image = {chong_wang} name = "Chong Wang" instrument = "Piano" blurb = "Greetings! I have been playing the piano since 2012 and am currently a student at Lillian Osborne High School. During this pandemic, piano was one of my best tools to enjoy my time and I have learned to play many pieces of all styles -- from baroque to modern. I hope I am able to share my passion of piano to you." />
                <TeamMember image = {kayla_thai} name = "Kayla Thai" instrument = "Piano" blurb = "Hi there, my name is Kayla and I’m a 1st year student at the University of Alberta. I’ve played piano for 6 years with the Royal Conservatory of Music program. I’m looking forward to getting to know you, and seeing what wonderful things you’ll bring to our lessons! I’ll work my hardest to help you on your musical journey." />
                <TeamMember image = {lisa_wong} name = "Lisa Wong" instrument = "Piano" blurb = "Hello! My name is Lisa! I have been playing the piano for about 13 years and completed up to grade 10 RCM. Even though I’ve stopped taking lessons, I now enjoy composing my own music in hopes that one day it will make it into movies, tv shows, and video games. I hope that I can share my passion for music with all of you and I will do my best in guiding you on your musical journey!" />
                <TeamMember image = {landy_huang} name = "Landy Huang" instrument = "Piano" blurb = "Hi! My name is Landy, and I’ve been playing piano for over 8 years. I love playing favorites like Debussy, Hisaishi, and Chopin to entertain visitors, patients, and staff at the community hospital, and I’m currently preparing for my grade 10 Royal Conservatory of Music exam. I am excited to share and cultivate a passion for music in children!" />
                <TeamMember image = {jason_tao} name = "Jason Tao" instrument = "Piano" blurb = "Hey, I'm Jason! I currently in my fifth year of civil engineering at the UofA, and I've been playing piano for 17 years. I've received my ARCT in piano performance with the Royal Conservatory of Music in 2019. I hope to share my passion and love of music through teaching." />
                <TeamMember image = {marcus_wong} name = "Marcus Wong" instrument = "Piano" blurb = "Hi! I'm Marcus Wong, and I'm a grade 12 student at Old Scona high school. I'm an avid pianist currently working on my ARCT. I'm also a trombonist and play in Edmonton's Little Birds Big Band. I'm looking forward to giving back to the community and helping others to enjoy music as much as I do!" />
            </div>
        </div>
    )
}

export default OurTeam