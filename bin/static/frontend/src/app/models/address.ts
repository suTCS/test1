export class Address {
    constructor(
    public firstname?: string,
    public lastname?: string,
    public address?: string,
    public address2?: string,
    public city?: string,
    public state?: string,
    public postalcode?: string
) {}
}

//  blah?: string -> ? is optional