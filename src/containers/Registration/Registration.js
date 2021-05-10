import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import ButtonGroup from '../../components/buttonGroup/buttonGroup.jsx'
import HighlightCard from '../../components/highlightCard/highlightCard.jsx'
import IconList from '../../components/iconList/iconList.jsx'
import Stepper from '../../components/stepper/stepper.jsx'
import classes from './Registration.module.scss'
import '../carousel-overrides.css';
import { useWindowSize } from '../../utils/hooks.js'
import { SocialMediaButtons } from '../../components/mobileDrawer/mobileDrawer.jsx'
import { getInputComponent, handleInputBlur, handleInputChange, isEmailValid } from '../../utils/CoolFunctions.js'
import { countries, days, genders, inputTypes, months, states, years } from '../../utils/constants.js'
import Button from '../../components/button/button.jsx'
import { contactInputsArray, Newsletter } from '../Main/Main.js'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'

const iconLists = [
  {
    id: 1,
    title: 'Convenient',
    iconName: 'icon-payments',
    listItems: [
      'No joining fee.',
      'Competitive compensation.',
      'Cash out clients directly from the app.'
    ]
  },
  {
    id: 2,
    title: 'Flexible',
    iconName: 'icon-calendar',
    listItems: [
      'Manage your own schedule.',
      'Maintain flexibility.'
    ]
  },
  {
    id: 3,
    title: 'Trustworthy',
    iconName: 'icon-friends',
    listItems: [
      'Increase market visibility.',
      'Build your reputation.',
      'Expand your network.'
    ]
  },
]

const sports = [
  { name: 'Boxing Kickboxing', imageUrl: '/img/yoga.png', wavesInvertX: true, wavesInvertY: false },
  { name: 'Cardio', imageUrl: '/img/yoga.png', wavesInvertX: false, wavesInvertY: true },
  { name: 'Cycling', imageUrl: '/img/yoga.png', wavesInvertX: false, wavesInvertY: true },
  { name: 'Dance\nBarre fitness', imageUrl: '/img/yoga.png', wavesInvertX: false, wavesInvertY: false },
  { name: 'Fitness', imageUrl: '/img/yoga.png', wavesInvertX: true, wavesInvertY: true },
  { name: 'Martial Arts', imageUrl: '/img/yoga.png', wavesInvertX: true, wavesInvertY: false },
  { name: 'Meditation', imageUrl: '/img/yoga.png', wavesInvertX: false, wavesInvertY: true },
  { name: 'Pilates', imageUrl: '/img/yoga.png', wavesInvertX: false, wavesInvertY: false },
  { name: 'Running', imageUrl: '/img/yoga.png', wavesInvertX: true, wavesInvertY: false },
  { name: 'Yoga', imageUrl: '/img/yoga.png', wavesInvertX: false, wavesInvertY: true },
]

const stepperMap = [
  { id: 1, label: 'First name', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.INPUT },
  { id: 2, label: 'Last name', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.INPUT },
  { id: 3, label: 'mobile number', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.INPUT },
  { id: 4, label: 'social security number', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.INPUT },
  { id: 5, label: 'email', value: '', touched: false, error: false, errorMessage: 'Email is not valid', type: inputTypes.INPUT,  validation: isEmailValid },
  { id: 6, label: 'password', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.PASSWORD },
  { id: 7, label: 'month', value: 1, touched: false, error: false, errorMessage: '', type: inputTypes.DROPDOWN, options: months, header: 'Birthday' },
  { id: 8, label: 'day', value: 1, touched: false, error: false, errorMessage: '', type: inputTypes.DROPDOWN, options: days },
  { id: 9, label: 'year', value: 1990, touched: false, error: false, errorMessage: '', type: inputTypes.DROPDOWN, options: years },
  { id: 10, label: 'gender', value: 1, touched: false, error: false, errorMessage: '', type: inputTypes.CHECKBOX, options: genders, header: 'Gender' },
  { id: 11, label: 'address', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.INPUT, header: 'Personal address' },
  { id: 12, label: 'zip code', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.INPUT },
  { id: 13, label: 'country', value: 'US', touched: false, error: false, errorMessage: '', type: inputTypes.DROPDOWN, options: countries },
  { id: 14, label: 'state', value: states[0].value, touched: false, error: false, errorMessage: '', type: inputTypes.DROPDOWN, options: states },
  { id: 15, label: 'city', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.INPUT },
]


