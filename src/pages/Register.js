import React, { useState } from 'react';
import "./Register.css";
import emailjs from "emailjs-com";

function CheckFormValidity(FormArray)
{
    for (var i = 0; i < FormArray.length; i++)
    {
        if (FormArray[i] == "" && (i != 3 && i != 4))
        {
            return false;
        }
    }
    return true;
}

function GetBody(FormArray)
{
    const label_array = ["Guardian Name", "Student Name", "Email", "Phone number", "Please contact by phone number", "Preferred lesson platform", "Preferred lesson delivery method", "Instrument", "Found out about us from", "Statement about lesson times"];

    let body = "";

    for (let i = 0; i < 10; i++)
    {
        body += "<strong>" + label_array[i] + "</strong>" + ": " + FormArray[i] + "<br><br>";
    }

    return body;
}

function GetThankYou()
{
    var response = "Thank you so much for registering with us! We will be in touch within two weeks!";
	response += "<br><br>";
	response += "This is an automated email which is not monitored. Do not reply to this email. If you have any questions or concerns, please email us at info@musicunbounded.org";
    return response;
}

function Redirect()
{
    window.location.href = "/thank-you";
}

function HandleRegistration(e, FormArray)
{
    if (!CheckFormValidity(FormArray))
    {
        alert("Please fill all required fields")
        return;
    }

    window.Email.send(
        {
            SecureToken: "37a95e7b-7fdd-4c23-8164-65168edc77f4",
            To: "register.musicunbounded@gmail.com",
            From: "noreplymusicunbounded@gmail.com",
            Subject: "Automatic Student Registration",
            Body: GetBody(FormArray),
        }).then(() => null);

    window.Email.send(
        {
            SecureToken: "37a95e7b-7fdd-4c23-8164-65168edc77f4",
            To: FormArray[2],
            From: "MU@musicunbounded.org",
            Subject: "Registration Confirmation from M.U.",
            Body: GetThankYou(),
        }).then(() => Redirect());
}

export default function Register()
{
    const [guardian_full_name, SetGuardianFullName] = useState("");
    const [student_full_name, SetStudentFullName] = useState("");
    const [email, SetEmail] = useState("");
    const [phone_number, SetPhoneNumber] = useState("");
    const [contact_by_phone, SetContactByPhone] = useState(false);
    const [preferred_platform, SetPreferredPlatform] = useState("");
    const [preferred_location, SetPreferredLocation] = useState("");
    const [preferred_instrument, SetPreferredInstrument] = useState("");
    const [platform, SetPlatform] = useState("");
    const [lesson_times, SetLessonTimes] = useState("");

    function HandleSubmit(event)
    {
        event.preventDefault();
        const FormArray = [guardian_full_name, student_full_name, email, phone_number, contact_by_phone, preferred_platform, preferred_location, preferred_instrument, platform, lesson_times];
        HandleRegistration(event, FormArray);
    }

    return (
        <div id = "register-page-wrapper">
            <div id = "register-title">Register</div>
            <div id = "register-form">
                <form onSubmit = {HandleSubmit}>
                    <div>
                        <label htmlFor = "guardian-full-name-field">Guardian Full Name</label>
                        <br />
                        <input id = "guardian-full-name-field" className = "registration-wide-input-field" name = "guardian_name" type = "text" value = {guardian_full_name} onChange = {(e) => SetGuardianFullName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor = "student-full-name-field">Student Full Name</label>
                        <br />
                        <input name = "student_name" id = "student-full-name-field" className = "registration-wide-input-field" type = "text" value = {student_full_name} onChange = {(e) => SetStudentFullName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor = "email-field">Email</label>
                        <br />
                        <input name = "email" id = "email-field" className = "registration-wide-input-field" type = "text" value = {email} onChange = {(e) => SetEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor = "phone-number-field">Phone Number (optional)</label>
                        <br />
                        <input name = "phone_number" id = "phone-number-field" className = "registration-wide-input-field" type = "text" value = {phone_number} onChange = {(e) => SetPhoneNumber(e.target.value)} />
                    </div>
                    <div>
                        <input name = "contact_preference" id = "phone-checkbox" type = "checkbox" value = {contact_by_phone} onChange = {(e) => SetContactByPhone(!contact_by_phone)} />
                        <label htmlFor = "phone-checkbox"> I would prefer to be contacted by phone</label>
                        <br />
                        <br />
                    </div>
                    <div>
                        <label htmlFor = "preferred-platform-field">Preferred Lesson Platform (Discord, Zoom, or any preferred platform)</label>
                        <br />
                        <input name = "lesson_platform" id = "preferred-platform-field" className = "registration-wide-input-field" type = "text" value = {preferred_platform} onChange = {(e) => SetPreferredPlatform(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor = "preferred-location-field">Would you prefer to have your lessons in person or online? &sup1;</label>
                        <br />
                        <select name = "location" id = "preferred-location-field" className = "registration-wide-input-field" value = {preferred_location} onChange = {(e) => SetPreferredLocation(e.target.value)}>
                            <option value = "">Select an option</option>
                            <option value = "in_person">In person</option>
                            <option value = "onlie">Online</option>
                            <option value = "either">Either is fine</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor = "preferred-instrument-field">Preferred Instrument &sup2;</label>
                        <select id = "preferred-instrument-field" name = "preferred_instrument" className = "registration-wide-input-field" value = {preferred_instrument} required="" onChange = {(e) => SetPreferredInstrument(e.target.value)}>
                            <option value="">Select an option</option>
                            <option value="viola">Viola</option>
                            <option value="violin">Violin</option>
                            <option value="piano">Piano</option>
                            <option value="guitar">Guitar</option>
                            <option value="cello">Cello</option>
                            <option value="trombone">Trombone</option>
                            <option value="theory">Music Theory</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor = "platform-field">How did you find out about us?</label>
                        <select id = "platform-field" name = "platform" className = "registration-wide-input-field" value = {platform} onChange = {(e) => SetPlatform(e.target.value)}>
                            <option value="">Select an option</option>
                            <option value="kijiji">Kijiji</option>
                            <option value="social_media">Social Media</option>
                            <option value="friends_or_family">Friends/Family</option>
                            <option value="news">News</option>
                            <option value="google">Google</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor = "lesson-times-field">Please state lesson times including days of the week and times of day</label>
                        <br />
                        <textarea name = "lesson_statement" id = "lesson-times-field" className = "registration-wide-input-field" value = {lesson_times} onChange = {(e) => SetLessonTimes(e.target.value)} />
                    </div>
                    <div>
                        * Note: all fields are required except phone number
                        <br />
                        <br />
                        &sup1;  Note: If you select "either is fine," you will be more likely to be matched up. Additonally, in person lessons will be held at either the student's household or the teacher's. If in person is selected, the location will be decided by the student and the teacher together.
                        <br />
                    </div>
                    <br />
                    <input id = "submit-button" type = "submit" />
                </form>
            </div>
        </div>
    )
}