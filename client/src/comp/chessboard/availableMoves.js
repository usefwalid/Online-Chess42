
function ShowAvailableMoves({Moves,performMove}) {

    function PerformMove3(){
        performMove( Moves.split(',')[0] , Moves.split(',')[1] );
    }

    return (
        <>
            
                <div onClick={PerformMove3} style={{
                    position:'absolute',
                    fontSize:'55px',
                    left: `${Moves.split(',')[0] * 72 +45}px`,
                    top: `${Moves.split(',')[1] * 70 +10}px`,
                    color:'red',
                }}>
                    x
                </div>
          
        </>
    );
}
export default ShowAvailableMoves;