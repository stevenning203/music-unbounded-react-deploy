import React, {useState} from 'react';
import './Volunteer.css';

function Redirect()
{
    window.location.href = "/thank-you";
}

function Volunteer()
{
    const [show_teacher_guidelines, SetShowTeacherGuidelines] = useState(false);
    const [teacher_guidelines_read, SetTeacherGuidelinesRead] = useState(false);
    const [submit_disabled, SetSubmitDisabled] = useState(false);

    function SetTeacherGuidelines()
    {
        SetShowTeacherGuidelines(true);
        SetTeacherGuidelinesRead(true);
    }

    function SubmitApplication(event)
    {
        if (submit_disabled === true)
        {
            event.preventDefault();
            return;
        }
        event.preventDefault();
        if (!teacher_guidelines_read)
        {
            alert("You did not open the teacher guidelines. Please open them and read them.");
            return;
        }
        SetSubmitDisabled(true);
        const form = document.forms['sheets-form-app'];
        fetch("https://script.google.com/macros/s/AKfycbwuX-nKLoOjNGFtRTUWZXWyEeGKH9B2opIz_M72P1Sk3SOyE_AI3XR3Uzm8c9b6paEhzQ/exec",
        {method: 'POST', body: new FormData(form)})
        .then(response => Redirect())
        .catch()
    }

    return (
        <div id = "volunteer-page-wrapper">
            <div className = "volunteer-title">
                Volunteer With Us!
            </div>
            <div className = "volunteer-req">
            We are looking for volunteers passionate about their instrument to teach with us! <br /> <br />
            <div id = "volunteer-req-subtitle">
            Benefits of volunteering with us: <br /><br />
            </div>
            - Professional training in our teacher’s workshops<br />
            - Personalized letter of recommendation<br />
            - Volunteer hours<br />
            - Experience working with children<br />
            - Flexible teaching that matches your schedule <br />
            - Making a difference in your community
            </div>
            <div className = "volunteer-req">
                All teachers that apply undergo a short interview and audition process.
            </div>
            <div className = "volunteer-title">Application Form</div>
            <div id = "volunteer-form">
                { show_teacher_guidelines && 
                <div id = "teacher-guidelines-modal">
                    <div id = "teacher-guidelines-modal-title">
                        Teacher Guidelines
                    </div>
                    <div id = "teacher-guidelines-modal-blurb">
                        <ol id = "teacher-guidelines-modal-list">
							<li>
								The safety of you and students is the priority. If you are doing in person lessons, and wearing a mask is possible, please do so. 
							</li>
							<li>
								No swearing or cursing in the lessons.  Usage of offensive language of any kind, including discriminatory phrases, is prohibited.
							</li>
							<li>
								The student’s musical interests take priority over the interests of the teacher regarding the songs being learned and the style of music that the student wishes to learn.
							</li>
							<li>
								Recording or taking pictures of a student without the permission of their legal guardians is prohibited 
							</li>
							<li>
								Teachers should approach lessons with a positive attitude as they are reflecting the integrity of the organization.
							</li>
							<li>
								Disciplinary measures should be avoided.  This includes yelling and the use of punishments.  When possible, the parent should be contacted in the event that disciplinary action may be required.
							</li>
							<li>
								If you suspect your student is being abused or mistreated by their guardians, you must report this to an executive member.
							</li>
						</ol>
                        <div onClick = {() => SetShowTeacherGuidelines(false)} id = "teacher-guidelines-modal-close-button">
                            Close
                        </div>
                    </div>
                </div>
                }
                <form name = "sheets-form-app" id = "form-register-form" method = "POST" onSubmit = {SubmitApplication}>
                    <div>
                        <label htmlFor = "teacher-full-name-field">Teacher Full Name</label>
                        <br />
                        <input id = "teacher-full-name-field" className = "registration-wide-input-field" name = "Teacher Name" type = "text" required/>
                    </div>
                    <div>
                        <label htmlFor = "email-field">Email</label>
                        <br />
                        <input name = "Email" id = "email-field" className = "registration-wide-input-field" type = "text" required/>
                    </div>
                    <div>
                        <label htmlFor = "age-field">Age</label>
                        <br />
                        <input name = "Age" id = "age-field" className = "registration-wide-input-field" type = "text" required/>
                    </div>
                    <div>
                        <label htmlFor = "phone-number-field">Phone Number (optional)</label>
                        <br />
                        <input name = "Phone Number" id = "phone-number-field" className = "registration-wide-input-field" type = "text"/>
                    </div>
                    <div>
                        <input name = "Contact by PN?" id = "phone-checkbox" type = "checkbox"/>
                        <label htmlFor = "phone-checkbox"> I would prefer to be contacted by phone</label>
                        <br />
                        <br />
                    </div>
                    <div>
                        <label htmlFor = "preferred-instrument-field">What instrument(s) would you like to teach?</label>
                        <input id = "preferred-instrument-field" name = "Instrument" className = "registration-wide-input-field" required/>
                    </div>
                    <div>
                        <label htmlFor = "platform-field">How did you find out about us?</label>
                        <select id = "platform-field" name = "Platform" className = "registration-wide-input-field" required>
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
                        <label htmlFor = "lesson-times-field">Why do you want to join Music Unbounded?</label>
                        <br />
                        <textarea name = "Statement" id = "lesson-times-field" className = "registration-wide-input-field" required/>
                    </div>
                    <div>
                        <input id = "teacher-guidelines-checkbox" type = "checkbox" required/>
                        <label htmlFor = "teacher-guidelines-checkbox"> I agree to the </label>
                        <div id = "teacher-guidelines-trigger" onClick = {() => SetTeacherGuidelines()}>Teacher Guidelines</div>
                        <br />
                        <br />
                    </div>
                    <input disabled = {submit_disabled} id = "submit-button" type = "submit" />
                </form>
            </div>
        </div>
    )
}

export default Volunteer