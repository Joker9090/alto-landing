import clsx from 'clsx';
import React, { useState } from 'react';
import Button from '../../components/button/button.jsx';
import { AppStores, SocialMediaButtons } from '../../components/mobileDrawer/mobileDrawer.jsx';
import ProgressionListItem from '../../components/progressionListItem/progressionListItem.jsx';
import Quote from '../../components/quote/quote.jsx';
import classes from './Main.module.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../carousel-overrides.css';
import { Carousel } from 'react-responsive-carousel';
import { getInputComponent, handleInputBlur, handleInputChange, isEmailValid } from '../../utils/CoolFunctions.js';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import useInterval from '../../utils/hooks.js';
import { inputTypes } from '../../utils/constants.js';

const quotes = [
  {
    id: 1,
    quote: 'Quote lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    imageUrl: null,
    byline: 'Name, city, age'
  },
  {
    id: 2,
    quote: 'Quote lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    imageUrl: null,
    byline: 'Name, city, age'
  },
  {
    id: 3,
    quote: 'Quote lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    imageUrl: null,
    byline: 'Name, city, age'
  },
  {
    id: 4,
    quote: 'Quote lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    imageUrl: null,
    byline: 'Name, city, age'
  },
  {
    id: 5,
    quote: 'Quote lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ut labore et dolore magna aliqua.',
    imageUrl: null,
    byline: 'Name, city, age'
  },
  {
    id: 6,
    quote: 'Quote lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    imageUrl: null,
    byline: 'Name, city, age'
  },
]

const advantages = [
  { id: 1, text: 'No joining fee.' },
  { id: 2, text: 'Cash out clients directly from the app.' },
  { id: 3, text: 'Manage your own schedule.' },
  { id: 4, text: 'Easy to use interface.' },
]

const corporateListItems = [
  { id: 1, text: 'Flexible plans based on your team’s requirements..' },
  { id: 2, text: 'Reduce work-related stress and sick days by providing fitness and wellness activities for your team.' },
  { id: 3, text: 'Bring your employees together through fitness and build relationships that last.' },
]

export const contactInputsArray = [
  { id: 1, label: 'name', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.INPUT },
  { id: 2, label: 'email', value: '', touched: false, error: false, errorMessage: 'Email is not valid', type: inputTypes.INPUT, validation: isEmailValid },
  { id: 3, label: 'whatsapp', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.INPUT },
  { id: 4, label: 'subject', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.INPUT },
  { id: 5, label: 'message', value: '', touched: false, error: false, errorMessage: '', type: inputTypes.TEXTAREA },
]

const OverTheFold = () => {
  const images = ['/img/over_the_fold1.png', '/img/over_the_fold2.png', '/img/over_the_fold3.png']
  
  const styleIn = {
    transform: 'translateX(50px)',
    opacity: 0,
  }

  const styleNormal = {
    transform: 'translateX(0)',

  }

  const styleOut = {
    transform: 'translateX(-50px)',
    opacity: 0
  }

  const styles = [styleIn, styleNormal, styleOut]

  const [imageIndex, setImageIndex] = useState(0)
  const [styleIndex, setStyleIndex] = useState(0)

  useInterval(() => {
    if (styleIndex === 2) setImageIndex(i => i < images.length - 1 ? i + 1 : 0)
    setStyleIndex(i => i < styles.length - 1 ? i + 1 : 0)
  }, styleIndex === 1 ? 5000 : 400)

  return (
    <img
      src={images[imageIndex]}
      alt=''
      style={{ ...styles[styleIndex], transition: '.2s all ease-in-out' }}
    />
  )
}


