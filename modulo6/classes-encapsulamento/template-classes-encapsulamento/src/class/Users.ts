export class User{
    private id: string;
    private email: string;
    private password: string;
    
    constructor(id: string, email: string, password: string){
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public getId(): string{
        return this.id;
    }
    public getEmail(): string{
        return this.email;
    }
    public getPassword(): string{
        return this.password;
    }
    public setId(id: string){
        this.id = id;
    }
    public setEmail(email: string){
        this.email = email;
    }
    public setPassword(password: string){
        this.password = password;
    }

}