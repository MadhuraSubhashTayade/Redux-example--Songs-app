import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "My way", duration: "1:15" },
        { title: "Dont lie", duration: "3:05" },
        { title: "Barbie girl", duration: "2:45" },
        { title: "Stay calm", duration: "1:58" }
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});