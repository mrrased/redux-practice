import { connect } from 'react-redux';
import Home from '../Components/Home';
import { addToCart, removeToCart } from '../Service/Actions/Actions';

const mapStateToProps = state => ({
    cardData: state.cartItems
})

const mapDispatchToProps = dispatch => ({
    addToCarHandler: data => dispatch(addToCart(data)),
    RemoveToCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home;