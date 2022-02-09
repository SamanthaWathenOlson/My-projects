abtract class Bank{
  abstract void getRateofInterest();
}
var calculateInterest = function (total,year,rate) { 
  var interest = rate/100+1; return parseFloat((total*Math. pow(interest,year))
  //Overridden method
class SBI extends Bank{
  //Overriding method
  public void disp(){
    void run () {System.out.println();
      }
  public void newMethod() {
    Systemn.out.println("new method of child class:);
      }
  public static void main (String args[]) {
      
      bank obj = new bank();
      obj.disp();
      bank obj2 = new Demo(); // Covariance with reference types
      obj2.disp();
      bank obj3 = new Demo(); // Covariance with reference types
      obj3.disp();
      bank obj4 = new Demo(); // Covariance with reference types
      obj4.disp();
    }
 }

    class Animal{  
String color="white";  
}  
class Dog extends Animal{  
String color="black";  
void printColor(){  
System.out.println(color);  //prints color of Dog class  
System.out.println(super.color);  //prints color of Animal class  
}  
}  
class TestSuper1{  
public static void main(String args[]){  
Dog d=new Dog();  
d.printColor();  
}}
