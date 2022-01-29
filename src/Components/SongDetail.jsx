import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
    if (!props.selectedSong) {
        return <h4>Select Song</h4>;
    }
    return (
        <div style={{ margin: "0 0 0 50px", fontSize: "20px" }}>
            Details for : {props.selectedSong.title}
            <p style={{fontSize:"15px"}}>
                Song: {props.selectedSong.title}
                <br />
                Duration: {props.selectedSong.duration}
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);