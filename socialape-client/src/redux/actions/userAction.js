import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types';

export const loginUser = (userData) => (dispatch) => {
    axios
        .post('/login', userData)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
            this.setState({
                loading: false
            });
            this.props.history.push('/');
        })
        .catch(err => {
            this.setState({
                errors: err.response.data,
                loading: false
            })
        });
}