import classes from './PrivacyPolicy.module.scss'
import React, { useState } from 'react'
import Button from '../../components/button/button.jsx';
import { contactInputsArray, Newsletter } from '../Main/Main';
import { getInputComponent, handleInputBlur, handleInputChange } from '../../utils/CoolFunctions';
import Fade from 'react-reveal/Fade';

const PrivacyPolicy = () => {
  const [contactInputs, setContactInputs] = useState(contactInputsArray)

  return (
    <>
      <div className={classes.policiesContainer}>
        <h1>Privacy Policy</h1>
        <p>Effective Date: July 31, 2018</p>

        <h2>1. Introduction</h2>
        <p>This Privacy Policy describes and explains how Alto LLC (“Alto”, “we” or “us”) uses personal information (“Personal Information”) of Users who visit or register on the Alto app or Alto Platform (www.altoapp.us) (collectively, the “Platform”). It applies (i) immediately to Users who register on or after the Effective Date and (ii) on the Effective Date to Users who registered before the Effective Date. Any person who does not agree to be bound by this Privacy Policy should not create a User Account or interact with the Platform. All capitalized terms have the meanings set forth in Section 2; provided, that any capitalized terms not defined in Section 2 shall have the meanings set forth in the Alto Terms of Use.</p>
        <p> Please contact us if you have any questions or comments about our privacy practices or this Privacy Statement. You can reach us online at info@altoapp.us, or by mail at: Reitler Kailas & Rosenblatt LLC. 885 Third Avenue, 20th floor. New York, NY 10022-4834 </p>
      
        <h2>2. Definitions</h2>
        <ul>
          <li><b>a)</b> “Contact Information” means (i) your name, (ii) your physical address, (iii) your email address and (iv) your telephone number.</li>
          <li><b>b)</b> “Effective Date” means the date set forth at the beginning of this document.</li>
          <li><b>c)</b> “Alto Affiliates” means (i) any parent, subsidiary, member, officer, director, employee, or agent of Alto or any company under common control with Alto, or (ii) any third party with which Alto has a commercial relationship.</li>
          <li><b>d)</b> “Customer” is a person that opens a Customer Account.</li>
          <li><b>e)</b> “Privacy Policy” means the set of policies set forth in this document.</li>
          <li><b>f)</b> “Financial Account Information” means your credit card number, credit card expiration date and credit card verification code, all with respect to one or more credit cards that you have the lawful right to use, and your bank account number, bank account title, bank name, branch location and routing number, all with respect to one or more accounts that you have the lawful right to access.</li>
          <li><b>g)</b> “Provider” is a service Provider or other professional that opens a Provider Account.</li>
          <li><b>h)</b> “Transaction Information” means all information related to transactions that Customers conduct via the Platform.</li>
          <li><b>i)</b> “User” is a person that opens a Customer Account or a Provider Account.</li>
          <li><b>j)</b> “User Account” means an account permitting access to the Platform (which may be designated by you as either a “Customer Account” or a “Provider Account”), with which is associated a User name and password. k) “User Account Information” means information that identifies you to Alto’s Platform, including your User name, password, internet protocol address, MAC address, device type and device identifier.</li>
          <li><b>l)</b> “User Terms” means Alto’s Terms of Use, as applicable to a particular User. </li>
        </ul>

        <h2>3. Types of Personal Information We Collect</h2>
        <p>Alto collects the following types of information about you (collectively, “Personal Information”): </p>
        <ul>
          <li><b>a)</b> Contact Information</li>
          <li><b>b)</b> Financial Account Information</li>
          <li><b>c)</b> Transaction Information</li>
          <li><b>d)</b> User Account Information</li>
        </ul>
        <h2>4. Mechanisms for Collection of Personal Information</h2>
        <p>Alto collects Personal Information (i) upon a User’s creation of a User Account, (ii) upon logging into the Platform, (iii) upon interaction on the Platform, including without limitation when you enter a contest, take a survey, or buy merchandise by means of the Platform, and (iv) when you communicate with Alto.</p>
      </div>
      <Newsletter />
      <div className={classes.contactContainer}>
          <div className={classes.innerWavesContainer}>
            <img className={classes.innerWaves} src='/img/waves-high-2x.png' alt=''/>
          </div>
          <Fade top distance="50px" duration={600}>
            <div className={classes.formContainer}>
              <h2>Contact Alto</h2>
              <form>
                {contactInputs && contactInputs.map(input => {
                  const changeFn = (val) => handleInputChange(input.id, val, contactInputs, setContactInputs)
                  const blurFn = (val) => handleInputBlur(input.id, val, contactInputs, setContactInputs)

                  return getInputComponent(input, changeFn, blurFn)
                })}
                <Button>Submit</Button>
              </form>
            </div>
          </Fade>
        </div>
    </>
  )
}

export default PrivacyPolicy
