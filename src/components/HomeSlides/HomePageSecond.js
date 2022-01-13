import React from 'react';
import piano from '../../assets/piano2.jpg';
import violin from '../../assets/violin.jpg';
import trombone from '../../assets/trombone.jpg';
import viola from '../../assets/viola.jpg';
import guitar from '../../assets/guitar.jpg';
import cello from '../../assets/cello.jpg';
import theory from '../../assets/theory.jpg';
import Accordian from './Accordian/Accordian';
import './HomePageSecond.css';

function HomePageSecond()
{
    return(
        <div id = "home-page-second">
            <div id = "home-page-second-title">Instruments We Teach</div>
            <div id = "home-page-second-catalog">
                <Accordian title = "Violin" content = {
                <div class = "accordian-blurb">
                    <img src = {violin} />
                    <div class = "accordian-blurb-text"><strong>The Violin</strong><br /><br />The violin is a bowed stringed instrument which gained popularity during the 16th century. The violin is known for its unique vocal quality and is often the focus in many symphony orchestras.</div>
                </div>
                } content_class_name = "accordian-content" button_class_name = "accordian-button" wrapper_class_name = "accordian" title_class_name = "accordian-title"/>
                <Accordian title = "Piano" content = {
                <div class = "accordian-blurb">
                    <img src = {piano} />
                    <div class = "accordian-blurb-text"><strong>The Piano</strong><br /><br />A popular and versatile instrument, the piano is one of the best choices for beginners because of its simplicity. Many people know famous composers and songs for the piano.</div>
                </div>
                } content_class_name = "accordian-content" button_class_name = "accordian-button" wrapper_class_name = "accordian" title_class_name = "accordian-title"/>
                <Accordian title = "Trombone" content = {
                <div class = "accordian-blurb">
                    <img src = {trombone} />
                    <div class = "accordian-blurb-text"><strong>The Trombone</strong><br /><br />A brass instrument that requires excellent command of embouchure and breathing. It has a deep tone that makes it desirable in in symphony orchestras, jazz bands, and more.</div>
                </div>
                } content_class_name = "accordian-content" button_class_name = "accordian-button" wrapper_class_name = "accordian" title_class_name = "accordian-title"/>
                <Accordian title = "Viola" content = {
                <div class = "accordian-blurb">
                    <img src = {viola} />
                    <div class = "accordian-blurb-text"><strong>The Viola</strong><br /><br />While similar in appearance to the violin, the viola acts as the sweeter inner voice of any orchestra.</div>
                </div>
                } content_class_name = "accordian-content" button_class_name = "accordian-button" wrapper_class_name = "accordian" title_class_name = "accordian-title"/>
                <Accordian title = "Guitar [unavailable]" content = {
                <div class = "accordian-blurb">
                    <img src = {guitar} />
                    <div class = "accordian-blurb-text"><strong>The Guitar</strong><br /><br />The guitar is a portable instrument perfect for solos and performances. It is fashionable and great to learn and play.</div>
                </div>
                } content_class_name = "accordian-content" button_class_name = "accordian-button" wrapper_class_name = "accordian" title_class_name = "accordian-title"/>
                <Accordian title = "Cello" content = {
                <div class = "accordian-blurb">
                    <img src = {cello} />
                    <div class = "accordian-blurb-text"><strong>The Cello</strong><br /><br />The cello is a low-pitched string instrument popular for its rich and warm tones. Its contrast to the violin and viola make it an excellent companion to its higher pitched siblings.</div>
                </div>
                } content_class_name = "accordian-content" button_class_name = "accordian-button" wrapper_class_name = "accordian" title_class_name = "accordian-title"/>
            </div>
        </div>
    )
}

export default HomePageSecond