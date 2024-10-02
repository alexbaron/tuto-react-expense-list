import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Utilise localStorage par défaut
import rootReducer from './reducers'; // Assurez-vous d'avoir un réducteur racine
import { loggerMiddleware } from './middleswares/logger-middleware';

// Configuration de redux-persist
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store Redux avec le réducteur persistant
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
    }).prepend(loggerMiddleware.middleware),
});
const persistor = persistStore(store);

// Exporter le store et le persistor séparément
export { store, persistor };