const Registration = () => {
  const [openId, setOpenId] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [buttonGroupId, setButtonGroupId] = useState(1)
  const [stepperInputs, setStepperInputs] = useState(stepperMap)
  const [contactInputs, setContactInputs] = useState(contactInputsArray)
  
  const { width } = useWindowSize()

  const steps = [
    {
      id: 1,
      children: (
        <form className={classes.stepOne}>
          {stepperInputs && stepperInputs.slice(0, 6).map(input => {
            const changeFn = (val) => handleInputChange(input.id, val, stepperInputs, setStepperInputs)
            const blurFn = (val) => handleInputBlur(input.id, val, stepperInputs, setStepperInputs)
            const openFn = (val) => setOpenId(val)
            const closeFn = () => setOpenId(null)
          

            return getInputComponent(input, changeFn, blurFn, openId, openFn, closeFn)
          })}
        </form>
      )
    },
    {
      id: 2,
      nextLabel: 'Sign Up',
      nextClick: () => {},
      children: (
        <form className={classes.stepTwo}>
          {stepperInputs && stepperInputs.slice(6).map(input => {
            const changeFn = (val) => handleInputChange(input.id, val, stepperInputs, setStepperInputs)
            const blurFn = (val) => handleInputBlur(input.id, val, stepperInputs, setStepperInputs)
            const openFn = (val) => setOpenId(val)
            const closeFn = () => setOpenId(null)

            const notUSAndIsState = stepperInputs[12].value !== 'US' && input.id === 14

            return (
              <>
                {input.header && <h3>{input.header}</h3>}
                {getInputComponent({ ...input, value: notUSAndIsState ? null : input.value }, changeFn, blurFn, openId, openFn, closeFn, notUSAndIsState)}
              </>
            )
          })}
        </form>
      ),
    }
  ]

  return (
    <>
      <div className={classes.heroContainer}>
        <Fade top distance="20px" duration={600}>
            <div className={classes.carousel}>
              <div className={classes.carouselOverlay}>
                <h1>Become an Alto Trainer or Gym</h1>
              </div>
              <Carousel
                centerMode
                autoPlay
                emulateTouch
                centerSlidePercentage={width > 768 ? 70 : 100}
                infiniteLoop
                showIndicators={false}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
              >
                <div className={classes.carouselImgContainer}>
                  <img src="img/carrousel-1-big.jpg" alt='' />
                </div>
                <div className={classes.carouselImgContainer}>
                  <img src="img/carrousel-2-big.jpg" alt='' />
                </div>
              </Carousel>
            </div>
          </Fade>
          <div className={classes.heroClaim}>
            <Fade top distance="20px" duration={600} delay={600}>
              <h2>Become an Alto Trainer or Gym</h2>
              <p>Easily connect with a large network of clients through live stream or face-to-face sessions and create lasting relationships.</p>
            </Fade>
          <div className={classes.socialMedia}>
            <SocialMediaButtons />
          </div>
        </div>
      </div>
      <div className={classes.iconListContainer}>
        {iconLists.map((list, idx) => (
           <Fade key={list.id} top distance="20px" duration={600} delay={800 + 200 * idx}>
            <IconList
              iconName={list.iconName}
              listItems={list.listItems}
              title={list.title}
            />
          </Fade>
        ))}

      </div>
      <div className={classes.stepperContainer}>
        <div className={classes.innerWavesContainer}>
          <img className={classes.innerWaves} src='/img/waves-high-2x.png' alt=''/>
        </div>
        <Fade top distance="20px" duration={600}>
          <ButtonGroup
            selectedId={buttonGroupId}
            onSelect={val => setButtonGroupId(val)}
            options={[
              { id: 1, label: 'I\'m a trainer'  },
              { id: 2, label: 'I\'m a gym'  },
            ]}
          />
          <Stepper
            title='New account'
            currentStep={currentStep}
            onNextClick={() => setCurrentStep(s => s + 1)}
            onBackClick={() => setCurrentStep(s => s - 1)}
            steps={steps}
          />
        </Fade>
      </div>
      <div className={classes.skillsContainer}>
        <Fade top distance="20px" duration={600}>
          <h2>Highly Professional</h2>
        </Fade>
        <Fade top distance="20px" duration={600} delay={200}>
          <p>Alto allows you to share your skills and to reach a wide network of clients in personal lessons or group classes.</p>
        </Fade>
        <div className={classes.skillsGrid}>
          <div className={classes.trainingTypes}>
          <Fade top distance="20px" duration={600} delay={400}>
            <div>
              <span className='icon-lesson' />
              <span>Personal trainer</span>
            </div>
            </Fade>
            <Fade top distance="20px" duration={600} delay={600}>
            <div>
              <span className='icon-class' />
              <span>Classes</span>
            </div>
          </Fade>
          </div>
          <Fade top distance="20px" duration={600} delay={800}>
            <div className={classes.sports}>
              {sports.map((sport) => (
                <HighlightCard
                  name={sport.name}
                  imageUrl={sport.imageUrl}
                  wavesInvertX={sport.wavesInvertX}
                  wavesInvertY={sport.wavesInvertY}
                />
              ))}
            </div>
          </Fade>
          <div />
        </div>
        <Link to='/faq'>
          <Button>Read Trainers FAQ</Button>
        </Link>
      </div>
      <Newsletter />
      <div className={classes.contactContainer}>
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

export default Registration