import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


// -------SAGAS--------
// Saga to GET movies
function* getMovies() {
    try {
        const response = yield axios.get('/movie');
        // sends data from server to movies reducer
        yield put({type: 'SET_MOVIES', payload: response.data});
    }
    catch(err) {
        console.log('Error in GET ', err);
    }
}
// Saga to GET genres with movies
function* getGenres() {
    try {
        const response = yield axios.get('/movie/genres');
        yield put({type: 'SET_GENRES', payload: response.data})
    }
    catch(err) {
        console.log('Error in GET ', err);
    }
}

// Saga to update (PUT) movies
function* updateMovies(action) {
    try {
        yield axios.put('/movie/edit/'+action.payload.id, action.payload);
        yield put({type: 'GET_MOVIES'});
    }
    catch(err) {
        console.log('Error in PUT', err);
        
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_GENRES', getGenres);
    yield takeEvery('UPDATE_MOVIES', updateMovies);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
