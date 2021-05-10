import React from 'react'
import classes from './highlightCard.module.scss'

const HighlightCard = ({ name, imageUrl, wavesInvertX, wavesInvertY }) => {
  
  return (
    <div className={classes.highlightCard}>
      <div className={classes.infoContainer}>
        <img
          className={classes.waves}
          src='/img/waves-highlight.jpg'
          alt=''
          style={{
            transform: `scale(${wavesInvertX ? -1 : 1}, ${wavesInvertY ? -1 : 1})` 
          }}
        />
        <span className={classes.name}>{name}</span>
      </div>
      <img className={classes.image} src={imageUrl} alt={name} />
    </div>
  )
}

export default HighlightCard
