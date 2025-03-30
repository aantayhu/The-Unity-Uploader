function PuzzlePage() {
    return(
        <>
            <h1>
                Puzzle
            </h1>
            <p>
                What are puzzle games? - Puzzle games are games where you are given a problem that you will need to solve using the tools around you, in addition to thinking outside the box at times.
            </p>
            <p>
                Methods related to movement and jumping
                <pre>
                    <code>
                        {`
                            public class SimplePuzzle : MonoBehaviour
                            {
                                public GameObject[] tiles;
                                private Vector3[] positions;
                                private int emptyIndex;

                                void Start()
                                {
                                    positions = new Vector3[tiles.Length];
                                    for (int i = 0; i < tiles.Length; i++)
                                    {
                                        positions[i] = tiles[i].transform.position;
                                    }
                                    emptyIndex = tiles.Length - 1;
                                    ShuffleTiles();
                                }

                                void ShuffleTiles()
                                {
                                    for (int i = 0; i < 50; i++)
                                    {
                                        int randIndex = Random.Range(0, tiles.Length);
                                        SwapTiles(randIndex);
                                    }
                                }

                                void SwapTiles(int index)
                                {
                                    if (index == emptyIndex) return;

                                    if (Vector3.Distance(positions[index], positions[emptyIndex]) == 1)
                                    {
                                        (tiles[index].transform.position, tiles[emptyIndex].transform.position) = (tiles[emptyIndex].transform.position, tiles[index].transform.position);
                                        (tiles[index], tiles[emptyIndex]) = (tiles[emptyIndex], tiles[index]);
                                        emptyIndex = index;
                                    }
                                }

                                public void OnTileClick(int index)
                                {
                                    SwapTiles(index);
                                    if (IsSolved())
                                    {
                                        Debug.Log("Puzzle Solved!");
                                    }
                                }

                                bool IsSolved()
                                {
                                    for (int i = 0; i < tiles.Length; i++)
                                    {
                                        if (tiles[i].transform.position != positions[i])
                                        {
                                        return false;
                                        }
                                    return true;
                                    }
                                }
                            }
                        `}
                    </code> 
                </pre>
            </p>
        </>
    )
}

export default PuzzlePage;