function Main() {
  const [contactInputs, setContactInputs] = useState(contactInputsArray)

  

  return (
    <>
      <img className={classes.waves} src='/img/waves-high-2x.png' alt=''/>
      <div className={classes.heroContainer}>
        <div className={classes.hero}>
          <div className={classes.heroLeft}>
            <Fade top distance="50px" duration={600}>
              <img src='/img/hero-big.png' alt=''/>
            </Fade>
            <Fade top distance="50px" duration={600} delay={300}>
              <h1>Fitness on Demand</h1>
              <p>Live stream and face-to-face fitness and wellness sessions lead by industry specialists. Anytime, anywhere, and at an attainable price.</p>
            </Fade>
          </div>
          <div className={classes.heroRight}>
            <div className={classes.socialMedia}>
              <SocialMediaButtons />
            </div>
            <OverTheFold />
            <Link to='/registration'>
              <Button>
                Become an Alto Trainer
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.rightWorkout}>
          <Fade top distance="50px" duration={600}>
            <h2>Find the Right Workout For You</h2>
          </Fade>
          <div className={classes.highlightsContainer}>
            <Fade top distance="50px" duration={600}>
              <div className={classes.highlight}>
                <img src='/img/subhero-1-big.jpg' alt='Woman training'/>
                <span className='caption-title'>
                  Train with confidence
                </span>
                <span className='caption-p'>
                  At home, in a gym, outdoors, while traveling. Reach your fitness goals with on-demand classes.
                </span>
                <Fade top distance="50px" duration={600} delay={200}>
                  <button>
                    <span className={clsx('icon-alto-logo', classes.logo)} />
                    <span className={classes.videoPrompt}>Play video</span>
                  </button>
                </Fade>
              </div>
            </Fade>
            <Fade top distance="50px" duration={600} delay={400}>
              <div className={classes.highlight}>
                <img src='/img/subhero-2-big.jpg' alt='People training'/>
                <span className='caption-title'>
                  Just for you
                </span>
                <span className='caption-p'>
                  Everything from yoga, pilates, cardio, boxing, meditation and more. All fitness levels.
                </span>
              </div>
            </Fade>
          </div>
        </div>
        <div className={classes.appHighlightContainer}>
          <div className={classes.appHighlight}>
            <div className={classes.downloadApp}>
              <Fade top distance="50px" duration={600}>
                <img src='/img/hero-big.png' alt=''/>
              </Fade>
              <Fade distance="50px" duration={600}>
                <div className={classes.appStoresContainer}>
                  <AppStores />
                </div>
              </Fade>
            </div>
            <div className={classes.progressionList}>
              <ProgressionListItem
                title='Select your session type'
                order={0}
              >
                <div className={classes.sessionTypes}>
                  <CircleBadge
                    iconName='icon-lesson'
                    label='Personal trainer'
                  />
                  <CircleBadge
                    iconName='icon-class'
                    label='Classes'
                  />
                  <div className={classes.andContainer}>
                    <span className={classes.andLine} />
                    <span className={classes.and}>AND</span>
                    <span className={classes.andLine} />
                  </div>
                  <CircleBadge
                    iconName='icon-mobile'
                    label='Live stream'
                  />
                  <CircleBadge
                    iconName='icon-face-to-face'
                    label='Face-to-face'
                  />
                </div>
              </ProgressionListItem>
              <ProgressionListItem
                order={1}
                title='Choose the right workout for you'
                description='A wide variety of possibilities to keep fit and healthy, whenever and wherever you want.'
              />
              <ProgressionListItem
                order={2}
                title='Choose your trainer or gym class'
                description='You can also invite friends to be part of the same training.'
                hideLine
              />
            </div>
          </div>
        </div>
        <div className={classes.quotesContainer}>
          <div className={classes.leftQuotes}>
            {quotes.slice(0,3).map((q, idx) => (
              <Fade top distance="50px" duration={600} delay={200 * idx}>
                <Quote
                  key={q.id}
                  quote={q.quote}
                  byline={q.byline}
                  imageUrl={q.imageUrl}
                />
              </Fade>
            ))}
          </div>
          <div className={classes.rightQuotes}>
            {quotes.slice(3).map((q, idx) => (
              <Fade top distance="50px" duration={600} delay={100 + 200 * idx}>
                <Quote
                  key={q.id}
                  quote={q.quote}
                  byline={q.byline}
                  imageUrl={q.imageUrl}
                />
              </Fade>
            ))}
          </div>
        </div>
        <Fade top distance="50px" duration={600}>
          <div className={classes.asfaContainer}>
            <div className={classes.asfaImageContainer}>
                <img src='/img/asfa.png' alt='ASFA logo'/>
            </div>
            <div className={classes.asfaInfo}>
              <div className={classes.asfaTitle}>ASFA® and Alto Fitness App Announce Strategic Partnership</div>
              <div className={classes.asfaDescription}>New partnership with Alto Fitness App, an innovative provider of a personal trainer app with convenient accessibility and versatility…</div>
              <div className={classes.asfaReadMore}>Read More</div>
            </div>
          </div>
        </Fade>
        <div className={classes.ctaContainer}>
          <div className={classes.innerWavesContainer}>
            <img className={classes.innerWaves} src='/img/waves-high-2x.png' alt=''/>
          </div>
          <div className={classes.cta}>
            <Fade top distance="50px" duration={400}>
              <div className={classes.ctaTargets}>
                <div className={classes.ctaTarget}>
                  <h2>Trainers</h2>
                  <p>Share your specialist skills to a large network of clients with advertising and marketing support from Alto and create lasting relationships.</p>
                </div>
                <div className={classes.ctaTarget}>
                  <h2>Gyms</h2>
                  <p>Partner with Alto to list your own trainers’ services or group classes. Generate extra income with minimal effort.</p>
                </div>
              </div>
            </Fade>
            <div className={classes.ctaAdvantages}>
              {advantages.map((adv, idx) => (
                <Fade key={adv.id} top distance="20px" duration={600} delay={200 * idx}>
                  <div className={classes.ctaAdvantageContainer}>
                    <span className={clsx('icon-done', classes.iconCheck)} />
                    <span className={classes.ctaAdvantage}>{adv.text}</span>
                  </div>
                </Fade>
              ))}
            </div>
            <Fade top distance="50px" duration={600} delay={800}>
              <Link to="/registration">
                <Button>
                  Become an Alto Trainer / Gym
                </Button>
              </Link>
            </Fade>
          </div>
          <div className={classes.ctaTrainersContainer}>
            <div className={classes.ctaTrainers}>
              <Fade top distance="50px" duration={900}>
                <img src='/img/couple-2x.png' alt='Trainers'/>
              </Fade>
              <Fade left distance="50px" duration={600} delay={1200}>
                <div className={classes.trainerInfo}>
                  <span className={classes.trainerName}>Jane Doe</span>
                  <span className={classes.trainerJob}>Alto's personal trainer</span>
                </div>
                </Fade>
              <Fade right distance="50px" duration={600} delay={1400}>
                <div className={classes.trainerInfo}>
                  <span className={classes.trainerName}>John Doe</span>
                  <span className={classes.trainerJob}>Alto's physical therapist</span>
                </div>
              </Fade>
            </div>
          </div> 
        </div>
        <Newsletter />
        <div className={classes.wellness}>
          <div className={classes.carousel}>
            <div className={classes.carouselOverlay}>
              <h1>Corporate wellness program</h1>
            </div>
            <Carousel
              autoPlay
              emulateTouch
              infiniteLoop
              showArrows={false}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img src="img/carrousel-1-big.jpg" alt='' />
              </div>
              <div>
                <img src="img/carrousel-2-big.jpg" alt='' />
              </div>
            </Carousel>
          </div>
          <div className={classes.wellnessInfo}>
            <span className={clsx('icon-corporate', classes.iconCorporate)} />
            <p>A powerful tool to improve a healthy culture and promote productivity, focus, creativity and retention.</p>
            <div className={classes.corporateList}>
              {corporateListItems.map((item, idx) => (
                <Fade key={item.id} top distance="20px" duration={600} delay={200 * idx}>
                  <div className={classes.corporateListItem}>
                    <span className={clsx('icon-done', classes.iconCheck)} />
                    <span className={classes.corporateListText}>
                      {item.text}
                    </span>
                  </div>
                </Fade>
              ))}
            </div>
            <Button>
              Get in touch
            </Button>
          </div>
        </div>
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
      </div>
    </>
  );
}

export default Main;


const CircleBadge = ({ iconName, label }) => (
  <div className={classes.circleBadgeContainer}>
    <span className={clsx(iconName, classes.circleBadgeIcon)} />
    <span className={classes.circleBadgeLabel}>
      {label}
    </span>
  </div>
)

export const Newsletter = () => (
  <div className={classes.newsletter}>
    <div className={classes.newsletterInfo}>
      <h2>Join our Newsletter</h2>
      <p>Be the first to hear about promotions, updates and more!</p>
    </div>
    <div className={classes.newsletterInteraction}>
      <input type='text' placeholder='Your email address' />
      <Button variant='inverted'>Sign Up</Button>
    </div>
  </div>
)
