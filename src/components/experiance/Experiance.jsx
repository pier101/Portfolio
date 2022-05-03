import React from 'react'
import './experiance.css'

const Experiance = () => {
  return (
    <section id='experience'>

      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__detail'>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detail'>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <div>
              <h4>Next.js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__detail'>
              <div>
              <h4>Node.js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detail'>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>basic</small>
              </div>
            </article>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experiance