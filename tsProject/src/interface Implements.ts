interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;

}

interface Story{
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string // we can any add any property but not less than the required interface
  ){}

  createStory(): void {
    console.log('Story is being created!');
  }
}