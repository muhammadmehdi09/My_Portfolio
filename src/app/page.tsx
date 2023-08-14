import Image from 'next/image'
export default function Home() {
  return (
    <div className=''>
       <header className='header'>
    <nav className='navbar'>
      <div className='navbar-container container'>
        <div>
          <h1 className='navbar-brand'>Muhammad Mehdi</h1>
        </div>
        <ul className='menu-items'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact-me'>Contact</a></li>
        </ul>
      </div>
    </nav>
    <div className='home-content' id='home'>
      <div className='name text-5xl'>
        <h1 className=''>Hi, I'm Muhammad Mehdi</h1>
        <p>A Web Developer in training.</p>
      </div>
    </div>
  </header>
  <section className='about-me' id='about'>
    <div className='container'>
      <div className='about-content'>
        <div className='left-content'>
          <div>
            <h1 className='about-heading'>About Me</h1>
          </div>
          <img src='https://i.postimg.cc/Hx4nChpH/fbavatar-1630400663387-6838396024049256103.png' alt='image' className='ml-44'/>
          <p>
            I am 13 year old, Web Devoloper, and I am currently giving Cambridge IGCSE Papers and learning to code.
            I really enjoy solving problems, programming and as well as making things easy to use. I love learning new
            things; the more, the better.
          </p>
        </div>
        <div className='skills'>
          <div className='right-content'>
            <div>
              <h1 className='skills-heading'>My Skills</h1>
            </div>
            <div className='skills-bar'>
              <div className='bar'>
                <div className='info'>
                  <span>HTML</span>
                </div>
                <div className='progress-line'><span className='html'></span></div>
                <div className='bar'>
                  <div className='info'>
                    <span>CSS</span>
                  </div>
                  <div className='progress-line'><span className='css'></span></div>
                  <div className='bar'>
                    <div className='info'>
                      <span>TYPESCRIPT</span>
                    </div>
                    <div className='progress-line'><span className='bootstrap'></span></div>
                    <div className='bar'>
                      <div className='info'>
                        <span>JAVASCRIPT</span>
                      </div>
                      <div className='progress-line'><span className='javascript'></span></div>
                      <div className='bar'>
                        <div className='info'>
                          <span>NEXT JS</span>
                        </div>
                        <div className='progress-line'><span className='c'></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='work-arrow-2'>
              <p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className='contact' id='contact-me'>
    <div className='container'>
      <div className='contact-content'>
        <h2>Contact Me</h2>
        <p className='mail'>
          Get in touch with me on MuhammadMehdi09@gmail.com
        </p>
        <p className='links'>Or find me on:</p>
        <a href='https://github.com/muhammadmehdi09' target='blank'><i className='fab fa-github'></i>Github</a>
        <p>AND</p>
        <a href='https://www.linkedin.com/in/super-mehdi-850889259/' target='blank'><i className='fab fa-linkedin'>Linkedin</i></a>
      </div>
    </div>
  </div>
  <script src='app.js'></script>
  <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
     </div>
  )
}

