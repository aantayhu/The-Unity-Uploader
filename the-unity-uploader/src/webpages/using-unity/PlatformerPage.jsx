import Navbar from '../../common-components/Navbar'

function PlatformerPage() {
    return(
        <>
                <Navbar />
                <h1>
                    Platformer
                </h1>
                <p>
                    What's a platformer? - A platformer is a genre of games where the player moves around the level to get all the way to the end.
                </p>
                <p>
                    Methods related to movement and jumping
                    
                    <pre>
                        <code>
                            {`
                                public class PlayerMovement : MonoBehaviour
                                {
                                    public float movement_scalar;
                                    public float max_speed;
                                    private Rigidbody2D rb;
                                    // Start is called before the first frame update
                                    void Start()
                                    {
                                        rb = this.gameObject.getComponent<Rigidbody2D>();   
                                    }
                                    // Update is called once per frame
                                    void FixedUpdate()
                                    {
                                        float x_movement = Input.GetAxis("Horizontal");

                                        if(rb.velocity.magnitude < max_speed)
                                        {
                                            Vector2 movement = new Vector(x_movement, 0);
                                            rb.AddForce(movement_scalar * movement);
                                        }

                                        if(InpuButtonDown("Jump") && is_on_ground)
                                        {
                                            Vector2 jump_force = new Vector2(0, jump_scalar);
                                            rb.AddForce(jump_force);
                                        }

                                    }

                                    void OnCollisionEnter2D(Collision2D collision)
                                    {
                                        if (CollisionIsWithGround(collision))
                                        {
                                            is_on_ground = true;
                                        }
                                    }

                                    void OnCollisionExit2D(Collision2D collision))
                                    {
                                        if (!CollisionIsWithGround(collision))
                                        {
                                            is_on_ground = false;
                                        }
                                    }

                                    private bool CollisionIsWithGround(Collision2D collision)
                                    {
                                        bool is_with_ground = false;
                                        foreach(ContactPoint2D c in collision.contacts)
                                        {
                                            Vector2 collision_direction_vector = c.point - rb.position;
                                            if(collision_direction_vector.y < 0)
                                            {
                                                //collision happened below character
                                                is_with_ground = true;
                                            }
                                        }
                                        
                                        return is_with_ground;
                                    }
                                }
                            
                            `}
                        </code> 
                    </pre>
                </p>
        </>
    )
}

export default PlatformerPage;