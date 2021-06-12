import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
// import './Slider.css'
const Slider = (props) => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1

    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [people, index])
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1)
      return () => {
        clearInterval(slider)
      }
    }, 3000)
  }, [index])
  return (
    <section>
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndx) => {
          console.log(person, 'person')
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'

          if (personIndx === index) {
            position = 'activeSlide'
          }
          if (
            personIndx === index - 1 ||
            (index === 0 && personIndx === people.length - 1)
          ) {
            position = 'lastSlide '
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt="" className="person-imgg" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}
export default Slider