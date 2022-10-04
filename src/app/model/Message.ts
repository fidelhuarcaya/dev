export class Email{
   private name!: String;
   private body!:String;
   private email!:String;

    public getName(): String {
        return this.name;
    }

    public setName(name: String): void {
        this.name = name;
    }

    public getBody(): String {
        return this.body;
    }

    public setBody(body: String): void {
        this.body = body;
    }

    public getEmail(): String {
        return this.email;
    }

    public setEmail(email: String): void {
        this.email = email;
    }




}