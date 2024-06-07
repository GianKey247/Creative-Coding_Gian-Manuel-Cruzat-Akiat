class GameManager{
    // start the GameManager with given health value
    constructor(health){
        this.resetHealth = health
        this.health= this.resetHealth
        this.points=0
        // GameStates dictionary
        this.GameState={
            Title_Screen:new TitleScreen(),
            Gameplay_Screen: new Gameplay(),
            GameOver_Screen: new GameOver()
        }
        // Set the initial state to the title screen
        this.currentState=this.GameState.Title_Screen
    }
    // change the current game state
    changeState(newState){
        this.currentState=newState
        // If the new state is the gameplay screen, reset its state
        if (this.currentState== this.GameState.Gameplay_Screen){
            this.currentState.reset()
        }
    }
    display(){
        this.currentState.display()
    }
    // reset GameManager 
    reset(){
        this.points = 0;
        this.health= this.resetHealth
    }

} 