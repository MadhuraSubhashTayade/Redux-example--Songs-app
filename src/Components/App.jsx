import React from "react";
import SongDetail from "./SongDetail";
import SongList from "./SongList";

const App = () => {
    return (
        <table style={{ width: "40%", margin: "70px 0 0 200px" }}>
            <thead></thead>
            <tbody>
                <tr>
                    <td><SongList /></td>
                    <td><SongDetail /></td>
                </tr>
            </tbody>
        </table>
    );
}

export default App;