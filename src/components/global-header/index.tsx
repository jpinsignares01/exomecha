import './styles.css'

import 'bootstrap/dist/css/bootstrap.css';

function Header() {

  return (
    <>
      <div className="vertical-center">
        <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <img src="/src/assets/img/ico.png" style={{paddingRight:15}} alt="" />
                <img src="/src/assets/img/logo.png" alt="" />
              </div>
            </div>
            <p className='title text'>
                THE <span className='blue-t'>BANK</span> OF THE <span className='blue-t'>FUTURE</span>
            </p>
            <p className='subtitle text'>Let's build the future together, one euro at a time.</p>
        </div>
      </div>
    </>
  )
}

export default Header
