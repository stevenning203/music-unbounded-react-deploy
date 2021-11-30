import React, { useState } from "react";
import "./Contact.css";

function Redirect()
{
    window.location.href = "/thank-you";
}

function SubmitContact(e)
{
    const form = document.forms['sheets-form-cont'];
    e.preventDefault();
    fetch("https://script.google.com/macros/s/AKfycbwHPcwY2cs-Z7x_WFZx89cvvPAAPWZAp9DdROVJccBeRKV1_3XCPhPTlYvmzRQP-zIu/exec",
    {method: 'POST', body: new FormData(form)})
    .then(Redirect())
    .catch()
}

export default function Contact()
{
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [status, SetStatus] = useState("");
    const [inquiry, SetInquiry] = useState("");
    const [body, SetBody] = useState("");
    const [checkbox_checked, SetCheckboxChecked] = useState("");

    return(
        <div id = "contact-wrapper">
            <div id = "contact-title">Contact Us</div>
            <form name = "sheets-form-cont" id = "sheets-form-cont" method = "POST" onSubmit={SubmitContact}>
                <label htmlFor = "contact-name-field">Name</label>
                <br />
                <input name = "Name" value = {name} onChange = {(e) => SetName(e.target.value)} id = "contact-name-field" class = "contact-wide-input" />
                <label htmlFor = "contact-email-field">Email</label>
                <br />
                <input name = "Email" value = {email}onChange = {(e) => SetEmail(e.target.value)} id = "contact-email-field" class = "contact-wide-input" />
                <label htmlFor = "contact-status-field">What is your registration status?</label>
                <br />
                <select name = "Status" value = {status} onChange = {(e) => SetStatus(e.target.value)} id = "contact-status-field" class = "contact-wide-input">
                    <option value="">Select an option</option>
                    <option value="Parent/Guardian">I am a parent/guardian</option>
                    <option value="Student">Currently a student</option>
                    <option value="Reg_Student">I have registered to be a student, but I have not been placed</option>
                    <option value="Teacher">Currently a teacher</option>
                    <option value="App_Teacher">I have applied to be a teacher, but there has been no reply</option>
                    <option value="Looking to apply">I have not applied or registered but I am looking to</option>
                    <option value="None">I want to know more about the program</option>
                </select>
                <label htmlFor = "contact-inquiry-field">What is your inquiry about?</label>
                <br />
                <select name = "Inquiry is about?" body = {inquiry} onChange = {(e) => SetInquiry(e.target.value)} id = "contact-inquiry-field" class = "contact-wide-input">
                    <option value="">Select an option</option>
                    <option value="General Question">General question</option>
                    <option value="Request for update">Request for update on registration status</option>
                    <option value="Request for lessons, etc">Request regarding lessons</option>
                    <option value="Comment">Comment</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor = "contact-body-field">What is it that you would like to ask or let us know?</label>
                <br />
                <textarea name = "Body" value = {body} onChange = {(e) => SetBody(e.target.value)} id = "contact-body-field" class = "contact-wide-input" />
                <br />
                <input value = {checkbox_checked} onChange = {(e) => SetCheckboxChecked(!checkbox_checked)} id = "contact-faq-checkbox" type = "checkbox" />
                        <label htmlFor = "contact-faq-checkbox"> I have read the Q&A on the help page</label>
                        <br />
                        <br />
                <input type = "submit" id = "submit-button" />
            </form>
        </div>
    )
}