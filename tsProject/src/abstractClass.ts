abstract class TakePhoto{
  constructor(
    public cameraMode : string,
    public filter : string,
  ){}

  getSepia() : void

}

//we can not create instance from the ABSTRACT CLASSES
// const pk = new TakePhoto('test', 'test2')

class noAbsTakePhoto extends TakePhoto{
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst : number
  ){
    super(cameraMode, filter)
  }
}

// we can create instance from the child class of ABSTRACT CLASSES
const pk = new noAbsTakePhoto('test', 'test2')


