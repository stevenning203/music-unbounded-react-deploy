import React, { useState } from "react";
import "./Contact.css";

function CheckFormValidity(FormArray)
{
    for (var i = 0; i < FormArray.length; i++)
    {
        if (FormArray[i] == "")
        {
            return false;
        }
    }
    return true;
}

function GetThankYou()
{
    var response = "Thank you so much for inquiring with us! We will be in touch within two weeks!";
	response += "<br><br>";
	response += "This is an automated email which is not monitored. Do not reply to this email. If you have any questions or concerns, please email us at info@musicunbounded.org";
    return response;
}

function Redirect()
{
    window.location.href = "/thank-you";
}

function GetBody(FormArray)
{
    var body = "";
    const label_array = ["Name", "Email", "Registration Status", "Inquiry Reason", "Body"];
    for (var i = 0; i < label_array.length; i++)
    {
        body += label_array[i] + ": " + FormArray[i] + "<br><br>";
    }
    return body;
}

function HandleForm(event, FormArray)
{
    if (!CheckFormValidity(FormArray))
    {
        alert("Please fill out all required fields.")
        return;
    }
    window.Email.send(
        {
            SecureToken: "37a95e7b-7fdd-4c23-8164-65168edc77f4",
            To: "edmusicunbounded@gmail.com",
            From: "noreplymusicunbounded@gmail.com",
            Subject: "Automatic Inquiries",
            Body: GetBody(FormArray),
        }).then(() => null);

    window.Email.send(
        {
            SecureToken: "37a95e7b-7fdd-4c23-8164-65168edc77f4",
            To: FormArray[1],
            From: "MU@musicunbounded.org",
            Subject: "Inquiry Confirmation from M.U.",
            Body: GetThankYou(),
        }).then(() => Redirect());
}

export default function Contact()
{
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [status, SetStatus] = useState("");
    const [inquiry, SetInquiry] = useState("");
    const [body, SetBody] = useState("");
    const [checkbox_checked, SetCheckboxChecked] = useState("");

    function HandleSubmit(event)
    {
        event.preventDefault();
        const FormArray = [name, email, status, inquiry, body, checkbox_checked];
        HandleForm(event, FormArray);
    }

    return(
        <div id = "contact-wrapper">
            <div id = "contact-title">Contact Us</div>
            <form id = "contact-form" onSubmit = {HandleSubmit}>
                <label htmlFor = "contact-name-field">Name</label>
                <br />
                <input value = {name} onChange = {(e) => SetName(e.target.value)} id = "contact-name-field" class = "contact-wide-input" />
                <label htmlFor = "contact-email-field">Email</label>
                <br />
                <input value = {email}onChange = {(e) => SetEmail(e.target.value)} id = "contact-email-field" class = "contact-wide-input" />
                <label htmlFor = "contact-status-field">What is your registration status?</label>
                <br />
                <select value = {status} onChange = {(e) => SetStatus(e.target.value)} id = "contact-status-field" class = "contact-wide-input">
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
                <select body = {inquiry} onChange = {(e) => SetInquiry(e.target.value)} id = "contact-inquiry-field" class = "contact-wide-input">
                    <option value="">Select an option</option>
                    <option value="General Question">General question</option>
                    <option value="Request for update">Request for update on registration status</option>
                    <option value="Comment">Comment</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor = "contact-body-field">What is it that you would like to ask or let us know?</label>
                <br />
                <textarea value = {body} onChange = {(e) => SetBody(e.target.value)} id = "contact-body-field" class = "contact-wide-input" />
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