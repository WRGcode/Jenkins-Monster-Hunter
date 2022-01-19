abstract class Entity {
  constructor(
    public name: string, 
    public challenge: number,
    public weaknesses: string[],
    public habitats: string[],
    public desription: string = '',
    

    ) {}

    baseLog() {
      console.log(`name: ${this.name}`);
      console.log(`challenge: ${this.challenge}`);
      console.log(`weaknesses: ${this.weaknesses}`);
      console.log(`habitats: ${this.habitats}`);
      console.log(`desription: ${this.desription}`);
      
    }
}

enum EctoType{
Banshee="Banshee", 
Wraith="Wraith",
Spirit="Spirit",
Shade="Shade",
Revenant="Revenant",
Goryo="Goryo",
Hantu="Hantu",
Mare="Mare",
Myling="Myling",
Onryo="Onryo",
Phantom="Phantom",
Poltergeist="Poltergeist",
Yokai="Yokai",
Yurei="Yurei",
Wisp="Wisp"
}
enum Tangible{
one="not Tangible", //cant touch or be touched 
two="gas-like Tangible", //acts like living gas only deterred with magic
three="water-like Tangible", // feels and acts like a liquid only killed with magic
four="slime-like Tangible", //feels and acts like a something slimy can be deterred with physical means
five="gel-like Tangible",  //feels and acts like a a gel can be kill with physical means
}

//ghosts
class Ectoplasmic extends Entity {
  constructor(
    name:string,
    challenge: number,
    weaknesses: string[],
    habitats:string[],
    desription:string,
    public type: EctoType,
    public tangible: Tangible

  ){
    super(name,challenge,weaknesses,habitats,desription)
  }
  baseLog(): void {
    this.baseLog()
    console.log(`type:${this.type}`);
    console.log(`tangible:${this.tangible}`);
}
  }

  const jim = new Ectoplasmic("shadowTag",2,["light magic"],["Dark Forest"],"a shadow person that will force a game of tag to be able to leave the forest",EctoType.Shade,Tangible.five)
  console.log(jim);
  

enum BloodProp{
HotBlood, //burns
WarmBlood, // like cold
LukeBlood, // can be anywhere but not aswell as warm or cold
ColdBlood, //likes heat
CryoBlood, //freezing

BugBlood, //green
CopperBlood, // blue
acidBlood, // corrosive
Gelgelatinous  // slimes and sticky blood

}
enum Legs{
no="Legless",
one="Uniped",
two="Biped",
four="Quadruped",
six="Hexapod",
Eight="Octopod",
ten="Decapod",
twelve="Dodecapod",
other="other"
}
enum Arms{
  no="Armless",
  one="Uniped",
  two="Biped",
  four="Quadruped",
  six="Hexapod",
  Eight="Octopod",
  ten="Decapod",
  twelve="Dodecapod",
  other="other"
}
enum Wings{
  no="Armless",
  two="Biped",
  four="Quadruped",
  six="Hexapod",
  Eight="Arachnidruped",
  ten="Decapod",
  twelve="Symphylanpod",
  other="other"
}
enum Skin{
  Hairy="Hairy",
  Smooth="Smooth",
  Rough="Rough",
  Feathered="Feathered",
  Scaly="Scaly",
  Spicky="Spicky"
}


//monsters
class Beast extends Entity{
constructor(
  name:string,
  challenge: number,
  weaknesses: string[],
  habitats:string[],
  desription:string,
  public bloodProp: BloodProp,
  public legs: Legs,
  public arms: Arms,
  public wings: Wings,
  public skin: Skin[],
  public other?: string[],
  

){super(name,challenge,weaknesses,habitats,desription)}

baseLog(): void {
  this.baseLog()
  console.log(`bloodProp${this.bloodProp}`);
  console.log(`legs${this.legs}`);
  console.log(`arms${this.arms}`);
  console.log(`wings${this.wings}`);
  console.log(`skin${this.skin}`);
  console.log(`other${this.other}`);
  
}
}

const joe = new Beast("joe",5,["fire"],["forest", "plains"],"a large and aggressive super predatory",BloodProp.CopperBlood,Legs.six,Arms.no,Wings.two,[Skin.Spicky,Skin.Scaly])
console.log(joe);

enum MagicCompatible{
Fire="Fire",
Water="Water",
Wind="Wind",
Earth="Earth",

Electricity="Electricity",
Toxin="Toxin",
Sound="Sound",
Nurture="Nurture",

Light="Light",
Dark="Dark",
Space="Space",
Psychic="Psychic",

Taming="Taming",
Transfromtion="Transfromtion",
Augment="Augment",
Strengthening="Strengthening"
}

//humanity(human, elf...) humanlike monsters
class Humanoids extends Entity{
  constructor(
    name:string,
    challenge: number,
    weaknesses: string[],
    habitats:string[],
    desription:string,
    public wings: Wings,
    public skin: Skin[],
    public intelligentsScale: [number,number], //IQ number
    public magicCompatible: MagicCompatible[]
    
    )
    {super(name,challenge,weaknesses,habitats,desription)}
    baseLog(): void {
        this.baseLog()
        console.log(``);
        
    }
}

const bob = new Humanoids("bob",6,["Water"],["mountains"],"small buff rock lovers",Wings.no,[Skin.Rough],[120,240],[MagicCompatible.Earth,MagicCompatible.Strengthening,MagicCompatible.Augment])
console.log(bob);


// enum Demontype{
//   Demon,
//   Raiju, //lighting
//   Jinn, //fire
//   Obake,
//   Oni,
//   Wastriliths, // water
// }

// class Demonoids extends Entity{
//   constructor(
//     name:string,
//     challenge: number,
//     weaknesses: string[],
//     habitats:string[],
//     desription:string,
//   ){super(name,challenge,weaknesses,habitats,desription)}
// }

