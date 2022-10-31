import profile from './assets/profile__img.svg'
import icon from './assets/Icon.svg'
import slack from './assets/slack.svg'
import i4g from './assets/I4G.svg'
import vector from './assets/Vector.svg'
import returnD from './assets/returnD.svg'
import returnM from './assets/returnM.svg'
import './App.css'

function App() {
  return (
    <div >
      <section className='topContainer'>
        <div className='topHeader'>
          <div className='tHeader'>
            <img src={profile} id='profile__img' alt=""/>
            <h2 id='twitter'>Femzy </h2>
            <h2 id='slack' className='slack'>Femzy</h2>
            <img src={returnD} className='tHeaderIcon' alt=""/>
            <img src={returnM} className='tHeaderIcon2' alt=""/>
          </div>
          <div className='tBody'>
              <a href="https://twitter.com/Irekanmi10" id='btn__zuri'><p className='p'>Twitter Link</p></a>
              <a href="https://training.zuri.team/" id='btn__zuri'><p className='p'>Zuri Team</p></a>
              <a href="http://books.zuri.team" id='books'><p className='p'>Zuri Books</p></a>
              <a href="https://books.zuri.team/python-for-beginners?ref_id=<Femzy>" id='book__python'><p className='p'>Python books</p></a>
              <a href="https://background.zuri.team" id='pitch'><p className='p'>Background Check For Coders</p></a>
              <a href="https://books.zuri.team/design-rules" id='book__design'><p className='p'>Design Books</p></a>
          </div>
        </div>
        <div className='tFooter'>
        <img src={slack} alt=""/>
        <img src={icon} alt=""/>
        </div>
      </section>
      <section className='bottomContainer'>
        <div className='bBody'>
          <div className='bContent'>
            <img src={vector} className="zuri" alt=""/>
            <p className='bottomP'>HNG Internship 9 Frontend Task</p>
            <img src={i4g} className="hng" alt=""/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
