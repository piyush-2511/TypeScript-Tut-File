class User {
    public email: string;
    public name: string;
    city: string = 'Delhi';

    private _courseCount: number = 1;

    // readonly city: string = 'Delhi';
    constructor(
        email:string, 
        name:string,
        // private userId ?: number
    ) {
        this.email = email;
        this.name = name;
    }

    private deleteToken(){
        console.log('Token deleted')
    }

    get getAppleEmail() : string{
        return `apple${this.email}`
    }

    //setter does not have return type 
    set courseCount(courseNum: number){
        if(courseNum <= 1){
            throw new Error('Course count should be more than 1')
        }
        this._courseCount = courseNum
    }

}

const piyush = new User('piyush@gmail.com', 'piyush')
// piyush.deleteToken() // we cannot access private method
piyush.courseCount = 2
console.log(piyush)