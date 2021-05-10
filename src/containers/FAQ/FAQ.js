import classes from './FAQ.module.scss'
import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../../components/button/button.jsx';
import { contactInputsArray, Newsletter } from '../Main/Main';
import { getInputComponent, handleInputBlur, handleInputChange } from '../../utils/CoolFunctions';
import Fade from 'react-reveal/Fade';

const faqs = [
  { id: 1, question: 'Can I use the same trainer twice?', answer: 'Yes, just press the heart button on your favorite trainer’s profile and you will be able to find them under the “Favorites” tab.' },
  { id: 2, question: 'I can’t find an answer on the app. To whom do I email?', answer: 'info@altoapp.us' },
  { id: 3, question: 'Do I need to buy a subscription or membership to use Alto?', answer: 'No. Alto is free to download. There are no membership fees. When booking a session, you can pay per time or charge your wallet to use over time, deducting cost of sessions as used.' },
  { id: 4, question: 'Can I book an Alto trainer outside of the app?', answer: 'No. You must book the trainer through the Alto platform. Using the Alto platform creates the convenience of never having to exchange money or to remember your credit card for a workout.' },
  { id: 5, question: 'Is Alto safe to use?', answer: 'All trainers are fully background checked and are fully vetted by Alto. All certifications are verified. We suggest that you meet the trainer in a public location or use one of Alto’s partner gym locations if you are hesitant about having a new trainer come to your home. Or try a virtual session or two to make sure you feel comfortable, before meeting in person.' },
]

const FAQ = () => {
  const [contactInputs, setContactInputs] = useState(contactInputsArray)

  return (
    <>
      <div className={classes.questionsContainer}>
        <h1>FAQ</h1>
        <p>Skip ahead to:</p>
        <ul>
          {faqs.map(faq => (
            <li key={faq.id}>
              <AnchorLink href={`#faq-${faq.id}`} offset={66}>
                {faq.question}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.answersContainer}>
        <ul>
          {faqs.map(faq => (
            <li key={faq.id} id={`faq-${faq.id}`}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
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

export default FAQ
