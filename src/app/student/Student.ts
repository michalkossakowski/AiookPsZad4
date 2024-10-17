export class Student{
    public imie:string;
    public nazwisko:string;
    public wiek:number;
    public oceny:number[];
  
    constructor(imie:string,nazwisko:string,wiek:number,oceny:number[]){
      this.imie = imie;
      this.nazwisko = nazwisko;
      this.wiek = wiek;
      this.oceny = oceny;
    }

    get Imie(): string {
        return this.imie;
    }
    set Imie(i:string)
    {
        this.imie = i; 
    }

    get Nazwisko(): string {
        return this.nazwisko;
    }
    set Nazwisko(n:string)
    {
        this.nazwisko = n; 
    }

    get Wiek(): number {
        return this.wiek;
    }
    set Wiek(w:number)
    {
        this.wiek = w; 
    }

    get Oceny(): number[] {
        return this.oceny;
    }
    set Oceny(oceny: number[]){
        this.oceny = oceny;
    }

    public DodajOcene(o:number)
    {
        this.oceny.push(o); 
    }
}  