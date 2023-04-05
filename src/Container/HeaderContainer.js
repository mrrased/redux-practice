import { connect } from 'react-redux';
import Header from '../Components/Header';
import { addToCart } from '../Service/Actions/Actions';

const mapStateToProps = state => ({
    cardData:state.cartItems
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default Home;