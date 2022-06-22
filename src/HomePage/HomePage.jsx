import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//let user = JSON.parse(localStorage.getItem('user'));
// import { userActions } from '../_actions';
import ListTree from './ListTree'
import AddItem from './AddItem';

import './HomePage.css'
import { itemData } from './../_helpers/beachdata'
function HomePage() {
    const loggedin = useSelector(state => state.authentication.loggedIn);
    const user = useSelector(state => state.authentication.user);
    const navigate = useNavigate();
    return (
        <div className="home">
            <div className='home_imgs'>
                {itemData.map((item) => (
                    <li key={item.img}>
                        <img
                            src={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <div className="overlay">
                            <h4 className="place_title">{item.title}</h4>
                            <p className='place_text'>{item.text}</p>
                            <button className='btn_trans' onClick={() => { navigate(`beach/${item.id}`) }}>Explore more...</button>
                        </div>
                    </li>
                ))}
            </div>
            <div className="user_plan">

                {loggedin && <>
                    <div className='username_logout_div'>
                        <h1>Hi {user.firstName}!</h1>
                    </div>
                    <AddItem />
                    <ListTree />
                </>
                }
            </div>
        </div>
    );
}

export { HomePage };