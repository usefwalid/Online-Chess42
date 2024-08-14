import  InitialPositions  from './pieces';

//create map of all possible locations on the board
const Locations = new Map();
for (let i = 0; i < InitialPositions.length; i++) {
    const key= `${InitialPositions[i].position_x},${InitialPositions[i].position_y}`
    Locations.set( key, InitialPositions[i] );
}
export default Locations;
