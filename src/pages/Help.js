import React from 'react';
import Accordian from '../components/HomeSlides/Accordian/Accordian';
import './Help.css';

export default function Help()
{
    return(
        <div id = "faq-wrapper">
            <Accordian title = "How much do lessons cost?" content = "Our lessons are fully free! You do not need to pay for the lessons, however, you may have to rent or buy the instrument. We are currently in the process of obtaining funding in order to subsidize the cost of rental." wrapper_class_name = "faq-accordian-wrapper" title_class_name = "faq-accordian-title" button_class_name = "faq-accordian-button" content_class_name = "faq-accordian-content" />
            <Accordian title = "What are the requirements to register?" content = "We have no explicit requirements other than that the student must be 18 or younger. However, our lessons are tailored towards beginners." wrapper_class_name = "faq-accordian-wrapper" title_class_name = "faq-accordian-title" button_class_name = "faq-accordian-button" content_class_name = "faq-accordian-content" />
            <Accordian title = "I got waitlisted and have waited for a while, but I haven't heard back. How long will I have to wait?" content = "A space will be available when a student completes their 5 month term or a new piano teacher comes. There is no guarantee that piano students will be assigned a teacher because of the demand." wrapper_class_name = "faq-accordian-wrapper" title_class_name = "faq-accordian-title" button_class_name = "faq-accordian-button" content_class_name = "faq-accordian-content" />
            <Accordian title = "Can I choose which teacher we get?" content = "No. In order to operate as efficiently as possible, we assign teachers based on who is available to teach a student." wrapper_class_name = "faq-accordian-wrapper" title_class_name = "faq-accordian-title" button_class_name = "faq-accordian-button" content_class_name = "faq-accordian-content" />
            <Accordian title = "What will my child learn through M.U.?" content = "Our curriculum introduces the student to music and the instrument. By the end of their term, they will have a solid grasp on the fundamentals of music and their instrument and can transition to private lessons or self-learning." wrapper_class_name = "faq-accordian-wrapper" title_class_name = "faq-accordian-title" button_class_name = "faq-accordian-button" content_class_name = "faq-accordian-content" />
            <Accordian title = "I don't live in Edmonton. Can I still register?" content = "You can still register and will have lessons, but our recitals are held in Edmonton." wrapper_class_name = "faq-accordian-wrapper" title_class_name = "faq-accordian-title" button_class_name = "faq-accordian-button" content_class_name = "faq-accordian-content" />
            <Accordian title = "Which instrument should I choose?" content = "Do lots of research. You should pick the instrument that your child has the most interest in." wrapper_class_name = "faq-accordian-wrapper" title_class_name = "faq-accordian-title" button_class_name = "faq-accordian-button" content_class_name = "faq-accordian-content" />
            <Accordian title = "Why are some insturments unavailable?" content = "The teachers that teach those instruments have become unavailable, so we cannot offer lessons for those spots." wrapper_class_name = "faq-accordian-wrapper" title_class_name = "faq-accordian-title" button_class_name = "faq-accordian-button" content_class_name = "faq-accordian-content" />
        </div>
    )
}