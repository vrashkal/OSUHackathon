/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Constructor for Node
function Node(name){
    //Properties
    this.name = name;
    this.similarArtists = [];
    this.childrenAreVisible = false;
}

//Expands the node. Gives it 5 similar artists and toggles visibility.
Node.prototype.expand = function(){

    //If similarArtists is not empty, no reason to populate it.
    if (this.similarArtists.length > 0) {

    }
    else {

        //If similarArtists is empty, populate it.
        for(i = 0; i < 5; i++){
            //Add similar artists
            this.similarArtists[i] = new Node(); //TODO populate with name from echonest

            //this.similarArtists[i].node = new Node(iName); //I'm not sure if this is how it works in js //Doesn't need to happen unless we want to expand something.

            //Toggle visibility
            this.similarArtists[i] = iNode;
        }
    }

    //Toggle visibility on, regardless of what happens.
    this.childrenAreVisible = true;

}

//Collapse node, toggling visibility off.
Node.prototype.collapse = function() {
    //Not deleting similar artists, might want to later depending on resource usage?

    //Toggle visibility off.
    this.childrenAreVisible = false;
}

/*
 * I think that we should write and interpreter that collectively renders the nodes 
 * by accessing their data parameters, rather than trying to render them recursively 
 * with this method.
 */
Node.prototype.render = function(){
}
