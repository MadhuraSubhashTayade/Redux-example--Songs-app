import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../Actions";

const SongList = (props) => {
    return (
        <table>
            <thead>
            </thead>
            <tbody>
                {props.songs.map(song => {
                    return (
                        <tr key={song.title}>
                            <td style={{ width: "80%" , fontSize:"20px"}}>{song.title}</td>
                            <td style={{padding:"3px 0px 3px 0px"}}>
                                <button
                            className="btn btn-sm btn-primary"
                             onClick={() => props.selectSong(song)}
                             style={{fontSize:"18px"}}>
                                 Select
                                 </button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

const mapStateToProps = (state) => {
    return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })(SongList);